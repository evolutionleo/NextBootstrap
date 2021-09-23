import Todo from "../../components/Todo";

export async function getServerSideProps(context) {
    const res = await fetch('http://localhost:3000/api/todos');
    const data = await res.json();

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: { todos: data }
    }
}

export default function Todos(props) {


    return (
        <>
            {props.todos.map((todo, idx) => {
                return (
                    <Todo key={idx} todo={todo} idx={idx} />
                )
            })}
        </>
    )
}