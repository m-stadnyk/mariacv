import propTypes from "prop-types";

function Summary(props) {
    const summary = props.summary;

    return (
        <div id="sum">
            <h1>Summary</h1>
            <p>{summary}</p>
        </div>
    );
}

Summary.propTypes = {
    summary: propTypes.string.isRequired
};

export {Summary};