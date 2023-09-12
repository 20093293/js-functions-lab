fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const todoTitles = json.map(todo => todo.title); // Create an array of todo titles
    console.log(todoTitles); // Display the array of todo titles
  })
  .catch(function(err) { 
    console.log(err);
  });
