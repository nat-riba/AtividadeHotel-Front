import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deleteReserva, getReservas } from "../api/reserva";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader";
import toast from "react-hot-toast";

function Reservas() {
  const [reservas, setReservas] = useState(null);

  function carregarReservas() {
    getReservas().then((dados) => {
      setReservas(dados);
    });
  }

  function deletarReserva(id) {
    const deletar = confirm("Tem certeza que deseja excluir?");
    if(deletar) {
      deleteReserva(id)
      .then((resposta) => {
        toast.success(resposta.message);
        carregarReservas();
      })
    }
  }

  useEffect(() => {
    carregarReservas();
  }, []);

  return (
    <main className="mt-4 container">
      <h1>Reservas</h1>
      <Button as={Link} to="/reservas/novo">
        Adicionar uma reserva
      </Button>
      <hr />
      {reservas ? (
        <Table>
          <thead>
            <tr>
              <th>id Reserva</th>
              <th>id Cliente</th>
              <th>Satus</th>
              <th>Check-in</th>
              <th>Check-out</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {reservas.map((reserva) => {
              {let dataIn = new Date(reserva.data_check_in).toLocaleDateString()}
              return (
                <tr key={reserva.id}>
                  <td>{reserva.id}</td>
                  <td>{reserva.clienteId}</td>
                  <td>{reserva.status}</td>
                  <td>{reserva.dataIn}</td>
                  {reserva.data_check_in
                      ? new Date(
                          reserva.data_check_in + "T00:00:00.000Z"
                        ).toLocaleDateString()
                      : "-"}
                  <td>{reserva.data_check_in ? new Date(reserva.data_check_in + "T00:00:00.000Z").toLocaleDateString() : '-'}</td>
                  <td>{reserva.data_check_out ? new Date(reserva.data_check_out + "T00:00:00.000Z").toLocaleDateString() : '-'}</td>
                  <td className="d-flex flex-column gap-2">
                    <Button className="danger" variant="danger" size="sm" onClick={() => deletarReserva(reserva.id)}>Excluir</Button>
                    <Button className="dark" variant="dark" size="sm" as={Link} to={`/reserva/editar/${reserva.id}`}>Editar</Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : (
        <Loader />
      )}
    </main>
  );
}

export default Reservas;
