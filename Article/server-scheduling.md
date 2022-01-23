# Server Scheduling


### 👉 특정 주기로 Database를 업데이트 하려면 어떤 방법을 써야하지?
<p>
SOPT 활동을 시작하기 전부터 개인적으로 궁금했던 질문인데, 당장 필요한 기능은 아니었기에, 자세히 알아보지 않고 지내왔다.

하지만 이번 SOPT 29기 APPJAM에 Server developer로서 참여하게 되면서, 이는 ‘당장 구현해야 하는’ task로 내게 다가왔다.
</p>


---
<br>

### 👉 Database Query가 반복 실행될테니, 당연히 Database 설정을 해야하는거 아니야?
<p>
당연히 이와 같이 생각했다.
Database가 반복적, 주기적으로 업데이트 되기에, Database에서 스케줄링 관련 설정을 해서, 특정 쿼리문이 실행되도록 처리해야 할 것이라고 강하게 확신하고 예상했다.

사실 여전히 궁금한 질문 중 하나이다.
예를 들어, 같은 MySQL DB를 사용하더라도, 서버 환경 (구현 언어 등)이 다르다면, 같은 스케줄링 작업을 다른 방법으로 구현해야 할텐데, 이러한 측면에서 Database 상에서, 서버의 환경에 상관없이 동일한 벙법으로 스케줄링 기능을 제공하면 좋지 않을까 궁금증이 남는다.
</p>

---
<br>

### 👉 Node-Schedule module
<p>
Node.js 환경에서 개발된 Spark 서버이기에, 첫 검색 키워드는 “nodejs scheduling”이었다.
워딩이 상당히 비슷해서인지, 대부분의 포스트들이 node-schedule 모듈에 대해 소개하고 있었다.
첫 인상은 ‘상당히 간단해 보인다’ 였는데, 코드 예시는 다음과 같다.
</p>

```jsx
const schedule = require('node-schedule');

const job = schedule.scheduleJob('0 0 15 * * *', function() {
    funcs.checkLife();
});

...

```

Cron 표기법으로 스케줄링 할 시간을 설정하고, body에 스케줄링 작업 내용을 작성하면 된다.
하지만 이 방법은 Deploy 서버와 Local 서버가 동일한 DB를 공유하기 때문에, 중복해서 작업이 수행될 가능성이 있었으며, 반대로 서버가 일시적으로 꺼져있다면 스케줄링 된 작업이 수행되지 않는 문제가 발생할 수 있다.

---
<br>

### 👉 Schedule functions

다음은 Firebase에서 제공하는 schedule function이다.
우리는 Firebase의 Functions 기능을 사용했기에, 어쩌면 가장 이상적인 스케줄링 방법일 것이라고 생각했다.
코드 예시는 다음과 같다.

```jsx
exports.scheduledFunction = functions.pubsub.schedule('every 5 minutes')
.onRun((context) => {
  console.log('This will be run every 5 minutes!');
  return null;
});
```

```jsx
exports.scheduledFunctionCrontab = functions.pubsub.schedule('5 11 * * *')
  .timeZone('America/New_York') // Users can choose timezone - default is America/Los_Angeles
  .onRun((context) => {
  console.log('This will be run every day at 11:05 AM Eastern!');
  return null;
});
```

이를 사용하기 위해서는 Firebase 프로젝트 요금제가 Blaze 요금제여야 하며 부담이 크지 않을 정도의 비용이 발생한다.
또한 3개의 스케줄링 작업까지는 무료로 제공된다고 하니, 정말 매력적인 스케줄링 방법이라고 생각한다.

---
<br>

### 👉 Agenda & MongoDB

마지막으로 Agenda라는 node 모듈과 MongoDB를 활용한 스케줄링 방법이다.
다수의 작업을 Cron 표현 식으로 관리하게 되면, 작업 관리가 상당히 복잡해지기 때문에, Agenda 모듈을 활용한 스케줄링 작업이 하나의 대안이 될 수 있다.
간략하게 작동하는 원리를 요약하면, Scheduling 처리 할 작업을 MongoDB에 보관하여 관리한다.x

사용 방법은 다음과 같다.

```jsx
const agenda = require('agenda');
const db = new Agenda({ db: { address: 'localhost:27017/agenda-sample' }});

//Async job
agenda.define('greeting', function(job, done) {
  const data = jobs.attrs.data;
  console.log('hello world' + data);
  done();
});

//Sync job
agenda.define('greeting', function(job) {
  const data = jobs.attrs.data;
  console.log('hello world' + data);
});

agenda.on('ready', function() {
  console.log("Connected to MongoDB");
  agenda.start();
});
```

만약 복잡한 스케줄링 작업을 필요로 했다면, Agenda 모듈을 활용했을 것 같다.
하지만 Spark 서버는, 단 하나의 스케줄링 작업만을 필요로 했기에 Agenda 모듈을 채택하지 않았으며,
나중에 꼭 사용해보고 싶은 모듈로 기억하려 한다.