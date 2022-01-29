# ast.literal_eval

### 👉 배열 형태의 문자열을 배열로 변환해주는 함수

```python
import ast

str = "[1, 2, 3]"
arr = ast.literal_eval(str)

for num in arr:
    print(num)
```