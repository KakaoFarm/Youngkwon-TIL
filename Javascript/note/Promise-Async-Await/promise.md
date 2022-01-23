# Promise

## 01. Promise Object
```javascript
let promise = new Promise((resolve, reject) => {
    // Call this executor
    // Need to call resolve or reject callback func in this body
})
```
<br>

## 02. State change of promise object

<img width="538" alt="스크린샷 2021-10-24 오후 4 17 24" src="https://user-images.githubusercontent.com/39653584/138607332-f146ed8b-7538-4638-8ad6-2a5aed0f887c.png">

<br><br>

## 03. Resolve & Reject
- Promise 객체는 executor에서 resolve나 reject를 반드시 call해야 하며, 이때 변경된 상태는 더 이상 변하지 않는다.
- 즉, 한번 호출된 이후 resolve나 reject가 call 되어도 상태 변화가 없다.
<br><br>

## 04. then, catch, finally
- then
  ```javascript
  let promise = new Promise((resolve, reject) => { ... })
  
  // then의 첫번재 인자는 promise가 fulfilled 일 때,
  // 두번째 인자는 rejected 일 때 실행되며,
  // 인자를 하나만 넘겨줄 수 있다.
  promise.then(console.log, alert)
  ```

- catch
  ```javascript
  let promise = new Promise((resolve, reject) => {
      setTimeout(() => { reject(new Error('에러 발생')) }, 1000);
  });
  // .catch(func)는 .then(null, func)와 동일하게 작동
  promise.catch(alert);
  ```

- finally
  ```javascript
  // finally(func)는 .then(func, func)와 유사하지만, promise state를 알 수 없다.
  new Promise((resolve, reject) => { ... })
  .finally(() => alert("promise가 준비되었습니다."))
  .then((result) => console.log(result));
  ```
<br><br>
## 05. Promise Chaining
- promise.then(handler)에 사용된 handler가 Promise object를 return 하거나,
- handler가 어떤 값을 return하면 이 값이 promise의 result로 설정되므로 chaining 가능

```javascript
new Promise((resolve, reject) => {
    resolve(1);
})
.then((result)=>(result*2))
.then((result) => (result + 5))
.then((result) => {return new Error(`에러 발생 ${result}`)})
.then(null, alert);
```
