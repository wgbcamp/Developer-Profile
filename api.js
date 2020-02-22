console.log("running api");
require("dotenv").config();
var axios = require("axios");
var index = require("./index");
var req1 = axios.get('https://api.github.com/users/' + index.username + '?');
var req2 = axios.get('https://api.github.com/users/' + index.username + '/starred?&per_page=1000');


//asynchronous function that makes two get requests to get user information, exports info to generateHTML.js and starts file after get request is complete
async function axiosTest() {

axios.all([req1, req2])
    .then(axios.spread(async function(req1res, req2res){

      module.exports = await {
        nameExport: req1res.data.name,
        companyExport: req1res.data.company,
        avatarExport: req1res.data.avatar_url,
        locationExport: req1res.data.location,
        htmlExport: req1res.data.html_url,
        blogExport: req1res.data.blog,
        bioExport: req1res.data.bio,
        publicExport: req1res.data.public_repos,
        followersExport: req1res.data.followers,
        followingExport: req1res.data.following,
        starredExport: Object.keys(req2res.data).length
      }
  
      await require("./generateHTML");
    }));
    
}

axiosTest();

