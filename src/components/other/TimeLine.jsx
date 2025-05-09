function TimeLineIcon() {
    return (
        <div className="flex flex-col items-center">
            <div className="w-6 h-8 rounded-full bg-gray-300"></div>
            <div className="w-0.5 h-full bg-gray-300"></div>
        </div>
    )
}

function TimeLine({children}) {
    return (
        <div className="flex">
            <TimeLineIcon/>
            {children}
        </div>
    )
}

export default TimeLine