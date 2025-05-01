import React, { useEffect, useState } from "react";
import axios from "axios";

import React, { useEffect, useState } from "react";
import axios from "axios";
import './Tournaments.css';

const Tournaments = () => {
    const [tournaments, setTournaments] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchTournaments = async () => {
        try {
            const response = await axios.get("https://api.pandascore.co/tournaments", {
                headers: {
                    Authorization: `Bearer ${process.env.REACT_APP_PANDASCORE_API_KEY}`,
                },
                params: {
                    per_page: 5,
                    sort: "begin_at",
                },
            });
            setTournaments(response.data);
        } catch (error) {
            console.error("Error fetching tournaments:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTournaments();
    }, []);

    return (
        <div className="tournaments-container">
            <h2 className="tournaments-title">Upcoming Tournaments</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ul className="tournaments-list">
                    {tournaments.map((tournament) => (
                        <li key={tournament.id} className="tournaments-list-item">
                            <h3 className="tournament-name">{tournament.name}</h3>
                            <p>Game: {tournament.videogame.name}</p>
                            <p>Status: {tournament.status}</p>
                            <p>Start: {new Date(tournament.begin_at).toLocaleDateString()}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Tournaments;
