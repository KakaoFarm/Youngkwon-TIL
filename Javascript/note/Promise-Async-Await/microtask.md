# Microtask
  
  ## 01. Microtask queue
  - Microtask queue는 FIFO(first-in-first-out)이다.
  - 실행할 것이 남아있지 않을때, Microtask queue에 있는 작업이 실행된다.
  - Promise의 then, catch, finally handler는 모두 Microtask queue에 enqueue된다.


```js
let name = "Unknown";
let promise = new Promise((resolve) => {
  resolve("Youngkwon Kim");
});

promise
.then((result) => {name = result});
console.log(name); // Unknown 출력

promise
.then((result) => {name = result})
.then(() => console.log(name)); // Youngkwon Kim 출력


// Exception
// promise의 result를 사용하지 않는 then handler라면, arrow function으로 감싸줘야 micro queue에 enqueued.
promise
.then((result) => {name = result})
.then(console.log(name)); // Unknown 출력

```
<br>

## 02. Task flow
<img width='700' src="https://user-images.githubusercontent.com/39653584/138607229-82f5ec71-dc5a-4e21-856e-12850a744c54.gif" />
