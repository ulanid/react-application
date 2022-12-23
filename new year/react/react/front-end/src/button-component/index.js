import {useState} from 'react';
import './style.css';

export default function ButtonComponent() {
    const [buttonText, setButtonText] = useState("Скільки днів до Нового року??");
    const [daysText, setDaysText] = useState();

    const getApiResponse = () => {
        var unix = Math.floor(Date.now() / 1000)
        
        fetch("http://localhost:3001/getDays?time_stamp=" + unix)
        
        .then(res => res.json())
        .then(
            (result) => {

                setDaysText(result.days + " днів");
                setButtonText("Оновити");
                
            },

            (error) => {
                setDaysText("Помилка запиту до серверу");
            }
        )
    }
    

    return (
        <div className="Component">
            <h1>{daysText}</h1>
            <button onClick={getApiResponse}>{buttonText}</button>
        </div>
    );
}