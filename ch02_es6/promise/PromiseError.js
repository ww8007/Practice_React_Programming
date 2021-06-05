Promise.resolve(10)
  .then((data) => {
    console.log(data);
    Promise.resolve(20);
  })
  .then((data) => {
    console.log(data);
  });
