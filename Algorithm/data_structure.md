# Python Data Structure

### 📌 deque
- BFS에서 활용하는 자료구조
- 양방향 Queue로써, appendleft 기능 제공

```python
# import
from collections import deque

# 선언
q = deque([])

# append
q.append(i)
q.appendleft(i)

# pop
q.popleft()
```

---

### 📌 PriorityQueue
- 우선순위 큐

```python
# import
from queue import PriorityQueue

# 선언
q = PriorityQueue()

# append
q.put(i)

# pop
q.get()
```

---

### 📌 heapq
- 일반적인 배열을 최소힙처럼 관리해줌
- q를 출력하면 알 수 없는 기준으로 정렬되어 있는데, heappop 함수를 통해 출력해보면 정렬된 순서로 pop

```python
# import
import heapq

# 선언
q = []

# append
heapq.heappush(q, i)

# pop
heapq.heappop(q)
```
