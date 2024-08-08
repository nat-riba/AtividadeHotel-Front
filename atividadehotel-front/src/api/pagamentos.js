
import axios from "axios"; 

export async function getPagamentos() {
    const response = await axios.get("http://localhost:3000/pagamentos");
  
    return response.data;
}

export async function addPagamento(data) {

    const response = await axios.post("http://localhost:3000/pagamentos", data);
    return response.data;
}

export async function deletePagamento(id) {
    const response = await axios.delete(`http://localhost:3000/pagamentos/${id}`);
    return response.data;
}

export async function getPagamento(id) {
    const response = await axios.get(`http://localhost:3000/pagamentos/${id}`);
    return response.data;
}

export async function updatePagamento(id, data) {
    const response = await axios.put(`http://localhost:3000/pagamentos/${id}`, data);
    return response.data;
}