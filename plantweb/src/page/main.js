import Header from "../component/header";

export const Main=()=>{
    sessionStorage.setItem("Logined","Login");
    return (
        <div>
            <Header></Header>
            <div>메인화면이에요</div>
        </div>
    );
    

}

export default Main;