function FilterTag({text, isSelected = false, onClick = () => {}}) {
    return (
        <button 
            className={`px-3 py-2 rounded-lg ${isSelected ? 'bg-gray-300' : 'bg-gray-200'} w-fit font-medium`}
            onClick={onClick}>
            {text}
        </button>
    )
}

export default FilterTag