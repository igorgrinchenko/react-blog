import { useEffect, useState } from "react";
import { useArticlesStore } from "../store/articlesStore";
import { InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar() {
  const searchQuery = useArticlesStore((state) => state.searchQuery);
  const setSearchQuery = useArticlesStore((state) => state.setSearchQuery);
  const [inputValue, setInputValue] = useState(searchQuery);

  useEffect(() => {
    const timeoutId = setTimeout(() => setSearchQuery(inputValue), 300);

    return () => clearTimeout(timeoutId);
  }, [inputValue, setSearchQuery]);

  return (
    <TextField
      fullWidth
      value={inputValue}
      onChange={(event) => setInputValue(event.target.value)}
      placeholder="Search articles..."
      variant="outlined"
      slotProps={{
        input: {
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon color="action" />
            </InputAdornment>
          ),
        },
      }}
    />
  );
}

export default SearchBar;
