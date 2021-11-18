import React from "react";
import Head from "next/head";
import SearchHeader from "../components/SearchHeader";

const Search = () => {
  return (
    <div>
      <Head>
        <title>Search Results</title>
      </Head>

      {/* Search Header */}
      <SearchHeader />
      {/* Search Results */}
    </div>
  );
};

export default Search;
