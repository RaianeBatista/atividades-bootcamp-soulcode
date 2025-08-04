import "./TableProd.css";

export default function TableProd(props) {
  return (
    <>
      <table className="table mt-4">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Quantidade</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {props.prod.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.nome}</td>
              <td>{product.quantidade}</td>
              <td>R$ {product.preco}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
