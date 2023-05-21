const BASE_URL = " https://v1.baseball.api-sports.io/";
const COUNTRIES_URL = "https://v1.baseball.api-sports.io/countries";
const LEAGUES_URL = "https://v1.baseball.api-sports.io/leagues";
const SEASONS_URL = "https://v1.baseball.api-sports.io/seasons";
const TEAMS_URL = "https://v1.baseball.api-sports.io/teams";

export const fetchFootballAPI = async (key: string) => {
    const response = await fetch(BASE_URL, {
        method: "GET",
        headers: {
            "x-rapidapi-key": key,
        },
    });
    const data = await response.json();

    return data;
};

export const getCountriesFootballAPI = async (key: string) => {
    const response = await fetch(COUNTRIES_URL, {
        method: "GET",
        headers: {
            "x-rapidapi-key": key,
            "x-rapidapi-host": "v1.baseball.api-sports.io",
        },
    });
    const data = await response.json();

    return data;
}

export const getLeaguesFootballAPI = async (key: string, countryName: string) => {
    const response = await fetch(`${LEAGUES_URL}?country=${countryName}`, {
        method: "GET",
        headers: {
            "x-rapidapi-key": key,
            "x-rapidapi-host": "v1.baseball.api-sports.io",
        },
    });
    const data = await response.json();

    return data;
}

export const getSeasonsFootballAPI = async (key: string) => {
    const response = await fetch(SEASONS_URL, {
        method: "GET",
        headers: {
            "x-rapidapi-key": key,
            "x-rapidapi-host": "v1.baseball.api-sports.io",
        },
    });
    const data = await response.json();

    return data;
}

export const getTeamsFootballAPI = async(key: string, league: string) => {
    const response = await fetch(`${TEAMS_URL}?league=${league}`, {
        method: "GET",
        headers: {
            "x-rapidapi-key": key,
            "x-rapidapi-host": "v1.baseball.api-sports.io",
        },
    });
    const data = await response.json();

    return data;
}