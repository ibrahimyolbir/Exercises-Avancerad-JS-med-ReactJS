import React, { Component } from 'react';

class CelsiusToK extends Component {
    render() {
        const kelvin = 274.15 + parseFloat(this.props.celsius);
        return (
            <p>
                {this.props.celsius}  &#8451; = {kelvin}  &#8490;
            </p>
        );
    }
}

export default CelsiusToK;