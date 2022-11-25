import "./searchResult.css"


export const SearchResult = (props) => {
    return (
        <div>
            <li>
                <table id="result_table">
                    <tbody>
                        <tr>
                            <td><img src={props.plantImgUrl}></img></td>
                            <td>{props.plantNameKR} / <i>{props.plantNameEN}</i></td>
                    
                        </tr>
                    </tbody>
                </table>
            </li>
        </div>
    );
}

export default SearchResult;

