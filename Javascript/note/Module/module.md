# Module

## 01. What's the module
- 특정 목적 혹은 기능에 따라 분리된 파일 혹은 something like that
- Javascript에서 모듈은 하나의 Class 혹은 특정한 목적을 가진 함수들로 구성된 하나의 라이브러리

<br>

## 02. Features
- 모듈은 Strict mode (use strict)로 실행되므로, 선언되지 않은 변수에 값을 할당하는 구문은 에러를 발생시킴
- Moudle Script에서 선언된 변수는 모듈스코프(Module scope)이므로 다른 script에서 참조 불가능
- 따라서 HTML에서 Script를 병렬적으로 인라인 처리해도 참조 불가능하며, Script level에서 Export 및 Import 처리해야함
- 모듈은 여러 곳에서 사용되어도 최초 호출시 단 한번만 실행되며, 모든 위치에서 공유된다.(List type의 Copy 느낌)
- 모듈 스크립트는 일반 스크립트와 달리 지연 실행되지만, async 키워드를 사용함으로써 비동기 수행할 수 있다.(Counter 등 독립적인 기능을 수행하는 모듈에 주로 사용)
- 일반 스크립트와 달리, 모듈타입의 스크립트는 인라인일지라도 async 키워드를 사용할 수 있음

