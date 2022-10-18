
import './index.scss'
import img from '../../assets/logo512.png'

let a = 12131144
let blue = 'blue'
export default function TestComponent(){
    return (
        <div>
            <h2 className={'red ' + blue }>Test Component { a } { blue === 'blue' ? 'aaa' : 'bbb' }</h2>
            <img src={img} alt=""/>
        </div>
    )
}