# REST API

### 👉 HTTP의 주요 저자인 Roy Fielding(로이 필딩)이 웹 설계의 우수성에 비해 웹의 장점을 제대로 사용하지 못한다며 발표한 네트워크 아키텍처

---

<br>

## 💚 HTTP Method in a RESTful API

| HTTP METHOD |   Collection Resource<br>https://youngkwon.site/gallery  | Member resource<br>https://youngkwon.site/gallery/:id |
| :---: | :----------: | :---------------: |
| GET | 모든 리소스를 가져온다. (Retrieve) | :id로 하나의 리소스를 가져온다. (Retrieve) |
| POST | 리소스를 등록한다. (Create) | 리소스를 등록한다. (Create) |
| PUT | 모든 리소스를 교체한다. (Replace) | :id로 하나의 리소스를 교체한다. (Replace)<br>리소스가 존재하지 않을 경우 생성한다. (Create) |
| PATCH | 모든 리소스를 수정한다. (Update) | :id로 하나의 리소스를 수정한다. (Update) |
| DELETE | 모든 리소스를 삭제한다. (Delete) | :id로 하나의 리소스를 삭제한다. (Delete) |

<br>

---

<br>

## 💚 URI Design Pattern

1. 동사보다는 명사를 사용한다.
2. URI 마지막에는 슬래시(/)를 붙이지 않는다.
3. 밑줄(_)을 사용하지 말고 하이픈(-)을 사용한다.
4. URI는 소문자로 나타낸다.
5. 파일 확장자는 포함하지 않는다.
6. 리소스 간의 관계 표현은 예시와 같이 설계한다. (ex. /flowers/:flowerId/colors/:colorId)

<br>

---

<br>

## 💚 pros and cons

- Positive Effect
  1. Easy to use: 가독성이 상당히 좋기 때문에 API가 의도하는 바를 파악하기 쉽다.
  2. Complete seperation between Client and Server. **[Stateless]: 명확한 역할 분리**
  3. Method를 헤더에 명시함으로써, 필요한 데이터로만 간결하게 payload를 작성할 수 있다. **[Readability]**

<br>

- Negative Effect
  1. 모든 케이스에 Restful한 디자인이 완벽하게 대응할 수 없다.
  2. 정해진 표준 가이드가 존재하지 않기 때문에 Rule보다는 Convention으로 구성된다.
  3. 특정 Client에서는 HTTP Method나 Status code 중 사용 불가능한 것들이 있다.