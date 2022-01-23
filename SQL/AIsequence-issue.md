# AI Sequence Issue

### 🚨 CSV File import 등으로 인해 발생하는 Auto increment value mismatch

- 다음과 같은 SQL을 실행하여, 특정 Column의 AI next value를 재설정 가능하다.

```sql
ALTER SEQUENCE spark.spark_spark_id_seq RESTART WITH 11343;
```