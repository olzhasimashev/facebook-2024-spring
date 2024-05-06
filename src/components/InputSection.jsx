import ButtonLogin from "./ButtonLogin";
import ButtonRegister from "./ButtonRegister";
import ForgotPassword from "./ForgotPassword";
import LoginInput from "./LoginInput";
import PasswordInput from "./PasswordInput";

const InputSection = () => {
    return (
        <div className="input-section">
            <form className="form">
                <div>
                    <LoginInput />
                    <PasswordInput />
                </div>
                <div className="bottom-input-section">
                    <ButtonLogin />
                </div>
                <div className="forgot-password-section">
                    <ForgotPassword />
                </div>
                <div className="divider" />
                <div className="bottom-input-section">
                    <ButtonRegister />
                </div>
            </form>
        </div>
    );
}

export default InputSection;