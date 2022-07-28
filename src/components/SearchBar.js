import React from "react";

function SearchBar({searchTerm, setSearchTerm}) {
  console.log(searchTerm)
  return (
    <div className="search">
      <input type="text" className="searchTerm" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      {/* For the advanced deliverables: add a checkbox to allow sorting the planeteer */}
    </div>
  );
}

export default SearchBar;
