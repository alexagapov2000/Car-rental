﻿import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './header/header.jsx';
import { connect } from 'react-redux';
import CreatingContainer from './_containers/CreatingContainer.jsx';
import SelectsContainer from './_containers/SelectsContainer.jsx';
import LocationsTableContainer from './_containers/LocationsTableContainer.jsx';
import AuthFormContainer from './_containers/AuthFormContainer.jsx';

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <main>
                        <Switch>
                            <Route path='/selectsRedux' component={SelectsContainer} />
                            <Route path='/creatingRedux' component={CreatingContainer} />
                            <Route path='/locationsTable' component={LocationsTableContainer} />
                            <Route path='/auth' component={AuthFormContainer} />
                        </Switch>
                    </main>
                </div>
            </Router>
        );
    }
};
/*
const mapStateToProps = store => {
    console.log(store);
    return {
        countries: store.countries,
    };
}

connect(mapStateToProps)(App);
*/