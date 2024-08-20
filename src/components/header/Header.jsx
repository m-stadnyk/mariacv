import PropTypes from "prop-types";
import styles from "./Header.module.css"

function Header(props) {
    const headerProps = {
        name: props.talent.firstName + " " + props.talent.lastName,
        role: props.talent.roles[0],
        address: props.talent.address.city + ", " + props.talent.address.province,
        phone: props.talent.phone,
        email: props.talent.email
    }
    return (
        <header className={styles.top}>
            <h1>{headerProps.name}</h1>
            <h2>{headerProps.role}</h2>
            <p>{headerProps.address} | <a href={"tel:" + headerProps.phone}>{headerProps.phone}</a> | <a href={"mailto:"+headerProps.email}>{headerProps.email}</a></p>
        </header>
    )
}

Header.propTypes = {
    talent: PropTypes.object
}

export {Header}