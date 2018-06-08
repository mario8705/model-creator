import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

class Panel extends Component {
    static propTypes = {
        dir: PropTypes.oneOf([ 'left', 'right' ]).isRequired,
        collapse: PropTypes.bool,
    }

    static defaultProps = {
        collapse: true,
    }

    state = {
        collapsed: false,
        hidden: false,
    }

    handleTransitionEnd = () => {
        this.setState(({ collapsed }) => ({
            hidden: collapsed
        }));
    }

    handlePullClick() {
        this.setState(({ collapsed }) => {
            if (!collapsed) {
                return {
                    collapsed: true,
                    hidden: false,
                };
            } else {
                return {
                    collapsed: false,
                };
            }
        });
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
        const { dir, collapse, className, children, ...props } = this.props;
        const { collapsed } = this.state;

        const isCollapsed = collapse && collapsed;

        return (
            <div
                className={cx(className, 'panel', `panel-${dir}`, { 'collapsed': isCollapsed })}
                {...props}>
                <div
                    ref={pullRef => this.pullRef = pullRef}
                    className="panel-pull"
                    onClick={() => this.handlePullClick()}>
                    <i className={cx('fa', {
                        'fa-plus': collapsed,
                        'fa-minus': !collapsed,
                    })} />
                </div>
                <div className={cx('panel-body vspacer', { 'hidden': this.state.hidden })}>
                    {children}
                </div>
            </div>
        );
    }
}
export default Panel;
