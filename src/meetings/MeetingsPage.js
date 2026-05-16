import {useState} from "react";
import NewMeetingForm from "./NewMeetingForm";
import MeetingsList from "./MeetingsList";

export default function MeetingsPage() {
    const [meetings, setMeetings] = useState([]);
    const [isFormVisible, setIsFormVisible] = useState(false);

    function handleNewMeeting(meeting) {
        const nextMeetings = [...meetings, meeting];
        setMeetings(nextMeetings);
    }

    return (
        <div>
            <h2>Zajęcia ({meetings.length})</h2>
            <button onClick={() => setIsFormVisible(true)}>Dodaj Spotkanie</button>
            {isFormVisible && <NewMeetingForm onSubmit={(meeting) => handleNewMeeting(meeting)} />}

            {meetings.length > 0 && <MeetingsList meetings={meetings} />}
        </div>
    )
}