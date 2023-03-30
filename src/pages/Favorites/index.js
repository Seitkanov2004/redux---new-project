import {useSelector} from "react-redux";
import FavoriteCard from "./FavoriteCard";

const Favorites = () => {

    const {favorites} = useSelector(state => state.favorites)

    return (
        <div className="container flex">
            {
                favorites.map(el => <FavoriteCard el={el}/>)
            }
        </div>
    );
};

export default Favorites;