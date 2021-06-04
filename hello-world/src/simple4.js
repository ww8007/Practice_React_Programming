function Container() {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <LikeButton />
      <div style={{ marginTop: 20 }}>
        <sapn>현재 카운트 :</sapn>
        <sapn>{count}</sapn>
        <button onClick={() => setCount(count + 1)}>증가</button>
        <button onClick={() => setCount(count - 1)}>감소</button>
      </div>
    </div>
  );
}
