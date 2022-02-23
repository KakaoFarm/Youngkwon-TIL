# Bellman-Ford (음수 간선이 존재할 때, 최단 경로 구하기)

### 👉 Graph의 Edge에 가중치가 부여되는 경우, 최단경로를 구하기 위해 활용
### 🚨 가중치가 음수인 간선이 존재할 때, Dijkstra 대신 사용


## 🎯 Logic
1. V-1번 모든 Edge에 대해 최소거리 갱신
2. 1번 더 모든 Edge에 대해 최소거리를 갱신했을 때, 값이 갱신되는 경우가 발생하면 음수 cycle이 존재함


```python
def bf():
    # float('inf')로 초기값을 주지 않는 이유는 dist[node] + w 연산을 위해
    dist = [2200000000 for _ in range(N+1)]
    dist[1] = 0
    for _ in range(N-1):
        for node in graph:
            for e, w in graph[node].items():
                if dist[e] > dist[node] + w:
                    dist[e] = dist[node] + w

    for node in graph:
        for e, w in graph[node].items():
            if dist[e] > dist[node] + w:
                return True # 음수 cycle 존재
    return False # 음수 cycle 존재하지 않음
```