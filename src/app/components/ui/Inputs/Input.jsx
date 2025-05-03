export default function Input({ label, type = 'text', className = '', ...props }) {
    return (
      <div className="w-full space-y-1">
        {label && <label className="block text-sm font-medium text-gray-700">{label}</label>}
        <input
          type={type}
          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
          {...props}
        />
      </div>
    );
  }