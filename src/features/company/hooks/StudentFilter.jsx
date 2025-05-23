import { createContext, useContext, useState } from "react";

const StudentFilterContext = createContext();

export function StudentFilterProvider({ children }) {
    const [selectedArea, setSelectedArea] = useState({name: "Todos os Cursos", id: 1});

    return (
        <StudentFilterContext.Provider value={{ selectedArea, setSelectedArea }}>
            {children}
        </StudentFilterContext.Provider>
    );
}

export function useStudentFilter() {
    const context = useContext(StudentFilterContext);

    if (!context) {
        throw new Error("useStudentFilter must be used within a StudentFilterProvider");
    }

    return context;
}