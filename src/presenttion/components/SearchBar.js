import '../css/search.css'


function SearchBar(props) {


    return(

            <input id={"search-bar"} placeholder={"Search by name"} onChange={

                    event => props.update(event.target.value)

            } />

    )
}
export default SearchBar;
