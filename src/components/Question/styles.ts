import styled, { keyframes } from 'styled-components';

const show = keyframes`
  0%{
    opacity: 0;
    transform: translateY(20px)
    
  }
  100%{
    opacity: 1;
    transform: translateY(0px)
  }
`;
export const Container = styled.div`
	animation: ${show} 1s;
`;

export const Header = styled.header`
	margin: 10px 0;
`;
export const QuestionNumber = styled.span`
	color: ${({ theme }) => theme.COLORS.GRAY[400]};
	font-weight: 600;
`;
export const QuestionLabel = styled.span`
	color: ${({ theme }) => theme.COLORS.BLUE[600]};
	font-weight: 800;
	margin-left: 10px;
`;
export const Main = styled.div``;
export const QuestionDescription = styled.div`
	margin: 20px 0;
`;
export const Responses = styled.div``;
export const ResponseContainer = styled.button`
	display: flex;
	gap: 5px;
	align-items: center;
	margin: 10px 0;
	border: 1px solid transparent;
	height: 20px;
	background: none;
	cursor: pointer;
	&:hover {
		& > span {
			font-weight: 600;
		}
	}
`;
export const IndexResponse = styled.div`
	background: ${({ theme }) => theme.COLORS.BLUE[700]};
	width: 20px;
	display: flex;
	height: 20px;
	align-items: center;
	justify-content: center;
	color: ${({ theme }) => theme.COLORS.BLUE[900]};
	border-radius: 4px;
`;
export const ResponseText = styled.span``;
export const Footer = styled.footer`
	display: flex;
	gap: 20px;
	margin: 40px 0px;
`;
export const Button = styled.button`
	display: flex;
	border: 1px solid ${({ theme }) => theme.COLORS.BLUE[700]};
	border-radius: 5px;
	padding: 5px 20px;
	background: none;
	cursor: pointer;
	&:hover {
		background: ${({ theme }) => theme.COLORS.BLUE[400]};
		border: 1px solid ${({ theme }) => theme.COLORS.BLUE[400]};

		color: ${({ theme }) => theme.COLORS.BLUE[900]};
	}
`;
