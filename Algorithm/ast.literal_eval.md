# ast.literal_eval

### π λ°°μ΄ ννμ λ¬Έμμ΄μ λ°°μ΄λ‘ λ³νν΄μ£Όλ ν¨μ

```python
import ast

str = "[1, 2, 3]"
arr = ast.literal_eval(str)

for num in arr:
    print(num)
```