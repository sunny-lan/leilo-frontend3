// View for arrays and dictionaries

import React from 'react';
import PropTypes from 'prop-types';
import ValueView from './ValueView';

const CollectionView = (props) => {
    if (!props.expanded) return;

    const collection = props.collection;
    let children;
    if (Array.isArray(collection))
        children = collection.map((child, idx) => <ValueView key={idx} value={child}/>);
    else
        children = Object.keys(collection).map(childKey => <ValueView
            key={childKey}
            name={childKey}
            value={collection[childKey]}
            onEvt={props.onEvt}
            expanded={props.expanded[childKey]}
            renderHeader={props.childRenderer}
        />);

    return <div>
        {children}
    </div>;
};

CollectionView.propTypes = {
    collection: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array,
    ]).isRequired,
    onEvt: PropTypes.func,
    expanded: PropTypes.object.isRequired,
    childRenderer: PropTypes.func,
};

export default CollectionView;