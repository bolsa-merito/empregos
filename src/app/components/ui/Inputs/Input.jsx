export default function Input({ label, type = 'text', className = '', ...props }) {
  return (
    <div className="w-full flex flex-col space-y-1">
      {label && <label className="text-sm font-semibold text-gray-800">{label}</label>}
      <input
        type={type}
        className={`
          w-full
          px-4 py-2
          border border-gray-300
          rounded-lg
          placeholder-gray-400
          focus:outline-none focus:ring-2 focus:ring-blue-500
          transition
          ${className}
        `}
        {...props}
      />
    </div>
  );
}
