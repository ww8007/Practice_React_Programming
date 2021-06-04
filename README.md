# Practice_React_Programming

실전 리액트 프로그래밍 개정판-이재승

### 리액트 개발환경 직접 구축

UI 라이브러리 외의 요소들은 개발자가 신경써서 관리를 해야함

- 테스트 시스템
- 빌드 시스템
- 라우팅 시스템

- 간단하게 create-react-app을 통해서 개발이 제일 쉽긴 함
- 외부 패키지가 너무 많아서 각 패키지의 용도를 전혀 모르는 경우가 많음

### createElement

```js
React.createElemnt(component, props, ...children) => ReactElemnet
```

1. component
   - 문자열이나 컴포넌트가 여기 들어감
   - component의 인수가 문자열인 경우 HTML 태그에 해당하는 돔 요소 생성
2. props
   - 컴포넌트가 사용하는 데이터를 나타냄
   - 돔 요소의 경우 style, className등의 데이터 사용가능
3. children
   - 해당 컴포넌트가 감싸고 있는 내부의 컴포넌트를 가리킴
   - div가 두개의 p 태그를 감싸고 있는 경우 createElement 두개를 작성 가능

### 여러 개의 돔 요소에 렌더링 하기

ReactDOM.render 여러개를 생성할 시 이를 여러개로 랜더링이 가능하다.

### 바벨 사용해보기

> 바벨

    자바스크립트 코드를 변환해 주는 컴파일러
    최신 자바스크립트 문법을 지원하지 않는 환경에서도 최신 문법이 사용가능하다.
    이외에도 주석을 제거하나 코드를 압축하는 용도로 사용이 가능
    - JSX문법으로 작성된 코드를 createElement 코드로 바ㅝ줌

### 바벨 플러그인 프리셋

- 바벨은 자바스크립트 파일을 입력으로 받아서 또 다른 자바스크립트 파일로 준다.
- 변환해 주는 작업은 **플러그인** 작업으로 이루어짐
- 두번의 변환이 필요하면 두 개의 플러그인을 사용
- 플러그인의 집합 : 프리셋(preset)
- ex) 바벨에서 자바스크립트 코드를 압축하는 플러그인을 모아놓은 것을
  - preset-minify 프리셋을 사용
  - @babe/preset-react는 리액트 애플리케이션을 만들 때 필요한 플러그인을 모아 놓은 프리셋

> 설치

    npm  i @babel/core @babel/cli @babel/preset-react

npx bable --watch src --out-dir . --presets @babel/preset-react
npx babel --watch src --out-dir . --presets @babel/preset-react

### 웹펙의 기본 개념 이해

- 웹팩
  - 자바스크립트로 만든 프로그램을 배포하기 좋은 형태로 묶어주는 도구
  - 2000년대 초반의 웹페이지 HTMl 요청해서 화면을 새로 그림
  - 그 당시 자바스크립트는 돔을 조작하는 간단한 역할만 해서 코드의 양이 적었음
  - Ajax가 유행 했을 때도 10개의 수준
  - 하지만 시대가 지나 한 페이지에 수십 수백개의 자스파일 실행

> 자바스크립트 모듈 시스템

    es6부터 언어 차원으로 모듈 시스템 지원
    모든 최신 브라우저에서 지원을 함
    모듈 시스템 : commonJS
    현존하는 많은 수의 오픈 소스가 commonJS 모듈 시스템으로 구현

- 웹팩은 ESM(es6 모듈)과 commonJS를 모두 지원
- 이들 모듈 시스템을 이용해서 코드를 작성하고 웹팩을 실행하면 예전 브라우저에서도 동작하는 파일 생성
- 우리가 할 일은 웹팩이 만들어준 js 파일에 HTML의 script 태그에 이를 포함 시키는 것

### 웹팩 사용해보기

- webpack-tset 폴더 생성 후
- npm init -y

> 설치

    npm install webpack webpack-cli react react-dom

- react 패키지에서 우리가 위에서 내려받았던 파일이 포함
- react, react-dom 으로 인해서 외부 패키지 프로젝트를 쉽게 내려받을 수 있음

### create-react-app 사용해 보기

- 웹 애플리케이션을 만둘기 위한 환경을 제공
- 바벨과 웹팩도 호함되어 있음
- 그 밖의 테스트 시스템, HMR(hot-module-replacement)
- ES6+, css 후 처리

> 사용

    npx create-react-app cra-test

- 자동으로 변경이 되는 점

  - 이는 HMR이라는 기능 덕분
  - npm start 실행 시 create-react-app이 로컬 서버를 뛰워 주기 때문에 가능한 일
  - npm start 실행 시 로컬 시

- index.html
- index.js

  - 두개의 파일은 예약된 파일 이므로 지우면 안됨

- 검색엔진 최적화가 중요하다면 create-react-app 보다는
- 서버사이드 렌더링에 특화된 넥스트(next.js)를 사용하는게 좋음

- serviceWoker.js 파일에는 PWA(progressive web app)과 관련된 코드가 들어 있음
- PWA는 오프라인에서도 잘 동작하는 파일을 만들기 위한 파일
- PWA 기능을 원할 시 index.js 파일에 serviceWorkcer.register(); 코드를 추가

### 주요 명령어

- package.json 네 가지 npm 스크립트 명령어

- 개발 모드로 실행

  - npm start
  - HMR(hot-module-replacement)이 동작하기 때문에 코드를 수정하면 바로 반영
  - 코드 에러와 자동반영이 특징이다.

- https 옵션을 제공
  - API 호출시에 도움을 줌
  - MAC : HTTPS=ture npm start
  - Window : set HTTPS=true && npm start
  - 자체 서명된 인증서를 사용하여 https 사이트로 입장을 진행

### 빌드하기

- npm run build

  - 배포 환경에서 사용할 파일을 만들어줌
  - 빌드 후 생성된 정적 파일을 사용자가 내려 받게 만들면 됨
  - 노드 환경에서 동작하는 웹 서버 어플리케이션
  - 정적 파일을 서비스 할 때 간단하게 사용

- build/static 폴더 밑에 생성된 파일의 이름에 해시값이 포함
- 파일의 내용이 변경되지 않으면 해시값은 같음
- 새로 빌드를 하더라도 변경점이 없는 파일은 브라우저내 캐싱되어 있는 파일이 사용
- -> 재방문을 하더라도 페이지가 빠르게 랜더링 된다는 점이 특징

- 많은 css 파일을 import 하더라도 같은 장소에 저장
- 이미지 파일 크기가 10킬로 바이트보다 작은 경우 별도 파일이 생성되지 않고
- data url 형태로 제공

### 테스트 코드 실행하기

npm test를 입력하면 테스트 코드 실행

- create-react-app에는 제스트(jest)라는 테스트 프레임워크 기반으로 테스트 시스템이 구축
- App.text.js 파일이 생성

- 테스트 파일 인식
  1. **test** 폴더 밑에 있는 모든 자바스크립트 파일
  1. 파일 이름이 .test.js로 끝나는 파일
  1. 파일 이름이 .spec.js로 끝나는 파일

> 실행

    npm test

- CI(continuos intergration) 같이 watch 모드가 필요 없는 환경에서는 다음 명령어 사용
  - 맥 : CI=true npm test
  - 윈도우 : set "CI=true" && npm test

### 설정 파일 추출하기

> 실행

    npm run eject

- npm run eject를 실행 시 숨겨져 있던 cra의 내부 설정 파일이 밖으로 노출되게 됨
- 이 기능을 사용하면 바벨이나 웹팩의 설정을 변경 가능하다.
- 단점 : 개선하거나 추가된 기능이 패키지 버전을 올리는 식으로 적용되지 않음

- run eject 이외의 설정 변경 법

  1. react-scripts 프로젝트를 포크(fork)해서 나만의 스크립트를 만듬
     - 자유도가 높기 때문에 원하는 부분을 얼마든지 수정 가능
     - 수정된 내용을 여러 프로젝트에서 공통으로 사용할 수 있는 장점
  1. react-app-rewired 패키지를 사용

- but 두가지 방법 다 cra 이후에 변경된 내용을 쉽게 적용할 수 없다는 단점

### 자바스크립트 지원 범위

1. 지수 연산자
1. async await
1. rest-operator(나머지 연산자), spread-operator(전개 연산자)
1. dynamic import
1. class filed
1. JSX 문법
1. typesciprt(ts), flow(플로) 타입 시스템

- 타입스크립트를 지원
- 기본 설정에서 아무런 폴리필(polyfill)도 포함되지 않는다.
- ES6+에서 추가된 객체나 함수를 사용하고 싶다면 직접 폴리필에 추가
- ES8에 추가된 String.padStart 함수를 사용 하고 싶은 경우
  - core-js 패키지를 이용해서 다양한 폴리필을 선택적으로 사용가능
  - npm i core-js

### 폴리필

- index.js 파일에서 한 번만 가져오면 모든 곳에서 자유롭게 사용이 가능
- 바벨에서도 @babel/polyfill, @babel/preset-env 프리셋을 이용하면
- 폴리필을 추가 가능
- 사용하지 않은 폴리필 까지 추가되는 점에서 번들의 크기가 커지는 단점이 존재
- but env 형태의 폴리필을 추가하면 불필요한 파일들이 포함되는 **단점**

> 폴리필의 정의

    새로운 자바스크립트 표준이 나와도 브라우저가 지원하지 않으면 말짱 도루묵
    실행 시점에 주입하고자 하는 함수나 객체가 현재 환경에 존재하는지 검사해서 존재 하지 않는 경우에만 주입
    기능이 존재하는지 검새해서 그 기능이 없는 경우메나 주입하는 것을 폴리필이라고 함

### 코드 분할하기

- 코드 분할(code spliting)을 이용하면 사용자에게 필요한 양의 코드만 내려줄 수 있음
- 코드 분할을 하지 않으면 전체 코드를 한 번에 내려주기 때문에 첫 페이지 로딩 오래걸림
- 코드 분할의 한 간지 방법 **동적 임포트**

```js
import React, { useState } from "react";

export default function TodoList() {
  const [todos, setTodos] = useState([]); //- (1)
  const onClick = () => {
    //- (2)
    import("./Todo.js").then(({ Todo }) => {
      //- (3)
      const position = todos.length + 1;
      const newTodo = <Todo key={position} title={`할 일 ${position}`}></Todo>; //- (4)
      setTodos([...todos, newTodo]);
    });
  };
  return (
    <div>
      <button onClick={onClick}>할 일 추가</button>
      {todos} // - (5)
    </div>
  );
}
```

1. 할일 목록 관리할 상태값 정의
1. 할 일 추가 버튼을 누르면 호출 되는 이벤트 처리 함수
1. 동적 임포트를 사용함
   - 동적 임포트는 프로미스를 반환하기 때문에 then 메서드를 이용해서 이후 동작 정의 가능
1. 비동기로 가져온 Todo 컴포넌트를 이용해서 새로운 할 일 생성
1. 상태값 저장된 할 일 목록을 모두 출력

- build/static.js
- 배포 환경에서 브라우저 캐싱 효과를 보기 위해 파일 이름이 해시값이 추가
- 단일 페이지 에플리케이션을 만들기 위해 react-router-dom 패키지를 이용하는 경우
- react-router-dom 기능을 이용해서 페이지 단위로 코드 분할을 적용가능

### 환경 변수 사용하기
