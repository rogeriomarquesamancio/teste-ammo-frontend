import { ITitleSearchViewInterface } from "./TitleSearchView.interface";
import { Container } from "./TitleSearch.style";

function TitleSearchView(props: ITitleSearchViewInterface) {
    const { titleValue } = props

    return (
        <Container span={24}>
            {`Resultados para: ${titleValue || ''}`}
        </Container>
    )
}

export default TitleSearchView;