function fetchData(url) {
  // <-- start
  // TODO 23: 通过Fetch API实现异步请求
  return fetch(url, {
    method: 'GET'
  })
    .then(
      response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error(response);
      },
      error => console.log(error.message)
    )
    .then(jsonResponse => jsonResponse);
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(URL)
  .then(result => {
    document.writeln(result.name);
  })
  .catch(error => {
    console.error(error);
  });
