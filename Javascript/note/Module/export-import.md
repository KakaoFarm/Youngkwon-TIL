
# How to export and import module

- Export
```js
// 📁 sayHi.js
export function sayHi(user) {
  alert(`Hi, ${user}!`);
}

export function sayHello(user) {
  alert(`Hello, ${user}!`);
}
```

- Export ( Seperate 'export' from the definition )
```js
// 📁 sayHi.js
function sayHi(user) {
  alert(`Hi, ${user}!`);
}

function sayHello(user) {
  alert(`Hello, ${user}!`);
}

export { sayHi, sayHello };
```

- Import
```js
// 📁 main.js
import { sayHi } from './sayHi.js';

alert(sayHi); // 함수
sayHi('John'); // Hello, John!
```

- Import ( inline )
```html
<!doctype html>
<!-- Use a keyword 'module' -->
<script type="module">
  import {sayHi} from './say.js';
  document.body.innerHTML = sayHi('John');
</script>
```

- Import ( Using "as" )
```js
// 📁 main.js
import { sayHi as hi, sayHello as hello } from './say.js';

hi('John'); // Hello, John!
hello('John'); // Bye, John!
```

- Export and Import using "default" keyword
<img width="816" alt="스크린샷 2021-11-01 오후 5 41 50" src="https://user-images.githubusercontent.com/39653584/139646940-b1d621fc-2035-4262-b7a5-e2917fe21c1a.png">


- Export and Import something without name
  
```js
// Export
// 클래스 이름이 없음
export default class {
  constructor() { ... }
}

 // 함수 이름이 없음
export default function(user) {
  alert(`Hello, ${user}!`);
}

// 이름 없이 배열 형태의 값을 내보냄
export default ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']


// Import
// 이름 없이 export 하면, 어떤 이름이든 에러 없이 동작합니다.
// 혼란스러운 제각각의 naming을 방지하기 위해 export default keyword를 사용 하더라도 naming 하는 경우가 있음
import User from './user.js'; // 동작
import MyUser from './user.js'; // 동작
```
