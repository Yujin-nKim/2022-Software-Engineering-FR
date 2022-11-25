import SearchResult from "../../component/searchResult";
import { useState } from "react";
import "./showSearchList.css"

export const ShowSearchList=(prop)=>{
    console.log(prop);
    // const resultList = prop.data.map(result => );
    return (
        <div>

            <div id="result_div">
                <p>결과</p>
                <hr></hr>
                
                <ul>
                    {prop.data.map(result => {
                        <li>
                            <SearchResult plantNameKR={result.plantNameKR} plantNameEN={result.plantNameEN} plantImgUrl={result.plantImgUrl}/>

                        </li>
                    })}
                </ul>
            </div>
        </div>
    );

}

export default ShowSearchList;