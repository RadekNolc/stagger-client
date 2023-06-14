/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {UniversityCard} from '../../../../_metronic/partials/content/cards/UniversityCard'

export function Notifications() {
  return (
    <>
      <div className='d-flex flex-wrap flex-stack mb-6'>
        <h3 className='fw-bolder my-2'>
          Univerzity
          <span className='fs-6 text-gray-400 fw-bold ms-1'>Studované</span>
        </h3>

        <div className='d-flex flex-wrap my-2'>
          <div className='me-4'>
            <select
              name='state'
              data-control='select2'
              data-hide-search='true'
              className='form-select form-select-sm form-select-white w-125px'
              defaultValue='0'
            >
              <option value='0'>Studované</option>
              <option value='1'>Zapsatelné</option>
              <option value='2'>Všechny</option>
            </select>
          </div>
          <a
            href='#'
            className='btn btn-primary btn-sm'
            data-bs-toggle='modal'
            data-bs-target='#kt_modal_create_project'
          >
            Nová univerzita
          </a>
        </div>
      </div>

      <div className='row g-6 g-xl-9'>
        <div className='col-md-6 col-xl-4'>
          <UniversityCard
            icon='/media/svg/brand-logos/plurk.svg'
            badgeColor='primary'
            status='In Progress'
            statusColor='primary'
            title='Fitnes App'
            description='CRM App application to HR efficiency'
            date='November 10, 2021'
            budget='$284,900.00'
            progress={50}
          />
        </div>

        <div className='col-md-6 col-xl-4'>
          <UniversityCard
            icon='/media/svg/brand-logos/disqus.svg'
            badgeColor='info'
            status='Pending'
            statusColor='info'
            title='Leaf CRM'
            description='CRM App application to HR efficiency'
            date='May 10, 2021'
            budget='$36,400.00'
            progress={30}
          />
        </div>

        <div className='col-md-6 col-xl-4'>
          <UniversityCard
            icon='/media/svg/brand-logos/figma-1.svg'
            badgeColor='success'
            status='Completed'
            statusColor='success'
            title='Atica Banking'
            description='CRM App application to HR efficiency'
            date='Mar 14, 2021'
            budget='$605,100.00'
            progress={100}
          />
        </div>

        <div className='col-md-6 col-xl-4'>
          <UniversityCard
            icon='/media/svg/brand-logos/sentry-3.svg'
            badgeColor='info'
            status='Pending'
            statusColor='info'
            title='Finance Dispatch'
            description='CRM App application to HR efficiency'
            date='Mar 14, 2021'
            budget='$605,100.00'
            progress={60}
          />
        </div>

        <div className='col-md-6 col-xl-4'>
          <UniversityCard
            icon='/media/svg/brand-logos/xing-icon.svg'
            badgeColor='primary'
            status='In Progress'
            statusColor='primary'
            title='9 Degree'
            description='CRM App application to HR efficiency'
            date='Mar 14, 2021'
            budget='$605,100.00'
            progress={40}
          />
        </div>

        <div className='col-md-6 col-xl-4'>
          <UniversityCard
            icon='/media/svg/brand-logos/tvit.svg'
            badgeColor='primary'
            status='In Progress'
            statusColor='primary'
            title='9 Degree'
            description='CRM App application to HR efficiency'
            date='Mar 14, 2021'
            budget='$605,100.00'
            progress={70}
          />
        </div>

        <div className='col-md-6 col-xl-4'>
          <UniversityCard
            icon='/media/svg/brand-logos/aven.svg'
            badgeColor='primary'
            status='In Progress'
            statusColor='primary'
            title='Buldozer CRM'
            description='CRM App application to HR efficiency'
            date='Mar 14, 2021'
            budget='$605,100.00'
            progress={70}
          />
        </div>

        <div className='col-md-6 col-xl-4'>
          <UniversityCard
            icon='/media/svg/brand-logos/treva.svg'
            badgeColor='danger'
            status='Overdue'
            statusColor='danger'
            title='Aviasales App'
            description='CRM App application to HR efficiency'
            date='Mar 14, 2021'
            budget='$605,100.00'
            progress={10}
          />
        </div>

        <div className='col-md-6 col-xl-4'>
          <UniversityCard
            icon='/media/svg/brand-logos/kanba.svg'
            badgeColor='success'
            status='Completed'
            statusColor='success'
            title='Oppo CRM'
            description='CRM App application to HR efficiency'
            date='Mar 14, 2021'
            budget='$605,100.00'
            progress={100}
          />
        </div>
      </div>

      <div className='d-flex flex-stack flex-wrap pt-10'>
        <div className='fs-6 fw-bold text-gray-700'>Showing 1 to 10 of 50 entries</div>

        <ul className='pagination'>
          <li className='page-item previous'>
            <a href='#' className='page-link'>
              <i className='previous'></i>
            </a>
          </li>

          <li className='page-item active'>
            <a href='#' className='page-link'>
              1
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              2
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              3
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              4
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              5
            </a>
          </li>

          <li className='page-item'>
            <a href='#' className='page-link'>
              6
            </a>
          </li>

          <li className='page-item next'>
            <a href='#' className='page-link'>
              <i className='next'></i>
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
