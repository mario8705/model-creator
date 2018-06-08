import React, { Component } from 'react';
import Panel from './Panel';
import Collapse from './Collapse';

class Tabs extends Component {
    render() {
        const tabs = ['Position', 'Rotation', 'Scale'];

        return (
            <ul className="tabs">
                {
                    tabs.map((tab, i) => (
                        <li key={i}>
                            {tab}
                        </li>
                    ))
                }
            </ul>
        );
    }
}

class Tab extends Component {
    render() {
        return '';
    }
}

class App extends Component {
    render() {
        return (
            <div className="container">
                <Panel dir="left">
                    <Collapse title="Hierarchy">
                        <ul className="hierarchy">
                            {
                                (Array(30)).fill('').map((_, n) => (
                                    <li>
                                        Cube #{n + 1}
                                        <ul className="hierarchy-controls">
                                            <li className="fa fa-eye" />
                                            <li className="fa fa-cube" />
                                        </ul>
                                    </li>
                                ))
                            }
                        </ul>
                    </Collapse>
                    <Collapse title="Transform">
                        
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
