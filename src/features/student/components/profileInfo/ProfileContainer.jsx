function ProfileContainer({ title, children }) {

    return (
        <div className="flex flex-col gap-4">
            <h2>{title}</h2>
            {children}
        </div>
    )
}

export default ProfileContainer;