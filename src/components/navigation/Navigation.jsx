import propTypes from 'prop-types'

function Navigation(props) {
    const handleScroll = (sectionId) => {
        document.getElementById(sectionId).scrollIntoView({
            behavior: 'smooth'
        });
    };

    return (
        <nav className="sidebar">
            <ul>
                {props.sections.map((section) => (
                    <li key={section.id} onClick={() => handleScroll(section.name)}>
                        <a href={"#" + section.name} data-title={section.title}>
                            <img src={"src/assets/" + section.name +".svg"} alt={section.title}/>
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

Navigation.propTypes = {
    sections: propTypes.array
}
export {Navigation}