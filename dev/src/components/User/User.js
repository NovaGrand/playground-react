import React from "react";

// export default props =>
//     <li onClick={ props.onClick }>用户名：{ props.name } | 年龄：{ props.age }</li>
export default function User(props){
    return <li onClick={ props.onClick }>用户名：{ props.name } | 年龄：{ props.age }</li>
}
// User.propTypes = {
//     name: PropTypes.string.isRequired,
//
// }
// export default class User extends React.Component {
//     render() {
//         return <li onClick={ this.props.onClick }>用户名：{ this.props.name } | 年龄：{ this.props.age }</li>
//     }
// }