fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const completed = json.filter(todo => todo.completed === true);

    const completedCount = completed.reduce((count, todo) => {
      return count + 1;
    }, 0);

    completed.forEach((todo, index) => {
      console.log(`${todo.title} - ${todo.completed}`);
    });

    console.log(`Number of completed todos: ${completedCount}`);
  })
  .catch(function(err) { 
    console.log(err);
  });
