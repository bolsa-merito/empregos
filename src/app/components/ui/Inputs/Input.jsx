export default function Input({ label, type = 'text', className = '', error, ...props }) {
  return (
    <div className="w-full flex flex-col space-y-1">
      {label && <label className="text-sm font-semibold text-gray-800">{label}</label>}
      <input
        type={type}
        className={`w-full p-2 border rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 transition 
          ${error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-black'} 
          ${className}`}
        {...props}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}
