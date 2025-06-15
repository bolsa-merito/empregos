function SideBar({ isOpen = false, onCLose = () => { }, children }) {
    if (isOpen) {
        return (
            <div className="w-90 h-[90vh] overflow-y-scroll">
                <button onClick={onCLose}>
                    Fechar
                </button>
                {children}
            </div>
        )
    }
}

export default SideBar