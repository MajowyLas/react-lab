import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
    // let email = 'aniamaywald@gmail.com';
    const [email, setEmail] = useState('aniamaywald@gmail.com');
    const [isLogeedIn, setIsLoggedIn] = useState(false);

    function handleChange(event) {
        //console.log(event.target.value);
        setEmail(event.target.value);
    }

    function handelLogin() {
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
                <h1> System do zapisów na zajęcia </h1>
                <h2>  {message}     </h2>
                <input type="text" value={email}
                       onChange={handleChange}/>
                <button type="button" onClick={() => alert(email)}>
                    Wyświetl mój e-mail w alercie
                </button>
            </div>
        );


}

export default App;
// “udostępnij z tego pliku następującą implementację komponentu”.


//return (
   // <div>
      //  <h1> System do zapisów na zajęcia </h1>
      //  <h2>
        //    {
           //     email.length === 0
          //          ? 'Wpisz swój email'
           //         : email.length < 10
           //             ? 'Krótki e-mail'
          //              : `Twój e-mail to ${email}.`
         //   }
      //  </h2>
     //   <input type="text" value={email}
      //         onChange={handleChange}/>
   // </div>
//);