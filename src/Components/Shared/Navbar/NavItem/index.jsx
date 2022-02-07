import { Link, useLocation } from 'react-router-dom'
import cn from 'classnames'
import style from './../styles.module.css'

export default function NavItem ({ content, href }) {
  const { pathname } = useLocation()

  return (
    <li>
      <Link to={href} className={cn(style.link, pathname === href && style.active_link)} >
        {content}
      </Link>
    </li>
  )
}
