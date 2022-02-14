import { Link } from 'react-router-dom'
import pointer_1 from './../../../images/home/pointer_1.png'
import pointer_2 from './../../../images/home/pointer_2.png'
import pointer_3 from './../../../images/home/pointer_3.png'
import pointer_4 from './../../../images/home/pointer_4.png'
import style from './styles.module.css'
import WorkCard from './WorkCard'

export default function HowWeWork () {
  return (
    <article style={{ backgroundColor: '#f4f6fC' }}>
      <div
        className='container_flex'
        style={{ padding: '128px 257px 129px 165px' }}
      >
        <div>
          <h1 className={style.header}>How we work</h1>
          <p className={style.content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor.
          </p>
          <Link to='#' className={style.link}>
            Get in touch with us
          </Link>
        </div>
        <div style={{ display: 'flex' }}>
          <span style={{ marginRight: 25 }}>
            <WorkCard
              src={pointer_1}
              header='Strategy'
              margin={style.margin_bottom}
            />
            <WorkCard src={pointer_3} header='Design' />
          </span>
          <span>
            <WorkCard
              src={pointer_2}
              header='Wireframing'
              margin={style.margin_bottom}
            />
            <WorkCard src={pointer_4} header='Development' />
          </span>
        </div>
      </div>
    </article>
  )
}
