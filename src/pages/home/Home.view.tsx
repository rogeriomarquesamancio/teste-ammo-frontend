import InitialMensage from '../../components/initialMensage/InitialMensage';
import { Container } from './Home.style';

function HomeView() {
    return (
        <Container>  {/* Componente informativo ao acessar a página inicial */}
            <InitialMensage />
        </Container>
    )
}

export default HomeView;
