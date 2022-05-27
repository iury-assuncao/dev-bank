import "./footerLanding.css";

let ano = new Date();

const FooterLanding = () => {
    return(
        <footer className="footer">
        <section className="footer__infos">
            <section>
                    <h3 className="footer__title">Contato</h3>
                    <div className="contact__footer">
                        <span className="footer__text">0800 987 1234</span>
                        <span className="footer__text">suporte@devbank.com</span>
                        <span className="footer__text">Atendimento 24hrs</span>
                    
                    </div>
                </section>

                <section>
                <h3 className="footer__title">Desenvolvedores</h3>
                <div className="contact__footer">
                    <a href="https://www.linkedin.com/in/aguimar-junior" target="_blank" className="footer__link" rel="noreferrer">Aguimar Junior</a>
                    <a href="https://www.linkedin.com/in/gustavobiolcatti" target="_blank" className="footer__link" rel="noreferrer">Gustavo Biolcatti</a>
                    <a href="https://www.linkedin.com/in/iury-assunção-7377321b7/" target="_blank" className="footer__link" rel="noreferrer">Iury Assunção</a>
                </div>
            </section>

        </section>
        <section className="copy">© {ano.getFullYear()} devBank Inc. All rights reserved.</section>
        </footer>
    )
}

export default FooterLanding