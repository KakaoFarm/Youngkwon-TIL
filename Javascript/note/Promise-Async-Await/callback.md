# Callback
## 01. First class function
- Javascript & Typescript에서 function은 first class function.
<br><br>
## 02. Error Handling
- callback function이 error handling 할 수 있게 다음과 같은 오류 우선 콜백(error-first-callback) 패턴을 따른다.

```javascript
// loadScript function 정의
function loadScript(src, callback) {
  let script = document.createElement('script');
  script.src = src;

  script.onload = () => callback(null, script);
  script.onerror = () => callback(new Error(`${src} 로딩 중 에러 발생.`));

  document.head.append(script);
}

// loadScript function 호출
loadScript('/my/script.js', function(error, script) {
  if (error) {
    // 에러 처리
  } else {
    // 스크립트 로딩이 성공적으로 끝남
  }
});
```
