const PLAYERS_URL = "https://v3.football.api-sports.io/players";

export const getPlayersFootballAPI = async (key: string, team: string, season: string) => {
    const response = await fetch(`${PLAYERS_URL}?team=${team}&season=${season}`, {
        method: "GET",
        headers: {
            "x-rapidapi-key": key,
            "x-rapidapi-host": "v3.football.api-sports.io",
        },
    });
    const data = await response.json();

    return data;
}