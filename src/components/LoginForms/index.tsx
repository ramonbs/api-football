import { fetchFootballAPI } from "../../api/fetchFootballAPI";
import style from "./loginForms.module.scss";
import { FormEvent } from "react";

function LoginForms() {
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const input = form.elements.namedItem("api_key") as HTMLInputElement;
        const { message } = await fetchFootballAPI(input.value);
        if (message) {
            alert(message);
            return;
        }
        localStorage.setItem("api_key", input.value);
        window.location.href = "/home";
    };

    return (
        <form
            className={style.login_form}
            onSubmit={handleSubmit}>
            <label
                htmlFor="api_key"
                className={style.login_label}>
                    Insira sua key: 
                <input
                    name="api_key"
                    type="text"
                    placeholder="API Key"
                />
            </label>
            <button
                type="submit"
                className={style.login_button}>
                Login
            </button>
        </form>
    );
}

export default LoginForms;
