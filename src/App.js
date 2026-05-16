import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
   // let email = 'aniamaywald@gmail.com';
    const [email,setEmail] = useState('aniamaywald@gmail.com');

    function handleChange(event) {
        //console.log(event.target.value);
        setEmail(event.target.value);
    }
    return (
        <div>
            <h1> System do zapisów na zajęcia </h1>
            <h2>
                {
                    email.length === 0
                        ? 'Wpisz swój email'
                    : email.length <10
                    ? 'Krótki e-mail'
                    : `Twój e-mail to ${email}.`
                }
                </h2>
            <input type="text" value={email}
                   onChange={handleChange}/>
            </div>
    );
}

export default App;
// “udostępnij z tego pliku następującą implementację komponentu”.