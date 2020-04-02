import React, { Component } from 'react';
import "./searchBar.styles.scss"

class SearchBar extends Component{
    constructor() { 
        super()

        this.state = {
            search: "",
        }
    }

    handleChange = event => { 
        const { name, value } = event.target;
        this.setState({[name]: value})
    }

    render(){
        return (
            <form onSubmit={(e)=>this.props.handleSubmit(e)}>
                <div className="searchBar">
                    <input
                        onChange={(e) => this.props.handleChange(e)}
                        className="searchInput"
                        type="text"
                        name={this.props.name}
                        value={this.props.value}
                        placeholder={this.props.placeholder} 
                    />
                    <button className="searchButton" type="submit" value="Submit">
                        <i className={this.props.icon}></i>
                    </button>
                </div>
            </form>
        );
    }
}

export default SearchBar;
