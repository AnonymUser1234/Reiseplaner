import { useState } from 'react'
import './App.css'
import Form from './components/Form'
import List from './components/List'
import { Journey } from './types'

function App() {
  const [journey, setJourney] = useState<Journey>({
      gender: "male",
      hygiene: 5,
      days: 0,
      type:  "sommer",
      weather: "good"
  })


  const onSave = (journey: Journey) => {
      setJourney(journey)
  }

  return (
    <>
    <header><h1>Reiseplaner</h1></header>
      
      <div id='body'>
        <Form onSave={onSave}></Form>
      <List data={journey}></List>
      </div>
      
    </>
  )
}

export default App
