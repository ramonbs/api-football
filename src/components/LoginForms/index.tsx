import style from './loginForms.module.scss';

function LoginForms() {
    return (
        <form className={ style.login_form }>
            <label htmlFor="api_key" className={ style.login_label}>
                API Key
                <input
                    name="api_key"
                    type="text"
                    placeholder="API Key"
                />
            </label>
        </form>
    );
}

export default LoginForms;
