import React, { Component } from 'react';
import cx from 'classnames';

class Panel extends Component {
    state = {
        collapsed: false,
    }
    
    render() {
        const { className } = this.props;
        const { collapsed } = this.state;

        return (
            <div className={cx(className, 'panel', { 'collapsed': collapsed })}>
                <div className="panel-pull" onClick={() => this.setState(({ collapsed }) => ({ collapsed: !collapsed }))}>
                    <i className={cx('fa', {
                        'fa-plus': collapsed,
                        'fa-minus': !collapsed,
                    })} />
                </div>
            </div>
        );
    }
}

class App extends Component {
    render() {
        return (
            <div className="container">
                <Panel className="panel-left" />
                <Panel className="panel-right" />
            </div>
        );
    }
}

export default App;
