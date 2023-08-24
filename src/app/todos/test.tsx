import Link from "next/link";
import {TodoType} from "@/types/type"
import {Props} from "@/types/type"

const fetchTodos = async () => {
  const results = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos: TodoType[] = await results.json();
  return todos;
};

async function Test({}: Props) {
  const todos: TodoType[] = await fetchTodos();
  //   console.log(todos);
  return (
    <div>
      {todos?.map((todo) => (
        <p key={todo.id} className="text-base">
          <Link href={`/todos/${todo.id}`}>Todo #{todo.id}</Link>
        </p>
      ))}
    </div>
  );
}

export default Test;