import styled, { css } from 'styled-components/native';

export const Container = styled.SafeAreaView`
    flex: 1;
`;

export const Header = styled.View`
    padding: 20px;
`;

export const OptionContainer = styled.View`
    padding: 20px;
`;

export const Icon = styled.Image`
    margin-right: 20px;
`;

export const OptionButton = styled.TouchableOpacity.attrs({
    activeOpacity: .8
})`
    flex-direction: row;
`;
