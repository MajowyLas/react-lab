import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import "milligram";
import LoginForm from "./LoginForm";
import UserPanel from "./UserPanel";

function App() {
    //let email = 'aniamaywald@gmail.com';
    const [email, setEmail] = useState('');
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

    function login(loginForm) {
        setEmail(email);
        setIsLoggedIn(true)
    }
    function logout() {
        setIsLoggedIn('')
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

           <div>
                <h2>{message}</h2>
                <LoginForm onLogin={login}/>
        </div>
            ) : (

            return (
            <div>
                <h1>System do zapisów na zajęcia</h1>
                {
                    isLoggedIn
                        ? <UserPanel username={isLoggedIn} onLogout={logout}/>
                        : <LoginForm onLogin={login}/>
                }
            </div>
            );
        </div>
    );
}

export default App;