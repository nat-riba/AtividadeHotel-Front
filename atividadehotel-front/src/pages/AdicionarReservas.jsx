import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { addReserva } from "../api/reserva";
import toast from "react-hot-toast";


function AdicionarReserva() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();

  function salvarReserva(data) {

    addReserva(data).then((resposta) => {

      toast.success(resposta.message);
      navigate("/reserva");
    }).catch((err) => {
      toast.error(err.response.data.message);
    });
  }
  

  return (
    <main className="mt-4 container">
      <h1>Nova reserva</h1>
      <hr />
      <form onSubmit={handleSubmit(salvarReserva)}>
        <div>
          <label htmlFor="dataCheckin">Data de check-in</label>
          <input 
            type="date"
            id="dataCheckin"
            className="form-control"
            {...register("dataCheckin", { required: true, maxLength: 200 })}
          />
          {errors.dataCheckin && (
            <small className="text-danger">Data inválida!</small>
          )}
        </div>
        <div>
          <label htmlFor="dataCheckout">Data de Check-out</label>
          <input
            type="date"
            id="dataCheckout"
            className="form-control"
            {...register("dataCheckout", { required: true, maxLength: 200 })}
          />
          {errors.dataCheckOut && (
            <small className="text-danger">Data inválida!</small>
          )}
        </div>
        <div>
          <label htmlFor="status">Status</label>
          <input
            type="text"
            id="status"
            className="form-control"
            {...register("status", { required: true, maxLength: 200 })}
          />
          {errors.status && (
            <small className="text-danger">Status inválido!</small>
          )}
        </div>
        <Button className="mt-3" type="submit">
          Cadastrar
        </Button>
      </form>
      <div>
          <label htmlFor="clienteId">Cliente</label>
          <select
            className="form-select"
            {...register("clienteId", { required: true, valueAsNumber: true })}
          >
            <option value="">Selecione um cliente</option>
            {clientes.map((cliente) => {
              return (
                <option key={cliente.id} value={cliente.id}>
                  {cliente.nome} - {cliente.email}
                </option>
              );
            })}
          </select>
          {errors.clienteId && (
            <small className="text-danger">Selecione um cliente</small>
          )}
        </div>
    </main>
  );
}

export default AdicionarReserva;