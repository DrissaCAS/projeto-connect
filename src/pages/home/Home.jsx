import S from "./home.module.scss"
import imgHome from "../../assets/imagens/banner.png"

const Home = () => {
  return (
    <main className={S.homeMain}>
      <section className={S.homeInfo}>
        <h1>Projetos Sociais que transformam</h1>
        <p>Conectamos sua empresa com projetos sociais impactantes. Juntos, criamos mudanças reais na comunidade.</p>
        <button>Cadastrar Empresa ➔</button>

        <section className={S.cardInfo}>
          <article className={S.info}>
            <h2>500+</h2>
            <h4>Empresas Voluntárias</h4>
          </article>
          <article className={S.info}>
            <h2>1.2K+</h2>
            <h4>Projetos Realizados</h4>
          </article>
          <article className={S.info}>
            <h2>50K+</h2>
            <h4>Vidas Impactadas</h4>
          </article>
        </section>
      </section>

      <img src={imgHome} alt="Mãos segurando um globo terrestre dentro de uma corrente de papaeis coloridos em formato de bonecos representando projetos sociais e ambientais" />
      
    </main>
  )
}

export default Home