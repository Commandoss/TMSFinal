import React from "react";
import {PasswordGenerated} from "../passwordGenerated/PasswordGenerated";
import {useState} from "react";
import "./ControlPanel.css"

export function ConptrolPanel(){
    let [value, setValue] = useState(15);
    let [pinPass, setPinPass] = useState({min: 8, max: 100});
    let [numbers, setNumber] = useState(true);
    let [signs, setSigns] = useState(false);
    let [char, setChar] = useState(true);
    let [update, setUpdate] = useState(true);

    const valueControl= () => {
        setPinPass({min: 8, max: 100})
        if(value < 8) setValue(8);
        setChar(true);
    }
    const valuePin = () => {
        setChar(false);
        setSigns(false);
        setNumber(true);
        if(value > 11) setValue(10);
        setPinPass({min: 3, max: 10});

    }

    const numbersHandler = () => {
        if(pinPass.min !==3){
            setNumber(!numbers);
        }
    }

    const signsHandler = () => {
        if(pinPass.min !==3){
            setSigns(!signs);
        }
    }

    // function writeToBuffer (buffer){
    //     navigator.clipboard.writeText(buffer)
    //         .then(() => {})
    //         .catch(err => {
    //             console.log('Something went wrong', err);
    //         });
    // }
    // writeToBuffer(PasswordGenerated.props.passwordValue)
    return(
        <PasswordGenerated value={value} numbers={numbers} signs={signs} char={char} update={update} passwordValue=''>

            <div className='variableButtons'>
                <button className='strongPassword' onClick={valueControl}>Strong Password</button>
                <button className='pin'  onClick={valuePin}>Pin</button>
                <button className='update' onClick={() => setUpdate(!update)}>Update</button>
                {/*<button className='buffer' onClick={() => writeToBuffer(passwordValue)}>Copy Password</button>*/}
            </div>
            <div className='controlButtons'>
                <label htmlFor="myRange">Length </label>
                <input onChange={(e) => setValue(e.target.value)} type="range" min={pinPass.min} max={pinPass.max} value={value} id='myRange'/>
                <label htmlFor="myRange" className='valueNumber'>{value}</label>
                <input type="checkBox" id='numbers' onClick={numbersHandler} checked={numbers}/>
                <label htmlFor="numbers" className='numbersFlag'>Numbers</label>
                <input type="checkBox" id='signs' onClick={signsHandler} checked={signs}/>
                <label htmlFor="signs">Signs</label>
            </div>

        </PasswordGenerated>
    );

}