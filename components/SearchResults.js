import React from "react";

const SearchResults = ({ results }) => {
  return (
    <div className="mx-auto w-full px-5 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-600 text-md mt-3 mb-4">
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime})
      </p>

      {results.items?.map((result) => (
        <div key={result.link} className="max-w-xl mb-8">
          <div className="group">
            <a href={result.link} className="text-sm truncate">
              {result.formattedUrl}
            </a>
            <a href={result.link}>
              <h2 className="truncate text-xl text-blue-800 font-medium group-hover:underline">
                {result.title}
              </h2>
            </a>
          </div>
          <p className="text-sm text-gray-600 line-clamp-3">{result.snippet}</p>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
