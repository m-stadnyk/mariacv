import propTypes from "prop-types";
import styles from "./LocationDuration.module.css"

function LocationDuration (props){
    let location = (props.address.city || props.address.province) + ", " + props.address.country;
    let duration = `${props.term.start.month} ${props.term.start.year} - ${props.term.end ? 
        (props.term.end.month + " " + props.term.end.year) : 
        'current'}`;
    return (
        <div className={styles.locdur}>
            <div>{location}</div>
            <div>{duration}</div>
        </div>
    )
}

LocationDuration.propTypes = {
    address: propTypes.object,
    term: propTypes.object
}

export default LocationDuration