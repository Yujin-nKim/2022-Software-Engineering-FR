import Main from "./main";
import SearchResult from "../component/searchResult";
import "./main.css"

export const ShowSearchList=()=>{
    sessionStorage.setItem("Logined","Login");
    return (
        <div>
            <Main></Main>

            <div id="result_div">
                <p>결과</p>
                <hr></hr>
                <SearchResult></SearchResult>
            </div>
        </div>
    );
    

}

export default ShowSearchList;