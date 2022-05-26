import './landingPage.css';
import HeaderLanding from '../../components/HeaderLanding';
import SectionApresentacao from '../../components/SectionApresentacao';
import SectionCards from '../../components/SectionCards';
import SectionOperacoes from '../../components/SectionOperacoes';
import SectionSobre from '../../components/SectionSobre';
import FooterLanding from '../../components/FooterLanding';
const LandingPage = () =>{
    return(
        <div>
            <HeaderLanding />
            <main>
                <SectionApresentacao/>
                <SectionCards />
                <SectionOperacoes/>
                <SectionSobre/>
            </main>
            <FooterLanding />
        </div>
    );
}

export default LandingPage;