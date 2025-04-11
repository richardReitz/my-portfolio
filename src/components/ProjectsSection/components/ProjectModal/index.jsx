import { useEffect } from 'react';
import './styles.css';

export default function ProjectModal({ title, isOpen, onClose, children }) {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);
    
    if (!isOpen) return null;
    
    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="header">
                    <h3>{title}</h3>
                    <button className="close-btn" onClick={onClose}>
                        X
                    </button>
                </div>
                <div className='children-view'>
                    {children}
                </div>
            </div>
        </div>
    );
}
