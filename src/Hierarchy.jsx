import React, { Component } from 'react';
import cx from 'classnames';

class Hierarchy extends Component {
    state = {
        selectedIndex: null,
    }

    handleClick(id) {
        const { selectedIndex, } = this.state;
        let newIndex;

        if (id === selectedIndex) {
            newIndex = null;
        } else {
            newIndex = id;
        }

        this.setState({
            selectedIndex: newIndex,
        });
    }

    render() {
        const { selectedIndex, } = this.state;

        const objects = [
            { id: 1, name: 'Cube 1' },
            { id: 2, name: 'Cube 2' },
            { id: 3, name: 'Cube 3' },
            { id: 4, name: 'Cube 4' },
        ]

        return (
            <ul className="hierarchy">
                {
                    objects.map(({ id, name }) => (
                        <li
                            key={id}
                            className={cx({ 'active': id === selectedIndex })}
                            onClick={() => this.handleClick(id)}>

                            {name}

                            <ul className="hierarchy-controls">
                                <li className="fa fa-eye" />
                                <li className="fa fa-cube" />
                            </ul>
                        </li>
                    ))
                }
            </ul>
        );
    }
}

export default Hierarchy;
