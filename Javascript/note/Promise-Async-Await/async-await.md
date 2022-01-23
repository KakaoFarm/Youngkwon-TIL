# async / await

## 01. async
- function앞에 위치하는 keyword
- async function은 항상 promise를 return
- 단순 값을 return하면, 이는 fulfilled promise의 result로써 return


## 02. await
- async function의 내부에서만 사용 가능
- await는 promise가 settled 될 때까지 대기


```javascript

// promise.then과 달리 result를 외부에서 접근가능

async function showAvatar() {

  const myname = "youngkwon02";
  // github 사용자 정보 읽기
  let githubResponse = await fetch(`https://api.github.com/users/${myname}`);
  let githubUser = await githubResponse.json();

  // 아바타 보여주기
  let img = document.createElement('img');
  img.src = githubUser.avatar_url;
  img.className = "promise-avatar-example";
  document.body.append(img);

  // 3초 대기
  await new Promise((resolve, reject) => setTimeout(resolve, 3000));

  img.remove();

  return githubUser;
}

showAvatar();
```
