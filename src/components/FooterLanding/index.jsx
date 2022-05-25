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
                    <span className="footer__text">Aguimar Junior</span>
                    <span className="footer__text">Gustavo Bielcatti</span>
                    <span className="footer__text">Iury Assunção</span>
                </div>
            </section>

        </section>
        <section className="copy">© {ano.getFullYear()} devBank Inc. All rights reserved.</section>
        </footer>
    )
}

export default FooterLanding