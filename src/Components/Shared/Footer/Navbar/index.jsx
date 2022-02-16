import cn from 'classnames'
import style from './../styles.module.css'
import NavItem from './NavItem'

export default function Navbar () {
  return (
    <article>
      <div className={cn('container_flex', style.containerNavbar)}>
        <p className={style.brand}>Copyright 2022, Finsweet.com</p>
        <nav>
          <ul style={{ display: 'flex' }}>
            <NavItem content='Home' href='/' />
            <NavItem content='About us' href='/about_us' />
            <NavItem content='Features' href='/features' />
            <NavItem content='Pricing' href='/pricing' />
            <NavItem content='FAQ' href='/faq' />
            <NavItem content='Blog' href='/blog' />
          </ul>
        </nav>
      </div>
    </article>
  )
}
