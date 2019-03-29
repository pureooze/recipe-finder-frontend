let settings = {};

export function search(searchString) {
  const queryString = Object.keys(settings)
    .map(key => {
      // if (key === "health" && settings[key].length > 0) {
      //   for (const v of settings[key]) {
      //     value += v;
      //   }
      // } else if (key === "inventory") {
      //   value = settings[key].join(",");
      // }

      return key + "=" + settings[key];
    })
    .join("&");

  console.log(queryString);

  const baseURL =
    "https://cors-anywhere.herokuapp.com/https://recipe-finder-backend.herokuapp.com/search/recipes?request=";

  const url =
    queryString.length === 0
      ? baseURL + searchString
      : baseURL + searchString + "&" + queryString;
  const requestURL = new URL(url);

  console.log("R:", requestURL);
  return fetch(requestURL, {
    method: "GET",
    headers: {
      "X-Requested-With": "XMLHttpRequest"
    }
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
