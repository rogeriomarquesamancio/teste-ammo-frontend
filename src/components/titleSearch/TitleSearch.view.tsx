import { Container } from "./TitleSearch.style";


function TitleSearchView(props: any) {
    const { titleValue } = props

    return (
        <Container span={24}>
            Resultados para: {titleValue}
        </Container>
    )
}

export default TitleSearchView;