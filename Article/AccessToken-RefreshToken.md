# Access token & Refresh token

### 📌 Refreshing an Expired Access Token
<img width="580" alt="token-flow" src="https://user-images.githubusercontent.com/39653584/153804598-ccb5c102-55d8-4e98-9e59-5710285af609.png">

---

### ⭐️ Sample Request

```
POST /oauth2/v4/token HTTP/1.1
HOST: www.googleapis.com
Content-Type: application/x-www-form-urlencoded

client_id=<Client-Id>&
client_secret=<Client-Secret>&
refresh_token=<Refresh-Token>&
grant_type=refresh_token
```
<br>

```json
{
  "access_token": "1/fFAGRNJru1FTz70BzhT$Zg",
  "expires_in": 3920,
  "token_type": "Bearer"
}
```

---

### 🚨 Why Refresh Token?
1. Refresh token is only exchanged with authorization server while Access token is exchanged with resource servers (e.g. Youtube, Facebook).
2. If an access token is stolen, it is hard for the Resource server not to trust that token and the attacker has limited time to hack into the system.
3. But Refresh tokens are useless because the attacker requires the client id and secret + refresh token to get a new access token.
4. Because Refresh tokens can long-lived, users don't need to log in every time the Access token expired.

---

### ✏️ Example how to use
1. 회원가입, 로그인 => AT, RT 제공
2. RT를 통해 지속적인 AT 갱신
3. 로그아웃 => RT 삭제 (status: 204)
