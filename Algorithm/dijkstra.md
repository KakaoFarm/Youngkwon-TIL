# Dijkstra (최단 경로 구하기)

### 👉 Graph의 Edge에 가중치가 부여되는 경우, 최단경로를 구하기 위해 활용

```python
def dijkstra(start_node):
    dist = [float('inf') for _ in range(N + 1)]
    q = PriorityQueue()
    q.put((0, start_node))
    while q.qsize() > 0:
        (curr_dist, node) = q.get()
        if curr_dist < dist[node]:
            dist[node] = curr_dist
            for key, distance in graph[node].items():
                new_dist = curr_dist + distance
                q.put((new_dist, key))
    return dist
```
