import { Advice, BottonClose, PortalContainer } from './styled';

const Portal = ({ setContent }) => {
	return (
		<PortalContainer>
			<Advice>
				<BottonClose onClick={() => setContent(null)}>x</BottonClose>
				<h1>hola</h1>
			</Advice>
		</PortalContainer>
	);
};
export default Portal;
