
import CardLanding from "../CardLanding";
import "./sectionCards.css";

const SectionCards = () => {
    return(
        <section className="section__cards">
            
            <h2 className="title_beneficies">Benefícios em ser DevBank</h2>

            <div className="cards">
                <CardLanding title="Crétido Ilimitado" text="No DevBank você possui crétido ilimitado e sem consulta no serasa" />
                <CardLanding title="DevBank invest" text="Você tem o controle e pode escolher o investimento ideal para você, desde renda fixa a renda variável!" />
                <CardLanding title="Livre de tarifas" text="Aqui você não é cobrado por fazer operações. Tudo gratuito!" />
            </div>
        </section>
    )
}

export default SectionCards