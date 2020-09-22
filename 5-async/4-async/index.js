async function fetchData(url) {
  // <-- start
  // TODO 24: 通过await/async实现异步请求
  try {
    const res = await fetch(url, {
      method: 'GET'
    });
    const result = await res.json();
    document.writeln(result.name);
  } catch (e) {
    console.error(e);
  }
  // end -->
}

const URL = 'http://localhost:3000/api';
fetchData(URL);
