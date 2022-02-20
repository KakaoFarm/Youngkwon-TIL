## ✨ OAuth의 원리와 흐름

<br>

### 🚨 역할 정리
```
  - User: Resource Owner
  - Our Server: Client
  - Social Server: Resource Server
```

### 🌊 흐름 정리
```
  1. User는 Client가 제공하는 로그인 Url을 통해 Resource server에 Request

  2. Resource server는 URL의 Client id, Redirect url을 통해 Scope를 확인해서 user에게 grant it

  3. Resource server는 User에게 'authorization code'를 Url에 담아서 제공

  4. User는 authorization code가 담긴 url에 자연스럽게 redirect

  5. Client는 4에서 넘어온 Authorization code와 Client id, Client secret을 함께 묶어서 Resource server에 요청

  6. 모든 정보가 일치하면 Resource server는 Client에게 해당 User의 Access token 제공
```