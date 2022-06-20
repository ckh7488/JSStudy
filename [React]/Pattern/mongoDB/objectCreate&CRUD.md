
## MongoDB

### create Mongoclient



1. mongo driver 설치.
2. import { MongoClient } from 'mongodb'

##### 몽고 클라이언트 만들기
`mongodb.js`
 ```javascript
 import { MongoClient } from 'mongodb'
 const options = {};	//옵션 넣는 곳.
 let client
 let clientPromise
 client = new MongoClient(uri, options);
 clientPromise = client.connect();

export default clientPromise;
 ```
 ---
### 클라이언트 사용 및 read하기
```javascript
import clientPromise from './mongodb'	//위의 파일이 있는 위치


async function readOperation(){
	const dbName = ''	//db이름
	const myClient = await clientPromise;
	
	// db에서 모든 db의 이름들 가져오기. ( [ {name: , sizeOnDisk: , empty: }, ... ] 형태 )
	const  ret0 = 
	await  myClient.db().admin().listDatabases()?.then(obj=>obj?.databases);
	
	
	// db이름에 있는 컬렉션이름을 뽑아옴
	const ret1 = 
	await myClient.db(`${dbName}`).listCollections().toArray().then(el=>el.name);
	
	//컬렉션이름에서 모든 documents를 뽑아옴.
	let ret2 = [];
	ret1.forEach(name=>{
		ret2.push( 
			myClient.db(`${dbName}`).collection(name).find({}).toArray();
			)
	})
	ret2 = await Promise.all(ret2);
	
}


```
