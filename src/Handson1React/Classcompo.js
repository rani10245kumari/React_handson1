import "./style.css"
import { Component } from 'react'
class Classfunction extends Component {
    render() {
        return (
            <div className="two">
                <h1>This is created using class component</h1>
                <h3>This is done using external  css</h3>
                <p style={{ color: "blue", fontSize: "28px", textAlign: "center", fontWeight: "600" }}>This is done using inline css</p>
            </div>
        )
    }
}
export default Classfunction;
