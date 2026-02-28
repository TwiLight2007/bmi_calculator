import { useState } from 'react'
import './inputBox.css'

function InputBox({ inputName, inputValue, changeValue }) {
    return (
        <div className = "inputBox">
            <p className = "inputName">{inputName}</p>
            <p className = "inputValue">{inputValue}</p>
            <button className = "decrement" onClick = {() => changeValue(prevValue => prevValue > 0 ? prevValue - 1 : 0)}>-</button>
            <button className = "increment" onClick = {() => changeValue(prev => prev + 1)}>+</button>
        </div>
    )
}

function InputSlide({ inputName, height, changeValue }) {
    return (
        <div className = "inputSlide">
            <p className = "inputName">{inputName}</p>
            <p className = "inputValue">{height}</p>
            <span>50 </span><input type = "range" min = "50" max = "300" onChange = {(e) => changeValue(Number(e.target.value))} /><span> 300</span>
        </div>
    )
}

function GenderToggle({ changeValue }) {
    return (
        <div id = "genderToggle">
            <p className = "inputName">Gender</p>
            <span>Male</span>
                <div id = "container" onClick = {() => {document.querySelector("#dot").style.left == "5vw" ? document.querySelector("#dot").style.left = "0vh" : document.querySelector("#dot").style.left = "5vw"; changeValue(prev => prev == "male" ? "female" : "male")}}>
                    <div id = "dot"></div>
                </div>
            <span>Female</span>
        </div>
    )
}

export default function Form({ age, setAge, weight, setWeight, height, setHeight }) {
    const [gender, setGender] = useState("male")

    return (
        <div id = "formFlex">
            <div id = "ageWeightGenderContainer">
                <div id = "ageWeightContainer">
                    <InputBox inputName = "Age (years)" inputValue = {age} changeValue = {setAge}/>
                    <InputBox inputName = "Weight (kg)" inputValue = {weight} changeValue = {setWeight}/>
                </div>
                <GenderToggle changeValue = {setGender} />
            </div>
            <div>
                <InputSlide inputName = "Height (cm)" height = {height} changeValue = {setHeight} />
            </div>
        </div>
    )
}