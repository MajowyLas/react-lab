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
    const [meetings, setMeetings] = useState([]);


    function login(loginForm) {
        setEmail(email);
        setIsLoggedIn(true)
    }
    function logout() {
        setIsLoggedIn(false)
    }


    return (
        <div className="container">
            <h1>Witaj w systemie do zapisów na zajęcia</h1>

            {isLoggedIn
                ? <>
                    <UserPanel username={email} onLogout={logout} />
                    <MeetingsPage meetings={meetings} onNewMeeting={setMeetings} />
                </>
                : <LoginForm onLogin={login} />

}
        </div>
    );
}

export default App;