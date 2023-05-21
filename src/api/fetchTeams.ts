const TEAMS_URL = "https://v3.football.api-sports.io/teams";

export const getTeamsFootballAPI = async(key: string, league: string, season: string) => {
    const response = await fetch(`${TEAMS_URL}?league=${league}&season=${season}`, {
        method: "GET",
        headers: {
            "x-rapidapi-key": key,
            "x-rapidapi-host": "v3.football.api-sports.io",
        },
    });
    const data = await response.json();

    return data;
}