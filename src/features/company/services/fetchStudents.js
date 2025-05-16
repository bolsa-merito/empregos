import studentsData from '../../../utils/fakeData/studentsData.json';

async function getPublicStudents() {
    try {
        // const response = await fetch(studentsData); // Caminho do arquivo JSON
        let response = studentsData

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

export { getPublicStudents };
