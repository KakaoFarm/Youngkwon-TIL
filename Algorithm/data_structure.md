# Python Data Structure

### ๐ deque
- BFS์์ ํ์ฉํ๋ ์๋ฃ๊ตฌ์กฐ
- ์๋ฐฉํฅ Queue๋ก์จ, appendleft ๊ธฐ๋ฅ ์ ๊ณต

```python
# import
from collections import deque

# ์ ์ธ
q = deque([])

# append
q.append(i)
q.appendleft(i)

# pop
q.popleft()

# size
while q
len(q)
```

---

### ๐ PriorityQueue
- ์ฐ์ ์์ ํ

```python
# import
from queue import PriorityQueue

# ์ ์ธ
q = PriorityQueue()

# append
q.put(i)

# pop
q.get()

# size
q.qsize()
```

---

### ๐ heapq
- ์ผ๋ฐ์ ์ธ ๋ฐฐ์ด์ ์ต์ํ์ฒ๋ผ ๊ด๋ฆฌํด์ค
- q๋ฅผ ์ถ๋ ฅํ๋ฉด ์ ์ ์๋ ๊ธฐ์ค์ผ๋ก ์ ๋ ฌ๋์ด ์๋๋ฐ, heappop ํจ์๋ฅผ ํตํด ์ถ๋ ฅํด๋ณด๋ฉด ์ ๋ ฌ๋ ์์๋ก pop

```python
# import
import heapq

# ์ ์ธ
q = []

# append
heapq.heappush(q, i)

# pop
heapq.heappop(q)

# size
len(q)
```
