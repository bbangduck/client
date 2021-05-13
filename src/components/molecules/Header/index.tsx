import React from 'react';

import { Button } from '../../atoms';
import './header.css';

export interface HeaderProps {
  user?: () => boolean;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const Header: React.FC<HeaderProps> = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <header>
    <>
      {/* input logo */}
      <h1>Temp</h1>
    </>
    <>
      {user ? (
        <Button size="small" onClick={onLogout} label="Log out" />
      ) : (
        <>
          <Button size="small" onClick={onLogin} label="Log in" />
          <Button primary size="small" onClick={onCreateAccount} label="Sign up" />
        </>
      )}
    </>
  </header>
);
