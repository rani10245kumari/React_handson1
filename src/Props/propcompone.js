
import React, { useState } from "react";
import FuncCompo from "./proptwo";
import Compo from "./Classcompo"
function Propcomp() {

    const [dataa, setData] = useState({
        name: "rahul",
        age: 26
    })

    return (
        <>
            <FuncCompo data="rani"></FuncCompo>
            <Compo value={{ dataa, setData }}></Compo>
        </>
    )

}
export default Propcomp;