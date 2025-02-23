import { useState } from 'react'

const Button = ({ reviewValue, setReview, review}) => (
  <button onClick={ () => setReview(reviewValue + 1) }>
    {review}
  </button>
)

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = good / all * 100

  if (all > 0) {
    return (
      <div>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>all {all}</p>
        <p>average {average}</p>
        <p>positive {positive} %</p>
      </div>
    )
  }
  return (
    <div>
      <p>No feedback given</p>
    </div>
  )

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  

  return (
    <div>
      <h1>give feedback</h1>
      <Button reviewValue={good} setReview={setGood} review="good" />
      <Button reviewValue={neutral} setReview={setNeutral} review="neutral" />
      <Button reviewValue={bad} setReview={setBad} review="bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App