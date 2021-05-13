import React from 'react';
import { Header } from '../../molecules';

export interface SectionProps {
  user?: () => boolean;
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const Section: React.FC<SectionProps> = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <article>
    <Header user={user} onLogin={onLogin} onLogout={onLogout} onCreateAccount={onCreateAccount} />
    <section>{/* Main Session */}</section>
  </article>
);
