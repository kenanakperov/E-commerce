import { useState } from "react";
import { SearchIcon } from "../svg";

const Search = () => {
  const [hide, setHide] = useState("hideInput");
  
  const sendSearch = () => {
    if (hide === "hideInput") {
      setHide("showInput");
    } else {
      setHide("hideInput");
    }
  };
  return (
    <>
      <div className="searchBox">
        <input className={hide} type="text" placeholder="Search" />
        <SearchIcon onClick={sendSearch} />
      </div>
    </>
  );
};

export default Search;
