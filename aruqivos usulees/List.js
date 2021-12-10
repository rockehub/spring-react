import React, {Component} from "react";
import User from "./User";

class List extends Component {
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
                <table>
                    {list.map((item) => {
                        return <tr>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                        </tr>
                    })}
                </table>
            </div>
        )
    }
}
 export default  List;