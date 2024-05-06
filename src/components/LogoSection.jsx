import facebookLogo from '../assets/logo.svg';

const LogoSection = () => {
    return (
        <div className="logo-section">
            <img src= {facebookLogo} />
            <p>
                 Facebook помогает вам всегда оставаться на связи и общаться со своими знакомыми.
            </p>
        </div>
    );
}

export default LogoSection;