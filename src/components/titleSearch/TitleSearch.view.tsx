import { Container } from "./TitleSearch.style";


function TitleSearchView(props: any) {
    const { titleValue } = props

    return (
        <Container span={24}>
            {titleValue}
        </Container>
    )
}

export default TitleSearchView;