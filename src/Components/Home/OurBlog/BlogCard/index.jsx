import { Link } from 'react-router-dom'
import style from './../styles.module.css'

export default function BlogCard ({ src }) {
  return (
    <div style={{ maxWidth: 405 }}>
      <img src={src} alt='Woman with Macbook' style={{ marginBottom: 40 }} />
      <h3 className={style.blogDate}>19 Jan 2022</h3>
      <h2 className={style.blogTitle}>
        How one Webflow user grew his single person consultancy from $0-100K in
        14 months
      </h2>
      <p className={style.blogContent}>
        See how pivoting to Webflow changed one person’s sales strategy and
        allowed him to attract
      </p>
      <Link to='#' className={style.link}>
        Read More
      </Link>
    </div>
  )
}
