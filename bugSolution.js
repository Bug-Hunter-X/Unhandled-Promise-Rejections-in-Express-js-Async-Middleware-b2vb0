const express = require('express');
const app = express();
app.get('/users/:id', async (req, res, next) => {
  try {
    const userId = req.params.id;
    // Simulate an async operation that might throw an error
    const user = await someAsyncOperation(userId); //Replace with your actual DB query
    if (!user) {
      const err = new Error('User not found');
      err.status = 404;
      throw err; 
    }
    res.send(user);
  } catch (error) {
    next(error); // Pass error to error handling middleware
  }
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send({ error: err.message }); // Improved error handling with details
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

async function someAsyncOperation(userId) {
  //Simulate a database query, which might fail
  // ...Your Database logic here...
  if(userId == 'error'){
    throw new Error('Database error');
  }
  return {id: userId, name: `User ${userId}`};
} 