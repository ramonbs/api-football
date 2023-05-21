import { useEffect, useState } from "react";
import { getTeamsStatisticsFootballAPI } from "../../api/fetchTeamStatistics";
import style from "./teamStatisticsCard.module.scss";

interface TeamStatistics {
    lineups: {
        formation: string;
        played: number;
    };
}

function TeamsStatisticsCard() {
    const api_key = localStorage.getItem("api_key");
    const team = localStorage.getItem("team");
    const season = localStorage.getItem("season");
    const league = localStorage.getItem("league");
    const [teamStatistics, setTeamsStatistics] = useState([]);

    const teamss = [
        {
            formation: "4-4-2",
            played: 1,
        },
        {
            formation: "4-3-3",
            played: 2,
        },
        {
            formation: "4-2-3-1",
            played: 3,
        },
    ]

    const getTeamsStatistics = async () => {
        if (!api_key) throw new Error("API Key not found");

        if (team && season && league) {
            try {
                const teamsStatisticsResponse =
                    await getTeamsStatisticsFootballAPI(api_key, team, season);
                setTeamsStatistics(
                    teamsStatisticsResponse.response.map(
                        ({ lineups }: TeamStatistics) => ({
                            formation: lineups.formation,
                            played: lineups.played,
                        }),
                    ),
                );
            } catch (error) {
                throw error;
            }
        }
    };

    useEffect(() => {
        getTeamsStatistics();
    }, [team]);

    return (
        <>
            {teamStatistics.length > 0 && (
                <div className={style.team_statistics_div}>
                    <h1>Team Statistics Card</h1>
                    <table className={style.team_statistics_table}>
                        <thead className={style.team_statistics_table_header}>
                            <tr>
                                <th>Formation</th>
                                <th>Played</th>
                            </tr>
                        </thead>
                        <tbody className={ style.team_statistics_table_row}>
                            {teamStatistics.map(({ formation, played }) => (
                                <tr key={formation}>
                                    <td>{formation}</td>
                                    <td>{played}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </>
    );
}

export default TeamsStatisticsCard;
