const getUserTodoData = (req, res) => {
  const todoList = [
    {
      id: 1,
      title: "Buy groceries",
      desc: "Purchase vegetables, fruits, and dairy products.",
      status: "Todo",
    },
    {
      id: 2,
      title: "Complete project report",
      desc: "Finalize the report for the quarterly project update.",
      status: "Pending",
    },
    {
      id: 3,
      title: "Attend team meeting",
      desc: "Join the Zoom call for the weekly team sync-up.",
      status: "Done",
    },
    {
      id: 4,
      title: "Write blog post",
      desc: "Write and publish the blog post about JavaScript best practices.",
      status: "Todo",
    },
    {
      id: 5,
      title: "Update website",
      desc: "Deploy the new updates and fix broken links.",
      status: "Pending",
    },
    {
      id: 6,
      title: "Call John",
      desc: "Follow up with John about the project status.",
      status: "Done",
    },
    {
      id: 7,
      title: "Complete JavaScript tutorial",
      desc: "Finish the tutorial on advanced JS topics.",
      status: "Todo",
    },
    {
      id: 8,
      title: "Organize workspace",
      desc: "Clean and organize the desk, files, and documents.",
      status: "Pending",
    },
    {
      id: 9,
      title: "Prepare for presentation",
      desc: "Rehearse the presentation for the upcoming client meeting.",
      status: "Todo",
    },
    {
      id: 10,
      title: "Plan weekend trip",
      desc: "Make travel arrangements and finalize the itinerary.",
      status: "Done",
    },
    {
      id: 11,
      title: "Read new book",
      desc: "Start reading 'Atomic Habits' by James Clear.",
      status: "Pending",
    },
    {
      id: 12,
      title: "Grocery shopping",
      desc: "Buy weekly essentials like bread, milk, and eggs.",
      status: "Todo",
    },
    {
      id: 13,
      title: "Fix bug in app",
      desc: "Resolve the issue causing app crash on login.",
      status: "Done",
    },
    {
      id: 14,
      title: "Send email to Sarah",
      desc: "Send a follow-up email to Sarah about the meeting schedule.",
      status: "Pending",
    },
    {
      id: 15,
      title: "Clean kitchen",
      desc: "Wash dishes and clean counters after dinner.",
      status: "Todo",
    },
    {
      id: 16,
      title: "Renew subscription",
      desc: "Renew the subscription for the design tool.",
      status: "Pending",
    },
    {
      id: 17,
      title: "Order new laptop",
      desc: "Buy a new laptop with better performance for work.",
      status: "Todo",
    },
    {
      id: 18,
      title: "Write thank-you notes",
      desc: "Write thank-you notes for the gifts received.",
      status: "Pending",
    },
    {
      id: 19,
      title: "Schedule doctor appointment",
      desc: "Book a consultation with the dentist for a check-up.",
      status: "Done",
    },
    {
      id: 20,
      title: "Go for a run",
      desc: "Take a 30-minute run in the park in the morning.",
      status: "Todo",
    },
  ];

  const response = {
    statusCode: 200,
    data: todoList,
    metadata: {
      message: "Data Retrieve successfully",
    },
  };

  res.status(200).json(response);
};

module.exports = { getUserTodoData };
