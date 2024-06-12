import { useState, useEffect } from 'react';
import MeetupList from '../components/meetups/MeetupList';

function AllMeetupsPage() {
    const [isLoading, setIsLoading] = useState(true);
    const [loadedMeetups, setLoadedMeetups] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true);
        setError(null);
        fetch('https://react-getting-started-3e96b-default-rtdb.europe-west1.firebasedatabase.app/meetups.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                return response.json();
            })
            .then((data) => {
                const meetups = [];
                for (const key in data) {
                    const meetup = {
                        id: key,
                        ...data[key]
                    };
                    meetups.push(meetup);
                }
                setIsLoading(false);
                setLoadedMeetups(meetups);
            })
            .catch((err) => {
                setIsLoading(false);
                setError(err.message);
            });
    }, []);

    if (isLoading) {
        return (
            <section>
                <p>Loading...</p>
            </section>
        );
    }

    if (error) {
        return (
            <section>
                <p>{error}</p>
            </section>
        );
    }

    return (
        <section>
            <h1>All Meetups</h1>
            <MeetupList meetups={loadedMeetups} />
        </section>
    );
}

export default AllMeetupsPage;
