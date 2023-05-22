import { useEffect, useState } from "react";
import { getPlayersFootballAPI } from "../../api/fetchPlayers";

interface Player {
    player: {
        id: number;
        name: string;
        age: number;
        nationality: string;
    };
}

function TeamCard() {
    const [players, setPlayers] = useState([]);
    const api_key = localStorage.getItem("api_key");
    const team = localStorage.getItem("team");
    const season = localStorage.getItem("season");

    const getPlayers = async () => {
        if (!api_key) throw new Error("API Key not found");

        if (team && season) {
            try {
                const playersResponse = await getPlayersFootballAPI(
                    api_key,
                    team,
                    season,
                );
                setPlayers(
                    playersResponse.response.map(({ player }: Player) => {
                        return {
                            id: player.id,
                            name: player.name,
                            age: player.age,
                            nationality: player.nationality,
                        };
                    }),
                );
            } catch (error) {
                throw error;
            }
        }
    };

    // useEffect(() => {
    //     getPlayers();
    // }, [team]);

    return (
        <>
            {team && (
                <>
                    <h1>Team Card</h1>
                    <ul>
                        {players.map(({ id, name, age, nationality }) => (
                            <li key={id}>
                                <p>{name}</p>
                                <p>{age}</p>
                                <p>{nationality}</p>
                            </li>
                        ))}
                    </ul>
                </>
            )}
        </>
    );
}

export default TeamCard;
