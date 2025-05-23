export default function Button({ children, className = '', variant = 'solid', ...props }) {
  const base = 'w-full py-3 font-semibold rounded-md focus:outline-none focus:ring-2 transition';
  const variants = {
    solid: 'bg-black text-white hover:bg-gray-800 focus:ring-offset-2 focus:ring-black',
    link:  'text-blue-600 hover:text-blue-800 underline-offset-2 hover:underline'
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
