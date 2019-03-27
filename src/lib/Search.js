let settings = {};

export function search(searchString) {
  const queryString = Object.keys(settings)
    .map(key => {
      let value = "";
      console.log("Key: ", key, settings[key].length);
      if (key === "health" && settings[key].length > 0) {
        for (const v of settings[key]) {
          value += v;
        }
      } else if (key === "inventory") {
        value = settings[key].join(",");
      }

      console.log("V: ", value);

      return key + "=" + settings[key];
    })
    .join("&");

  console.log(queryString);

  const url =
    queryString.length === 0
      ? "http://localhost:8080/search/recipes?request=" + searchString
      : "http://localhost:8080/search/recipes?request=" +
        searchString +
        "&" +
        queryString;
  const requestURL = new URL(url);

  console.log("R:", requestURL);
  return fetch(requestURL, {
    method: "GET"
  }).then(response => {
    return response.json();
  });
}

export function removeSearchSettings(key) {
  delete settings[key];
}

export function updateSearchSettings(updatedSettings) {
  settings = { ...settings, ...updatedSettings };
}

export default search;
