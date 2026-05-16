export default function UserPanel({username, onLogout}) {
    return (
        <div>
            <h2>Witaj {username}!</h2>
            <a href="#" onClick={onLogout}>Wyloguj</a>
        </div>
    );
}
