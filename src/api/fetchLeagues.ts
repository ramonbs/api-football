const LEAGUES_URL = "https://v3.football.api-sports.io/leagues";

export const getLeaguesFootballAPI = async (key: string, countryName: string) => {
    const response = await fetch(`${LEAGUES_URL}?country=${countryName}`, {
        method: "GET",
        headers: {
            "x-rapidapi-key": key,
            "x-rapidapi-host": "v3.football.api-sports.io",
        },
    });
    const data = await response.json();

    return data;
}