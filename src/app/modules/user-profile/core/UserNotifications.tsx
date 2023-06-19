import {NotificationModel} from './_models'
import {createContext, Dispatch, FC, SetStateAction, useContext, useEffect, useState} from 'react'
import {WithChildren} from '../../../../_metronic/helpers'
import {useAuth} from '../../auth'
import {getUserNotifications, readUserNotification} from './_requests'

export type DateAsArray = [number, number, number, number, number, number]

type UserNotificationContextProps = {
  notifications: Array<NotificationModel>
  setNotifications: Dispatch<SetStateAction<Array<NotificationModel>>>
  readNotification(notificationId: number): void
  fetchNotifications(): void
  sentTimeText(date: DateAsArray): string
}

const initUserNotificationContextPropsState: UserNotificationContextProps = {
  notifications: [],
  setNotifications: () => {},
  readNotification: () => {},
  fetchNotifications: () => {},
  sentTimeText: () => { return "" }
}

const UserNotificationsContext = createContext<UserNotificationContextProps>(initUserNotificationContextPropsState)

const useUserNotifications = () => {
  return useContext(UserNotificationsContext)
}

const UserNotificationsProvider: FC<WithChildren> = ({children}) => {
  const {currentUser} = useAuth()
  const [notifications, setNotifications] = useState<Array<NotificationModel>>([])

  const readNotification = async (notificationId: number) => {
    try {
      const {data} = await readUserNotification(notificationId)
      if (data) {
        setNotifications(notifications.filter((n) => {
          return n.id !== notificationId
        }))
      }
    } catch (error) {
      console.error(error)
    }
  }

  const fetchNotifications = async () => {
    try {
      if (currentUser?.id) {
        const {data} = await getUserNotifications(currentUser.id)
        if (data) {
          setNotifications(data.content)
        }
      }
    } catch (error) {
      console.error(error)
    }
  }

  const sentTimeText = (date: DateAsArray) => {
    const sentDate = new Date(`${date[0]}/${date[1]}/${date[2]} ${date[3]}:${date[4]}:${date[5]}`);
    return `${sentDate.toLocaleDateString()}`
  }

  return (
    <UserNotificationsContext.Provider value={{notifications, setNotifications, readNotification, fetchNotifications, sentTimeText}}>
      {children}
    </UserNotificationsContext.Provider>
  )
}

const UserNotificationsInit: FC<WithChildren> = ({children}) => {
  const {currentUser} = useAuth()
  const {fetchNotifications} = useUserNotifications()

  useEffect(() => {
    fetchNotifications()
    // eslint-disable-next-line
  }, [currentUser])

  useEffect(() => {
    const refresher = setInterval(() => {
      fetchNotifications()
    }, 15000)

    return () => clearInterval(refresher)
  }, [])

  return <>{children}</>
}

export {useUserNotifications, UserNotificationsProvider, UserNotificationsInit}