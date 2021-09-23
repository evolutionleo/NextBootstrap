
export default function Todo(props) {
    return (
        <div key={props.idx}>
            <span>{props.idx+1}) </span> {props.todo.text}
            <div>done: {props.todo.done}</div>
        </div>
    )
}