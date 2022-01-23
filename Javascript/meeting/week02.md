# Week 02
- Promise Async Await 학습 내용 공유
- 추후 스터디 material 논의
- 다음주 스터디에 공유할 학습 내용 확정

---
<br>

## 📚 Sharing

- Promise object의 then handler의 task 순위 관련 ( 영권 )
  
  ```js
    let promise = new Promise((resolve) => {resolve("useless")});

    // Case 01:
    promise
    .then(() => {alert('Promise state: fulfilled')});
    alert("EOF");

    // Case 02:
    promise
    .then(alert('Promise state: fulfilled'));
    alert("EOF");
  ```
  <p>
   위의 두개의 Case에서 다른 결과를 나타낸다.<br> Case 01의 경우 EOF, Promise state: fulfilled 순서로 Alert message가 나타나며,<br>
   Case 02의 경우 Case 01의 역순으로 message가 나타난다.<br>
   위의 두가지 Case의 차이점은 arrow function의 사용 유무이므로,<br>promise의 result를 사용하지 않는 then handler에서는 arrow function을 사용해야<br>Microtask queue에 enqueue 됨을 추측하였다. 
  </p>

---

- Promise의 static method 관련 ( 유정 )
  
  ```js
    // Case 01:
    Promise.all([
    new Promise(resolve => setTimeout(() => resolve("all 01"), 3000)), // all 01
    new Promise(resolve => setTimeout(() => resolve("all 02"), 2000)), // all 02
    new Promise(resolve => setTimeout(() => resolve("all 03"), 1000))  // all 03
    ]).then(console.log);

    // Case 02:
    Promise.allSettled([
    new Promise(resolve => setTimeout(() => resolve("as 01"), 3000)), // as 01
    new Promise((resolve, reject) => setTimeout(() => reject(new Error('err')), 2000)), // Error
    new Promise(resolve => setTimeout(() => resolve("as 03"), 1000))  // as 03
    ]).then(console.log);

    // Case 03:
    Promise.race([
    new Promise((resolve, reject) => setTimeout(() => resolve("race 01"), 1000)),
    new Promise((resolve, reject) => setTimeout(() => reject(new Error("에러 발생!")), 2000)),
    new Promise((resolve, reject) => setTimeout(() => resolve("race 03"), 3000))
    ]).then(console.log); // 1
  ```
  <p>
  음... 아깐 분명 allSettled가 젤 먼저 출력됐는데..😕<br>
  지금은 예상대로 결과 출력됨.
  </p><br>

---
<br>

## 💻 Material
- 타 Server 관련 스터디와 내용이 겹치지 않는 범위의 스터디 자료 필요
- 팟장님한테 물어보기~<br>
  <br>
---

<br>

## 💚 Next study
- 오늘 공유한 비동기 처리 관련 각자 고민해보기
- 기존 스터디 자료의 Module 관련자료 학습해오기 (Chap 12)
