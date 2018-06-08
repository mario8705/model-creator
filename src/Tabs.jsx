import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class Tabs extends Component {
    static propTypes = {
        tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
    }

    state = {
        activeTab: 0,
    }

    render() {
        const { activeTab, } = this.state;
        const { tabs, children, } = this.props;

        return (
            <div className="tabs">
                <ul>
                    {
                        tabs.map((tab, i) => (
                            <li
                                key={i}
                                className={cx({ 'active': (i === activeTab) })}
                                onClick={() => this.setState({ activeTab: i })}>

                                {tab}
                            </li>
                        ))
                    }
                </ul>
                <div className="tabs-content">
                    {
                        React.Children.map(children, (element, tabIndex) =>
                            activeTab === tabIndex ? element : null)
                    }
                </div>
            </div>
        );
    }
}

export default Tabs;
