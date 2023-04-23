import { Text, ContainerImage, Container, ContainerText } from './InitialMensage.style'

function InitialMensageView() {
    return (
        <Container>
            <ContainerImage>
                <img src='https://mmartan.com.br/images/notfound/error-page-illustration.png' />
            </ContainerImage>
            <ContainerText>
                <Text>
                    {'Seja bem vindo! Realize agora uma busca em nosso sistema.'}
                </Text>
            </ContainerText>
        </Container>
    )
}

export default InitialMensageView;