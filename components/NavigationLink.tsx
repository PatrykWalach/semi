"use client";
import { NavLink } from '@remix-run/react';
 

import { ComponentPropsWithoutRef } from 'react';
import './NavigationLink.css';

export default function NavigationLink({
  ...props
}: ComponentPropsWithoutRef<typeof NavLink>) {
 

  return (
    <li>
      <NavLink
              {...props}
        className={({isActive:active})=>`${
          active
            ? "navigation-link--active"
            : ""
        } navigation-link`}
 

      ></NavLink>
    </li>
  );
}
