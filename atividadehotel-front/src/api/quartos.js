
import axios from "axios"; 

export async function getQuartos() {
    const response = await axios.get("http://localhost:3000/quartos");
    return response.data;
}

export async function addQuarto(data) {
    const response = await axios.post("http://localhost:3000/quartos", data);
    return response.data;
}

export async function deleteQuarto(id) {
    const response = await axios.delete(`http://localhost:3000/quartos/${id}`);
    return response.data;
}

export async function getQuarto(id) {
    const response = await axios.get(`http://localhost:3000/quartos/${id}`);
    return response.data;
}

export async function updateQuarto(id, data) {
    const response = await axios.put(`http://localhost:3000/quartos/${id}`, data);
    return response.data;
}