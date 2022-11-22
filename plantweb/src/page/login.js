import "./login.css"

export const Login=()=>{
    return (
        <div id="para">
            <div id="logo_div">logo</div>
            <div id="login_div">
                <label from="id" id="id_label">ID </label>
                <input type="text" id="id"></input>
                <br></br>
                <label from="pw" id="pw_label">PW </label>
                <input type="text" id="pw"></input>
                <br></br>
                <button id="login_btn">LOGIN</button>
            </div>
        </div>
    );
}
export default Login;