import './landingPage.css';
import HeaderLanding from '../../components/HeaderLanding';
import SectionApresentacao from '../../components/SectionApresentacao';
import SectionCards from '../../components/SectionCards';
import SectionOperacoes from '../../components/SectionOperacoes';

const LandingPage = () =>{
    return(
        <div>
            <HeaderLanding />
            <SectionApresentacao/>
            <SectionCards />
            <SectionOperacoes/>
        </div>
    );
}

export default LandingPage;