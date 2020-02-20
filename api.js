console.log("running api");

var request = require("request");
var index = require("./index");
require("dotenv").config();
var stars;


var options = {
  url: 'https://api.github.com/users/' +  index.username + '?',
  headers: {
    'User-Agent': 'wgbcamp'
  }
};

var starCounter = {
  url: 'https://api.github.com/users/' + index.username + '/starred?&per_page=1000',
  headers: {
    'User-Agent': 'wgbcamp'
  }
};

function callback1(error, response, body) {
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);
    console.log(info);

    module.exports = {
      name: info.name,
      company: info.company,
      avatar: info.avatar_url,
      location: info.location,
      html_url: info.html_url,
      blog: info.blog,
      bio: info.bio,
      public: info.public_repos,
      followers: info.followers,
      following: info.following
 }
  }
}

function callback2(error, response, body) {
  if (!error && response.statusCode == 200) {
    var info = JSON.parse(body);
    stars = (Object.keys(info).length);
    console.log(stars + " Starred Repos");
    module.exports = {
      stars: stars
    }
  }
}



request(options, callback1);
request(starCounter, callback2);


