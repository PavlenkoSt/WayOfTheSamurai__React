import s from './Header.module.css'
import {NavLink} from 'react-router-dom'
import logo from '../../assets/logo.jpg'
import { FC, MouseEventHandler } from 'react'

type HeaderPropsType = {
  isAuth: boolean
  id: number
  login: string
  logout: MouseEventHandler<HTMLButtonElement>
}

const Header: FC<HeaderPropsType> = props => {
    return (
      <div className="container">
        <header className={s.header}>
          <NavLink className={s.logo} to="/">
            <img src={logo} className={s.img} alt="logo" />
          </NavLink>
          <div className={s.login}>
            {props.isAuth 
            ? (
             <div>
              <NavLink to={`/profile/${props.id}`}>{props.login}</NavLink> &nbsp;
                <button className={s.btn}
                onClick={props.logout}
                >Выйти</button>
             </div>
            ) 
            : (
              <NavLink to="/login">Войти</NavLink>
            )}
          </div>
        </header>
      </div>
    );
}

export default Header