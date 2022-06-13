function getNumber() {
  const URL =
    'https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300';
  return fetch(URL)
    .then((response) => response.json())
    .then((result) => {
      console.log(result.value);
      return result.value;
    });
}
