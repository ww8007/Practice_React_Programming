# 리액트 실전 활용법

- useEffect 훅의 기능은 간단하지만 사용하는 것은 쉽지 않음
- useEffect 훅을 잘못 사용하면 오래된 데이터를 참조하거나
- 부수효과 함수가 자주 실행되는 문제가 발생 가능

### 가독성과 생산성을 고려한 컴포넌트 코드 작성

- 같은 기능을 하는 컴포넌트라도 다양한 방식으로 작성이 가능
  - 유지 보수가 쉬운 코드
  - 컴포넌트의 인터페이스를 쉽게 파악할 수 있는 코드
  - 조건부 렌더링 가독성 높이기
  - 컴포넌트와 프레젠이션 컴포넌트

### 추천 컴포넌트 파일 작성 법

1. 파일 최상단에 속성값의 타입을 정의
   - 컴포넌트를 사용하기 위해서는 속성값 타입을 알아야 한다.
2. 컴포넌트 함수의 매개변수는 명명된 매개변수로 정의하는 것이 좋음
   - props.를 반복적으로 입력하지 않아도 된다는 점이 장점
3. 컴포넌트 바깥의 변수와 함수는 파일의 가장 밑에 작성

- 커스텀 훅을 작성하여서 반복되는 컴포넌트에 대해서는 리펙토링 하는 것이 좋은 방법

### 가독성을 높이는 렌더링 방법

- 컴포넌트 함수 내에서 특정 값에 따라 선택적으로 렌더링 하는 것을
- 조건부 렌더링이라고 한다.
- 삼항 연산자가 유용한 경우도 있지만 && 연산자가 더 가독성이 up

- && , ||
  - 두 개 모두 마지막으로 검사한 것을 반환
  - && : 첫 거짓 값 또는 마지막 값 반환
  - || : 첫 참 값 또는 마지막 값 반환
  - 렌더링 할 리액트 요소를 && 연산자 끝
  - 마지막에 코드를 작성하는게 특징

### && 연산자 주의 사항

- 변수가 숫자 타입인 경우 0은 거짓
- 문자열 타입인 경우 빈 문자열도 거짓

- 아래의 첫번 째 값은 캐시가 0원 일 때도 출력을 해야 하는데 출력을 안함
- 숫자 0이 덩그라니 출력
- 아래와 같이 해결 -> undefined도 아니고 null이 아니면 참

```js
{
  cash && <div>{cash}원 보유중</div>;
}
{
  cash != null && <div>{cash}원 보유중</div>;
}
```

- 변수가 배열인 경우에는 기본값으로 빈 배열을 넣어주는 것이 좋음
- reducer에서도 초기값을 설정할 때 이렇게 사용하는데
  - 이러한 이유가 있는 것은 처음 알았다.
- map함수에서 && 연산자를 사용해서 검사를 할 필요가 없다는 것이 장점

- 부모 컴포넌트 조건에 따라 자식 컴포넌트 마운트 언마운트
  - 상태값도 사라지고 렌더링 성능에도 안좋은 영향
  - 필요한 조건을 부모에서 설정해서 자식 조건이 간단해지는 장점

> 작성 요령

    코드 리뷰를 할 때 조건부 렌더링 쪽 코드가 복잡해서 힘든 경우가 많음
    이를 배려해서 작성하는 것이 좋음

### 관심사의 분리 프레젠테이션, 컨테이너 분리

- 기능별로 분리하는 것이 장점
- 속성값으로부터 새로운 상태값을 만드는 예

```js
import React from "react";
import { useState } from "react";

function Present({ todos }) {
  const [doneList, setDoneList] = useState(todos.filter((item) => item.done));
  function onChange(key, name) {
    setDoneList(
      doneList.map((item) => (item.key === key ? { ...item, name } : item))
    );
  }
  return <div></div>;
}

export default Present;
```

- onChange 함수를 통해서 목록의 이름을 수정하는 순간 부모가 가진 데이터와 sync가 맞지 않음
- 자식 컴포넌트에서 부모의 데이터를 별도의 상태값으로 관리하는 것은 나쁜 습관
- 비즈니스 로직과 상태값은 일부 컴포넌트로 한정해서 관리하는 것이 좋음
- 컴포넌트에 비즈니스 로직이나 상태값이 있어 재사용을 못하면 코드 중복 -> 게으름, 기술 부채

> 속성값으로 부터 상태값 만드는 것

    getDerivedStateFromProps가 이 기능을 위해 존재
    데이터를 복제하여 사용하는 것이 나쁨
    name 변경의 순간 새로운 객체 생성 -> 더 이상 부모의 객체 참조 x
    상태값을 불변 객체로 관리하기 때문
    -> doneList를 useMemo를 이용해서 생성
    -> onChangeName 함수를 부모로부터 속성 값으로 받음

### useEffect 훅 실전 활용법

- 의존성 배열을 잘 관리하지 못해서 발생한 버그는 디버깅이 쉽지 않음

- 의존성 배열을 관리하는 방법
  - 의존성 배열 : useEffect 훅에 입력하는 두 번째 매개변수
  1. 부수 효과 함수에서 API 호출
     - API 호출하면 useEffect 훅은 이용하는 코드
     - fetchUser 함수는 렌더링을 할 때 마다 호출되므로 비효율적

```js
useEffect(() => {
  fetchUser(useId).then((data) => setUser(data));
}, [userId]);
```

- userId가 변경 시에만 함수 호출
- 부수 효과 함수를 수정할 때는 추가된 매개변수를 자동으로 추가시켜주는 것을 잊지 말아야 한다.
- exhaustive-deps -> 의존성 배열 관리를 좀 더 쉽게 해줌

### useEffect 훅에서 async awiat 함수 사용

- useEffect 훅에서 async await 함수를 사용하기 위해서
- 부수 효과 함수를 async await 함수로 만들면 에러가 남
- -> 부수효과의 함수는 함수만 반환이 가능

  - 반환된 함수는 부수 효과 함수가 호출되기 직전과
  - 컴포넌트가 사라지기 직전에 호출됨

- useEffect 훅에서 async await 함수를 사용하는 한 가지 방법은 부수 효과 함수에서 async await를 만들어서 호출하는 법

```js
import React, { useState } from "react";
import { useEffect } from "react";

function Async() {
  const [userId, setUserId] = useState("");
  useEffect(() => {
    async function fetchAndSetUser() {
      const data = await fetchAndSetUser(userId);
      setUserId(data);
    }
    fetchAndSetUser();
  }, [userId]);
  return <div></div>;
}

export default Async;
```

### fetchAndSetUser 함수 재사용하기

- useCallback 훅을 이용해서 userId가 변경될 때만 fetchAndSetUser 함수 생성
- 이제 fetchAndSetUser 함수는 userId가 변경될 때만 호출됨

```js
import React, { useEffect } from "react";
import { useState } from "react";
import { useCallback } from "react";

function Refactor() {
  const [user, setUser] = useState();
  const userId = 1;
  const fetchAndSetUser = useCallback(
    async (needDetail) => {
      const data = await fetchAndSetUser(userId, needDetail);
      setUser(data);
    },
    [userId]
  );
  useEffect(() => {
    fetchAndSetUser(false);
  }, [fetchAndSetUser]);
  return <div></div>;
}

export default Refactor;
```

### 의존성 배열을 없애기 방법

- 의존성 배열을 사용하지 않는 게 좋음
- 의존성 배열을 관리하는데 생각보다 많은 시간과 노력이 들어감
- 속성 값으로 전달되는 함수를 의존성 배열에 넣는 순간, useCallback 등을 사용해서 자주 변경되지 않도록 신경써서 관리

- 부수 효과 함수 내에서 분기 처리하기
  - 의존성 배열을 입력하지 않는 대신 부수 효과 함수 내에서 실행 시점을 조절가능
  - if문을 통해서 조절이 가능하다.

### useState 상태값 변경 함수에 함수 입력하기

- 이전 상태값을 기반으로 다음 상태값을 계산하기 위해
- 상태값을 의존성 배열에 추가하는 경우

- 이전 상태값을 매개변수로 받음

```js
import React, { useEffect, useState } from "react";

function UseStateChangeStatus() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    function onClick() {
      setCount(count + 1);
      setCount((prev) => prev + 1); //[1]
    }
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, [count]); //[1] 과 같이 설정할시 의존성 배열 삭제 가능
  return <div></div>;
}

export default UseStateChangeStatus;
```

### useReducer 활용하기

- 여러 상태값을 참조하면서 값을 변경할 때는 useReducer 훅을 사용하는게 좋음
- 타이머에는 시간이 흐를 때 시,분,초 세가지 상태값을 참조
- useReducer를 통해서 의존성 배열을 삭제 가능

### useRef 활용하기

- 의존성 배열이 자주 변경되는 문제를 해결하는 방법은 여러가지 존재
- 상황에 따라 마땅한 방법이 보이지 않을 수 있음
- 속성값으로 전달되는 함수는 내용은 그대로지만 자주 변경되는 경우가 많음
- 해당 속성값이 렌더링 결과에 영향을 주는 값이 아니라면 useRef를 이용해서 제거 가능

> useRef 값을 부수 효과 함수에서 변경하는 이유

    컴포넌트 함수에서 직접 변경해도 된다고 생각할 수 잇지만 문제가 있음
    1. 부수효과 함수에서 값을 수정하는 것보다 빠른 시점에 변경
        - useEffect 코드를 작성하는 것 보다 간편
    2. 부수 효과 함수에서 useRef 값을 수정하는 이유는 나중에 도입될 concurrent 모드 때문
    3. concurrent 모드로 동작하면 컴포넌트 함수가 실행됐다고 하더라도 중간에 렌더링이 취소될 수 있음
    4. 렌더링이 취소 되더라도 useRef에는 잘못된 값이 저장 가능
    5. useRef 값은 컴포넌트 함수에는 직접 수정 하면 안 된다.
    - 10장에서 다시 학습

### 렌더링 속도를 올리기 위한 성능 최적화 방법

- 리엑트가 실행될 때 가장 많은 CPU 리소스를 사용하는 것은 렌더링
- UI 라이브러리이기 때문에 프로그램이 실행되는 동안에 화면을 그리고 또 그림
- 리액트 데이터와 컴포넌트 함수로 화면을 그림
- 대부분의 연산은 컴포넌트 함수의 실행과 가상 돔에서 발생됨
- 속성값이나 상태값이 변경되면 리액트가 자동으로 컴포넌트 함수를 이용해서 화면을 다시 그림

> 데이터 변경 시 렌더링 단계

    1. 이전 렌더링 결과를 재사용할지 판단
    1. 컴포넌트 함수를 호출한다.
    1. 가상 돔끼리 비교해서 변경된 부분만 실제 돔에 반영한다.

- 첫번째 단계에서 속성값이나 상태값 이전 이후 값을 비교하고 이후 단계를 생략할 수 있다.
- 클래스 : shouldComponentUpdate
- 함수형 : React.memo

> 평상시 코딩을 할 때 성능을 고민하지 않아도 됨

    성능 이슈가 생긴다면 그 때 고민해도 늦지 않음

### React.memo로 렌더링 결과 재사용하기

- 컴포넌트의 속성값이나 상태값이 변경되면 리액트는 그 컴포넌트를 다시 그림
- React.memo 함수로 감싼 컴포넌트라면 속성값 비교 함수가 호출된다.
- 이전 이후 속성값을 매개변수로 받아서 참 또는 거짓을 반환한다.

  - 참 : 렌더링 멈춤
  - 거짓 : 컴포넌트 함수를 실행해서 변경된 부분만 실제 돔에 반영

- React.memo 함수로 감싸지 않을 경우 항상 거짓을 반환하는 속성값 비교 함수가 사용된다고 생각 할 수 있다.
- 속성값 비교 함수가 항상 거짓을 반환하더라도 속성값이 변경되지 않는다면 실제 돔도 변경되지 않음
- 렌더링 성능이 중요한 경우 -> 컴포넌트를 React.memo 함수로 감싸서 함수의 실행과 가상 돔의 계산을 생략이 가능

### 특정 속상값의 변경 전과 변경 후

- 불변 객체로 관리할 경우 변경점을 잡아내는 것이 훨씬 쉽다!!!

> 리액트에서 속성값의 변경 여부를 계산하는 알고리즘

    React.memo 함수로 컴포넌트를 만들면 속성값이 변경된 경우만 렌더링 됨
    React.memo 함수의 두 번째 매개변수인 속성값 비교함수를 입력하지 않으면 리엑트에서 기본으로 제공하는 함수가 사용됨
    객체를 수정 불가능 하게 관리하면 최상위 객체의 참조값만 비교하더라도 값의 변경 유무를 알 수 있음

### 속성값과 상탯값을 불변 변수로 관리하기

- 함수의 값이 변하지 않도록 관리하기

  - 컴포넌트 함수 내부에서 함수를 정의해서 자식 컴포넌트의 속성값으로 입력하면 함수의 내용이 변경되지 않더라도 자식 컴포넌트는 속성값이 변했다고 인식

- useState, useReducer의 상태값 변경 함수는 변하지 않는다는 점을 이용하면 문제를 쉽게 해결 가능

- ```js
  onChange={fruit=> setSelectedFruit(fruit)}
  ```

  - 이렇게 생성하면 onChange 속성 값이 변화하기 때문에
  - 새로운 함수로 생성이 됨

- useCallback을 사용하고 의존성 배열에 빈배열을 넣어주민 함수는 항상 고정된 값을 가지게 된다.

### 객체의 값이 변하지 않도록 관리하기

- 함수와 마찬가지로 컴포넌트 내부에서 객체를 정의해서 자식 컴포넌트의 속성값으로 입력하면 자식 컴포넌트는 객체의 내용이 변경되지 않아도 변경됬다고 인식!!!
- 렌더링 할 때마다 새로운 객체를 만들어서 자식 컴포넌트의 속성값으로 전달

> 해결 : 컴포넌트 밖에서 상수로 관리

- but 다른 상태값이나 속성값을 이용해서 계산되는 값은 상수 변수로 관리가 불가하다.

- useMemo는 의존성 배열의 두번 째 값은 의존성 배열
  - 이전의 함수가 반환한 값을 기억
  - 배열에 들어간 값이 변경될 경우에만 동작
  - 꼭 필요할 때만 반환되는 값이 변경되도록 함
  - 불필요한 연산을 막아줌

> 상태값을 불변 객체로 관리하기

    객체로 관리하지 않으면 React.memo를 사용시 변경 값 적용 x
    꼭 !!! 객체로 만들어서 집어 넣어야함
    [...fruits, newFruit]

### 가상 돔에서의 성능 최적화

- 요소의 타입 또는 속성을 변경하는 경우

1. 요소의 타입을 변경하면 해당 요소의 모든 자식 요소 같이 변경
   - 비효율적
2. 요소를 추가하거나 삭제하는 경우
   - key 속성 값을 입력하면 같은 키를 가지는 요소끼리만 비교를 진행 하여 변경점을 찾는다.
   - 리액트는 바나나 요소가 변경되지 않았다는 것을 알고 있음
