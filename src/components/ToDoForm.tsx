import React, { useState } from 'react'

interface ToDoFormProps {
    onAdd(title: string): void
}


export const ToDoForm: React.FC <ToDoFormProps> = (props) => {
    const [title, setTitle] = useState<string>('')
    //const ref = useRef<HTMLInputElement>(null)
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
           props.onAdd(title)
           setTitle('')
        }
    }

    return (
        <div className="input-field mt2">
           <input
             onChange={changeHandler}
             value={title}
             type="text"
             id="title"
             placeholder="Введите название"
             onKeyPress={keyPressHandler} />
            <label htmlFor="title" className="active"> Введите название дела </label>
        </div>
    )
}