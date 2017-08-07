const axios = require("axios");

const helper = {
  getArticles: (frm) => {
    console.log(frm);
    const apiURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?
      api-key=1759bbf8acf24f13a254a004a1d3cbc3
      &fl=web_url,headline,pub_date&q=${frm.article}
      &begin_date=${beginYear}0101&end_date=${endYear}1231`;

    return axios.get(apiURL).then((result) => {
      if (result.response.docs.length > 5) {
        return result.response.docs.slice(0, 5);
      }
      return result.response.docs;
    });
  },

  getSaved: () => {
    return axios.get("/api/saved");
  },

  postSave: (article) => {
    return axios.post("/api/saved", { article });
  },

  deleteSave: (id) => {
    return axios.delete("/api/saved", {
      params: {
        id: id
      }
    });
  }
}

module.exports = helper;