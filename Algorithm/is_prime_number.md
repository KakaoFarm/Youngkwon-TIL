# is_prime_number (소수 판별 함수)

### 👉 어떤 2 이상의 자연수 N이 소수인지 여부를 판단하는 기본적인 방법 => O(N)
- N을 2부터 N-1까지의 정수로 하나하나 나눠보며, 나머지가 0인 경우가 한번이라도 있다면 N은 소수가 아니다.

```python
def is_prime_number(x):
    for i in range(2, x):
        if x % i == 0:
          	return False
    return True
```

---

### 👉 ⭐️ 제곱근까지만 살펴봄으로써 소수인지 판별하기 => O(N^(1/2)) 
- 소수 절반에 해당하는 제곱근까지만 살펴보면 소수 판별이 가능하다.

```python
import math

def is_prime_number(x):
    for i in range(2, int(math.sqrt(x))+1):
    if x % i == 0:
        return False
    return True
```