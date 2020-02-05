fetch("https://wordsapiv1.p.rapidapi.com/words/hatchback/typeOf", {
  method: "GET",
  headers: {
    "x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
    "x-rapidapi-key": "5c8fee0193msh309f0e96bca8cc3p1a9a8ajsne3c6bb2870ed"
  }
})
  .then(response => {
    // console.log(response.json());
  })
  .catch(err => {
    console.log(err);
  });
