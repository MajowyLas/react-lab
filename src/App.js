import './App.css';
import {useState} from "react";
import "milligram";
import LoginForm from "./LoginForm";
import UserPanel from "./UserPanel";
import MeetingsPage from "./meetings/MeetingsPage";

function App() {
    const [email, setEmail] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function login(loginEmail) {
        setEmail(loginEmail);
        setIsLoggedIn(true);
    }

    function logout() {
        setIsLoggedIn(false);
    }

    return (
        <div className="container">
            <h1>Witaj w systemie do zapisów na zajęcia</h1>
            {isLoggedIn
                ? <>
                    <UserPanel username={email} onLogout={logout}/>
                    <MeetingsPage/>
                  </>
                : <LoginForm onLogin={login}/>
            }
        </div>
    );
}

export default App;
