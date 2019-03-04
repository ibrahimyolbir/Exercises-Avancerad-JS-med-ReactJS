class ControlledForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.changeText = this.changeText.bind(this);
    }
    changeText(e) {
        this.setState({ value: e.target.value });
    }
    render() {
        const input = React.createElement("input", {
            value: this.state.value,
            type: 'text',
            onChange: this.changeText,
        });
        const text = React.createElement('p', {}, 'Hello ' + this.state.value);
        return React.createElement(React.Fragment, {}, input, text);
    }
}

ReactDOM.render(React.createElement(ControlledForm), document.querySelector("#target"));