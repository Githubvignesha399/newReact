import './Header.css'

function Header(){
    const mystyle = {
        color:"red",
        backgroundColor: "blue",
        padding:"10px"
    }
    return (
        <>
            <h1>this is from header!</h1>
            <p style={{color:"white"}}>paragraph :)</p>
            <p style={{mystyle}}>paragraph :(</p>
        </>
    )
}

export default Header;