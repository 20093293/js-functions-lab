fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const completedTodosByUser = json.reduce((accumulator, todo) => {
      if (todo.completed) {
        if (!accumulator[todo.userId]) {
          accumulator[todo.userId] = 1;
        } else {
          accumulator[todo.userId]++; 
        }
      }
      return accumulator;
    }, {});


    for (const userId in completedTodosByUser) {
      console.log(`User ID ${userId}: ${completedTodosByUser[userId]}`);
    }
  })
  .catch(function(err) { 
    console.log(err);
  });
