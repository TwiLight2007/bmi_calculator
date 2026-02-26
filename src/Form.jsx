import { useState } from 'react'
import './inputBox.css'

function InputBox({ inputName, inputValue, changeValue }) {
    return (
        <div className = "inputBox">
            <p id = "inputName">{inputName}</p>
            <p id = "inputValue">{inputValue}</p>
            <button className = "decrement" onClick = {() => changeValue(prevValue => prevValue > 0 ? prevValue - 1 : 0)}>-</button>
            <button className = "increment" onClick = {() => changeValue(prev => prev + 1)}>+</button>
        </div>
    )
}

export default function Form() {
    const [age, setAge] = useState(0)
    const [weight, setWeight] = useState(0)
    const [height, setHeight] = useState(50)
    const [gender, setGender] = useState("male")

    return (
        <div>
            <InputBox inputName = "Age (years)" inputValue = {age} changeValue = {setAge}/>
            <InputBox inputName = "Weight (kg)" inputValue = {weight} changeValue = {setWeight}/>
        </div>
    )
}