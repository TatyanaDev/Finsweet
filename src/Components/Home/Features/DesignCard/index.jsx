import cn from 'classnames'
import style from './../styles.module.css'

export default function DesignCard ({ margin, src, alt, title }) {
  return (
    <span className={cn(style.containerCardDesign, margin)}>
      <img src={src} alt={alt} style={{ marginBottom: 25 }} />
      <h3 className={style.headerCardDesign}>{title}</h3>
      <p className={style.contentCardDesign}>
        Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam sed
        faucib turpis eu gravida mi. Pellentesque et velit aliquam sed mi.
      </p>
    </span>
  )
}
