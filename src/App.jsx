import { useState } from 'react';
import Modal from './components/modal/Modal';
import Portal from './components/portal/Portal';
import Message from './components/message/Message';

const App = () => {
	const [content, setContent] = useState(null);
	return (
		<div>
			<h1>Núcleo de la aplicación</h1>
			<button onClick={() => setContent(<Portal setContent={setContent} />)}>
				Open modal
			</button>
			<button onClick={() => setContent(<Message setContent={setContent} />)}>
				another message
			</button>

			<Modal setContent={setContent}>{content}</Modal>
		</div>
	);
};

export default App;
