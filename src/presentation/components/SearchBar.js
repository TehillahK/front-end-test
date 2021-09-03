import '../css/search.css'

function SearchBar(props) {
    return(
            <input id={"search-bar"} placeholder={`Search by ${props.searchCriteria}`} onChange={
                    event => props.update(event.target.value)
            } />
    )
}
export default SearchBar;
