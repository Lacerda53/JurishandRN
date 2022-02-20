import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CustomText } from '../../components/CustomText';
import { setSubscriptionModal } from '../../stores/modules/app/actions';
import { RootState } from '../../stores/modules/rootReducer';
import {
    Container,
    Header,
    Icon,
    OptionButton,
    OptionContainer
} from './styles';

export const SettingsScreen: React.FC = () => {
    const dispatch = useDispatch();
    const { isSubscripted } = useSelector((state: RootState) => state.app);

    const handleOpen = useCallback(() => {
        dispatch(setSubscriptionModal(true));
    }, []);

    return (
        <Container>
            <Header>
                <CustomText
                    size={28}
                    weight='bold'
                >
                    Configurações
                </CustomText>
            </Header>
            <OptionContainer>
                <OptionButton disabled={isSubscripted} onPress={handleOpen}>
                    <Icon source={require('../../assets/update-arrows/update-arrows.png')} />
                    <CustomText
                        color='label'
                        weight='bold'
                        style={{ textDecorationLine: isSubscripted ? 'line-through' : 'none'}}
                    >
                        Faça upgrade agora
                    </CustomText>
                </OptionButton>
            </OptionContainer>
        </Container>
    );
};