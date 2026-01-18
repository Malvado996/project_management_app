import { useState } from 'react';

interface NewTasksProps {
    onAdd: (enteredTask: string) => void,
}


export default function NewTask({ onAdd }: NewTasksProps) {
    const [enteredTask, setEnteredTask] = useState<string>('');

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setEnteredTask(event.target.value);
    }

    function handleClick() {
        if (enteredTask.trim() === '') {
            return;
        }
        onAdd(enteredTask)
        setEnteredTask('');
    }

    return (
        <div className="flex items-center gap-4">
            <input
                type="text"
                className="w-64 px-2 py-1 rounded-sm bg-stone-200"
                onChange={handleChange}
                value={enteredTask}
            />
            <button
                className="text-stone-700 hover:text-stone-950"
                onClick={handleClick}
            >
                ADD TASK
            </button>
        </div>
    )
}