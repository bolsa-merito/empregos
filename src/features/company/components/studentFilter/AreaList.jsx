import {getAreas} from "../../services/fetchCourses.js";
import { useEffect, useState } from "react";
import FilterTag from "./FilterTag.jsx";
import { useStudentFilter } from "@/features/company/hooks/StudentFilter"
import { useSearchParams } from "react-router";

function AreaList() {
    const [areas, setAreas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { selectedArea, setSelectedArea } = useStudentFilter()
    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        const newParams = new URLSearchParams(searchParams);
        newParams.delete('curso');
        setSearchParams(newParams);
    }, [selectedArea])

    useEffect(() => {
        getAreas()
            .then(data => setAreas(data))
            .catch(error => {
                console.error('Error fetching areas:', error);
                setError('Erro ao carregar áreas.');
            })
            .finally(() => setLoading(false));
    }, []);
    
    if (loading) return <div>Carregando...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h1 className="text-black text-3xl font-bold">Área de Estudo</h1>
            <ul className="flex flex-wrap gap-3 py-5">
                {
                    areas.map(area => (
                        <li key={area.id}>
                            <FilterTag text={area.name} onClick={() => setSelectedArea(area)} isSelected={selectedArea.id === area.id}/>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default AreaList