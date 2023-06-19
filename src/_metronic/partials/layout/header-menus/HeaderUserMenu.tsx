/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC, useEffect} from 'react'
import {Link} from 'react-router-dom'
import {useAuth} from '../../../../app/modules/auth'
import {Languages} from './Languages'
import {toAbsoluteUrl} from '../../../helpers'
import {useUserNotifications} from '../../../../app/modules/user-profile/core/UserNotifications'
import {LayoutSplashScreen} from '../../../layout/core'
import {useIntl} from 'react-intl'

const HeaderUserMenu: FC = () => {
  const {currentUser, logout} = useAuth()
  const {notifications} = useUserNotifications()

  const intl = useIntl()

  return (
    <div
      className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg menu-state-primary fw-bold py-4 fs-6 w-275px'
      data-kt-menu='true'
    >
      <div className='menu-item px-3'>
        <div className='menu-content d-flex align-items-center px-3'>
          <div className='symbol symbol-50px me-5'>
            <img alt='Logo' src={toAbsoluteUrl('/media/avatars/blank.png')} />
          </div>

          <div className='d-flex flex-column'>
            <div className='fw-bolder d-flex align-items-center fs-5'>
              {currentUser?.username}
            </div>
            <span className='fw-bold text-muted fs-7'>
              {currentUser?.emailAddress}
            </span>
          </div>
        </div>
      </div>

      <div className='separator my-2'></div>

      <div className='menu-item px-5'>
        <Link to={'/overview'} className='menu-link px-5'>
          {intl.formatMessage({id: "MENU.OVERVIEW.TITLE"})}
        </Link>
      </div>

      <div className='menu-item px-5'>
        <Link to={'/universities'} className='menu-link px-5'>
          {intl.formatMessage({id: "MENU.UNIVERSITIES.TITLE"})}
        </Link>
      </div>

      <div className='menu-item px-5'>
        <Link to={'/registrations'} className='menu-link px-5'>
          {intl.formatMessage({id: "MENU.REGISTRATIONS.TITLE"})}
        </Link>
      </div>

      <div className='menu-item px-5'>
        <Link to={'/notifications'} className='menu-link px-5'>
          <span className='menu-text'>{intl.formatMessage({id: "MENU.NOTIFICATIONS.TITLE"})}</span>
          <span className='menu-badge'>
            <span className='badge badge-light-warning badge-circle fw-bolder fs-7'>{notifications.length ?? 0}</span>
          </span>
        </Link>
      </div>

      <div className='separator my-2'></div>

      <Languages />

      <div className='menu-item px-5 my-1'>
        <Link to='/settings' className='menu-link px-5'>
          {intl.formatMessage({id: "MENU.SETTINGS.TITLE"})}
        </Link>
      </div>

      <div className='menu-item px-5'>
        <a onClick={logout} className='menu-link px-5'>
          {intl.formatMessage({id: "MENU.LOGOUT.TITLE"})}
        </a>
      </div>
    </div>
  )
}

export {HeaderUserMenu}
