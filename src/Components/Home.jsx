import { HomeContent } from "./Home.content"


function Home(props) {
  return (
    <>
        <h1>{props.nomePagina}</h1>
        <p>{props.descricao}</p>
        <HomeContent />
    </>
  )
}

export default Home