import React from 'react';
import { Component } from 'react';
import Tabs from './Tabs';

class TabHeaders extends Component {
    render() {
        const selected = this.props.selectedTab;
        const headers = this.props.tabs
    }
}

export default TabHeaders;

// class Headers extends React.Component {
//     render() {
//       const selected = this.props.selectedPane;
//       const headers = this.props.panes.map((pane, index) => {
//         const title = pane.title;
//         const klass = index === selected ? 'active' : '';
  
//         return (
//           <li
//             key={index}
//             className={klass}
//             onClick={() => this.props.onTabChosen(index)}>
//             {title}{' '}
//           </li>
//         );
//       });
//       return (
//         <ul className='tab-header'>
//           {headers}
//         </ul>
  
//       );
//    }
//   }