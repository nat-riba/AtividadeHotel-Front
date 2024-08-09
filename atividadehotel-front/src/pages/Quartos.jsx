import { Button, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getQuartos } from "./../api/quartos";
import { useEffect, useState } from "react";
import Loader from "../../components/Loader";

function Quartos() {
  const [quartos, setQuartos] = useState(null);

  function carregarQuartos() {
    getQuartos().then((dados) => {
      setQuartos(dados);
    });
  }

  useEffect(() => {
    carregarQuartos();
  }, []);

  
    return (
      <main>
        <div>
          <h1>Conheça nossos quartos</h1>
          <img src="quartodeluxe.png" alt="Quarto deluxe" className="w-50" />
          <img src="quartostandard.jpg" alt="Quarto standard" className="w-50" />
          <img src="quartosuite.jpg" alt="Quarto suite" className="w-50" />
          <img src="suitedeluxe.jpg" alt="suitedeluxe" className="w-50" />
        </div>

        {quartos ? (
        <Table>
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Descrição</th>
              <th>Preço</th>
              <th>Situação</th>
            </tr>
          </thead>
          <tbody>
            {quartos.map((quarto) => {
              return (
                <tr key={quarto.id}>
                  <td>{quarto.tipo}</td>
                  <td>{quarto.descricao}</td>
                  <td>{quarto.preco}</td>
                  <td>{quarto.situacao}</td>
                  <td className="d-flex flex-column gap-2">
                    {quarto.situacao === "disponível"? <Button className="dark" variant="dark" size="sm" as={Link} to={`/reservas/novo`}>Reservar</Button> : <Button className="danger" variant="danger" size="sm">Indisponível</Button>}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : (
        <Loader />
      )}

        <footer>
      <p>&copy; 2024 Hotel. Todos os direitos reservados.</p>
    </footer>
        </main>
        
  );
}
  
  export default Quartos;