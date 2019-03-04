class changeColor extends React.Component {
    constructor(props) {
        super(props);
        this.state = { color: 'black' };
        this.updateColor = this.updateColor.bind(this);
    }
    updateColor() {
        //console.log("updateColor", this.state);

        console.log(this);
        
        if(this.state.color === 'black'){
            this.setState({ color: 'red' });
        }else{
            this.setState({ color: 'black' });
        }
        
    }
    render() {
        console.log("render", this.state);
        return React.createElement('p', {
            style: { color: this.state.color },
            onClick: this.updateColor(),
        }, 'Click me!');
    }
}

let target = document.getElementById("target");
ReactDOM.render(React.createElement(changeColor), target);