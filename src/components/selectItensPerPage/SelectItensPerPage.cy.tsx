import SelectItensPerPage from './SelectItensPerPage'

describe('<SelectItensPerPage />', () => {
	it('renders', () => {
		cy.mount(<SelectItensPerPage
			onChange={() => console.log('Change itens')}
			itensPerPage={8}
			optionsList={[
				{
					value: 8,
					label: '8 produtos por página'
				},
				{
					value: 17,
					label: '16 produtos por página'
				},
				{
					value: 32,
					label: '32 produtos por página'
				}
			]}
		/>)
	})
})