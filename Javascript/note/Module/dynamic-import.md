# Module dynamic import

- ```import(module)``` 표현식을 사용하면 동적으로 모듈 import 가능
- 이는 함수가 아닌 표현식이므로 변수에 할당할 수 없다.
- module이 export 하는 모든 것들을 포함하는 object를 result로 하는 fulfilled promise를 반환한다.

  
## Example

```js
let modulePath = prompt("어떤 모듈을 불러오고 싶으세요?");

import(modulePath)
  .then(obj => <모듈 객체>)
  .catch(err => <로딩 에러, e.g. 해당하는 모듈이 없는 경우>)
```

```js
const func = async() => {

  let {hi, bye} = await import('./say.js');

  hi();
  bye();

}
```

### - default keyword를 활용한 모듈은 다음과 같이 처리 가능
```js
let obj = await import('./say.js');
let say = obj.default;

// 위 두 줄을 다음과 같이 작성 가능
let {default: say} = await import('./say.js'); 

say();
```