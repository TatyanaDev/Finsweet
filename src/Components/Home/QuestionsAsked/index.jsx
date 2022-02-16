import {
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItem,
  Accordion
} from 'react-accessible-accordion'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import cn from 'classnames'
import style from './styles.module.css'

export default function QuestionsAsked () {
  const [questions, setQuestions] = useState([])
  const [error, setError] = useState(null)
  const [, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_start=3&&_limit=5')
      .then(res => {
        if (res.ok) {
          return res.json()
        }
        throw res
      })
      .then(data => {
        setQuestions(data)
      })
      .catch(err => {
        console.error('Error fetching data:', err)
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (error) return 'Questions loading error...'

  return (
    <article>
      <div className={cn('container_flex', style.containerQuestionsAsked)}>
        <div>
          <h1 className={style.header}>Frequently asked questions</h1>
          <Link to='#' className={style.link}>
            Contact us for more info
          </Link>
        </div>
        <div>
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
      </div>
    </article>
  )
}
