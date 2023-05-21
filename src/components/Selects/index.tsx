import React, { ChangeEvent, useEffect, useState } from "react";
import {
    getCountriesFootballAPI,
    getLeaguesFootballAPI,
    getSeasonsFootballAPI,
} from "../../api/fetchFootballAPI";

function Selects() {
    const api_key = localStorage.getItem("api_key");
    const [country_id, setCountry_id] = useState<string>('Australia');
    const [league_id, setLeague_id] = useState<string>('A-League');
    const [seasons, setSeasons] = useState<string[]>([]);
    const [countries, setCountries] = useState<string[]>([]);
    const [leagues, setLeagues] = useState<string[]>([]);

    const getAllInfo = async () => {
        if (!api_key) throw new Error("API Key not found");
        if (!country_id) throw new Error("Country ID not found");

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

    const getSeasons = async () => {
        if (!api_key) throw new Error("API Key not found");
        try {
            const leaguesResponse = await getLeaguesFootballAPI(api_key, country_id);
            setLeagues(leaguesResponse.response.map((league: { name: string }) => league.name));
        } catch (error) {
            throw error;
        }
    };

    useEffect(() => {
        getSeasons();
    }, [country_id]);

    const handleCountryChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        setCountry_id(value);
    };

    const handleLeagueChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const { value } = e.target;
        setLeague_id(value);
    };

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

            <label htmlFor="leagues">
                Selecione uma liga:
                <select
                    name="leagues"
                    id="leagues"
                    onChange={(e) => handleLeagueChange(e)}>
                    {leagues.map((league: string) => (
                        <option
                            key={league}
                            value={league}>
                            {league}
                        </option>
                    ))}
                </select>
            </label>

            <label htmlFor="seasons">
                Selecione uma temporada:
                <select
                    name="seasons"
                    id="seasons">
                    {seasons.map((season: string, index: number) => (
                        <option
                            key={index}
                            value={season}>
                            {season}
                        </option>
                    ))}
                </select>
            </label>
        </>
    );
}

export default Selects;
