import {Suspense} from 'react'
import {Outlet} from 'react-router-dom'
import {I18nProvider} from '../_metronic/i18n/i18nProvider'
import {LayoutProvider, LayoutSplashScreen} from '../_metronic/layout/core'
import {MasterInit} from '../_metronic/layout/MasterInit'
import {AuthInit} from './modules/auth'
import {UserProfileInit} from './modules/user-profile/core/UserProfile'
import {UserNotificationsInit} from './modules/user-profile/core/UserNotifications'

const App = () => {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <I18nProvider>
        <LayoutProvider>
          <AuthInit>
            <UserProfileInit>
              <UserNotificationsInit>
                <Outlet />
                <MasterInit />
              </UserNotificationsInit>
            </UserProfileInit>
          </AuthInit>
        </LayoutProvider>
      </I18nProvider>
    </Suspense>
  )
}

export {App}
