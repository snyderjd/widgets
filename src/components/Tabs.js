import React from 'react'
import { Component } from 'react'
import TabHeaders from './TabHeaders';
import './Tabs.css';

class Tabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 0
        }

        this.selectTab = this.selectTab.bind(this);
    }

    selectTab(idx) {
        this.setState({ selectedTab: idx })
    }

    render() {
        const currentTab = this.props.tabs[this.state.selectedTab];

        return (
            <div className="tabs-component">
                <h1>Tabs</h1>
                <div className="tabs">
                    <TabHeaders
                        selectedTab={this.state.selectedTab}
                        onTabChosen={this.selectTab}
                        tabs={this.props.tabs} 
                    />
                </div>
                <div className="tab-content">
                    <article>
                        {currentTab.content}
                    </article>
                </div>
            </div>
        )
    }
}

export default Tabs;
