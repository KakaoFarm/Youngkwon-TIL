# AI Sequence Issue

### ๐จ CSV File import ๋ฑ์ผ๋ก ์ธํด ๋ฐ์ํ๋ Auto increment value mismatch

- ๋ค์๊ณผ ๊ฐ์ SQL์ ์คํํ์ฌ, ํน์  Column์ AI next value๋ฅผ ์ฌ์ค์  ๊ฐ๋ฅํ๋ค.

```sql
ALTER SEQUENCE spark.spark_spark_id_seq RESTART WITH 11343;
```