import React, { Component } from 'react';

class CelsiusToF extends Component {
    render() {
        const fahrenheit = 9 * parseFloat(this.props.celsius) / 5 + 32.0;
        return (
            <p>
                {this.props.celsius}  &#8451; = {fahrenheit}	&#8457;
            </p>
        );
    }
}

export default CelsiusToF;