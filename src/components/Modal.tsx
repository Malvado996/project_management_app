import { forwardRef, useImperativeHandle, useRef, ReactNode } from 'react';
import { createPortal } from 'react-dom';

export interface ModalHandle {
    open: () => void;
}

interface ModalProps {
    children?: ReactNode;
    buttonCaption?: string
}

const Modal = forwardRef<ModalHandle, ModalProps>(function Modal({ children, buttonCaption }, ref) {
    const dialog = useRef<HTMLDialogElement>(null);

    // useImperativeHandle(ref, () => {
    //     return {
    //         open() {
    //             dialog.current?.showModal();
    //         }
    //     }
    // })

    // Explicitly return the object so TS knows the type
    useImperativeHandle(ref, () => ({
        open() {
            dialog.current?.showModal();
        },
    }));

    return createPortal(
        <dialog ref={dialog}>
            {children}
            <form method='dialog'>
                <button>{buttonCaption}</button>
            </form>
        </dialog>,
        document.getElementById('modal-root')!
    )
});

export default Modal;