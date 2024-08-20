import propTypes from "prop-types";
import LocationDuration from "./locationDuration/LocationDuration.jsx";

function prepareExperience(experienceInfo) {
    return experienceInfo.sort((a, b) => {
        if (!a.term.end) return -1;
        if (!b.term.end) return 1;
        return new Date(b.term.end.year, new Date(b.term.end.month + " 1").getMonth()) - new Date(a.term.end.year, new Date(a.term.end.month + " 1").getMonth());
    });
}

function Experience(props) {
    const experienceData = prepareExperience(props.experienceInfo);

    return (
        <div id="exp">
            <h1>Experience</h1>
            {experienceData.map((experience, id) => {
                return <div key={id}>
                    <h2>{experience.role}</h2>
                    <h3>{experience.companyName} {experience.details ? `(${experience.details})` : ""}</h3>
                    <LocationDuration address={experience.address} term={experience.term}/>
                    <ul>
                        {experience.achievements.map((achievement, idx) => (
                            <li key={idx}>{achievement}</li>
                        ))}
                    </ul>
                </div>;
            })}
        </div>
    );
}

Experience.propTypes = {
    experienceInfo: propTypes.arrayOf(
        propTypes.shape({
            role: propTypes.string.isRequired,
            companyName: propTypes.string.isRequired,
            details: propTypes.string,
            address: propTypes.shape({
                city: propTypes.string,
                province: propTypes.string,
                country: propTypes.string.isRequired
            }).isRequired,
            term: propTypes.shape({
                start: propTypes.shape({
                    month: propTypes.string.isRequired,
                    year: propTypes.number.isRequired
                }).isRequired,
                end: propTypes.shape({
                    month: propTypes.string.isRequired,
                    year: propTypes.number.isRequired
                })
            }).isRequired,
            achievements: propTypes.arrayOf(propTypes.string).isRequired
        })
    ).isRequired
};

export {Experience};