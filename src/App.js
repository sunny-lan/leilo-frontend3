import React, {Component} from 'react';
import CollectionView from './object-view/CollectionView';
import {CHANGE_EXPANSION} from "./object-view/Events";
import immutable from 'object-path-immutable';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: {}
        }
    }

    render() {
        return <div>
            <CollectionView
                collection={{
                    a: "a",
                    b: {
                        c: [1, 3, '3'],
                        d: 'e'
                    }
                }}
                onEvt={(evt, payload) => {
                    if (evt.name === CHANGE_EXPANSION) {
                        this.setState({
                            expanded: immutable.set(this.state.expanded, evt.path, payload ? {} : undefined),
                        });
                    }
                }}
                expanded={this.state.expanded}
            />
        </div>
    }
}

export default App;
