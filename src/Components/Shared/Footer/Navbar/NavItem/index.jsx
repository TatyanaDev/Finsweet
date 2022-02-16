import { Link } from 'react-router-dom'
import style from './../../styles.module.css'

export default function NavItem ({ content, href }) {
  return (
    <li className={style.link}>
      <Link to={href}>{content}</Link>
    </li>
  )
}
