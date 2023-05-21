import { ChangeEvent, useEffect, useState } from "react";
import {
    getCountriesFootballAPI,
    getLeaguesFootballAPI,
    getSeasonsFootballAPI,
    getTeamsFootballAPI,
} from "../../api/fetchFootballAPI";

interface League {
    id: number;
    name: string;
}

function Selects() {
    const api_key = localStorage.getItem("api_key");
    const [country_id, setCountry_id] = useState<string>("");
    const [league_id, setLeague_id] = useState<string>("");
    const [season_id, setSeason_id] = useState<string>("");
    const [seasons, setSeasons] = useState<string[]>([]);
    const [countries, setCountries] = useState<string[]>([]);
    const [leagues, setLeagues] = useState<[]>([]);
    const [teams, setTeams] = useState<string[]>([]);

    const getAllInfo = async () => {
        if (!api_key) throw new Error("API Key not found");

        try {
            Promise.all([
                getSeasonsFootballAPI(api_key),
                getCountriesFootballAPI(api_key),
            ]).then((responses) => {
                const [seasons, countries] = responses;
                setSeasons(seasons.response);
                setCountries(
                    countries.response.map(
                        (country: { name: string }) => country.name,
                    ),
                );
            });
        } catch (error) {
            throw error;
        }
    };

    useEffect(() => {
        getAllInfo();
    }, []);

    const getLeagues = async () => {
        if (!api_key) throw new Error("API Key not found");
        try {
            const leaguesResponse = await getLeaguesFootballAPI(
                api_key,
                country_id,
            );
            setLeagues(
                leaguesResponse.response.map((league: League) => {
                    return {
                        id: league.id,
                        name: league.name,
                    };
                }),
            );
        } catch (error) {
            throw error;
        }
    };

    const getTeams = async () => {
        if (!api_key) throw new Error("API Key not found");

        if (league_id) {
            try {
                const teamsResponse = await getTeamsFootballAPI(
                    api_key,
                    league_id,
                    season_id,
                );
                setTeams(
                    teamsResponse.response.map(
                        (team: { name: string }) => team.name,
                    ),
                );
                console.log(teamsResponse.response);
            } catch (error) {
                throw error;
            }
        }
    };

    const handleCountryChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        setCountry_id(value);
    };

    const handleLeagueChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        console.log(value);
        setLeague_id(value);
    };

    const handleSeasonChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        setSeason_id(value);
    };

    useEffect(() => {
        getLeagues();
    }, [country_id]);

    useEffect(() => {
        getTeams();
    }, [league_id]);

    return (
        <>
            <label htmlFor="countries">
                Selecione um país:
                <select
                    name="countries"
                    id="countries"
                    onChange={(e) => handleCountryChange(e)}>
                    {countries.map((country: string) => (
                        <option
                            key={country}
                            value={country}>
                            {country}
                        </option>
                    ))}
                </select>
            </label>

            <label htmlFor="seasons">
                Selecione uma temporada:
                <select
                    name="seasons"
                    id="seasons"
                    onChange={(e) => handleSeasonChange(e)}
                >
                    {seasons.map((season: string, index: number) => (
                        <option
                            key={index}
                            value={season}>
                            {season}
                        </option>
                    ))}
                </select>
            </label>

            {leagues.length > 0 ? (
                <label htmlFor="leagues">
                    Selecione uma liga:
                    <select
                        name="leagues"
                        id="leagues"
                        onChange={(e) => handleLeagueChange(e)}>
                        {leagues.map(({ id, name }) => (
                            <option
                                key={id}
                                value={id}>
                                {name}
                            </option>
                        ))}
                    </select>
                </label>
            ) : (
                <p>Selecione um país para ver as ligas</p>
            )}

            {teams.length > 0 ? (
                <label htmlFor="teams">
                    Selecione um time:
                    <select
                        name="teams"
                        id="teams">
                        {teams.map((team: string, index: number) => (
                            <option
                                key={index}
                                value={team}>
                                {team}
                            </option>
                        ))}
                    </select>
                </label>
            ) : (
                <p>Selecione uma liga para ver os times</p>
            )}
        </>
    );
}

export default Selects;
