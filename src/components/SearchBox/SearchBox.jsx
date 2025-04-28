import React from "react";
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <label>
        <p>Find contacts by name</p>
        <input
          onChange={(e) => {
            dispatch(changeFilter(e.target.value.toLowerCase().trim()));
          }}
          type="text"
        />
      </label>
    </div>
  );
};

export default SearchBox;
