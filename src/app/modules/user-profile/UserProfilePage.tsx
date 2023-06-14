import {Navigate, Outlet, Route, Routes} from 'react-router-dom'
import {PageTitle} from '../../../_metronic/layout/core'
import {Overview} from './components/Overview'
import {Universities} from './components/Universities'
import {Registrations} from './components/Registrations'
import {Notifications} from './components/Notifications'
import {UserProfileHeader} from './UserProfileHeader'
import {Settings} from './components/settings/Settings'
import {useIntl} from 'react-intl'

const UserProfilePage = () => {

  const intl = useIntl()

  return (<Routes>
    <Route
      element={
        <>
          <UserProfileHeader />
          <Outlet />
        </>
      }
    >
      <Route
        path='overview'
        element={
          <>
            <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'PAGE.OVERVIEW.TITLE'})}</PageTitle>
            <Overview />
          </>
        }
      />
      <Route
        path='universities'
        element={
          <>
            <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'PAGE.UNIVERSITIES.TITLE'})}</PageTitle>
            <Universities />
          </>
        }
      />
      <Route
        path='registrations'
        element={
          <>
            <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'PAGE.REGISTRATIONS.TITLE'})}</PageTitle>
            <Registrations />
          </>
        }
      />
      <Route
        path='notifications'
        element={
          <>
            <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'PAGE.NOTIFICATIONS.TITLE'})}</PageTitle>
            <Notifications />
          </>
        }
      />
      <Route
        path='settings'
        element={
          <>
            <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'PAGE.SETTINGS.TITLE'})}</PageTitle>
            <Settings />
          </>
        }
      />
      <Route index element={<Navigate to='/overview' />} />
    </Route>
  </Routes>)
}

export default UserProfilePage
