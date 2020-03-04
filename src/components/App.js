import React, { Component } from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../context/LanguageContext';
import ColorContext from '../context/ColorContext';

class App extends Component {

    state = {
        language: "english"
    }

    onLanguageChange = (language) => {
        this.setState({language: language})
    }

    render() {
        return (
            <div className="ui container">
                <div>
                    Select a Language:
                    <i onClick={()=> this.onLanguageChange('english')} className="flag us"></i>
                    <i onClick={()=> this.onLanguageChange('dutch')} className="flag nl"></i>
                </div>
                {/* It just dynamically change */}
                <ColorContext.Provider value = "red">
                    <LanguageContext.Provider value = {this.state.language}>
                        <UserCreate/>
                    </LanguageContext.Provider>
                </ColorContext.Provider>
                {/* It just remain same in dutch language */}
                <LanguageContext.Provider value = "dutch">
                    <UserCreate/>
                </LanguageContext.Provider>
                {/* It just same as that we provide in LanguageContext file */}
                <UserCreate/>
            </div>
        );
    }
}

export default App;