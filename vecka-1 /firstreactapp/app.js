// class MyFirstComponent extends React.Component{
//     render(){
// return React.createElement("p", {}, "first")
//     }
// }

// const target = document.getElementById("target");
// ReactDOM.render(React.createElement (MyFirstComponent), target);


class MyStatefulComponent extends React.Component {
    constructor(props) {
    super(props); // Det är viktigt att anropa superklassens konstruktor
    this.state = { color: 'black' };
    this.updateColor = this.updateColor.bind(this);
    }
    updateColor() {
    this.setState({ color: 'red' });
    }
    render() {
    return React.createElement('p', {
    style: { color: this.state.color },
    onClick: this.updateColor,
    }, 'Click me!');
    }
   }


   const target = document.getElementById("target");
 ReactDOM.render(React.createElement (MyStatefulComponent), target);
