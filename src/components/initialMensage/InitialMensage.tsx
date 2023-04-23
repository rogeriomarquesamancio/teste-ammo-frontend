import { Text, ContainerImage, Container, ContainerText } from './InitialMensage.style'

function InitialMensage(props: any) {
    const { hasSearchText } = props;
    return (
        <Container>
            <ContainerImage>
                <img src='https://mmartan.com.br/images/notfound/error-page-illustration.png' />
            </ContainerImage>
            <ContainerText>
                <Text>
                    {hasSearchText ? 'Nenhum resultado encontrado, por favor tente novamente. :(' : 'Seja bem vindo! Realize agora uma busca em nosso sistema.'}
                </Text>
            </ContainerText>
        </Container>
    )
}

export default InitialMensage;