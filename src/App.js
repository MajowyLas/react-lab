import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import "milligram";
import LoginForm from "./LoginForm";
import UserPanel from "./UserPanel";
import NewMeetingForm from "./meetings/NewMeetingForm";

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
        <div className="container">
            <h1>Witaj w systemie do zapisów na zajęcia</h1>

            {
                isLoggedIn
                ? <LoginForm
                    email={email}
                    onLogout={logout}
                />

                  : <UserPanel
                onLogin={login}

            />
}
        </div>
    );
}

export default App;