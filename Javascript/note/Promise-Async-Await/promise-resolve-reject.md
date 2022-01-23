# Promise.resolve / reject Promise
- Promise 객체의 static methods
- async/await 문법이 생긴 후로 잘 사용되지 않음.

### 01. Promise.resolve(value)
- Promise.resolve(value) 함수는 결과값이 value인, fulfilled 상태의 Promise를 생성
- 다음 코드와 같다.
```javascript
let promise = new Promise(resolve => resolve(value));
```

### 02. Promise.reject(error)
- Promise.resolve(value) 함수는 결과값이 error인, rejected 상태의 Promise를 생성
- 실질적으로 쓸 일이 거의 없다.
- 다음 코드와 같다.
```javascript
let promise = new Promise((resolve, reject) => reject(error));
```