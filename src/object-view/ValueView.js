//View for single key-value pair

import React from 'react';
import PropTypes from 'prop-types';
import CollectionView from './CollectionView';
import DefaultValueRenderer from './DefaultValueRenderer';

const ValueView = (props) => {
    //check if props is single value or collection
    const isCollection = typeof props.value === 'object';

    let onEvt; //custom event handler that propagates path
    if (props.onEvt) onEvt = (evt, ...args) => {
        if (!evt.path) evt.path = [];//default path
        if (!Array.isArray(evt.path)) evt.path = [evt.path];//convert path to array if not already one
        evt.path = [props.name].concat(evt.path);//add current key to path
        props.onEvt(evt, ...args);//propagate event
    };

    // content that is only shown when expanded
    let expandContent = props.expanded && isCollection &&
        <CollectionView
            collection={props.value}
            onEvt={onEvt}
            expanded={props.expanded}
            childRenderer={props.customRenderer}
        />;

    const CustomRenderer = props.customRenderer;

    return <div>
        <CustomRenderer {...props} onEvt={onEvt} isCollection={isCollection}>
            {expandContent}
        </CustomRenderer>
    </div>;
};

ValueView.defaultProps = {
    customRenderer: DefaultValueRenderer,
};

ValueView.propTypes = {
    customRenderer: PropTypes.func,
    name: PropTypes.string,
    value: PropTypes.any,
    onEvt: PropTypes.func,
    expanded: PropTypes.object,
};

export default ValueView;