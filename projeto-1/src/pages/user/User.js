import React, {Component} from "react";
import UserForm from "./UserForm";
import {getUserActions} from '../../actions/user/UserAction'


class User extends Component {
    render() {

        let list = [
            {
                name: "daniel",
                email: "brabo@brabo.com"
            },
            {
                name: "daniel2",
                email: "brabo2@brabo.com"
            },
        ];

        return (
            <div>
                <UserForm></UserForm>
                <table>
                    <tbody>
                    {list.map((item, index) => {
                        return <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                        </tr>
                    })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default User;