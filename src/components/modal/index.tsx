import cn from 'classnames';
import s from './styles.module.css';
import { createPortal } from 'react-dom';
import { ReactNode,  useRef } from 'react';

interface IModalProps {
    children: ReactNode;
    isOpen: boolean;
    onClose: () => void
}

function Modal({ children, isOpen, onClose }: IModalProps) {
    const refModal = useRef<HTMLDivElement>(null)

    // function handleClickModal() {
    //     refModal.current.classList.remove(s.modal_active)
    //     setTimeout(onClose, 400)
    // }
    // useEffect(() => {
    //     if (isOpen) {
    //         setTimeout(() => { refModal.current.classList.add(s.modal_active) }, 100)
    //     }
    // }, [isOpen])


    const renderContent = () => {
        if (!isOpen) return null
        return (<div ref={refModal} className={cn(s.modal, { [s.modal_active]: isOpen })} onMouseDown={onClose}>
            <div className={cn(s.modal__content, { [s.modal__content_active]: isOpen })} onMouseDown={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>);
    }

    return createPortal(renderContent(), document.getElementById('modal-root') as HTMLDivElement);
}

export default Modal;