import {useAuth} from '../../auth'
import {createContext, Dispatch, FC, SetStateAction, useContext, useEffect, useRef, useState} from 'react'
import {WithChildren} from '../../../../_metronic/helpers'
import {LayoutSplashScreen} from '../../../../_metronic/layout/core'
import {getUserProfile} from './_requests'
import {UserProfileModel} from './_models'

type UserProfileContextProps = {
  currentProfile: UserProfileModel | undefined
  setCurrentProfile: Dispatch<SetStateAction<UserProfileModel | undefined>>
}

const initUserProfileContextPropsState = {
  currentProfile: undefined,
  setCurrentProfile: () => {}
}

const UserProfileContext = createContext<UserProfileContextProps>(initUserProfileContextPropsState)

const useUserProfile = () => {
  return useContext(UserProfileContext)
}

const UserProfileProvider: FC<WithChildren> = ({children}) => {
  const [currentProfile, setCurrentProfile] = useState<UserProfileModel | undefined>()

  return (
    <UserProfileContext.Provider value={{currentProfile, setCurrentProfile}}>
      {children}
    </UserProfileContext.Provider>
  )
}

const UserProfileInit: FC<WithChildren> = ({children}) => {
  const {setCurrentProfile} = useUserProfile()
  const {currentUser} = useAuth()
  const [showSplashScreen, setShowSplashScreen] = useState(true)

  useEffect(() => {
    const requestUserProfile = async() => {
      try {
        if (currentUser?.id) {
          const {data} = await getUserProfile(currentUser?.id)
          if (data) {
            setCurrentProfile(data.content)
          }
        }
      } catch (error) {
        console.error(error)
      } finally {
        setShowSplashScreen(false)
      }
    }

    requestUserProfile()
    // eslint-disable-next-line
  }, [currentUser])

  return showSplashScreen ? <LayoutSplashScreen /> : <>{children}</>
}

export {UserProfileProvider, useUserProfile, UserProfileInit}