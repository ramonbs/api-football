const SEASONS_URL = "https://v3.football.api-sports.io/seasons";

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