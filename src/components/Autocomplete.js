import React from 'react';
import { Component } from 'react';
import './Autocomplete.css';

class Autocomplete extends Component {
    constructor(props) {
        super(props);

        this.state = {
            searchInput: ""
        }

        this.handleFieldChange = this.handleFieldChange.bind(this);
        this.handleNameClick = this.handleNameClick.bind(this);
    }

    handleFieldChange = (event) => {
        const newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
    }

    handleNameClick = (event) => {
        console.log(event.target.id)
        const searchInput = event.target.id;
        this.setState({ searchInput })
    }

    render() {
        console.log(this.state)
        return (
            <div className="autocomplete-component">
                <h1>Autocomplete</h1>
                <input
                    type="text"
                    className="autocomplete-input" 
                    id="searchInput"
                    value={this.state.searchInput}
                    placeholder="Search..."
                    onChange={this.handleFieldChange}
                />
                <ul className="autocomplete-list">
                    {
                        this.props.names.map((name, idx) => {
                            if (name.includes(this.state.searchInput)) {
                                return  <li 
                                            className="autocomplete-list-item"
                                            key={idx}
                                            id={name}
                                            onClick={this.handleNameClick}>
                                            {name}
                                        </li>
                            }
                        })
                    }
                </ul>
            </div>
        )
    }

}

export default Autocomplete