import { ChangeEvent, useEffect, useState } from "react";
import { getCountriesFootballAPI } from "../../api/fetchFootballAPI";

function Countries() {
    const api_key = localStorage.getItem("api_key");
    const [countries, setCountries] = useState<string[]>([]);

    const getCountries = async () => {
        if (!api_key) throw new Error("API Key not found");

        try {
            const { response } = await getCountriesFootballAPI(api_key);
            setCountries(
                response.map((country: { name: string }) => country.name),
            );
            
        } catch (error) {
            throw error;
        }
    };

    useEffect(() => {
        getCountries();
    }, []);

    const handleChange = (e: ChangeEvent<HTMLElement>) => {
        e.preventDefault();

        const { value } = e.target as HTMLInputElement;
        localStorage.setItem("country_id", value);
    };

    return (
        <>
            <label htmlFor="countries">
                Selecione um país:
                <select
                    name="countries"
                    id="countries"
                    onChange={(e) => handleChange(e)}>
                    {countries.map((country: string) => (
                        <option
                            key={country}
                            value={country}>
                            {country}
                        </option>
                    ))}
                </select>
            </label>
        </>
    );
}

export default Countries;
