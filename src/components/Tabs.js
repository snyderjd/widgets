import React from 'react'
import { Component } from 'react'
import TabHeaders from './TabHeaders';
import Widgets from './Widgets';

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
            <div className="tabs">
                <h1>Tabs</h1>
                <div className="tabs-list">
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

// export default class Tabs extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         selectedPane: 0
//       };
//       this.selectTab = this.selectTab.bind(this);
//     }
  
//     selectTab(num) {
//       this.setState({selectedPane: num});
//     }
  
//     render() {
//       const pane = this.props.panes[this.state.selectedPane];
  
//       return (
//         <div>
//           <h1>Tabs</h1>
//           <div className='tabs'>
//             <Headers
//               selectedPane={this.state.selectedPane}
//               onTabChosen={this.selectTab}
//               panes={this.props.panes}>
//             </Headers>
//             <div className='tab-content'>
//               <article>
//                 {pane.content}
//               </article>
//             </div>
//           </div>
//         </div>
//       );
//     }
//   }