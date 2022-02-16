import cn from 'classnames'
import arabicBusinessman from './../../../images/home/arabicBusinessman.png'
import womanWithMacbook from './../../../images/home/womanWithMacbook.png'
import appleMonitors from './../../../images/home/appleMonitors.png'
import style from './styles.module.css'
import BlogCard from './BlogCard'

export default function OurBlog () {
  return (
    <article>
      <div className={cn('container', style.containerOurBlog)}>
        <h1 className={style.header}>Our blog</h1>
        <div className='flex'>
          <BlogCard src={arabicBusinessman} />
          <BlogCard src={womanWithMacbook} />
          <BlogCard src={appleMonitors} />
        </div>
      </div>
    </article>
  )
}
