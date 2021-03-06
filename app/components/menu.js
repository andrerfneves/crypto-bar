// @flow

import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  ALL_MARKETS_ROUTE,
  ALL_FAVORITES_ROUTE,
  LOGIN_ROUTE,
  ADD_FAVORITES_ROUTE,
  SETTINGS_ROUTE,
  SINGLE_ASSET_ROUTE,
} from '../constants/routes';

type Props = {
  location: Object,
}

export default (props: Props) => {
  const { location: { pathname } } = props;
  if (
    pathname === LOGIN_ROUTE ||
    pathname === ADD_FAVORITES_ROUTE ||
    pathname === SETTINGS_ROUTE ||
    pathname.includes(SINGLE_ASSET_ROUTE)
  ) return null;

  return (
    <div className='menu'>
      <NavLink
        to={ALL_MARKETS_ROUTE}
        activeClassName='menu__option--active'
        exact
      >
        <div className='menu__option'>
          All Markets
        </div>
      </NavLink>
      <NavLink
        to={ALL_FAVORITES_ROUTE}
        activeClassName='menu__option--active'
        exact
      >
        <div className='menu__option'>
          Favorites
        </div>
      </NavLink>
    </div>
  );
};
