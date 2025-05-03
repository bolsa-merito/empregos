export default function Button({ children, className = '', ...props }) {
    return (
      <button
        className={`px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }