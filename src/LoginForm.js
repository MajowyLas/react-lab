import React, {useState} from "react";

export default function LoginForm(props) {
    const [email, setEmail] = useState('');


    let message;

    if (email.length < 10) {
        message = <div>Ale masz krótki adres!</div>;
    } else if (email.length < 25) {
        message = <div>Twój adres e-mail jest w sam raz.</div>;
    } else {
        message = <div>Twój adres e-mail jest stanowczo za długi.</div>;
    }

    return <div>
        <label>Zaloguj się e-mailem</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
        <button type="button" onClick={() => props.onLogin(email)}>
            Wchodzę
        </button>
    </div>;
}