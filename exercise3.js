fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const uncompleted = json
      .filter(todo => !todo.completed) // Filter uncompleted todos
      .map(todo => ({ userId: todo.userId, title: todo.title })); // Map to objects with userId and title
    
    console.log(uncompleted); // Display the array of uncompleted todo objects
  })
  .catch(function(err) { 
    console.log(err);
  });
