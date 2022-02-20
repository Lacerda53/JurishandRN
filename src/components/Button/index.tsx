import React, { ReactNode } from 'react';
import { TouchableOpacityProps } from 'react-native';
import { CustomText } from '../CustomText';
import { Container } from './styles';

type Props = TouchableOpacityProps & {
    children: ReactNode;
};

export const Button: React.FC<Props> = ({ children, ...rest }) => {
    return (
        <Container activeOpacity={.8} {...rest}>
            <CustomText
                color='primary'
                weight='bold'
                size={20}
            >
                {children}
            </CustomText>
        </Container>
    );
};