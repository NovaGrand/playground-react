import TestComponent from './components/TestComponent'

import User from "./components/User/User";

export default function App() {
    let users = [
        { id:1, name:'张三', age:18 },
        { id:2, name:'李四', age:15 },
        { id:3, name:'王五', age:12 },
    ]
    function click(str){
        console.log(str)
    }
    const userList = users.map(item => {
        return item.age > 13 && <User { ...item } key={ item.id } onClick={ click.bind(null, item.name) }/>
    })
    return (
        <ul>
            { userList }
        </ul>
    )
}
