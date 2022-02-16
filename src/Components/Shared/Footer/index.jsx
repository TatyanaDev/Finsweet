import cn from 'classnames'
import instagram from './../../../images/icons/instagram.svg'
import logo from './../../../images/icons/finsweet_logo.svg'
import facebook from './../../../images/icons/facebook.svg'
import linkedin from './../../../images/icons/linkedIn.svg'
import twitter from './../../../images/icons/twitter.svg'
import style from './styles.module.css'
import Navbar from './Navbar'

export default function Footer () {
  return (
    <>
      <article style={{ backgroundColor: '#1C1E53' }}>
        <div
          className='container_flex'
          style={{ padding: '96px 382px 0px 160px' }}
        >
          <div>
            <img src={logo} alt='finsweet' className={style.logo} />
            <p className={style.footerContent}>
              We are always open to discuss your project and improve your online
              presence.
            </p>
            <div className={cn('flex', style.contactBlock)}>
              <div>
                <h2 className={style.contactHeaders}>Email me at</h2>
                <p>
                  <a
                    href='mailto:contact@website.com'
                    className={style.contactContent}
                  >
                    contact@website.com
                  </a>
                </p>
              </div>
              <div>
                <h2 className={style.contactHeaders}>Call us</h2>
                <p>
                  <a
                    href='tel:+0927 6277 28525'
                    className={style.contactContent}
                  >
                    0927 6277 28525
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div>
            <h1 className={style.header}>Lets Talk!</h1>
            <p className={style.content}>
              We are always open to discuss your project, improve your online
              presence and help with your UX/UI design challenges.
            </p>
            <a
              href='http://www.facebook.com'
              target='_blank'
              rel='noreferrer'
              style={{ marginRight: 26 }}
            >
              <img src={facebook} alt='Facebook' />
            </a>
            <a
              href='https://twitter.com/'
              target='_blank'
              rel='noreferrer'
              style={{ marginRight: 26 }}
            >
              <img src={twitter} alt='Twitter' />
            </a>
            <a
              href='https://www.instagram.com/'
              target='_blank'
              rel='noreferrer'
              style={{ marginRight: 26 }}
            >
              <img src={instagram} alt='Instagram' />
            </a>
            <a href='https://ru.linkedin.com/' target='_blank' rel='noreferrer'>
              <img src={linkedin} alt='Linkedin' />
            </a>
          </div>
        </div>
      </article>
      <Navbar />
    </>
  )
}
