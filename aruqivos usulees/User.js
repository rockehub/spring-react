import {Component} from "react";


class User extends Component {
    render() {
        return (
            <div> Nome: {this.props.name}</div>
        )
    }
}

export default User;