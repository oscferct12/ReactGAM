import React, { Component } from 'react';
import './style.css';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: true,
        };
    }

    render() {
        const {
            suggestions,
            onChangeText,
            onChangeSelection,
            text,
        } = this.props;
        const {
            isOpen,
        } = this.state;

        return (
            <div >
HOLA Home
            </div>
        );
    }
}

export default Home;
