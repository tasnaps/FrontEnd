import { ReactNode, MouseEvent } from 'react';
import './SettingsModal.css';

interface SettingsModalProps {
  children: ReactNode;
  open: boolean;
  onClose: (event: MouseEvent<HTMLButtonElement>) => void;
}

const SettingsModal = ({children, open, onClose}: SettingsModalProps) => {
  if(!open) return null;

  return (
    <div className='modal-background'>
      <div className='modal-content'>
        <button onClick={onClose}>Close Modal</button>
        {children}
      </div>
    </div>
  );
};

export default SettingsModal;
