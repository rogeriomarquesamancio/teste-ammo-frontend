import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { GlobalProvider } from './providers';

import Routes from './routes/Routes';

function App() {
	return (
		<GlobalProvider>
			<BrowserRouter>
				<Routes />
			</BrowserRouter>
		</GlobalProvider>
	);
}

export default App;
