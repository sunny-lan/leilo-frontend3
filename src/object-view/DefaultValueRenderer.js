import React from 'react';
import PropTypes from 'prop-types';
import {CHANGE_EXPANSION} from "./Events";

const DefaultValueRenderer = (props) => {
    const name = props.name,
        value = !props.isCollection &&  props.value;

    return <div>

        {props.isCollection && //if this has children, then show expander
        <span onClick={
            () => props.onEvt({name: CHANGE_EXPANSION}, !props.expanded)
        }>
            {props.expanded ? "▼" : "▶"}
        </span>}

        {name && <b>{name}</b>}{name && value && ":"}{!props.isCollection && JSON.stringify(value)}

        {props.children &&
        <div style={{paddingLeft: 10}}>
            {props.children}
        </div>}
    </div>
};

DefaultValueRenderer.propTypes = {
    name: PropTypes.string,
    value: PropTypes.any,
    onEvt: PropTypes.func,
    isCollection: PropTypes.bool,
};

export default DefaultValueRenderer;