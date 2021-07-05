import React, { Component, createContext } from 'react'

export const DataContext = createContext();

class ContextProvider extends Component {
    constructor(props) {
        super(props)

        this.state = {
            CurrentCollegeId: ""
        }
    }

    SetCurrentCollegeIdHandler = (id) => {
        this.setState({CurrentCollegeId: id})
    }

    render() {
        const {
            CurrentCollegeId,
        } = this.state;
        return (
            <DataContext.Provider
                value={{
                    CurrentCollegeId,
                    SetCurrentCollegeIdHandler: this.SetCurrentCollegeIdHandler
                }}
            >
                {this.props.children}
            </DataContext.Provider>
        )
    }
}

export default ContextProvider;