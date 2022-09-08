import styled, { css } from 'styled-components';

export const Container = styled.div`
	display: flex;
	padding: 40px 60px;
	flex-direction: column;
	max-width: 1366px;
	margin: 44px auto auto;
`;

interface LabelButtonProps {
	selected?: boolean;
}
export const Label = styled.button<LabelButtonProps>`
	background: ${({ selected, theme }) =>
		selected ? theme.COLORS.BLUE[700] : 'none'};
	border-radius: 8px;
	border: 2px solid ${({ theme }) => theme.COLORS.BLUE[700]};
	width: 200px;
	height: 30px;
	transition: background-color 0.5s;
	cursor: pointer;
	font-weight: 600;
	${({ selected }) =>
		selected &&
		css`
			background: ${({ theme }) => theme.COLORS.BLUE[700]};
			& > span {
				color: ${({ theme }) => theme.COLORS.BLUE[900]};
			}
			& > span > figure > svg {
				fill: ${({ theme }) => theme.COLORS.BLUE[900]};
			}
		`};
	&:hover {
		background: ${({ theme }) => theme.COLORS.BLUE[700]};
		& > span {
			color: ${({ theme }) => theme.COLORS.BLUE[900]};
		}
		& > svg {
			fill: ${({ theme }) => theme.COLORS.BLUE[900]};
		}
	}
`;
interface ContainerLabelsProps {
	show?: boolean;
}
export const ContainerLabels = styled.div<ContainerLabelsProps>`
	width: 100%;
	display: flex;
	gap: 10px;
	flex-wrap: wrap;
	overflow: hidden;
	max-height: ${({ show }) => (show ? '100vh' : '0')};
	transition: all 0.5s;
	margin: 10px 0;
`;
export const ContainerIcon = styled.span`
	padding: 5px;
	background: ${({ theme }) => theme.COLORS.GRAY[200]};
	align-items: center;
	justify-content: center;
	display: flex;
	border-radius: 50%;
`;
export const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
`;
interface ToggleButtonProps {
	rotate?: boolean;
}
export const ToggleButton = styled.button<ToggleButtonProps>`
	border-radius: 50%;
	width: 25px;
	height: 25px;
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;
	background: ${({ theme }) => theme.COLORS.BLUE[700]};
	cursor: pointer;
	transition: 0.5s;
	${({ rotate }) =>
		rotate &&
		css`
			transform: rotate(-180deg);
		`}
	&:hover {
		background: ${({ theme }) => theme.COLORS.BLUE[400]};
	}
`;
export const HeaderQuestion = styled.header`
	display: flex;
	gap: 10px;
	margin: 14px 0;
	align-items: center;
`;
export const TitleQuestion = styled.h4``;
export const TitleGroup = styled.h3``;
export const ContainerCheckLabel = styled.figure`
	position: absolute;
	right: -20px;
	top: 0;
	bottom: 0;
`;
export const LabelText = styled.span`
	position: relative;
`;
