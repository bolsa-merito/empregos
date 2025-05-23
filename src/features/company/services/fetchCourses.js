import cursesAreaData from '../../../utils/fakeData/courseAreaData.json';
import cursesData from '../../../utils/fakeData/coursesData.json';

export async function getCourses(areaId = 1) {
    try {
        // const response = await fetch(studentsData); // Caminho do arquivo JSON
        let response = cursesData
        
        if (areaId === 1) {
            return response;
        }

        return response.filter(c => c.area_id === areaId)
        // if (!response.ok) {
        //     throw new Error(`HTTP error! Status: ${response.status}`);
        // }
        // const students = await response.json();
    } catch (error) {
        console.error('Error fetching students:', error);
        return []; // Retorna array vazio em caso de erro
    }
}

export async function getAreas() {
    try {
        // const response = await fetch(studentsData); // Caminho do arquivo JSON
        let response = cursesAreaData

        // if (!response.ok) {
        //     throw new Error(`HTTP error! Status: ${response.status}`);
        // }
        // const students = await response.json();
        return response;
    } catch (error) {
        console.error('Error fetching students:', error);
        return []; // Retorna array vazio em caso de erro
    }
}