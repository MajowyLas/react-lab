import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    //let email = 'aniamaywald@gmail.com';
    const [email, setEmail] = useState('aniamaywald@gmail.com');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function handleChange(event) {
        //console.log(event.target.value);
        setEmail(event.target.value);
    }

    function handleLogin() {
        setIsLoggedIn(true);
    }

    function handleLogout() {
        setIsLoggedIn(false);
    }



    let message;

    if (email.length < 10) {
        message = <div>Ale masz krótki adres!</div>;
    } else if (email.length < 25) {
        message = <div>Twój adres e-mail jest w sam raz.</div>;
    } else {
        message = <div>Twój adres e-mail jest stanowczo za długi.</div>;
    }



    return (
        <div>
            <h1>Witaj w systemie do zapisów na zajęcia</h1>

            {!isLoggedIn ? (

                <div>
                    <h2>{message}</h2>
                    <label>
                        Zaloguj się e-mailem
                        <input type="text" value={email} onChange={handleChange} />
                    </label>
                    <button type="button" onClick={handleLogin}>Wchodzę</button>
                </div>
            ) : (

                <div>
                    <h2>Witaj {email}!</h2>
                    <a href="#" onClick={handleLogout}>Wyloguj</a>
                </div>
            )}
        </div>
    );
}

export default App;