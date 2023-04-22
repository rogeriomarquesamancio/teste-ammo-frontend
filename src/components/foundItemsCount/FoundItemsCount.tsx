import { DivTitle, SpanTitle } from './FoundItemsCount.style'

function FoundItemsCount(props: any) {
    const { totalItens } = props
    return (
        <DivTitle>
            <SpanTitle>
                {`${totalItens || 0} produtos encontrados`}
            </SpanTitle>
        </DivTitle>
    )
}

export default FoundItemsCount;