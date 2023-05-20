import style from "./loginForms.module.scss";
import { useState, FormEvent } from "react";

function LoginForms() {
    const [apiKey, setApiKey] = useState("");

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const input = form.elements.namedItem("api_key") as HTMLInputElement;
        setApiKey(input.value);
        console.log(input.value);
        
    };

    return (
        <form className={style.login_form} onSubmit={handleSubmit}>
            <label htmlFor="api_key" className={style.login_label}>
                API Key
                <input
                    name="api_key"
                    type="text"
                    placeholder="API Key"
                />
            </label>
            <button type="submit" className={style.login_button}>
                Entrar
            </button>
        </form>
    );
}

export default LoginForms;
