import { ChangeEvent, FormEvent, useState } from 'react'
import '../css/stylesheetForm.css'
import { Journey } from '../types'


type FormProps = {
    onSave: (journey: Journey) => void
}

const defaultJourney: Journey = {
    gender: "male",
    hygiene: 5,
    days: 0,
    type:  "sommer",
    weather: "good"
}

function Form(props: FormProps) {
    const [journey, setJourney] = useState<Journey>(defaultJourney)



    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        if(journey) {
            event.preventDefault();
            props.onSave(journey);
            event.currentTarget.reset();
        }
    }




    function handleChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement>){
        setJourney((prev) => {
            let value: string = event.target.value;
            let myNumber: number = 0;
            if(event.target.name === "days") {
                myNumber = parseInt(value);
                return {...prev, [event.target.name]: myNumber}
            }
            if(event.target.name === "hygiene") {
                myNumber = parseInt(value);
                return {...prev, [event.target.name]: myNumber}
            }
            return {...prev, [event.target.name]: value}
        });
    }

  return (
    <>
      <form onSubmit={onSubmit}>
        <h3>Geschlecht
            <select id="gender" value={journey?.gender} onChange={handleChange} name='gender' required>
                <option value="">Bitte wählen</option>
                <option value="male">Männlich</option>
                <option value="female">Weiblich</option>
                <option value="divers">Divers</option>
            </select>
        </h3>
        <h3>Hygiene
            <label id='flex'>Tief<input type="range" min={1} max={10} value={journey.hygiene} onChange={handleChange} name='hygiene'/>Hoch</label>
        </h3>
        <h3>Anzahl Tage
            <input type='number' min={2} value={journey.days} onChange={handleChange} title='mindestens 2 Tage' name='days' required></input>
        </h3>
        <h3>Temperatur
            <select value={journey?.type} onChange={handleChange} name='type' required>
                <option value="">Bitte wählen</option>
                <option value="sommer">{">"} 20°C</option>
                <option value="zwischen">10°C - 20°C</option>
                <option value="winter">{"<"} 10°C</option>
            </select>
        </h3>
        <h3>Wetter 
            <label><input type='radio' name='weather' value={"good"} checked={journey.weather === "good"} onChange={handleChange}></input>Schön</label>
            <label><input type='radio' name='weather' value={"middle"} checked={journey.weather === "middle"} onChange={handleChange}></input>Mittel</label>
            <label><input type='radio' name='weather' value={"bad"} checked={journey.weather === "bad"} onChange={handleChange}></input>Schlecht</label>
        </h3>
        <button type='submit'>Generieren</button>
      </form>
    </>
  )
}

export default Form