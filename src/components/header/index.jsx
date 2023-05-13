import cn from 'classnames';
import { useContext } from 'react';
import { UserContext } from '../../contexts/current-user-context';
import { Button } from '../button';

import s from "./styles.module.css";
import "./styles.css";
import { ThemeContext } from '../../contexts/theme-context';

export function Header({ children }) {
  const { currentUser, onUpdateUser } = useContext(UserContext);
  const { toggleTheme } = useContext(ThemeContext)

  const handleClickButtonEdit = () => {
    onUpdateUser({ name: 'Вася', about: 'Ментор' })
  }

  return (
    <header className={s.header}>
      <div className={cn('container', s.wrapper)}>
        {children}
        <span>{currentUser?.name}: {currentUser?.about}</span>
        <span>{currentUser?.email}</span>
        <Button action={handleClickButtonEdit}>
          Изменить
        </Button>

      </div>

    </header>
  );
}
