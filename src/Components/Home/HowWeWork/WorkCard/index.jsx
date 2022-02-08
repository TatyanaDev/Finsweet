import cn from 'classnames'
import style from './../styles.module.css'

export default function WorkCard ({ src, header, margin }) {
  return (
    <>
      <img src={src} alt='pointer' />
      <h1 className={style.sub_header}>{header}</h1>
      <p className={cn(style.sub_content, margin)}>
        Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .
      </p>
    </>
  )
}
