import propTypes from "prop-types";

function Links(props) {
    const { links } = props;

    return (
        <div id="link">
            <h1>Links</h1>
            <ul>
                {Object.entries(links).map(([key, value], id) => (
                    <li key={id}>
                        <a href={value} target="_blank" rel="noopener noreferrer">
                            {key.charAt(0).toUpperCase() + key.slice(1)}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

Links.propTypes = {
    links: propTypes.shape({
        linkedin: propTypes.string,
        github: propTypes.string
    }).isRequired
};

export {Links};