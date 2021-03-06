## ✨ 좋은 객체지향 설계의 3가지 원칙

<br>

### 🚨 SRP 단일 책임 원칙
####  &nbsp; 👉 하나의 Class는 하나의 책임만 가져야 한다.

  - SRP 단일 책임 원칙을 따르기 위해 관심사를 분리
  - Interface 구현 객체를 생성 및 연결하는 역할을 AppConfig Class에 부여
  - Client 객체는 실행하는 책임만을 가짐

---

### 🚨 DIP 의존관계 역전 원칙
####  &nbsp; 👉 구체화(Class)에 의존하지 말고, 추상화(Interface)에 의존하라.
####  &nbsp; 👉 AppConfig Class에서 '의존성 주입'방법을 채택하여 DIP 법칙을 준수할 수 있다.

  - 새로운 정책을 반영할 때, 코드가 구체화에 의존할 경우, 상당 부분(Client)의 변경이 필요
  - Client Code는 추상화 Interface에 의존하도록 구현하며, AppConfig에서의 의존성 주입을 통해 DIP 원칙을 따름

---

### 🚨 OCP
####  &nbsp; 👉 소프트웨어 요소는 확장에는 열려있고, 변경에는 닫혀있어야 한다.

  - 소프트웨어 요소를 확장해도 사용 영역의 변경은 닫혀있도록 하라
