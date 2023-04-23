import FoundItemsCount from './FoundItemsCount'

describe('<FoundItemsCount />', () => {
	it('renders', () => {
		cy.mount(<FoundItemsCount
			totalItens={10}
		/>)
	})
})