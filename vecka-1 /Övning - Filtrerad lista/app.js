// class List extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             countryList: [],
//             input: ''
//         };
//     }
//     componentWillMount() {
//         axios.get('../country.json') // JSON File Path
//             .then(response => {
//                 this.setState({
//                     countryList: response.data
//                 });
//             })
//             .catch(function (error) {
//                 console.log(error);
//             });
//     }

//     render() {
//         const countryList = this.state.countryList;
//         let countryListBlock = '';
//         if (countryList.length > 0) {
//             countryListBlock = countryList.map(obj => {
//                 return (
//                     React.createElement(Usercard, { key: obj.code }, { key: obj.name })
//                 )
//             })
//         }
//         return React.createElement("div", {
//             className: "row container"
//         }, countryListBlock);
//     }
// }
// ReactDOM.render(React.createElement(List), document.querySelector("#target"))


class App extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        items: [],
        input: ''
      }
    }
    componentWillMount() {
        axios.get('country.json') // JSON File Path
            .then(response => {
                this.setState({
                    items: response.data
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    onChangeHandler(e) {
      this.setState({
        input: e.target.value
      })
    }

    render() {
      const list = this.state.items
      .filter(item => item.toLowerCase().search(this.state.input.toLowerCase()) !== -1)
      .map(function (item, name) {
        return React.createElement("li", {
          key: name
        }, item);
      });

      return React.createElement("div", null, React.createElement("input", {
        type: "text",
        placeholder: "Suche...",
        onChange: this.onChangeHandler.bind(this)
      }), React.createElement("ul", null, list));
    }
  }
  ReactDOM.render(React.createElement(App), document.querySelector("#target"))