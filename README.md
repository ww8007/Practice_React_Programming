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
