import React from 'react';
import { Component } from 'react';
import './Tabs.css';

class TabHeaders extends Component {
    render() {
        const selected = this.props.selectedTab;
        const headers = this.props.tabs.map((tab, idx) => {
            const title = tab.title;
            const active = idx === selected ? 'active' : '';

            return (
                <li
                    key={idx}
                    className={active}
                    onClick={() => this.props.onTabChosen(idx)}
                >
                    {title}{' '}
                </li>
            );
        });
        return (
            <ul className="tab-header">
                {headers}
            </ul>
        )

    }
}

export default TabHeaders;
