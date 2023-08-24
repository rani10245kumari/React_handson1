import React, { useState, Component } from 'react'
import Functionnew from './Functioncompo'
import Classfunction from './Classcompo'
function Buttonone() {

    const [count, setCount] = useState(false)
    console.log(count)
    return (
        <div className="button1">
            <h1>{count}</h1>
            <button onClick={() => setCount(!count)}>To See Styling on functional component</button>
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
                <button onClick={() => this.setState({ btnValue: !this.state.btnValue })}>class button</button>
                {this.state.btnValue ? null : <Classfunction />}

            </div>
        )
    }
}
export { Buttontwo }