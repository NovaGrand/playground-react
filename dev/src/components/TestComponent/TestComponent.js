import './index.scss'
import img from '../../assets/logo512.png'

export default function TestComponent(props ){
    let a = 12131144
    let blue = 'blue'
    let { name } = props
    return (
        <div>
            <h2 className={'red ' + blue }>Test Component { a } { blue } { name }</h2>
        </div>
    )
}