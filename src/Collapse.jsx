import React, { Component } from 'react';
import cx from 'classnames';

class Collapse extends Component {
    state = {
        collapsed: false,
    }

    render() {
        const { title, children, } = this.props;
        const { collapsed } = this.state;

        return (
            <section className={cx('collapse', { 'collapsed': collapsed })}>
                <header onClick={() => this.setState({ collapsed: !collapsed })}>
                    <i className={cx('fa fa-fw', {
                        'fa-caret-down': !collapsed,
                        'fa-caret-up': collapsed,
                    })} />
                    <h2>{title}</h2>
                </header>
                <hr />
                <div className="collapse-body">
                    {children}
                </div>
            </section>
        );
    }
}

export default Collapse;
