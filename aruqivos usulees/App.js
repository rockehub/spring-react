import logo from './logo.svg';
import './App.css';
import Daniel from "./Daniel";
import List from "./List";
import {Component} from "react";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Daniel",
            email: 'd@d.com'
        }
        this.changeState = this.changeState.bind(this)
        this.resetState = this.resetState.bind(this)
        this.changeInput = this.changeInput.bind(this)
    }

    changeState() {
        this.setState({
            name: "Daniel Mroeira"
        })
    }

    resetState() {
        this.setState({
            name: "Daniel"
        })
    }

    changeInput(event) {
        let target = event.target
        let index = target.name
        this.setState({
            [index]: target.value
        })
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>

                    <form>
                        <input type="text" name="name" onChange={this.changeInput} value={this.state.name}/>
                        <input type="email" name="email" onChange={this.changeInput} value={this.state.email}/>
                    </form>
                    <p>
                        meu projeto em react {this.state.name}
                    </p>
                    <button onClick={this.changeState}> Mudar Estado</button>
                    <button onClick={this.resetState}>Resetar</button>
                    <Daniel/>
                    <List></List>
                </header>

            </div>
        );
    }
}

export default App;
