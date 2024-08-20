import propTypes from 'prop-types';

function Content(props) {
    const sections = props.sections

    return (
        <>
            <div className={"content"}>
                {sections.map((section) => (
                    <div className="section" key={section.id}> {section.content}</div>
                ))}
            </div>
        </>
    )
}

Content.propTypes = {
    sections: propTypes.array
}
export {Content}