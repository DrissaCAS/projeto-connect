import S from "./footer.module.scss"


const Footer = () => {
    return (
        <footer>
            <p className={S.textFooter}>© 2026 Vai na Web & Empower. Por <a href="https://drissacas.github.io/Drissa/" target="_blank">Drissa CAS</a>. Todos os direitos reservados. Projeto destinado exclusivamente a fins educativos.</p>
        </footer>
    )
}

export default Footer