# 🎯 fetch

### 📌 Basic
```javascript
fetch(url, options)
  .then((response) => console.log("response:", response))
  .catch((error) => console.log("error:", error));
```

---

### 🧡 GET
```javascript
// fecth 함수의 default 요청방식은 GET 방식
fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then(async (response) => {const jsonData = await response.json()});
```

### 💙 POST
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

### 💚 PUT
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

### 💜 DELETE
```javascript
fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE",
}).then(async (response) => {const jsonData = await response.json()});
```
