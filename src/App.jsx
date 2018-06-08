import React, { Component } from 'react';
import Panel from './Panel';
import Collapse from './Collapse';
import Tabs from './Tabs';
import Hierarchy from './Hierarchy';

class App extends Component {
    render() {
        return (
            <div className="container">
                <Panel dir="left">
                    <Collapse title="Hierarchy">
                        <Hierarchy />
                    </Collapse>
                    <Collapse title="Transform">
                        <Tabs tabs={[ 'Position', 'Rotation', 'Scale' ]}>
                            <form className="form">
                                <label>
                                    Position X
                                    <input type="number" min="-15" max="15" defaultValue="0" />
                                </label>
                                <label>
                                    Position Y
                                    <input type="number" min="-15" max="15" defaultValue="0" />
                                </label>
                                <label>
                                    Position Z
                                    <input type="number" min="-15" max="15" defaultValue="0" />
                                </label>
                            </form>
                            <form className="form">
                                <label>
                                    Rotation X
                                    <input type="number" min="-15" max="15" defaultValue="0" />
                                </label>
                                <label>
                                    Rotation Y
                                    <input type="number" min="-15" max="15" defaultValue="0" />
                                </label>
                                <label>
                                    Rotation Z
                                    <input type="number" min="-15" max="15" defaultValue="0" />
                                </label>
                            </form>
                            <form className="form">
                                <label>
                                    Scale X
                                    <input type="number" min="-15" max="15" defaultValue="0" />
                                </label>
                                <label>
                                    Scale Y
                                    <input type="number" min="-15" max="15" defaultValue="0" />
                                </label>
                                <label>
                                    Scale Z
                                    <input type="number" min="-15" max="15" defaultValue="0" />
                                </label>
                            </form>
                        </Tabs>
                    </Collapse>
                </Panel>
                <div className="content">

                </div>
                <Panel dir="right" />
            </div>
        );
    }
}

export default App;
