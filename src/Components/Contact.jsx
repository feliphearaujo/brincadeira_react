import { FormContact } from "./Contact.form"


function Contact(props) {
  return (
    <>
        <h1>{props.nomePagina}</h1>
        <p>{props.descricao}</p>
        <p>{props.endereco}</p>
        <p>{props.telefone}</p>

        <FormContact/>
    </>
  )
}

export default Contact