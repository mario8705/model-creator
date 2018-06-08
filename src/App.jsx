import React, { Component } from 'react';
import cx from 'classnames';

class Panel extends Component {
    state = {
        collapsed: false,
        hidden: false,
    }

    handleTransitionEnd = () => {
        this.setState(({ collapsed }) => ({
            hidden: collapsed
        }));
    }

    componentDidMount() {
        if (this.pullRef) {
            this.pullRef.addEventListener('transitionend', this.handleTransitionEnd);
        }
    }

    componentWillUnmount() {
        if (this.pullRef) {
            this.pullRef.removeEventListener('transitionend', this.handleTransitionEnd);
        }
    }
    
    render() {
        const { className } = this.props;
        const { collapsed } = this.state;

        return (
            <div className={cx(className, 'panel', { 'collapsed': collapsed })}>
                <div
                    ref={pullRef => this.pullRef = pullRef}
                    className="panel-pull"
                    onClick={() => this.setState(({ collapsed }) => ({ collapsed: !collapsed }))}>
                    <i className={cx('fa', {
                        'fa-plus': collapsed,
                        'fa-minus': !collapsed,
                    })} />
                </div>
                <div className={cx('panel-body', { 'hidden': this.state.hidden })}>

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
                <div className="content">

                </div>
                <Panel className="panel-right" />
            </div>
        );
    }
}

export default App;
