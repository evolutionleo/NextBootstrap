const todos = [
    {text: 'Do stuff', done: false},
    {text: 'Do stuff 2', done: false},
    {text: 'Do stuff 3', done: false},
];

export default function fetchTodo(req, res) {
    res.status(200).json(todos[req.query.todo]);
}