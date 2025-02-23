import { useState } from 'react'

const Button = ({ reviewValue, setReview, review}) => (
  <button onClick={ () => setReview(review => review + 1) }>
    {review}
  </button>
)

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = good / all * 100

  if (all === 0) {
    return (
      <tr>
        <td colSpan="6">No feedback given</td>
      </tr>
    )
  }

  return (
    <>
      <tr>
        <td>good</td>
        <td>{good}</td>
      </tr>
      <tr>
        <td>neutral</td>
        <td>{neutral}</td>
      </tr>
      <tr>
        <td>bad</td>
        <td>{bad}</td>
        </tr>
      <tr>
        <td>all</td>
        <td>{all}</td>
        </tr>
      <tr>
        <td>average</td>
        <td>{average.toFixed(1)}</td>
        </tr>
      <tr>
        <td>positive</td>
        <td>{positive.toFixed(1)}%</td>
      </tr>
      <tr>
      </tr>
    </>
  )
}

const StaticLine = ({text, value, all}) => {
  const averageScore = all === 0 ? 0 : value / all
  
  return (
    <tr>
      <td>{text}</td>
      <td>{averageScore.toFixed(1)}</td>
    </tr>
  )
}

const App = () => {
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

      <table>
        <tbody>
          <Statistics good={good} neutral={neutral} bad={bad}/>
          <StaticLine text="good" value={good} all={good + neutral + bad} />
          <StaticLine text="neutral" value={neutral} all={good + neutral + bad} />
          <StaticLine text="bad" value={bad} all={good + neutral + bad} />
        </tbody>
      </table>
    </div>
  )
}

export default App