import { useEffect, useState } from 'react'
import { getPlayersFootballAPI } from '../../api/fetchPlayers';

interface Props {
    league_id: string;
    season: string;
}

function TeamCard(props: Props) {
    const { league_id, season } = props;
    const [players, setPlayers] = useState([]);
    const api_key = localStorage.getItem("api_key");

    const getPlayers = async () => {
        if (!api_key) throw new Error("API Key not found");

        if (league_id) {
            try {
                const playersResponse = await getPlayersFootballAPI(
                    api_key,
                    league_id,
                    season,
                );
                setPlayers(
                    playersResponse.response.map((player: Player) => {
                        return {
                            id: player.player.id,
                            name: player.player.name,
                            age: player.player.age,

                        };
                    }),
                );
            } catch (error) {
                throw error;
            }
        }
    };

    useEffect(() => {
        getPlayers();
    }, [league_id, season]);



  return (
    <div>
      
    </div>
  )
}

export default TeamCard;
