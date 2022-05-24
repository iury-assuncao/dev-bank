import './landingPage.css';
import HeaderLanding from '../../components/HeaderLanding';
import SectionApresentacao from '../../components/SectionApresentacaio';
import SectionCards from '../../components/SectionCards';

const LandingPage = () =>{
    return(
        <div>
            <HeaderLanding />
            <SectionApresentacao/>
            <SectionCards />

        </div>
    );
}

export default LandingPage;