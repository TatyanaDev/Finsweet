import {
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItem,
  Accordion
} from 'react-accessible-accordion'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import cn from 'classnames'
import {
  getQuestionsRequest,
  getQuestionsSuccess,
  getQuestionsError
} from './../../../store/actions'
import style from './styles.module.css'
import './fancy.css'

function QuestionsAsked (props) {
  const {
    questions,
    errorQuestions,
    getQuestionsSuccessAction,
    getQuestionsErrorAction,
    getQuestionsRequestAction
  } = props

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_start=3&&_limit=5')
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        throw res
      })
      .then(dataQuestions => getQuestionsSuccessAction(dataQuestions))
      .catch(errQuestions => {
        console.error('Error fetching data:', errQuestions)
        getQuestionsErrorAction(errQuestions)
      })
      .finally(() => getQuestionsRequestAction())
  }, [
    getQuestionsRequestAction,
    getQuestionsSuccessAction,
    getQuestionsErrorAction
  ])

  if (errorQuestions) return 'Questions loading error...'

  return (
    <article>
      <div className={cn('container_flex', style.containerQuestionsAsked)}>
        <div>
          <h1 className={style.header}>Frequently asked questions</h1>
          <Link to='#' className={style.link}>
            Contact us for more info
          </Link>
        </div>
        <Accordion allowZeroExpanded>
          {questions.map((question, id) => (
            <AccordionItem key={question.id}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <span className='flex'>
                    <span>
                      <span style={{ color: '#2405f2 ', marginRight: 53 }}>
                        0{id + 1}
                      </span>
                      <span>{question.title}</span>
                    </span>
                    <span></span>
                  </span>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>{question.body}</AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </article>
  )
}

const mapStateToProps = ({ objQuestions: { questions, errorQuestions } }) => ({
  questions,
  errorQuestions
})

const mapDispatchToProps = dispatch => ({
  getQuestionsRequestAction: () => dispatch(getQuestionsRequest()),
  getQuestionsSuccessAction: dataQuestions =>
    dispatch(getQuestionsSuccess(dataQuestions)),
  getQuestionsErrorAction: errQuestions =>
    dispatch(getQuestionsError(errQuestions))
})

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsAsked)
