require('dotenv').config()
const express = require('express');
const app = express();
const port = 8000;
const githubDATA = {
    "url": "https://api.github.com/users/vaibhavsajwan",
    "html_url": "https://github.com/vaibhavsajwan",
    "followers_url": "https://api.github.com/users/vaibhavsajwan/followers",
    "following_url": "https://api.github.com/users/vaibhavsajwan/following{/other_user}",
    "gists_url": "https://api.github.com/users/vaibhavsajwan/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/vaibhavsajwan/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/vaibhavsajwan/subscriptions",
    "organizations_url": "https://api.github.com/users/vaibhavsajwan/orgs",
    "repos_url": "https://api.github.com/users/vaibhavsajwan/repos",
    "events_url": "https://api.github.com/users/vaibhavsajwan/events{/privacy}",
    "received_events_url": "https://api.github.com/users/vaibhavsajwan/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 2,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2023-07-16T02:12:32Z",
    "updated_at": "2023-07-18T03:25:13Z"
}
app.get('/', (req, res) => {
    res.send('Hello World!');


});
app.get('/netflix', (req, res) => {
    res.send('welcome to netflix ');
})
app.get('/netflix/login', (req, res) => {
    res.send('login');
})
app.get('/youtube', (req, res) => {
    res.redirect('https://www.youtube.com/');
});
app.get('/github', (req, res) => {
    res.json(githubDATA);
});
app.listen(process.env.port, () => {
    console.log(`Example app listening on port ${port}`);
});
