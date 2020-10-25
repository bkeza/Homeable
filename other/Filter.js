import React from "react";

function Search({ changeQuery, searchQuery }) {
  return (
    <div style={{ margin: "30px 0", position: "sticky", bottom: 0 }}>
      Filter:
      <input
        value={searchQuery}
        onChange={e => changeQuery(e.target.value)}
        style={{ width: 200, margin: 20 }}
      />
    </div>
  );
}

export default Search;
