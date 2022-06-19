# Json&text express 와 클라이언트

## 간단한 패턴.

| Express |client  |
|--|--|
| res.status(200).json({Post:  id}) | fetch(url).then(r=>r.json()).then(console.log) |
| res.status(200).end("hi") | fetch(url).then(r=>r.text()).then(console.log)|




