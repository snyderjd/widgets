import React from 'react';
import { Component } from 'react';
import './Widgets.css';
import Clock from './Clock';
import Tabs from './Tabs';
import Weather from './Weather';

class Widgets extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tabs: [
        { title: "Tab 1",
          content: "Make a tabs component. Root should pass the Tabs component an array of Javascript objects that each have 'title' and 'content' as keys"
        },
        {
          title: "Tab 2",
          content: "Keep track of the selected tab's index in your Tabs component's state. Set it initially to zero"
        },
        {
          title: "Tab 3",
          content: "In the render method of Tabs, render a collection of h1s (with titles) in a ul and the content of the selected tab in an article"
        }
      ]
    }
  }

  render() {
    return (
      <div className="Widgets">
        <Clock />
        <Tabs tabs={this.state.tabs} />
        <Weather />
      </div>
    );
  }
}

export default Widgets;
