import S from "./home.module.scss"
import imgHome from "../../assets/imagens/img_1.png"

const Home = () => {
  return (
    <main className={S.homeMain}>
      <section className={S.homeTitle}>
        <h1>Projetos Sociais que transformam</h1>
        <p>Conectamos sua empresa com projetos sociais impactantes. Juntos, criamos mudanças reais na comunidade.</p>
        <button>Cadastrar Empresa</button>

        <section className={S.cardInfo}>
          <article className={S.info}>
            <h3>500+</h3>
            <p>Empresas Voluntárias</p>
          </article>
          <article className={S.info}>
            <h3>1.2K+</h3>
            <p>Projetos Realizados</p>
          </article>
          <article className={S.info}>
            <h3>50K+</h3>
            <p>Vidas Impactadas</p>
          </article>
        </section>
        
      </section>

      <section className={S.homeImg}>
        <img src={imgHome} alt="Um dos símbolos do projeto social" />
      </section>
    </main>
  )
}

export default Home