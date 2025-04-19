import { useState } from 'react';

const Toggle = ({
  isEnabled = false,
  onToggle = () => {},
  label,
  labelPosition = 'right',
  disabled = false,
  className = '',
}) => {
  const [enabled, setEnabled] = useState(isEnabled);

  const handleToggle = () => {
    if (disabled) return;
    
    const newState = !enabled;
    setEnabled(newState);
    onToggle(newState);
  };

  return (
    <div className={`flex items-center w-full justify-between ${disabled ? 'opacity-60 cursor-not-allowed' : ''} ${className}`}>
      {label && labelPosition === 'left' && (
        <label className={`text-sm mr-2 ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`} onClick={!disabled ? handleToggle : undefined}>
          {label}
        </label>
      )}
      
      <div 
        className={`relative w-12 h-fit rounded-full transition-colors ease-in-out duration-200 ${enabled ? 'bg-blue-500' : 'bg-gray-300'} ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
        onClick={handleToggle}
        role="switch"
        aria-checked={enabled}
        tabIndex={disabled ? -1 : 0}
        onKeyDown={(e) => {
          if ((e.key === 'Enter' || e.key === ' ') && !disabled) {
            e.preventDefault();
            handleToggle();
          }
        }}
      >
        <span 
          className={`${
            enabled ? 'translate-x-7' : 'translate-x-0'
          } inline-block w-4 h-4 transform transition ease-in-out duration-200 bg-white rounded-full shadow-md m-0.5`}
        />
      </div>
      
      {label && labelPosition === 'right' && (
        <label className={`text-sm ml-2 ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`} onClick={!disabled ? handleToggle : undefined}>
          {label}
        </label>
      )}
    </div>
  );
};

export default Toggle;