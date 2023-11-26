/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "@material-ui/icons";
import {
  TextField,
  IconButton,
  InputAdornment,
  Hidden,
} from "@material-ui/core";
import { useSelector,useDispatch } from "react-redux";
import useDebounce from "../../CustomHooks/useDebounce";
import { searches} from "../../../utilities/fetchSearch";
import useStyles from "./styles";


const SearchInput = () => {
  const classes = useStyles();
  const [searchTerm, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };
  // const searchTerm = useSelector((state) => state.value);
  // const handleInputChange = (e) => {
  //   const newSearchTerm = e.target.value;
  //   dispatch({ type: "setSearchTerm", payload: newSearchTerm });
  //   dispatch({ type: "setSearchTerm", payload: newSearchTerm });
  // };
  // console.log("Redux from",searchTerm);
  

  const debouncedSearchTerm = useDebounce(searchTerm, 1500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      searches(debouncedSearchTerm, setResult, navigate);
    }
  }, [debouncedSearchTerm]);

  return (
    <>
      <Hidden smDown>
        <TextField
          size="small"
          label="Type any book here"
          variant="filled"
          className={classes.search}
          value={searchTerm}
          onChange={handleInputChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <Search />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Hidden>
      <Hidden mdUp>
        <IconButton>
          <Search className={classes.searchIcon} />
        </IconButton>
      </Hidden>
    </>
  );
};

export default SearchInput;
