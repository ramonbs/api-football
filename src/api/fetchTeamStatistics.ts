const API_URL = 'https://v3.football.api-sports.io/teams/statistics'

export const getTeamsStatisticsFootballAPI = async (key: string, teamId: string, season: string) => {
    const response = await fetch(`${API_URL}?team=${teamId}&season${season}`, {
        method: 'GET',
        headers: {
            'x-rapidapi-host': 'v3.football.api-sports.io',
            'x-rapidapi-key': key,
        },
    });

    const data = await response.json();

    return data;
}