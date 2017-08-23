const axios = require("axios");

const helper = {
  getArticles: (frm) => {
    let apiURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?';
    apiURL += 'api-key=1759bbf8acf24f13a254a004a1d3cbc3';
    apiURL += '&fl=_id,web_url,headline,pub_date&q=' + frm.term;
    apiURL += frm.syear ? '&begin_date=' + frm.syear  + '0101': '';
    apiURL += frm.eyear ? '&end_date=' +  + frm.eyear +'1231' : '';
    return axios.get(apiURL).then((result) => {
      let articles = result.data.response.docs;
      articles = articles.map(article => {
        const newArticle = {
          a_id: article._id,
          title: article.headline.main,
          date: new Date(article.pub_date).toString(),
          url: article.web_url,
          note: ''
        };
        return newArticle;
      })
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

  deleteSave: (articleID) => {
    return axios.delete(`/api/saved/${articleID}`)
  }
}

module.exports = helper;