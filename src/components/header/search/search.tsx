import { useState } from "react";
import "./search.scss";

export const Search = () => {
  const [focused, setFocused] = useState<boolean>(false);

  return (
    <div className="search-bar">
      <input
        placeholder="Search..."
        className={focused ? "focused" : ""}
      ></input>
    </div>
  );
};
