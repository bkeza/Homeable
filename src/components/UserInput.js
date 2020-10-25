import React from 'react';

const fields = [{ url_param: 'STD_ZIP5', field: 'Zip Code' }];

const getUserInput = () =>
  fields
    .map(
      ({ url_param }) =>
        url_param + " = '" + document.getElementById(url_param).value + "'"
    )
    .join('&');

function callAPI(setter) {
  // create API call string
  const baseUrlStr =
    'https://services.arcgis.com/VTyQ9soqVukalItT/arcgis/rest/services/Multifamily_Properties_Assisted/FeatureServer/0/query?outFields=*&f=json&where=';

  // Call api for all those fields
  fetch(baseUrlStr + getUserInput())
    .then((res) => res.text())
    .then((res) => JSON.parse(res)['features'])
    .then((places) => places.map((place) => place['attributes']))
    .then((places) => setter(places));
}

// Formatting for users to search stuff
function UserInput({ setResults }) {
  return (
    <div
      style={{
        position: 'sticky',
        top: 0,
        margin: '20px 10px',
        paddingTop: 5
      }}
    >
      <h3>Search</h3>
      <form
        style={{ margin: 5 }}
        onSubmit={(e) => {
          e.preventDefault();
          callAPI(setResults);
        }}
      >
        {fields.map(({ field, url_param }) => (
          <span key={url_param}>
            <label>
              {field} <input id={url_param} />
            </label>
          </span>
        ))}
      </form>
    </div>
  );
}

export default UserInput;
