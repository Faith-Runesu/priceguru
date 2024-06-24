"use client";

import { API } from "@/services/api";
import { useState } from "react";

const SearchBar = () => {
  const [searchPrompt, setSearchPrompt] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const submit = async (event) => {
    setIsLoading(true);
    event.preventDefault();
    const response = await API.post("/scrapper", { searchText: searchPrompt });

    if(response.ok) {
      // handle the successful response 

    }else if (response.error) {
      // handle the error 
    }

    setIsLoading(false);
  };

  return (
    <div>
      <form className="flex flex-wrap gap-4 mt-12" onSubmit={submit}>
        <input
          type="text"
          value={searchPrompt}
          onChange={(e) => setSearchPrompt(e.target.value)}
          placeholder="Enter product name"
          className="searchbar-input"
          disabled={isLoading}
        />
        <button type="submit" className="searchbar-btn">
          {isLoading ? "Loading..." : "Search"}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
