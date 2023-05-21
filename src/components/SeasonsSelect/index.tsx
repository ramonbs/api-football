import { useEffect, useState } from "react";
import { getSeasonsFootballAPI } from "../../api/fetchFootballAPI";

function SeasonsSelect() {
    const api_key = localStorage.getItem("api_key");
    const [seasons, setSeasons] = useState<string[]>([]);

    const getSeasons = async () => {
        if (!api_key) throw new Error("API Key not found");

        try {
            const { response } = await getSeasonsFootballAPI(api_key);
            setSeasons(response.map((season: { year: string }) => season.year as string));

            console.log(response);
            
        } catch (error) {
            throw error;
        }
    };

    useEffect(() => {
        getSeasons();
    }, []);

    return (
        <>
            <label htmlFor="seasons">
                Selecione uma temporada:
                <select
                    name="seasons"
                    id="seasons">
                    {seasons.map((season: string) => (
                        <option
                            key={season}
                            value={season}>
                            {season}
                        </option>
                    ))}
                </select>
            </label>
        </>
    );
}

export default SeasonsSelect;
