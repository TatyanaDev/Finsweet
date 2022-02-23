import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import cn from 'classnames'
import 'swiper/css'
import {
  getReviewsRequest,
  getReviewsSuccess,
  getReviewsError
} from './../../../store/actions'
import profilePhoto from './../../../images/home/profilePhoto.png'
import style from './styles.module.css'
import './navigation.css'

function Reviews (props) {
  const {
    reviews,
    errorReviews,
    getReviewsSuccessAction,
    setErrorReviewsAction,
    getReviewsRequestAction
  } = props

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users?_limit=5')
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        throw res
      })
      .then(dataReviews => getReviewsSuccessAction(dataReviews))
      .catch(errReviews => {
        console.error('Error fetching data:', errReviews)
        setErrorReviewsAction(errReviews)
      })
      .finally(() => getReviewsRequestAction())
  }, [getReviewsSuccessAction, setErrorReviewsAction, getReviewsRequestAction])

  if (errorReviews) return 'Review loading error...'

  return (
    <article style={{ backgroundColor: 'rgba(244,246,252, 0.5)' }}>
      <div className={cn('container_flex', style.containerReviews)}>
        <div style={{ maxWidth: 327 }}>
          <h1 className={style.header}>What our clients say about us</h1>
          <p className={style.content}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.
          </p>
        </div>
        <div style={{ maxWidth: 843 }}>
          <Swiper
            slidesPerView={1}
            loop={true}
            navigation={true}
            modules={[Pagination, Navigation]}
          >
            {reviews.map(review => (
              <SwiperSlide key={review.id}>
                <p className={style.contentReview}>
                  "{review.company.catchPhrase}."
                </p>
                <div style={{ display: 'flex' }}>
                  <img
                    src={profilePhoto}
                    alt='profilePhoto'
                    className={style.imgReview}
                  />
                  <div>
                    <h1 className={style.nameReview}>{review.name}</h1>
                    <h2 className={style.emailReview}>{review.email}</h2>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </article>
  )
}

const mapStateToProps = ({ objReviews: { reviews, errorReviews } }) => ({
  reviews,
  errorReviews
})

const mapDispatchToProps = dispatch => ({
  getReviewsRequestAction: () => dispatch(getReviewsRequest()),
  getReviewsSuccessAction: dataReviews =>
    dispatch(getReviewsSuccess(dataReviews)),
  setErrorReviewsAction: errReviews => dispatch(getReviewsError(errReviews))
})

export default connect(mapStateToProps, mapDispatchToProps)(Reviews)
