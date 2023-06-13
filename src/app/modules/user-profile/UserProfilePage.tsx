import {Navigate, Outlet, Route, Routes} from 'react-router-dom'
import {PageTitle} from '../../../_metronic/layout/core'
import {Overview} from './components/Overview'
import {Universities} from './components/Universities'
import {Registrations} from './components/Registrations'
import {Documents} from './components/Documents'
import {Connections} from './components/Connections'
import {UserProfileHeader} from './UserProfileHeader'
import {Settings} from './components/settings/Settings'

const UserProfilePage = () => (
  <Routes>
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
            <PageTitle breadcrumbs={[]}>Přehled</PageTitle>
            <Overview />
          </>
        }
      />
      <Route
        path='universities'
        element={
          <>
            <PageTitle breadcrumbs={[]}>Univerzity</PageTitle>
            <Universities />
          </>
        }
      />
      <Route
        path='registrations'
        element={
          <>
            <PageTitle breadcrumbs={[]}>Zápisy na termíny</PageTitle>
            <Registrations />
          </>
        }
      />
      <Route
        path='notifications'
        element={
          <>
            <PageTitle breadcrumbs={[]}>Oznámení</PageTitle>
            <Documents />
          </>
        }
      />
      <Route
        path='settings'
        element={
          <>
            <PageTitle breadcrumbs={[]}>Nastavení</PageTitle>
            <Settings />
          </>
        }
      />
      <Route index element={<Navigate to='/overview' />} />
    </Route>
  </Routes>
)

export default UserProfilePage
