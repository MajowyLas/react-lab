import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import "milligram";
import LoginForm from "./LoginForm";
import UserPanel from "./UserPanel";
import MeetingsPage from "./meetings/MeetingsPage";

function App() {
    //let email = 'aniamaywald@gmail.com';
    const [email, setEmail] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    function login(loginForm) {
        setEmail(email);
        setIsLoggedIn(true)
    }
    function logout() {
        setIsLoggedIn(false)
    }

    //function addMeeting(meeting) {
       // setMeetings('')
   // }


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

            {isLoggedIn
                ? <>
                    <UserPanel username={email} onLogout={logout} />
                    <MeetingsPage />
                </>
                : <LoginForm onLogin={login} />

}
        </div>
    );
}

export default App;