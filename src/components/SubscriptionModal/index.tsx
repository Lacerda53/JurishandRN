import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Snackbar from 'react-native-snackbar';
import { setIsSubscripted, setSubscriptionModal } from '../../stores/modules/app/actions';
import { RootState } from '../../stores/modules/rootReducer';
import { CustomText } from '../CustomText';
import { Button } from '../Button'
import {
    ButtonContainer,
    CloseButton,
    Container,
    Content,
    Header,
    Icon,
    ImageUser,
    ModalContainer
} from './styles';

export const SubscriptionModal: React.FC = () => {
    const dispatch = useDispatch();
    const { subscriptionModal } = useSelector((state: RootState) => state.app);

    const onCloseModal = useCallback(() => {
        dispatch(setSubscriptionModal(false));
    }, []);

    const onSubmitSignature = useCallback(async () => {
        dispatch(setIsSubscripted(true));
        Snackbar.show({
            text: 'Assinatura realizada com sucesso',
            duration: Snackbar.LENGTH_LONG
        })
        onCloseModal();
    }, []);

    return (
        <ModalContainer
            visible={subscriptionModal}
            transparent
            animationType='slide'
            onRequestClose={onCloseModal}
        >
            <Container>
                <Content>
                    <Header>
                        <CloseButton onPress={onCloseModal}>
                            <Icon source={require('../../assets/close/close.png')} />
                        </CloseButton>
                    </Header>
                    <CustomText
                        weight='bold'
                        size={24}
                        align='center'
                    >
                        Faça upgrade no JurisHand e seja feliz.
                    </CustomText>
                    <ImageUser source={require('../../assets/jobs/jobs.png')} resizeMode='contain' />
                    <CustomText
                        margin='0 15px'
                        align='center'
                        weight='light'
                        size={19}
                    >
                        Assine por
                        <CustomText size={19} weight='bold'> R$ 299,90 por ano </CustomText>
                        (R$ 24,90 por mês)
                    </CustomText>
                    <ButtonContainer>
                        <Button onPress={onSubmitSignature}>
                            Assine agora
                        </Button>
                    </ButtonContainer>
                </Content>
            </Container>
        </ModalContainer>
    );
};