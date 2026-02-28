import { useState } from 'react'
import Header from './Header.jsx'
import Form from './Form.jsx'
import OutputColumn from './OutputColumn.jsx'
import Article from './Article.jsx'
import Footer from './Footer.jsx'

//article os just a short description of what BMI is all about
function App() {
  const [age, setAge] = useState(0)
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(160)

  return (
    <>
      <Header />
      <div id = "flexContainer">
        <Form age = {age} setAge = {setAge} weight = {weight} setWeight = {setWeight} height = {height} setHeight = {setHeight} />
        <OutputColumn weight = {weight} height = {height} /> {/* Output column only for desktop view */}
      </div>
    </>
  )
}

export default App
