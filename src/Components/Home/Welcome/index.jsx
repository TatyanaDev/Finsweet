import { Link } from 'react-router-dom'
import illustration from './../../../images/home/Illustration.svg'
import style from './styles.module.css'

export default function Welcome () {
  return (
    <article style={{ backgroundColor: '#1c1e53' }}>
      <div className={style.container_welcome}>
        <div>
          <h1 className={style.header}>
            Building stellar websites for early startups
          </h1>
          <p className={style.content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <nav>
            <ul style={{ display: 'flex' }}>
              <li className={style.view_our_work}>
                <Link to='#'>View our work</Link>
              </li>
              <li className={style.view_pricing}>
                <Link to='/pricing'>View Pricing</Link>
              </li>
            </ul>
          </nav>
        </div>
        <img src={illustration} alt='graph' />
      </div>
    </article>
  )
}
