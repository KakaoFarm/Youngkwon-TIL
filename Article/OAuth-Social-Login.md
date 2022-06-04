## 🧬 Social-Login 흐름 이해하기

---

<br>

### **🚨 사용자 정보 관련 명칭**
```
  - 인가 코드(code): 사용자가 로그인 폼을 작성하면 Redirect Uri로 반환되는 코드
  - Access Token: 인가코드를 통해 조회 요청을 보내 얻게되는 토큰
  - Social uid: Access Token을 통해 얻게되는 사용자의 고유한 값
```

<br>

### **🌊 흐름 정리**
```
  1. User는 서비스가 제공하는 로그인 폼을 작성하여 로그인을 시도

  2. 로그인 성공시 Redirect Uri에 인가 코드가 code 키 값으로 반환

  3. (2)에서 얻은 인가 코드를 통해 Access Token을 받아오는 API 요청을 보냄

  4. (3)에서 얻은 Access Token을 통해 사용자의 uid를 얻음
```
