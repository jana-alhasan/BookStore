import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import { InputAdornment, TextField } from "@mui/material";
import useDebounce from "../../CustomHooks/useDebounce";

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const navigate = useNavigate();

  useEffect(() => {
    const query = debouncedSearchTerm.trim();
    if (query) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
    }
  }, [debouncedSearchTerm, navigate]);

  return (
    <TextField
      size="small"
      label="Search books"
      value={searchTerm}
      onChange={(event) => setSearchTerm(event.target.value)}
      fullWidth
      inputProps={{ "aria-label": "Search books" }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon aria-hidden="true" />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchInput;
