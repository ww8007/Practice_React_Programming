const p2 = new Promise((res) => setTimeout(() => res(10), 1));
console.log(Promise.resolve(p2 === p2));
