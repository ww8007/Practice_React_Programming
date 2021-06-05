# ch02 문법

### 향상된 비동기 프로그래밍 1: 프로미스

- 프로미스는 비동기 상태 값으로 다룰 수 있는 객체
- 프로미스 사용하면 동기 프로그래밍 방식으로 비동기 코드를 작성 가능

### 프로미스 이해

- 콜백 패턴의 문제
  - 비동기 프로그래밍의 한가지 방법으로 콜백 패턴을 많이 사용하였음
  - 코드가 조금만 중첩이 되어도 코드가 상당히 복잡해지는 단점이 있음
  - .then 문법을 사용하면 코드가 복잡해서 이해를 못하는 경우가 많이 생기는데
  - 코드를 순차적으로 작성할 수 있다는 사실만 이해해도 괜찮다.

### promise의 3가지 상태

1. pending(대기중) : 결과를 기다리는 중
1. fulfilled(이행됨) : 수행이 정상적으로 끝났고 결과값을 가짐
1. rejected(거부됨) : 수행이 비정상적으로 끝남

```js
'use strict';

const { reject } = require("lodash");

const pi = new Promise((res, rej)=> {
    res(data);
    or reject('error message');
})

const p2= Promise.reject('error message'); [2]
const p3= Promise.resolve(param); [3]

```

- 일반적으로 promise는 new 객체를 이용해서 생성
  - 이렇게 생성이 되면 대기 중 상태로 됨
- 생성자에 함수안에서 예외가 발생하면 reject, 이행되면 rsolve
- [2] : new 키워드를 사용하지 않고 rej
- [3] : resolve를 호출해도 프로미스 생성
  - 입력값이 프라미스이면 객체 그대로 반환
  - 프로미스가 아니라면 이행된 상태인 프로미스 반환

```js
const p2 = new Promise((res) => setTimeout(() => res(10), 1));
console.log(Promise.resolve(p2 === p2));
```

### 프로미스 이용하기 1:then

- then은 처리됨 상태가 된 프로미스를 처리할 때 사용되는 메서드
- 프로미스가 처리됨 상태가 되면 the 메서드의 인수로 전달된 함수가 호출

### 프로미스 이용하기 2:catch

- catch는 프로미스 수행 중 발생한 예외를 처리하는 메서드
- catch 메서드는 then 메서드의 onReject와 동일한 역할
- 예외 처리는 catch를 이용해서 처리하는게 더 직관적이고 좋다

> catch 또한 return 값이 존재하므로 이 뒤에 동작은 then으로 처리가 가능하다.

### 프로미스 이용하기 3:finally

- 프로미스가 이행됨 또는 거부됨 상태일 때 호출되는 메;서드
- .then, .catch, .finally 이렇게 3개를 묶어서 쓸 수 있다.
- 데이터의 성공 실패 여부와 관계없이 서버에 로그를 보낼 때 finally 메스드를 사용

> finally는 새로운 프로미스를 생성하지 않는다!!!

### 프로미스 활용하기

- 병렬로 처리하기: Promise.all

  - 여러개의 프로미스를 병렬로 처리할 때 사용하는 함수
  - .then 메서드를 체인으로 각각의 비동기가 병렬로 처리되지 않는 단점이 존재
  - 비동기 함수가 의존성이 없다면 병렬로 처리하는게 더 빠름!!!

- 순서를 지키면서 처리

```js
reqeustData()
  .then((data) => {
    console.log(data);
    return requestData2();
  })
  .then((data) => {
    console.log(data);
  });
```

- Promise.all()을 이용한 병렬처리

```js
Promise.all([requestData3(), requestData4()]).then(([data1, data2]) => {
  console.log(data1, data2);
});
```

### promise 사용 시 주의할 점

- return 키워드 깜빡하지 않기

  - then 메서드 내부 함수에서 return 키워드를 입력하는 것을 깜빡하기 쉬움
  - then 메서드가 반환하는 프로미스 객체의 데이터는 내부 함수가 반환한 값

  ```js
  Promise.resolve(10)
    .then((data) => {
      console.log(data);
      Promise.resolve(20); // 여기에 return을 해주면 정상적으로 실행
    })
    .then((data) => {
      console.log(data);
    });
  ```

- Proise는 불변객체이다.
- Promise를 중첩 사용하지 않기
  - Promise를 중첩 사용하면 가독성이 떨어짐

### 향상된 비동기 프로그래밍 2:async await

- async await은 비동기 프로그래밍을 동기 프로그래밍처럼 작성이 가능할 수 있도록 추가된 기능
- Promise가 자바스크립트 표준이 되고 2년 후 ES6(2017)에서 표준이 됨
- async await이 완전히 대체하는 것은 아님
  - promise는 비동기 상태를 값으로 다루기 때문

### async await 이해하기

- async awiat은 프로미스를 반환

  ```js
  async function getData() {
    [1];
    return 123;
  }
  getData().then((data) => console.log(data));
  [2];
  ```

  - [1] : async는 항상 promise를 반환한다.
  - [2] : 따라서 then을 사용이 가능하다.

- 예외처리는 catch!!!

### await 키워드 사용

- await 키워드는 함수 내부에서 사용이 됨
- await 키워드 오른쪽에 프로미스를 입력하면 프로미스가 처리됨 상태가 될 때 까지 기다림
- await 키워드로 비동기 처리를 기다리면서 순차적으로 코드를 작성 가능

### async await 병렬로 실행하기

- 여러 비동기 함수를 순차적으로 실행 하려면 아래와 같이 작성

```js
async function getData() {
  const data1 = await asyncFunc1();
  const data2 = await asyncFunc2();
}
```

- 만약 두 함수 사이의 의존성이 없다면 동시에 실행하는 것이 좋음
- 프로미스는 생성과 동시에 비동기 코드가 실행된다.
- 그러므로 두 개의 프로미스를 먼저 생성하고 await 키워드를 나중에 사용하면 병렬로 실행된다.

```js
async function getData2() {
  const p1 = asyncFunc3();
  const p2 = asyncFunc4();
  const data1 = await p1;
  const data2 = await p2;
}
```

- Promise.all을 사용해서 병렬 처리가 더 쉽다.
  ```js
  async function getData() {
    const [data1, data2] = await Promise.all([asyncFunc1(), asyncFunc2()]);
  }
  ```
