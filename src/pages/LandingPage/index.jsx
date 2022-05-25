import './landingPage.css';
import HeaderLanding from '../../components/HeaderLanding';
import SectionApresentacao from '../../components/SectionApresentacao';
import SectionCards from '../../components/SectionCards';
import SectionOperacoes from '../../components/SectionOperacoes';
import SectionSobre from '../../components/SectionSobre';

const LandingPage = () =>{
    return(
        <div>
            <HeaderLanding />
            <SectionApresentacao/>
            <SectionCards />
            <SectionOperacoes/>
            <SectionSobre/>
        </div>
    );
}

export default LandingPage;