import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { getSeasonsFootballAPI } from "../../api/fetchSeasons";
import { getCountriesFootballAPI } from "../../api/fetchCountries";
import { getLeaguesFootballAPI } from "../../api/fetchLeagues";
import { getTeamsFootballAPI } from "../../api/fetchTeams";
import style from "./selects.module.scss";
interface League {
    league: {
        id: number;
        name: string;
    };
}

interface Team {
    team: {
        id:number;
        name: string
    }
}

function Selects() {
    const api_key = localStorage.getItem("api_key");
    const [country_id, setCountry_id] = useState<string>("");
    const [league_id, setLeague_id] = useState<string>("");
    const [season_id, setSeason_id] = useState<string>("");
    const [seasons, setSeasons] = useState<string[]>([]);
    const [countries, setCountries] = useState<string[]>([]);
    const [leagues, setLeagues] = useState<[]>([]);
    const [teams, setTeams] = useState<[]>([]);

    const getAllInfo = useCallback(async () => {
        if (!api_key) throw new Error("API Key not found");
      
        try {
          const [seasons, countries] = await Promise.all([
            getSeasonsFootballAPI(api_key),
            getCountriesFootballAPI(api_key),
          ]);
          setSeasons(seasons.response);
          setCountries(countries.response.map((country: { name: string }) => country.name));
          console.log(seasons);
          console.log(countries);
        } catch (error) {
          throw error;
        }
      }, [api_key]);
      
      useEffect(() => {
        getAllInfo();
      }, [getAllInfo]);

    const getLeagues = async () => {
        if (!api_key) throw new Error("API Key not found");
        try {
            const leaguesResponse = await getLeaguesFootballAPI(
                api_key,
                country_id,
            );
            const obj = await leaguesResponse.response.map(
                ({ league }: League) => ({
                    id: league.id,
                    name: league.name,
                }),
            );
            setLeagues(obj);
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
                        ({team}: Team) => ({
                            id: team.id,
                            name: team.name,
                        }),
                    ),
                );                
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
        localStorage.setItem("season", value);
    };

    const handleTeamChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        localStorage.setItem("team", value);
    };

    useEffect(() => {
        getLeagues();
    }, [country_id]);

    useEffect(() => {
        getTeams();
    }, [league_id]);

    return (
        <div className={ style.selects_div }>
            <label htmlFor="countries" className={style.selects_label}>
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

            <label htmlFor="seasons"
                className={style.selects_label}
            >
                Selecione uma temporada:
                <select
                    name="seasons"
                    id="seasons"
                    onChange={(e) => handleSeasonChange(e)}>
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
                <label htmlFor="leagues"
                    className={style.selects_label}
                >
                    Selecione uma liga:
                    <select
                        name="leagues"
                        id="leagues"
                        onChange={(e) => handleLeagueChange(e)}>
                        {leagues.map(({ id, name }, index: number) => (
                            <option
                                key={index}
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
                <label htmlFor="teams"
                    className={style.selects_label}
                >
                    Selecione um time:
                    <select
                        name="teams"
                        id="teams"
                        onChange={(e) => handleTeamChange(e)}>
                        {teams.map(({ id, name }, index: number) => (
                            <option
                                key={index}
                                value={id}>
                                {name}
                            </option>
                        ))}
                    </select>
                </label>
            ) : (
                <p>Selecione uma liga para ver os times</p>
            )}
        </div>
    );
}

export default Selects;
