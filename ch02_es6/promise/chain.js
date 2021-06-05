reqeustData()
  .then((data) => {
    console.log(data);
    return requestData2();
  })
  .then((data) => {
    console.log(data);
  });

requestData3().then((data) => console.log(data));
requestData4().then((data) => console.log(data));

Promise.all([requestData3(), requestData4()]).then(([data1, data2]) => {
  console.log(data1, data2);
});
