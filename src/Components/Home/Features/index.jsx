import cn from 'classnames'
import templateCustomization from './../../../images/icons/templateCustomization.svg'
import twoFreeRevisionRound from './../../../images/icons/twoFreeRevisionRound.svg'
import usesClientFirst from './../../../images/icons/usesClientFirst.svg'
import handsOnApproach from './../../../images/icons/handsOnApproach.svg'
import quickDelivery from './../../../images/icons/quickDelivery.svg'
import support from './../../../images/icons/support.svg'
import style from './styles.module.css'
import DesignCard from './DesignCard'

export default function Features () {
  return (
    <article style={{ backgroundColor: '#f4f6fC' }}>
      <div className={cn('container', style.containerFeatures)}>
        <h2 className={style.headerFeatures}>Features</h2>
        <h1 className={style.headerDesign}>
          Design that solves problems, one product at a time
        </h1>
        <div className='flex'>
          <div style={{ maxWidth: 405 }}>
            <DesignCard
              margin={style.margin_bottom}
              src={usesClientFirst}
              alt='Uses Client First'
              title='Uses Client First'
            />
            <DesignCard src={support} alt='24/7 Support' title='24/7 Support' />
          </div>
          <div style={{ maxWidth: 405 }}>
            <DesignCard
              margin={style.margin_bottom}
              src={twoFreeRevisionRound}
              alt='Two Free Revision Round'
              title='Two Free Revision Round'
            />
            <DesignCard
              src={quickDelivery}
              alt='Quick Delivery'
              title='Quick Delivery'
            />
          </div>
          <div style={{ maxWidth: 405 }}>
            <DesignCard
              margin={style.margin_bottom}
              src={templateCustomization}
              alt='Template Customization'
              title='Template Customization'
            />
            <DesignCard
              src={handsOnApproach}
              alt='Hands-on approach'
              title='Hands-on approach'
            />
          </div>
        </div>
      </div>
    </article>
  )
}
