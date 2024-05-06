import add from '../assets/add.png';

const Languages = () => {
    return (
        <ul className="languages">
            <li>
                <a className="link" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">
                    Русский
                </a>
            </li>
            <li className="single-language">
                <a className="link" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">
                    Қазақша
                </a>
            </li>
            <li className="single-language">
                <a className="link" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">
                    English (US)
                </a>
            </li>
            <li className="single-language">
                <a className="link" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">
                    Türkçe
                </a>
            </li>
            <li className="single-language">
                <a className="link" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">
                    Bahasa Indonesia
                </a>
            </li>
            <li className="single-language">
                <a className="link" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">
                    中文(简体)
                </a>
            </li>
            <li className="single-language">
                <a className="link" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">
                    Deutsch
                </a>
            </li>
            <li className="single-language">
                <a className="link" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">
                    한국어
                </a>
            </li>
            <li className="single-language">
                <a className="link" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">
                    Shqip
                </a>
            </li>
            <li className="single-language">
                <a className="link" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">
                    Español
                </a>
            </li>
            <li className="single-language">
                <a className="link" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">
                    Português (Brasil)
                </a>
            </li>
            <li className="single-language">
                <a role="button" className="language-button" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" tabindex="0">
                    <img src = {add} className='add-image' alt='add'></img>
                </a>
            </li>
        </ul>
    )
}

export default Languages