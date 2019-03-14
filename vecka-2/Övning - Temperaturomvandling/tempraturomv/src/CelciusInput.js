import React, { Component } from 'react';


const CelsiusInput = (props) => (
  <>
    <label>
      <input name="1" value={this.props.value} type="range" onChange={this.props.onChange} />
      {/* <input name="2"  value={this.props.value} type="range" onChange={this.props.onChange} /> */}
      Celsiuses
    </label>
  </>
);

// class CelsiusInput extends Component {
//   render() {
//     return (

//     );
//   }
// }

export default CelsiusInput;