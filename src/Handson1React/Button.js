import React, { useState, Component } from 'react'
import Functionnew from './Functioncompo'
import Classfunction from './Classcompo'

function Buttonone() {

    const [count, setCount] = useState(false)
    console.log(count)
    return (
        <div className="button1">
            <h1>{count}</h1>
            <button onClick={() => setCount(!count)} className='btn1'>To See Styling On Functional Component</button>
            {count ? <Functionnew></Functionnew> : null}
        </div>

    )
}
export default Buttonone




class Buttontwo extends Component {
    constructor() {
        super();
        this.state = {
            btnValue: false,
        };
        console.log(this.state.btnValue);
    }
    render() {
        return (
            <div className='button2'>
                <button onClick={() => this.setState({ btnValue: !this.state.btnValue })} className='btn2'>To See Styling On Class Component</button>
                {this.state.btnValue ? <Classfunction /> : null}

            </div>
        )
    }
}
export { Buttontwo }
