const axios = require("axios");

const helper = {
  getArticles: (frm) => {
    console.log(frm);
    let apiURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?';
    apiURL += 'api-key=1759bbf8acf24f13a254a004a1d3cbc3';
    apiURL += '&fl=_id,web_url,headline,pub_date&q=' + frm.term;
    apiURL += frm.syear ? '&begin_date=' + frm.syear  + '0101': '';
    apiURL += frm.eyear ? '&end_date=' +  + frm.eyear +'1231' : '';
    return axios.get(apiURL).then((result) => {
      const articles = result.data.response.docs;
      if (articles.length > 5) {
        return articles.slice(0, 5);
      }
      return articles;
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