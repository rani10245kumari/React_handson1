
function FuncCompo(props) {
    console.log(props.value);
    return (
        <>
            {props.data}
            <h1>this is child component</h1>
        </>
    )
}
export default FuncCompo;