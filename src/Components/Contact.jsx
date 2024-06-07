

function Contact(props) {
  return (
    <>
        <h1>{props.nomePagina}</h1>
        <p>{props.descricao}</p>
        <p>{props.endereco}</p>
        <p>{props.telefone}</p>
    </>
  )
}

export default Contact