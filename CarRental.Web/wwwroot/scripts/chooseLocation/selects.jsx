import React from 'react';
import CitySelect from './citySelect.jsx';
import CountrySelect from './countrySelect.jsx';
import EntitySelect from './entitySelect.jsx';

export default class Selects extends React.Component {

    constructor(props) {
        super();
        this.setCountry = this.setCountry.bind(this);
        this.state = {
            countryID: 0,
        }
    }

    setCountry(e) {
        const countryID = e.target.value;
        this.setState({countryID});
    }

    render() {
        return <div className='selects'>
            <div>
                <span>Country</span>
                <CountrySelect
                    controller='/api/Countries'
                    onChange={this.setCountry}/>;
            </div>
            <div>
                <span>City</span>
                <CitySelect
                    controller={`/api/Cities/${this.state.countryID}`}/>;
            </div>
        </div>;
    };
}