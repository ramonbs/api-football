const BASE_URL = " https://v1.basketball.api-sports.io/";
const COUNTRIES_URL = "https://v1.basketball.api-sports.io/countries";
const LEAGUES_URL = "https://v1.basketball.api-sports.io/leagues";
const SEASONS_URL = "https://v1.basketball.api-sports.io/seasons";

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
            "x-rapidapi-host": "v3.football.api-sports.io",
        },
    });
    const data = await response.json();

    return data;
}

export const getLeaguesFootballAPI = async (key: string, countryName: string) => {
    const response = await fetch(SEASONS_URL, {
        method: "GET",
        headers: {
            "x-rapidapi-key": key,
            "x-rapidapi-host": "v3.football.api-sports.io",
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
            "x-rapidapi-host": "v3.football.api-sports.io",
        },
    });
    const data = await response.json();

    return data;
}