import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    width: 100%;
    height: 70px;
    background: ${({ theme }) => theme.colors.background};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    justify-content: center;
    align-items: center;
`;
