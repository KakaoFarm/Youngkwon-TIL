# fetch function and chaining of it

```javascript
const myname = "youngkwon02";
fetch(`https://api.github.com/users/${myname}`)
.then(res => res.json())
.then(githubUser => {
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "github-avatar";
    document.body.append(img);
});
```