
import { List } from "@mui/material";
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';
import React from "react";
import { db } from '../FirebaseInit';
import { Todo } from "./Todo";
import TodoItem from './TodoItem';

type Props = {
    items: Todo[]
}

const TodoList: React.FC<Props> = ({ items }) => {


    const handleActive = async (todo: Todo) => {
        await updateDoc(doc(db, 'todos', todo.id), {
            active: !todo.active
        })
    }

    const handleDelete = async (id: string) => {
        await deleteDoc(doc(db, 'todos', id))
    }

    return (
        <div>
            <h1>todolist</h1>
            <List sx={{ width: '100%' }}>
                {
                    items.map(todo =>
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            handleActive={handleActive}
                            handleDelete={handleDelete} />
                    )
                }
            </List>
        </div>
    )
}

export default TodoList
