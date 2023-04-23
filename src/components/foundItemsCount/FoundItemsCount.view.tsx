import { IFoundItemsCountViewProps } from './FoundItemsCount.interface';
import { DivTitle, SpanTitle } from './FoundItemsCount.style'

function FoundItemsCountView(props: IFoundItemsCountViewProps) {
    const { totalItens } = props
    return (
        <DivTitle>
            <SpanTitle>
                {`${totalItens || 0} produtos encontrados`}
            </SpanTitle>
        </DivTitle>
    )
}

export default FoundItemsCountView;