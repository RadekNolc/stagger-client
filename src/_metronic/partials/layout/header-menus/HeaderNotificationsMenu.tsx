/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {FC} from 'react'
import {Link} from 'react-router-dom'
import {KTIcon, toAbsoluteUrl} from '../../../helpers'
import {useUserNotifications} from '../../../../app/modules/user-profile/core/UserNotifications'
import {useIntl} from 'react-intl'

const defaultAlerts: {state: string, icon: string, title: string, description: string, time: string}[] = []
const defaultLogs: {state: string, code: string, message: string, time: string}[] = []

const HeaderNotificationsMenu: FC = () => {
  const {notifications, readNotification, sentTimeText} = useUserNotifications()
  const alerts = notifications.filter((notification) => { return notification.category === "ALERT" })
  const updates = notifications.filter((notification) => { return notification.category === "UPDATE" })
  const logs = notifications.filter((notification) => { return notification.category === "LOG" })

  const intl = useIntl()

  return (
    <div
      className='menu menu-sub menu-sub-dropdown menu-column w-350px w-lg-375px'
      data-kt-menu='true'
    >
      <div
        className='d-flex flex-column bgi-no-repeat rounded-top'
        style={{backgroundImage: `url('${toAbsoluteUrl('/media/misc/pattern-1.jpg')}')`}}
      >
        <h3 className='text-white fw-bold px-9 mt-10 mb-6'>
          {intl.formatMessage({id: "MENU.NOTIFICATIONS.TITLE"})} <span className='fs-8 opacity-75 ps-3'>{notifications.length}</span>
        </h3>

        <ul className='nav nav-line-tabs nav-line-tabs-2x nav-stretch fw-bold px-9'>
          <li className='nav-item'>
            <a
              className='nav-link text-white opacity-75 opacity-state-100 pb-4 active'
              data-bs-toggle='tab'
              href='#kt_topbar_notifications_1'
            >
              {intl.formatMessage({id: "NOTIFICATIONS.CATEGORY.ALERT"})}
            </a>
          </li>

          <li className='nav-item'>
            <a
              className='nav-link text-white opacity-75 opacity-state-100 pb-4'
              data-bs-toggle='tab'
              href='#kt_topbar_notifications_2'
            >
              {intl.formatMessage({id: "NOTIFICATIONS.CATEGORY.UPDATE"})}
            </a>
          </li>

          <li className='nav-item'>
            <a
              className='nav-link text-white opacity-75 opacity-state-100 pb-4'
              data-bs-toggle='tab'
              href='#kt_topbar_notifications_3'
            >
              {intl.formatMessage({id: "NOTIFICATIONS.CATEGORY.LOG"})}
            </a>
          </li>
        </ul>
      </div>

      <div className='tab-content'>
        <div className='tab-pane fade show active' id='kt_topbar_notifications_1' role='tabpanel'>
          <div className='scroll-y mh-325px my-5 px-8'>
            {alerts.map((alert, index) => (
              <div key={`alert${index}`} className='d-flex flex-stack py-4'>
                <div className='d-flex align-items-center'>
                  <div className='symbol symbol-35px me-4'>
                  <span className={clsx('symbol-label', `bg-light-${alert.state}`)}>
                    {' '}
                    <KTIcon iconName={alert.icon} className={`fs-2 text-${alert.state}`} />
                  </span>
                  </div>

                  <div className='mb-0 me-2'>
                    <a href='#' title={intl.formatMessage({id: "NOTIFICATIONS.MARK_AS_READ"})} className="fs-6 text-gray-800 text-hover-primary fw-bolder" onClick={() => readNotification(alert.id)}>
                      {alert.title}
                    </a>
                    <div className='text-gray-400 fs-7'>{alert.description}</div>
                  </div>
                </div>
                <span className='badge badge-light fs-8'>{sentTimeText(alert.sentDateTime)}</span>
              </div>
            ))}
            {alerts.length === 0 && (
              <div className='text-gray-400 fs-7'>{intl.formatMessage({id: "NOTIFICATIONS.NOTHING"})}</div>
            )}
          </div>

          <div className='py-3 text-center border-top'>
            <Link
              to='/notifications'
              className='btn btn-color-gray-600 btn-active-color-primary'
            >
              {intl.formatMessage({id: "NOTIFICATIONS.VIEW_ALL"})} <KTIcon iconName='arrow-right' className='fs-5' />
            </Link>
          </div>
        </div>

        <div className='tab-pane fade' id='kt_topbar_notifications_2' role='tabpanel'>
          <div className='scroll-y mh-325px my-5 px-8'>
            {updates.map((update, index) => (
              <div key={`alert${index}`} className='d-flex flex-stack py-4'>
                <div className='d-flex align-items-center'>
                  <div className='symbol symbol-35px me-4'>
                  <span className={clsx('symbol-label', `bg-light-${update.state}`)}>
                    {' '}
                    <KTIcon iconName={update.icon} className={`fs-2 text-${update.state}`} />
                  </span>
                  </div>

                  <div className='mb-0 me-2'>
                    <a href='#' title={intl.formatMessage({id: "NOTIFICATIONS.MARK_AS_READ"})} className="fs-6 text-gray-800 text-hover-primary fw-bolder" onClick={() => readNotification(update.id)}>
                      {update.title}
                    </a>
                    <div className='text-gray-400 fs-7'>{update.description}</div>
                  </div>
                </div>
                <span className='badge badge-light fs-8'>{sentTimeText(update.sentDateTime)}</span>
              </div>
            ))}
            {updates.length === 0 && (
              <div className='text-gray-400 fs-7'>{intl.formatMessage({id: "NOTIFICATIONS.NOTHING"})}</div>
            )}
          </div>

          <div className='py-3 text-center border-top'>
            <Link
              to='/notifications'
              className='btn btn-color-gray-600 btn-active-color-primary'
            >
              {intl.formatMessage({id: "NOTIFICATIONS.VIEW_ALL"})} <KTIcon iconName='arrow-right' className='fs-5' />
            </Link>
          </div>
        </div>

        <div className='tab-pane fade' id='kt_topbar_notifications_3' role='tabpanel'>
          <div className='scroll-y mh-325px my-5 px-8'>
            {logs.map((log, index) => (
              <div key={`alert${index}`} className='d-flex flex-stack py-4'>
                <div className='d-flex align-items-center'>
                  <div className='symbol symbol-35px me-4'>
                  <span className={clsx('symbol-label', `bg-light-${log.state}`)}>
                    {' '}
                    <KTIcon iconName={log.icon} className={`fs-2 text-${log.state}`} />
                  </span>
                  </div>

                  <div className='mb-0 me-2'>
                    <a href='#' title={intl.formatMessage({id: "NOTIFICATIONS.MARK_AS_READ"})} className="fs-6 text-gray-800 text-hover-primary fw-bolder" onClick={() => readNotification(log.id)}>
                      {log.title}
                    </a>
                    <div className='text-gray-400 fs-7'>{log.description}</div>
                  </div>
                </div>
                <span className='badge badge-light fs-8'>{sentTimeText(log.sentDateTime)}</span>
              </div>
            ))}
            {logs.length === 0 && (
              <div className='text-gray-400 fs-7'>{intl.formatMessage({id: "NOTIFICATIONS.NOTHING"})}</div>
            )}
          </div>

          <div className='py-3 text-center border-top'>
            <Link
              to='/notifications'
              className='btn btn-color-gray-600 btn-active-color-primary'
            >
              {intl.formatMessage({id: "NOTIFICATIONS.VIEW_ALL"})} <KTIcon iconName='arrow-right' className='fs-5' />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export {HeaderNotificationsMenu}
