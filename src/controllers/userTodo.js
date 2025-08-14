const getUserTodoData = (req, res) => {
  console.log("req, res: ", req, res);

  const response = {
    statusCode: 200,
    data: { name: "John Doe", age: 30 },
    metadata: {
      message: "Data Retrieve successfully",
    },
  };

  res.status(200).json(response);
};

module.exports = { getUserTodoData };
