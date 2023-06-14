/* eslint-disable react/jsx-no-target-blank */
import {useIntl} from 'react-intl'
import {AsideMenuItem} from './AsideMenuItem'

export function AsideMenuMain() {
  const intl = useIntl()
  return (
    <>
      <AsideMenuItem
        to='/overview'
        title='Přehled'
        fontIcon='bi-house fs-2'
        bsTitle={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        className='py-2'
      />

      <AsideMenuItem
        to='/universities'
        title='Univerzity'
        fontIcon='bi-building fs-2'
        bsTitle={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        className='py-2'
      />

      <AsideMenuItem
        to='/registrations'
        title='Zápisy'
        fontIcon='bi-calendar2-check fs-2'
        bsTitle={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        className='py-2'
      />

      <AsideMenuItem
        to='/notifications'
        title='Oznámení'
        fontIcon='bi-bell fs-2'
        bsTitle={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        className='py-2'
      />

      <AsideMenuItem
        to='/settings'
        title='Nastavení'
        fontIcon='bi-gear fs-2'
        bsTitle={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        className='py-2'
      />
    </>
  )
}
