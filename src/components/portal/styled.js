import styled from 'styled-components';

const PortalContainer = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: rgb(0 0 0 / 0.5);
	position: absolute;
	top: 0;
	left: 0;
`;
const BottonClose = styled.button`
	border-radius: 100%;
	background-color: gray;
	color: white;
	border: transparent;
	position: relative;
	right: -80px;
`;

const Advice = styled.div`
	width: 200px;
	height: 100px;
	position: relative;
	background-color: white;
	margin-right: auto;
	margin-left: auto;
	margin-top: 30%;
	text-align: center;
	border-radius: 1rem;
`;
export { PortalContainer, Advice, BottonClose };
