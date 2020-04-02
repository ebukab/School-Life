import React, { Component }  from 'react';
import "./findSchoolPage.styles.scss"
import SearchBar from '../../components/searchBar/searchBar.component';
import { countries_data } from '../../assets/files/countries';
import SchoolItem from '../../components/schoolItem/schoolItem.component';

class FindSchoolPage extends Component {
    constructor() { 
        super()

        this.state = {
            school: "",
            country: "",
            title: "Popular schools"
        }
    }

    handleChange = event => { 
        const { name, value } = event.target;
        this.setState({[name]: value})
    }

    render() {
        return (
            <div className="search-school">
                <div className="search-box">
                    <div className="search-box_input">
                        <p className="title">Country</p>
                        <select className="country-select" name="country" required>
                            <option className="placeholder" value="" disabled selected>Select  your  country</option>
                            {countries_data.map(country => (
                                <option value={country.code}>{country.name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="search-box_input">
                        <p className="title">Name of school</p>
                        <SearchBar 
                            handleChange={this.handleChange} 
                            name="school"
                            placeholder="Enter the name of your school ..."
                            value={this.state.school}
                            icon="fas fa-search"
                        />
                    </div>
                </div>
                {/* <p>{this.state.title}</p> */}
                <div className="schools">
                    <div className="schoolItem"><SchoolItem /></div>
                    <div className="schoolItem"><SchoolItem /></div>
                    <div className="schoolItem"><SchoolItem /></div>
                    <div className="schoolItem"><SchoolItem /></div>
                    <div className="schoolItem"><SchoolItem /></div>
                    <div className="schoolItem"><SchoolItem /></div>
                </div>
            </div>
        );
    }
}


export default FindSchoolPage;
