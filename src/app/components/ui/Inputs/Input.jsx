export default function Input({ label, type = 'text', className = '', ...props }) {
  return (
    <div className="w-full flex flex-col space-y-1">
      {label && <label className="text-sm font-semibold text-gray-800">{label}</label>}
      <input
        type={type}
        className={`w-full p-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black transition${className}`}
        {...props}
      />
    </div>
  );
}
