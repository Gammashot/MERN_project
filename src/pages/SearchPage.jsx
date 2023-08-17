import { Search } from "../component/Search"
import { Songs } from "../component/Songs";
import { getSongs } from "../services/api-client";

export const SearchPage = ()=>{
    const getArtistName = (artistName) => {
        console.log('Receive artist name',artistName)
        getSongs(artistName)
    }
    return (
    <div className="container">
        <h1 className="alert alert-info text-center">Music Store</h1>
    <Search fn = {getArtistName}/>
    <Songs/>
    </div>);
}