import { Component } from "react";
class Compo extends Component {
    constructor(props) {

        super(props)
        console.log("hello")

    }
    render() {
        return (
            <>
                <h1>this is  child Component</h1>
            </>
        )
    }
}
export default Compo;