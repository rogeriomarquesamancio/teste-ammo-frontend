import { Text, ContainerImage, Container } from './NotFoundProduct.style'

function NotFoundProductView() {
    return (
        <Container>
            <ContainerImage>
                <img src='https://mmartan.com.br/images/notfound/error-page-illustration.png' />
            </ContainerImage>
            <Text>
                {'Nenhum resultado encontrado, por favor tente novamente.'}
            </Text>
        </Container>
    )
}

export default NotFoundProductView;