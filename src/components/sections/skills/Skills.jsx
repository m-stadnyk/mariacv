import Skill from "./Skill.jsx";
import propTypes from "prop-types";

//this list should match the enum in the json schema Talent.properties.skills.items.properties.tag.enum
const skillTagsPriority = [
    "core competencies",
    "programming",
    "frameworks",
    "database",
    "cloud",
    "tools"
]

function groupByTag(skills) {
    return skills.reduce((acc, skill) => {
        const {tag} = skill;
        if (!acc[tag]) {
            acc[tag] = [];
        }
        acc[tag].push(skill);
        return acc;
    }, {});
}

function sortAndFormat(groupedSkills, mapper = skill => skill.name) {
    const sortedGroupedSkills = []
    skillTagsPriority.forEach((tag, priority) => {
        sortedGroupedSkills[priority] = {
            tag: tag,
            skills: groupedSkills[tag]
                .sort((a, b) => b.proficiency - a.proficiency) //DESC 5-0
                .map(mapper)
        }
    }, {});
    return sortedGroupedSkills;
}

function prepareSkillProps(skills) {
    return sortAndFormat(groupByTag(skills));
}


function Skills(props) {
    const skillProps = prepareSkillProps(props.skills)
    return (
        <div id="skill">
            <h1>Skills</h1>
            {skillProps.map((skillGroup, id) => (
                <div key={id}>
                    <h2>{skillGroup.tag}</h2>
                    {
                        skillGroup.skills.map((skill, id) => (
                            <Skill key={id} name={skill}></Skill>
                        ))
                    }
                </div>
            ))}
        </div>
    )
}

Skills.propTypes = {
    skills: propTypes.array
}

export {Skills}