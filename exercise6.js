fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const completedTodosByUser = json.reduce((accumulator, todo) => {
      if (todo.completed) {
        const userId = todo.userId;
        if (!accumulator[userId]) {
          accumulator[userId] = {
            userId,
            completedCount: 1,
          };
        } else {
          accumulator[userId].completedCount++;
        }
      }
      return accumulator;
    }, {});

    // Convert the object values (user data) into an array
    const completedTodosArray = Object.values(completedTodosByUser);

    // Iterate over the array and display the count for each user
    completedTodosArray.forEach(user => {
      console.log(`User ID ${user.userId}: ${user.completedCount} completed todos`);
    });
  })
  .catch(function(err) { 
    console.log(err);
  });
