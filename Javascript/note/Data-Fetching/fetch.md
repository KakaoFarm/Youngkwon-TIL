# ๐ฏ fetch

### ๐ Basic
```javascript
fetch(url, options)
  .then((response) => console.log("response:", response))
  .catch((error) => console.log("error:", error));
```

---

### ๐งก GET
```javascript
// fecth ํจ์์ default ์์ฒญ๋ฐฉ์์ GET ๋ฐฉ์
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(async (response) => {const jsonData = await response.json()});
```

### ๐ POST
```javascript
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "Test",
    body: "I am testing!",
    userId: 1,
  }),
}).then(async (response) => {const jsonData = await response.json()});
```

### ๐ PUT
```javascript
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "Test",
    body: "I am testing!",
    userId: 1,
  }),
}).then(async (response) => {const jsonData = await response.json()});
```

### ๐ DELETE
```javascript
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE",
}).then(async (response) => {const jsonData = await response.json()});
```
