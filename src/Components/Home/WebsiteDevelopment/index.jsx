import { Formik, Field, Form } from 'formik'
import { Link } from 'react-router-dom'
import cn from 'classnames'
import style from './styles.module.css'

export default function WebsiteDevelopment () {
  return (
    <article>
      <div className={cn('container_flex', style.containerWebsiteDevelopment)}>
        <div className={cn(style.backgroundImage, 'image')}>
          <div className={style.background}>
            <h1 className={style.headerWebsiteDevelopment}>
              Building stellar websites for early startups
            </h1>
            <p className={style.contentWebsiteDevelopment}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua ut
              enim.
            </p>
          </div>
        </div>
        <div className={style.backgroundForm}>
          <h2 className={style.headerForm}>Send inquiry</h2>
          <p className={style.contentForm}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore.
          </p>
          <Formik
            initialValues={{
              name: '',
              url: '',
              email: ''
            }}
            onSubmit={values => console.log(values)}
          >
            <Form style={{ maxWidth: 432 }}>
              <Field
                id='name'
                name='name'
                placeholder='Your Name'
                className={style.input}
              />

              <Field
                id='email'
                name='email'
                placeholder='Email'
                type='email'
                className={style.input}
              />

              <Field
                id='url'
                name='url'
                placeholder='Paste your Figma design URL'
                className={style.input}
              />

              <button type='submit' className={style.submitButton}>
                Send an Inquiry
              </button>
            </Form>
          </Formik>
          <Link to='#' className={style.link}>
            Get in touch with us
          </Link>
        </div>
      </div>
    </article>
  )
}
