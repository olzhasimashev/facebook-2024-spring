import Copyright from "./Copyright"
import InnerFooter from "./InnerFooter"
import Languages from "./Laguages"

const Footer = () => {
    return (
        <div className="footer">
            <Languages />
            <div className="content-curve"/>
            <InnerFooter />
            <Copyright />
        </div>
    )
}

export default Footer