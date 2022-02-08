import cn from 'classnames'
import logo from './../../../images/icons/finsweet_logo.svg'
import style from './styles.module.css'
import NavItem from './NavItem'

export default function Navbar () {
  return (
    <article style={{ backgroundColor: '#1c1e53' }}>
      <div className={cn('container', style.padding)}>
        <img src={logo} alt='finsweet' />
        <nav>
          <ul className={style.container_links}>
            <NavItem content='Home' href='/' />
            <NavItem content='About us' href='/about_us' />
            <NavItem content='Features' href='/features' />
            <NavItem content='Pricing' href='/pricing' />
            <NavItem content='FAQ' href='/faq' />
            <NavItem content='Blog' href='/blog' />
            <NavItem content='Contact us' href='/contact_us' />
          </ul>
        </nav>
      </div>
    </article>
  )
}
