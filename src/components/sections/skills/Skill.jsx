import styles from "./Skill.module.css"
import propTypes from "prop-types";

function Skill (props) {
    return(
        <div className={styles.skill}>
            {props.name}
        </div>
    )
}

Skill.propTypes = {
    name: propTypes.string
}

export default Skill