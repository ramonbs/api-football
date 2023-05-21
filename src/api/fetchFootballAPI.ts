const BASE_URL = "https://v3.football.api-sports.io/";
const COUNTRIES_URL = "https://v3.football.api-sports.io/countries";

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
