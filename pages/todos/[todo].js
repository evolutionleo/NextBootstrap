import Todo from './../../components/Todo';

export async function getServerSideProps(context) {
    const idx = Number.parseInt(context.params.todo) - 1;

    const res = await fetch('http://localhost:3000/api/todos/'+idx);
    const data = await res.json();

    if (!data) {
        return {
            notFound: true
        }
    }

    return {
        props: { todo: {...data, idx }, idx }
    }
}

export default function Todos(props) {
    return (
        <>
            <Todo key={props.idx} idx={props.idx} todo={props.todo} />
        </>
    )
}