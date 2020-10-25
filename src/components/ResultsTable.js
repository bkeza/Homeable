import React from "react";
import { displayCols } from "./Constants.js";

const ResultsHeadings = () => (
  <tr>
    {displayCols.map((col, idx) => (
      <th
        key={idx}
        className="sort"
        data-sort={col["field_name"]}
        style={{ width: "20%" }}
      >
        {col["display"]}
      </th>
    ))}
  </tr>
);

const ResultData = ({ rows }) => {
  return (
    <tbody className="list">
      {rows.map((item) => (
        <tr>
          {displayCols.map((col, idx) => (
            <td key={idx} className={col["field_name"]}>
              {item[col["field_name"]]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

const ResultsTable = ({ rows }) => {
  return (
    <div id="results">
      <table>
        <thead>
          <ResultsHeadings />
        </thead>
        <ResultData rows={rows} />
      </table>
    </div>
  );
};

export default ResultsTable;
