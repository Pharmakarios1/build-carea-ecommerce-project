import { Search } from "../../constants";
import "./Search.scss";

const SearchModal = () => {
  return (
    <div className="search_wrapper">
      <img src={Search} alt="" />
      <input type="text" placeholder="Search products" />
    </div>
  );
};

export default SearchModal;
