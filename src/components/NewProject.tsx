import { useRef } from 'react';

import Input from './Input.jsx';

interface ProjectData {
    title: string;
    description: string;
    dueDate: string
}

interface NewProjectProps {
    onAdd: (project: ProjectData) => void;
}


type InputRef = HTMLInputElement | HTMLTextAreaElement;

export default function NewProject({ onAdd }: NewProjectProps) {

    const title = useRef<InputRef>(null);
    const description = useRef<InputRef>(null);
    const dueDate = useRef<InputRef>(null);

    function handleSave() {
        const enteredTitle = title.current?.value?.trim() ?? '';
        const enteredDescription = description.current?.value?.trim() ?? '';
        const enteredDueDate = dueDate.current?.value ?? '';

        if (!enteredTitle || !enteredDescription || !enteredDueDate) {
            alert('Please fill all fields!');
            return;
        }

        console.log({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate,
        });

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        });
    }

    return (

        <div className='w-[35rem] mt-16'>
            <menu className='flex items-center justify-end gap-4 my-4'>
                <li>
                    <button
                        className='text-stone-800 hover:text-stone-950'
                    >
                        Cancel
                    </button>
                </li>
                <li>
                    <button
                        className='px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950'
                        onClick={handleSave}
                    >
                        Save
                    </button>
                </li>
            </menu>
            <div>
                <Input type="text" ref={title} label="Title" />
                <Input ref={description} label="Description" textarea />
                <Input type="date" ref={dueDate} label="Due Date" />
            </div>
        </div>

    )
}

