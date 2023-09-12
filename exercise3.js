fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const uncompleted = json
      .filter(todo => !todo.completed) 
      .map(todo => ({ userId: todo.userId, title: todo.title }));
    
    console.log(uncompleted); 
  })
  .catch(function(err) { 
    console.log(err);
  });
