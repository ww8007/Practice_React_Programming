# 리액트 개념

- [리액트 개념](#%EB%A6%AC%EC%95%A1%ED%8A%B8-%EA%B0%9C%EB%85%90)
  - [상태값과 속성값으로 괸리하는 UI 데이터](#%EC%83%81%ED%83%9C%EA%B0%92%EA%B3%BC-%EC%86%8D%EC%84%B1%EA%B0%92%EC%9C%BC%EB%A1%9C-%EA%B4%B8%EB%A6%AC%ED%95%98%EB%8A%94-ui-%EB%8D%B0%EC%9D%B4%ED%84%B0)
  - [컴포넌트의 속성값과 상태값](#%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%9D%98-%EC%86%8D%EC%84%B1%EA%B0%92%EA%B3%BC-%EC%83%81%ED%83%9C%EA%B0%92)
  - [속성 값을 이용한 렌더링](#%EC%86%8D%EC%84%B1-%EA%B0%92%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EB%A0%8C%EB%8D%94%EB%A7%81)
  - [불변 객체로 관리하는 속성값과 상태값](#%EB%B6%88%EB%B3%80-%EA%B0%9D%EC%B2%B4%EB%A1%9C-%EA%B4%80%EB%A6%AC%ED%95%98%EB%8A%94-%EC%86%8D%EC%84%B1%EA%B0%92%EA%B3%BC-%EC%83%81%ED%83%9C%EA%B0%92)
  - [리액트 포털을 이용한 컴포넌트를 반환](#%EB%A6%AC%EC%95%A1%ED%8A%B8-%ED%8F%AC%ED%84%B8%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EB%A5%BC-%EB%B0%98%ED%99%98)
  - [리액트 요소와 가상 돔](#%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%9A%94%EC%86%8C%EC%99%80-%EA%B0%80%EC%83%81-%EB%8F%94)
  - [ReactDOM.render 함수를 주기적으로 호출하는 코드](#reactdomrender-%ED%95%A8%EC%88%98%EB%A5%BC-%EC%A3%BC%EA%B8%B0%EC%A0%81%EC%9C%BC%EB%A1%9C-%ED%98%B8%EC%B6%9C%ED%95%98%EB%8A%94-%EC%BD%94%EB%93%9C)
  - [리액트 요소가 돔 요소로 만들어지는 과정](#%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%9A%94%EC%86%8C%EA%B0%80-%EB%8F%94-%EC%9A%94%EC%86%8C%EB%A1%9C-%EB%A7%8C%EB%93%A4%EC%96%B4%EC%A7%80%EB%8A%94-%EA%B3%BC%EC%A0%95)
  - [리액트 훅 기초 익히기](#%EB%A6%AC%EC%95%A1%ED%8A%B8-%ED%9B%85-%EA%B8%B0%EC%B4%88-%EC%9D%B5%ED%9E%88%EA%B8%B0)
  - [상태값 추가하기:useState](#%EC%83%81%ED%83%9C%EA%B0%92-%EC%B6%94%EA%B0%80%ED%95%98%EA%B8%B0usestate)
  - [useState 훅 하나로 여러 상태값 관리하기](#usestate-%ED%9B%85-%ED%95%98%EB%82%98%EB%A1%9C-%EC%97%AC%EB%9F%AC-%EC%83%81%ED%83%9C%EA%B0%92-%EA%B4%80%EB%A6%AC%ED%95%98%EA%B8%B0)
  - [컴포넌트에서 부수효과 처리하기: useEffect](#%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%97%90%EC%84%9C-%EB%B6%80%EC%88%98%ED%9A%A8%EA%B3%BC-%EC%B2%98%EB%A6%AC%ED%95%98%EA%B8%B0-useeffect)
  - [컴포넌트에서 API 호출](#%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%97%90%EC%84%9C-api-%ED%98%B8%EC%B6%9C)
  - [이벤트 처리 함수를 등록하고 해제하기](#%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EC%B2%98%EB%A6%AC-%ED%95%A8%EC%88%98%EB%A5%BC-%EB%93%B1%EB%A1%9D%ED%95%98%EA%B3%A0-%ED%95%B4%EC%A0%9C%ED%95%98%EA%B8%B0)
  - [훅 직접 만들기](#%ED%9B%85-%EC%A7%81%EC%A0%91-%EB%A7%8C%EB%93%A4%EA%B8%B0)
  - [훅 사용 규칙](#%ED%9B%85-%EC%82%AC%EC%9A%A9-%EA%B7%9C%EC%B9%99)
  - [context API 이해하기](#context-api-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0)
  - [콘텍스트 API 활용하기](#%EC%BD%98%ED%85%8D%EC%8A%A4%ED%8A%B8-api-%ED%99%9C%EC%9A%A9%ED%95%98%EA%B8%B0)
  - [ref 속성값으로 자식 요소에 접근하기](#ref-%EC%86%8D%EC%84%B1%EA%B0%92%EC%9C%BC%EB%A1%9C-%EC%9E%90%EC%8B%9D-%EC%9A%94%EC%86%8C%EC%97%90-%EC%A0%91%EA%B7%BC%ED%95%98%EA%B8%B0)
  - [ref 속성값 활용하기](#ref-%EC%86%8D%EC%84%B1%EA%B0%92-%ED%99%9C%EC%9A%A9%ED%95%98%EA%B8%B0)
  - [ref 속성값으로 함수 사용하기](#ref-%EC%86%8D%EC%84%B1%EA%B0%92%EC%9C%BC%EB%A1%9C-%ED%95%A8%EC%88%98-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0)
  - [렌더링과 무관한 값 저장하기](#%EB%A0%8C%EB%8D%94%EB%A7%81%EA%B3%BC-%EB%AC%B4%EA%B4%80%ED%95%9C-%EA%B0%92-%EC%A0%80%EC%9E%A5%ED%95%98%EA%B8%B0)
  - [메모제이션 훅:useMemo, useCallback](#%EB%A9%94%EB%AA%A8%EC%A0%9C%EC%9D%B4%EC%85%98-%ED%9B%85usememo-usecallback)
  - [useMemo](#usememo)
  - [useCallback](#usecallback)
  - [useCallback 훅이 필요한 예](#usecallback-%ED%9B%85%EC%9D%B4-%ED%95%84%EC%9A%94%ED%95%9C-%EC%98%88)
  - [컴포넌트의 상태값을 리덕스처럼 관리하기](#%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8%EC%9D%98-%EC%83%81%ED%83%9C%EA%B0%92%EC%9D%84-%EB%A6%AC%EB%8D%95%EC%8A%A4%EC%B2%98%EB%9F%BC-%EA%B4%80%EB%A6%AC%ED%95%98%EA%B8%B0)

### 상태값과 속성값으로 괸리하는 UI 데이터

- UI 라이브러리인 리액트는 UI 데이터를 관리하는 방법을 제공한다.
- UI 데이터는 컴포넌트 구성
  1.  컴포넌트 내부에서 관리되는 상태 값
  1.  부모 컴포넌트에서 내려주는 상태 값
- 리덕스와 같은 전역 데이터를 관리해 주는 라이브러리도 상태 값, 속성 값 이용

> UI 데이터가 변겨오디면 리액트가 컴포넌트 함수를 이용해 화면을 자동으로 갱신해주는 것이 핵심!!!

- 리액트는 명령형(imperative) 프로그래밍, 선언형(declarative) 프로그래밍이 존재
  - 컴포넌트 반환 코드가 선언형으로 작성되면 리액트 돔 뿐만 아닌 모바일 네이티브 UI에서도 사용이 가능
  - 선언형이 명령형보다 추상화 단계가 높다고 할 수 있다.

### 컴포넌트의 속성값과 상태값

npx create-react-app

- 컴포넌트의 상태값 : 해당 컴포넌트가 관리하는 데이터
- 컴포넌트의 속성값 : 부모 컴포넌트로부터 전달받는 데이터

> react UI : 무조건 상태값, 속성값으로 관리!!!

- 컴포넌트의 상태값을 이용하면 리액트가 UI 데이터의 변경을 알 수 있음
- 컴포넌트 상태값을 추가할 때는 useState 훅을 사용
- 반환하는 배열의 첫 번째 원소 : 생태 값
- 반환하는 배열의 두 번째 원소 : 상태 값 변경 함수

### 속성 값을 이용한 렌더링

- 속성값 : 부모 컴포넌트가 전달해 주는 데이터
- 대부분의 경우 UI 데이터를 포함한다.
- 만약 속성 값이 변경될 때만 렌더링 되길 원한다면 React.memo 사용가능!!!

- 같은 컴포넌트를 여러번 사용도 가능
- 사용된 각 컴포넌트는 다른 메모리기 공간을 가지기 때문에 두 개의 상태 값이 다르게 관리가 된다.

### 불변 객체로 관리하는 속성값과 상태값

- 속성값 : 불변
- 상태값 : 가변 -> but 불변 변수로 관리하는 것이 좋음

### 리액트 포털을 이용한 컴포넌트를 반환

- 리액트 포털을 이용해서 특정 돔 요소에 티액트 요소를 랜더링 할 수 있다.
- Modal 컴포넌트가 사용된 위치와 상관없이 렌더링할 위리를 선택 가능하다는게 장점

```js
import React, { useState } from "react";
import Modal from "./modal";
export default function App() {
  const [colors, setColor] = useState("red");
  function onClick() {
    setColor("blue");
  }

  return (
    <>
      <Modal></Modal>
      <button style={{ backgroundColor: colors }} onClick={onClick}>
        좋아요
      </button>
    </>
  );
}
```

### 리액트 요소와 가상 돔

- 리액트 요소는(element)는 리액트가 UI를 표현하는 수단
- 우리는 JSX 문법을 사용하기 때문에 리액트 요소의 존재를 잘 모름
- 요소를 이해하면 리액트가 내부적으로 어떻게 동작하는지 알 수 있음

- 랜더링 성능을 위해서 가상 돔 활용!!!

```js
const element = <a href="https://google.com">click here</a>;
const element = React.createElement(
  "a",
  { href: "https://google.com" },
  "click here"
);
```

- 위의 JSX가 아래와 같이 변경이 됨
- JSX 코드에서 태그 사이에 표현식이 들어가면 리액트 요소에는 표현식이 여러 개로 분할되어 들어감

### ReactDOM.render 함수를 주기적으로 호출하는 코드

- 리액트가 새로운 리액트 요소를 받으면 이전의 리액트 요소와 비교해서 변경된 부분만 실제 돔에 반영한다.
- 코드가 업데이트 되면서 실제 돔의 요소를 건드리지 않다는 것을 기억하면 된다.

### 리액트 요소가 돔 요소로 만들어지는 과정

- 하나의 화면을 표현하기 위해 여러 개의 리액트 요소가 트리(tree) 구조로 구성 됨
- 프로그램 화면은 여러 가지 이벤트를 통해서 다양한 모습으로 변환

- 데이터 변경 단계

1. 렌더 단게(render phase)
   - 실제 돔에 반영할 변경 사항을 파악하는 단계
1. 커밋 단계(commit phase)
   - 파악된 변경 사항을 실제 돔에 반영하는 단계

- 가상돔은 리액트 요소로부터 만들어짐
- 리액트는 랜더링을 할 때 마다 가상 돔을 만들고 이전의 가상 돔과 비교

  - 이는 변경 사항을 최소화 시키기 위함

- 과정
  1.  트리의 루트는 div로 변경
  1.  리액트 요소 트리가 실제 돔으로 만들어지려면 모든 리액트 요소의 type 속성 값이 문자열이여야 함
      - type 속성 값이 문자열이여야지 HTML 태그로 변환이 가능하기 때문
  1.  리액트 요소의 type 속성 값이 문자열이면 실제 돔 생성 가능
      - 최초의 리액트 요소 트리로부터 가상 돔을 만들고 이전 가상 돔과 비교해 내용을 결정 -> 렌더
  1.  렌더 단계는 ReactDOM.render 함수와 상태값 변경 함수에 의해 시작이 됨

> 최종 리액트 요소 트리를 만들기 위해 치환되는 컴포넌트의 리액트 요소도 메모리에 유지가 됨

    메모리에 저장된 컴포넌트의 리액트 요소는 렌더 단계의 효율을 높이는데 사용
    가상 돔은 UI에서 변경된 부분을 빨리 찾기 위한 개념
    리액트 요소도 가상 돔의 일부라고 생각이 가능

- 정리

  - ReactDOM.render 함수가 호출되고 최초의 렌더 단계 실행
  - 이후 만들어진 가상돔 -> 실제 돔으로 생성
  - 사용자의 클릭으로 새로운 가상 돔 생성
  - 두번 째 렌더 단계 실행 후 이전 가상 돔과 가상 돔을 비교

- 엄밀히 말하면 리액트 요소는 fiber(파이버)라는 구조체로 변환
  - 파이버는 리액트 버전 16부터 도입된 구조체 이름
  - 파이버로 동작할 때도 모든 type 속성이 문자열일 될 때 까지 연산한다는 사실에는 변함이 없다.

### 리액트 훅 기초 익히기

- 훅 : 함수형 컴포넌트에 기능을 추가할 때 사용하는 함수
- 함수형 컴포넌트에서 상탯값 사용 가능
- 자식요소에 접근 가능

### 상태값 추가하기:useState

- 컴포넌트에 상태값을 추가 가능

- 배치로 처리되는 상태 값 변경 함수
  - useState 훅이 반환하는 배열의 두 번째 원소는 상탯값 변경 함수
  - 리액트는 상태값 변경 함수 호출 시 해당 컴포넌트를 다시 그림
  - 그 과정에서 자식 컴포넌트도 같이 렌더링 됨
  - 상태 값 변경 함수 : 배치(batch)로 처리

> 상태값 변경 함수

    비동기로 처리 함
    동기로 처리하면 상태값 변경 함수가 호출될 때 마다 화면을 다시 그려서
    성능이슈가 남

- 상태값 변경 함수에 함수 입력하기

  - 상태값 변경 함수의 인수로 함수를 입력 가능
  - 비동기로 처리되는 문제

    ```js
    const onClick2 = () => {
      setCount(counts + 1);
      setCount(counts + 1);
    };
    ```

  - 아래와 같이 함수로 입력하면 비동기 문제 해결(2번 증가)

    ```js
    const onClick2 = () => {
      setCount((prev) => prev + 1);
      setCount((prev) => prev + 1);
    };
    ```

- 상태값 변경 함수는 비동기 처리이지만 순서가 보장된다!!!

### useState 훅 하나로 여러 상태값 관리하기

- 상태값 변경 함수는 클래스형 컴포넌트 setState 메서드와 조금 다르게 동작함
- setState는 기존 상태값과 새로 입력된 값을 병합하는 특징이 있음
- 그러나 useState 훅은 기존 상태값에 덮어씌움

> ... (spread)연산자를 통해서 기존 객체를 복사 함

    상태값을 하나의 객체로 관리할 때는 useReducer 훅을 사용하는게 좋음

> 리액트 외부에 등록된 이벤트 처리 함수에서는 상태값 함수를 호출하면 배치로 처리되지 않음

    unstable_batchUpdates 함수를 이용하면 상태값 변경 함수 모두 배치 처리

### 컴포넌트에서 부수효과 처리하기: useEffect

- 함수 실행 시 함수 외부의 상태를 변경하는 연산을 부소 효과라고 부름
- 특정한 이유 없다면 useEffect를 통해서 외부 상태 변경하는 것이 좋음
- API를 호출하는 것과 이벤트 처리 함수를 등록하고 해제하는 것이 부수효과의 예

> uesEffect 훅에 입력하는 함수를 부수효과 함수라고 함

    부수효과 함수는 렌더링 결과가 실제 돔에 반영된 후 호출됨
    버튼을 클릭할 때마다 다시 랜더링 되고
    랜더링이 끝나면 부수 효과 함수가 호출됨

- 부수효과 함수는 랜더링 결과가 실제 돔에 반영된 후에 비동기로 호출

### 컴포넌트에서 API 호출

- 부수 효과 함수는 랜더링 할 때 마다 호출하기 때문에 API 통신을 불필요하게 많이 하게 됨
- 이를 방지 하기 위해 useEffect 훅의 두 번째 매개변수로 **배열**을 입력하면
- 배열의 값이 변경되는 경우에만 함수가 호출
- 이를 의존성 배열이라고 함
- 대개의 경우 의존성 배열을 입력할 필요가 없음

### 이벤트 처리 함수를 등록하고 해제하기

- 부수 효과 함수는 함수를 반환 할 수 있다.
- 반환된 함수는 부수 효과 함수가 호출되기 적전에 호출
- 컴포넌트가 사라지기 직전에 마지막으로 호출됨
- 부수효과가 반환하는 함수는 프로그램이 비정상적으로 종료되지 않는다면 반드시 호출될 것이 보장됨
- 의존성 배열로 빈 배열을 입력하면 컴포넌트가 생성될 때만 부수효과가 호출
- 사라질때만 반환 함수가 호출

> useEffect 빈배열

    생성될 때 부수효과 함수 호출
    사라질 때 반환 함수 호출

### 훅 직접 만들기

- 리액트가 제공하는 훅을 이용해서 새로운 커스텀 훅 제작 가능
- 커스텀 훅을 이용해서 또 다른 커스텀 훅 제작 가능

- 리액트의 내장 훅처럼 커스텀 훅은 use로 시작하는게 좋음
- 코드 가독성이 좋아지는 장점이 있다.

### 훅 사용 규칙

1. 하나의 컴포넌트에서 훅을 호출하는 순서는 항상 같아야 한다.
1. 훅은 함수형 컴포넌트 또는 커스텀 훅 안에서만 호출 되어야 한다.

### context API 이해하기

- 속성값을 기계적으로 써내려 가는 것이 아닌 좀 더 효과적인 방법으로 전달이 가능
- createContext를 통한 context 생성

  - ```js
    React.createContext(defaultValue) => {Prvider, Consumer}
    ```
  - 상위 컴포넌트에서는 Provider 컴포넌트를 이용해서 데이터를 전달
  - 하위 컴포넌트에서는 Consumer 컴포넌트를 이용해서 데이터를 사용
    - Consumer 컴포넌트는 데이터를 찾기 위해 상위로 올라가면서 가장 가까운 Provider 사용
    - 만약 찾지 못한다면 기본값을 사용
  - Provider 컴포넌트의 속성값이 변경되면 모든 Consumer 컴포넌트는 다시 랜더링
  - 그러나 중요한 점이 중간에 위치한 컴포넌트의 랜더링 여부가 상관 없이 다시 랜더링 됨
  - 이를 React.memo를 사용해서 다시 랜더링 되지 않도록 수정

```js
import React from "react";

const UserContext = React.createContext("");

function App() {
   return (
      <div>
         <UserContext.Provider value="mike">
            <div>상단 메뉴</div>
            <Profile />
            <div>하단 메뉴</div>
         </UserContext.Provider>
      </div>
   );
}
React.memo를 이용해서 만들어 졌고 속성값이 없기 때문에 최초 한번만 랜더링 됨
const Profile = React.memo(() => {
   return (
      <div>
         <Greeting />
         {/*....*/}
      </div>
   );
});

function Greeting() {
   return (
      <UserContext.Consumer>
         {(username) => <p>{`${username}님 안녕하세요`}</p>}
      </UserContext.Consumer>
   );
}

export default App;

```

### 콘텍스트 API 활용하기

- createContext를 두 번 이용해서 두개의 context를 생성 가능하다.

- 하위 컴포넌트에서 콘텍스트 데이터를 수정하기
  - 하위 컴포넌트에서도 콘텍스트를 수정 가능하다.
  - 리덕스에서 상태를 변경하는 dispatch(디스패치) 함수를 여러 컴포넌트에서 사용하는 것과 같은 개념
  - useState를 이용해서 value로 **이벤트 처리 함수**를 넘겨주면 사용이 가능하다.

### ref 속성값으로 자식 요소에 접근하기

- 리액트로 작업하다 보면 돔 요소에 직접 접근해야 할 때가 있음
- 돔 요소에 포커스를 주거나 돔 요소의 크기나 스크롤 위치를 알고 싶은 경우
- 이 때 ref 속성 값을 이용하면 자식 요소에 직접 가능
- 자식 요소 : 컴포넌트, 돔 요소 일 수 있음

```js
import React, { useRef, useEffect } from "react";

function Ref() {
  const inputRef = useRef();
  // 아래와 같이 current.focus로 랜더링 시 포커스 가능
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button>저장</button>
    </div>
  );
}

export default Ref;
```

### ref 속성값 활용하기

1. 함수형 컴포넌트에서 ref 속성 값 사용하기

- 클래스형 컴포넌트에서 ref 속성값을 입력하면 ref.current는 해당 컴포넌트의 인스턴스를 가르킴
- ref.current로 해당 클래스의 메서드를 호출 가능

- 함수형 컴포넌트는 인스턴스로 만들어지지 않지만
- useImperativeHandle 훅을 사용하면 함수형 컴포넌트에서도 변수와 함수를 외부로 노출 가능

### ref 속성값으로 함수 사용하기

- ref 속성값에 함수를 입력하는 경우
- 코드를 실행하여도 의도한 대로 동작하지 않음

  - 컴포넌트가 랜더링될 때 마다 새로운 함수를 ref 속성으로 넣어주기 때문
  - 리액트는 ref 속성값으로 새로운 함수가 들어오면 이전 함수에 null 인수를 넣어서 호출하고
  - 새로운 함수에는 요소의 참조값을 넣어서 호출

- 문제점 해결
  - useCallback 함수 사용
  - useCallback 훅의 메모이제이션 기능 덕분에 한 번 생성된 함수를 계속 재사용
  - input 요소가 생성되거나 제거될 때만 setInitialText 함수가 호출됨

### 렌더링과 무관한 값 저장하기

- useRef 훅은 자식 요소에 접근하는 것 이외에도 중요한 용도가 하나 더 존재
- 컴포넌트 내부에서 생성되는 값 중에는 렌더링과 무관한 값도 존재
- useRef : 저장할 때 useRef 훅을 사용
  - setTimeout이 반환하는 값은 어딘가 저장
  - clearTimeout 호출할 때 사용
  - useRef 훅을 이용해서 이전 상태 저장

> useState 훅도 변수로 사용될 수 있지만 컴포넌트의 생명주기 밀접하기 연관되어 있기 때문에 렌더링과 무관한 값을 저장하기에는 적합하지 않음

- age 이전 상태값을 저장하기 위해 useRef 훅 사용
- age 값이 변경되면 그 값을 prevAgeRef에 저장

```js
import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

function Ref_using() {
  const [age, setAge] = useState(20);
  const prevAgeRef = useRef(20);
  useEffect(() => {
    prevAgeRef.current = age;
  });
  const prevAge = prevAgeRef.current;
  const text = age === prevAge ? "same" : age > prevAge ? "older" : "younger";
  return (
    <div>
      <p>{`age ${age} is ${text} than age ${prevAge}`}</p>
      <button
        onClick={() => {
          const age = Math.floor(Math.random() * 50 + 1);
          setAge(age);
        }}
      >
        나이변경
      </button>
    </div>
  );
}

export default Ref_using;
```

### 메모제이션 훅:useMemo, useCallback

- useMemo와 useCallback은 이전 값을 이용해서 성능을 최적화 하는 용도로 사용된다.

### useMemo

- 계산량이 많은 함수의 반환값을 재활용하는 용도로 사용
- 첫 번째 매개변수로 함수를 입력
- useMemo 훅은 이 함수가 반환한 값을 기억
- useMemo 두번 째 훅은 의존성 배열
  - 의존성 배열의 값이 변경되지 않으면 이전에 반환 값 재사용
  - 값 변경 시 첫 번째 매개변수로 입력된 함수를 실행하고 반환값 기억

### useCallback

- useMemo는 메모지에이션과 비슷
- useCallback은 리액트의 성능을 위해 제공되는 훅

- 컴포넌트가 랜더링 될 때 마다 새로운 함수를 생성해서 자식 컴포넌트의 속성값으로 입력하는 경우가 많음
- 렌더링 될 때 마다 새로운 함수를 생성해서 자식 컴포넌트의 속성값으로 입력하는 경우가 많음
- 최근의 브라우저에서는 함수 생성이 성능에 미치는 영향은 작다고 주장한다.
- React.memo를 사용해도 불필요한 렌더링이 발생한다.
- useCallback 훅을 제공

### useCallback 훅이 필요한 예

- 불필요한 재 랜더링 상황에서 사용하면 된다.

### 컴포넌트의 상태값을 리덕스처럼 관리하기

- useReducer 훅을 사용하면 컴포넌트의 상태 값을 리덕스의 리듀서 처럼 관리가 가능하다.

- 트리의 깊은 곳 까지 이벤트 처리 함수 전달이 가능
  - 보통 상위 컴포넌트에서 다수의 상태값을 관리함
  - 이때 자식 컴포넌트로부터 발생한 이벤트에서 상위 컴포넌트의 상태값을 변경해야 하는 경우가 많음
  - 이를 위해 상위 컴포넌트에서 트리 깊은 곳 까지 이벤트를 전달하면 비효율적

> useReducer, contextAPI를 이용하면 이를 해결 가능하다.

- createContext를 이용해서 dispatch를 만들고
- 이를 Provider로 dispatch를 보내주면 된다.
