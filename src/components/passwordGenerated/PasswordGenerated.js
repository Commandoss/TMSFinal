import React from "react";
import "./passwordGenerated.css"
import {useState, useEffect} from "react";

export function PasswordGenerated(props) {
    const {value, numbers, signs, char, update } = props;
    let [password, setPassword] = useState();
    const CreatePassword = (value, numbers, signs ) => {
        let password = '';
        let charSet ='';
        if(char) charSet += "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if (numbers) charSet+="0123456789";
        if (signs) charSet+='!@#$%^&*()_+~`|}{[]:;?><,./-=';
        while(password.length < value){
            password = password + charSet.charAt(Math.ceil((charSet.length * Math.random() * Math.random() * 10)))
        }
        setPassword(password);
    }

    function writeToBuffer (buffer){
        navigator.clipboard.writeText(buffer)
            .then(() => {})
            .catch(err => {
                console.log('Something went wrong', err);
            });
    }
    useEffect(() => CreatePassword( value, numbers, signs), [numbers, value, signs, char, update]);
    useEffect(() => CreatePassword( value, numbers, signs));

    return (
        <div>
            <div className='passwordDiv '>
                <p className=' password'>
                    {password}
                </p>
            </div>
            <button className='buffer' onClick={() => writeToBuffer(password)}>Copy Password</button>
            {props.children}
        </div>
    )

}