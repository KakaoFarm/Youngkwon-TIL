
# How to export and import module

- Export
```js
// ๐ sayHi.js
export function sayHi(user) {
  alert(`Hi, ${user}!`);
}

export function sayHello(user) {
  alert(`Hello, ${user}!`);
}
```

- Export ( Seperate 'export' from the definition )
```js
// ๐ sayHi.js
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
// ๐ main.js
import { sayHi } from './sayHi.js';

alert(sayHi); // ํจ์
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
// ๐ main.js
import { sayHi as hi, sayHello as hello } from './say.js';

hi('John'); // Hello, John!
hello('John'); // Bye, John!
```

- Export and Import using "default" keyword
<img width="816" alt="แแณแแณแแตแซแแฃแบ 2021-11-01 แแฉแแฎ 5 41 50" src="https://user-images.githubusercontent.com/39653584/139646940-b1d621fc-2035-4262-b7a5-e2917fe21c1a.png">


- Export and Import something without name
  
```js
// Export
// ํด๋์ค ์ด๋ฆ์ด ์์
export default class {
  constructor() { ... }
}

 // ํจ์ ์ด๋ฆ์ด ์์
export default function(user) {
  alert(`Hello, ${user}!`);
}

// ์ด๋ฆ ์์ด ๋ฐฐ์ด ํํ์ ๊ฐ์ ๋ด๋ณด๋
export default ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']


// Import
// ์ด๋ฆ ์์ด export ํ๋ฉด, ์ด๋ค ์ด๋ฆ์ด๋  ์๋ฌ ์์ด ๋์ํฉ๋๋ค.
// ํผ๋์ค๋ฌ์ด ์ ๊ฐ๊ฐ์ naming์ ๋ฐฉ์งํ๊ธฐ ์ํด export default keyword๋ฅผ ์ฌ์ฉ ํ๋๋ผ๋ naming ํ๋ ๊ฒฝ์ฐ๊ฐ ์์
import User from './user.js'; // ๋์
import MyUser from './user.js'; // ๋์
```
