/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTIcon, toAbsoluteUrl} from '../../../_metronic/helpers'
import {Link, useLocation} from 'react-router-dom'
import {Dropdown1} from '../../../_metronic/partials'
import {useIntl} from 'react-intl'
import {useAuth} from '../auth'
import {useUserProfile} from './core/UserProfile'

const UserProfileHeader: React.FC = () => {
  const location = useLocation()
  const intl = useIntl()
  const {currentUser} = useAuth()
  const {currentProfile} = useUserProfile()

  return (
    <div className='card mb-5 mb-xl-10'>
      <div className='card-body pt-9 pb-0'>
        <div className='d-flex flex-wrap flex-sm-nowrap mb-3'>
          <div className='me-7 mb-4'>
            <div className='symbol symbol-100px symbol-lg-160px symbol-fixed position-relative'>
              <img src={toAbsoluteUrl('/media/avatars/blank.png')} alt='Metornic' />
            </div>
          </div>

          <div className='flex-grow-1'>
            <div className='d-flex justify-content-between align-items-start flex-wrap mb-2'>
              <div className='d-flex flex-column'>
                <div className='d-flex align-items-center mb-2'>
                  <span className='text-gray-800 fs-2 fw-bolder me-1'>
                    {currentUser?.username}
                  </span>
                </div>

                <div className='d-flex flex-wrap fw-bold fs-6 mb-4 pe-2'>
                  <span
                    className='d-flex align-items-center text-gray-400 me-5 mb-2'
                  >
                    <KTIcon iconName='profile-circle' className='fs-4 me-1' />
                    {currentProfile?.roles.map(role => intl.formatMessage({id: `USER_PROFILE.ROLE.${role}`})).join(',')}
                  </span>
                  <span
                    className='d-flex align-items-center text-gray-400 mb-2'
                  >
                    <KTIcon iconName='sms' className='fs-4 me-1' />
                    {currentUser?.emailAddress}
                  </span>
                </div>
              </div>
            </div>

            <div className='d-flex flex-wrap flex-stack'>
              <div className='d-flex flex-column flex-grow-1 pe-8'>
                <div className='d-flex flex-wrap'>
                  <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                    <div className='d-flex align-items-center'>
                      <KTIcon iconName='arrow-up' className='fs-3 text-success me-2' />
                      <div className='fs-2 fw-bolder'>{currentProfile?.coins}</div>
                    </div>

                    <div className='fw-bold fs-6 text-gray-400'>{intl.formatMessage({id: 'USER_PROFILE.INFO_CARD.COINS'})}</div>
                  </div>

                  <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                    <div className='d-flex align-items-center'>
                      <KTIcon iconName='arrow-down' className='fs-3 text-danger me-2' />
                      <div className='fs-2 fw-bolder'>WIP</div>
                    </div>

                    <div className='fw-bold fs-6 text-gray-400'>{intl.formatMessage({id: 'USER_PROFILE.INFO_CARD.SUCCESS_RATE'})}</div>
                  </div>

                  <div className='border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 me-6 mb-3'>
                    <div className='d-flex align-items-center'>
                      <KTIcon iconName='arrow-up' className='fs-3 text-success me-2' />
                      <div className='fs-2 fw-bolder'>{currentProfile?.universityCount}</div>
                    </div>

                    <div className='fw-bold fs-6 text-gray-400'>{intl.formatMessage({id: 'USER_PROFILE.INFO_CARD.UNIVERSITY_STUDIED'})}</div>
                  </div>
                </div>
              </div>

              <div className='d-flex align-items-center w-200px w-sm-300px flex-column mt-3'>
                <div className='d-flex justify-content-between w-100 mt-auto mb-2'>
                  <span className='fw-bold fs-6 text-gray-400'>{intl.formatMessage({id: 'USER_PROFILE.PROGRESS_BAR.AVAILABLE_COINS'})}</span>
                  <span className='fw-bolder fs-6'>{currentProfile?.coins} / {currentProfile?.maxCoins}</span>
                </div>
                <div className='h-5px mx-3 w-100 bg-light mb-3'>
                  <div
                    className='bg-success rounded h-5px'
                    role='progressbar'
                    style={{width: currentProfile?.coins ? `${(currentProfile.coins / currentProfile.maxCoins)*100}%` : 0}}
                      >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='d-flex overflow-auto h-55px'>
          <ul className='nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder flex-nowrap'>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === '/overview' && 'active')
                }
                to='/overview'
              >
                {intl.formatMessage({id: 'PAGE.OVERVIEW.TITLE'})}
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === '/universities' && 'active')
                }
                to='/universities'
              >
                {intl.formatMessage({id: 'PAGE.UNIVERSITIES.TITLE'})}
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === '/registrations' && 'active')
                }
                to='/registrations'
              >
                {intl.formatMessage({id: 'PAGE.REGISTRATIONS.TITLE'})}
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === '/notifications' && 'active')
                }
                to='/notifications'
              >
                {intl.formatMessage({id: 'PAGE.NOTIFICATIONS.TITLE'})}
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                className={
                  `nav-link text-active-primary me-6 ` +
                  (location.pathname === '/settings' && 'active')
                }
                to='/settings'
              >
                {intl.formatMessage({id: 'PAGE.SETTINGS.TITLE'})}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export {UserProfileHeader}
