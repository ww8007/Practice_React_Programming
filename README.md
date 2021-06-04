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
