const BASE_URL = "https://v3.football.api-sports.io/";

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
