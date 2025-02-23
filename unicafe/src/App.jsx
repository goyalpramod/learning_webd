// import { useState } from 'react'

// const Button = ({ reviewValue, setReview, review}) => (
//   <button onClick={ () => setReview(review => review + 1) }>
//     {review}
//   </button>
// )

// const Statistics = ({good, neutral, bad}) => {
//   const all = good + neutral + bad
//   const average = (good - bad) / all
//   const positive = good / all * 100

//   if (all === 0) {
//     return (
//       <tr>
//         <td colSpan="6">No feedback given</td>
//       </tr>
//     )
//   }

//   return (
//     <>
//       <tr>
//         <td>good</td>
//         <td>{good}</td>
//       </tr>
//       <tr>
//         <td>neutral</td>
//         <td>{neutral}</td>
//       </tr>
//       <tr>
//         <td>bad</td>
//         <td>{bad}</td>
//         </tr>
//       <tr>
//         <td>all</td>
//         <td>{all}</td>
//         </tr>
//       <tr>
//         <td>average</td>
//         <td>{average.toFixed(1)}</td>
//         </tr>
//       <tr>
//         <td>positive</td>
//         <td>{positive.toFixed(1)}%</td>
//       </tr>
//       <tr>
//       </tr>
//     </>
//   )
// }

// const StaticLine = ({text, value, all}) => {
//   const averageScore = all === 0 ? 0 : value / all
  
//   return (
//     <tr>
//       <td>{text}</td>
//       <td>{averageScore.toFixed(1)}</td>
//     </tr>
//   )
// }

// const App = () => {
//   const [good, setGood] = useState(0)
//   const [neutral, setNeutral] = useState(0)
//   const [bad, setBad] = useState(0)

//   return (
//     <div>
//       <h1>give feedback</h1>
//       <Button reviewValue={good} setReview={setGood} review="good" />
//       <Button reviewValue={neutral} setReview={setNeutral} review="neutral" />
//       <Button reviewValue={bad} setReview={setBad} review="bad" />      
//       <h1>statistics</h1>

//       <table>
//         <tbody>
//           <Statistics good={good} neutral={neutral} bad={bad}/>
//           <StaticLine text="good" value={good} all={good + neutral + bad} />
//           <StaticLine text="neutral" value={neutral} all={good + neutral + bad} />
//           <StaticLine text="bad" value={bad} all={good + neutral + bad} />
//         </tbody>
//       </table>
//     </div>
//   )
// }

// export default App

import { useState } from 'react'

const Button = ({anecdotes, setSelected}) => {
  const getRandomIndex = () => Math.floor(Math.random() * anecdotes.length)
  
  return (
    <button onClick={() => setSelected(getRandomIndex())}>
      next anecdote
    </button>
  )
}

const VoteButton = ({votes, selected, setVotes}) => {
  return(
    <button onClick={() => {
      const newVotes = [...votes]  // Create a copy of the votes array
      newVotes[selected] += 1      // Update the copy
      setVotes(newVotes)
    }}>
      vote
    </button>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0))
  const maxVotes = Math.max(...votes)
  const maxVotesIndex = votes.indexOf(maxVotes)
  const maxVotesAnecdote = anecdotes[maxVotesIndex]

  return (
    <div>
      {anecdotes[selected]}
      <br />
      <Button anecdotes={anecdotes} setSelected={setSelected} />
      <VoteButton votes={votes} selected={selected} setVotes={setVotes} />
      <p>has {votes[selected]} votes</p>
      <h1>Anecdote with most votes</h1>
      {maxVotesAnecdote}
      <p>has {maxVotes} votes</p>
    </div>
  )
}

export default App