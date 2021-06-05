async function getData() {
  const data1 = await asyncFunc1();
  const data2 = await asyncFunc2();
}

async function getData2() {
  const p1 = asyncFunc3();
  const p2 = asyncFunc4();
  const data1 = await p1;
  const data2 = await p2;
}

async function getData() {
  const [data1, data2] = await Promise.all([asyncFunc1(), asyncFunc2()]);
}
