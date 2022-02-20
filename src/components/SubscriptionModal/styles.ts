import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width } = Dimensions.get('window');

export const CloseButton = styled.TouchableOpacity`
`;

export const ModalContainer = styled.Modal`
    flex: 1;
`;

export const Container = styled.View`
    flex: 1;
	justify-content: center;
	align-items: center;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: flex-end;
    padding: 10px;
`;

export const Icon = styled.Image``;

export const ImageUser = styled.Image`
    align-self: center;
    margin: 20px 0;
    width: ${width / 2}px;
`;

export const ButtonContainer = styled.View`
    padding: 20px;
`;

export const Content = styled.View`
	min-height: 100px;
	width: 90%;
	border-radius: 4px;
    background: ${({ theme }) => theme.colors.modal};
    shadow-color: #000;
    shadow-opacity: 0.1;
    shadow-radius: 20px;
    elevation: 7;
    padding: 10px;
`;