import { Link } from 'react-router-dom'
import cn from 'classnames'
import style from './styles.module.css'

export default function OurProjects () {
  return (
    <article>
      <div className='container' style={{ padding: '128px 160px' }}>
        <div className={cn(style.header_container, 'flex')}>
          <h1 className={style.header}>View our projects</h1>
          <Link to='#' className={style.link}>
            View More
          </Link>
        </div>
        <div className='flex'>
          <div className={cn(style.workhubOffice, 'image')}>
            <div className={cn(style.workhubOfficeInfoContainer)}>
              <h2 className={style.projectTitles} style={{ marginBottom: 16 }}>
                Workhub office Webflow Webflow Design
              </h2>
              <p className={style.workhubOfficeContent}>
                Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                aliquam
              </p>
              <Link to='#' className={style.projectLinks}>
                View project
              </Link>
            </div>
          </div>
          <div>
            <div className={cn(style.websiteDesign, 'image')}>
              <div className={style.websiteDesignInfoContainer}>
                <h3
                  className={style.projectTitles}
                  style={{ marginBottom: 10 }}
                >
                  Unisaas Website Design
                </h3>
                <Link to='#' className={style.projectLinks}>
                  View portfolio
                </Link>
              </div>
            </div>
            <div className={cn(style.joinOurChurch, 'image')}></div>
          </div>
        </div>
      </div>
    </article>
  )
}
