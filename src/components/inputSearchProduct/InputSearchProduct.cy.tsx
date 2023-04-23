import InputSearchProduct from './InputSearchProduct'

describe('<InputSearchProduct />', () => {
	it('renders', () => {
		cy.mount(<InputSearchProduct
			handleSubmit={() => console.log('Submit')}
			inputValue={'Cama'}
			filteredList={[
				{
					value: 'Cama'
				},
				{
					value: 'Mesa'
				},
			]}
			onSearch={() => console.log('onSearch')}
		/>)
	})
})