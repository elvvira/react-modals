import { BottonClose, MessageContainer, StyledMessage } from './styled';

const Message = ({ setContent }) => {
	return (
		<MessageContainer>
			<StyledMessage>
				<BottonClose onClick={() => setContent(null)}>x</BottonClose>
				<h1>adios</h1>
			</StyledMessage>
		</MessageContainer>
	);
};
export default Message;
