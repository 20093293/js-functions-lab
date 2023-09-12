fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const completedCount = json.reduce((accumulator, todo) => {
      if (todo.completed) {
        accumulator.push({ userId: todo.userId, title: todo.title });
      }
      return accumulator;
    }, []);

    completedCount.forEach((todo, index) => {
      console.log(`${todo.userId} - ${todo.title}`);
    });

    console.log(`Number of completed todos: ${completedCount.length}`);
  })
  .catch(function(err) { 
    console.log(err);
  });
