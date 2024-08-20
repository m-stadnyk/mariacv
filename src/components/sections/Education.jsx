import propTypes from "prop-types";
import LocationDuration from "./locationDuration/LocationDuration.jsx";

function prepareEducation(educationInfo) {
    return educationInfo.sort((a, b) => b.term.start.year - a.term.start.year);
}

function Education(props) {
    const educationData = prepareEducation(props.educationInfo)

    return (
        <div id="edu">
            <h1>Education</h1>
            {educationData.map((education, id) => {
                return <div key={id}>
                    <h2>{education.degree} in {education.fieldOfStudy}</h2>
                    <p>{education.institutionName}</p>
                    <LocationDuration address={education.address} term={education.term}/>
                </div>;
            })}
        </div>
    )
}

Education.propTypes = {
    educationInfo: propTypes.arrayOf(
        propTypes.shape({
            degree: propTypes.string.isRequired,
            fieldOfStudy: propTypes.string.isRequired,
            institutionName: propTypes.string.isRequired,
            address: propTypes.shape({
                city: propTypes.string.isRequired,
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
            }).isRequired
        })
    ).isRequired
}


export {Education}