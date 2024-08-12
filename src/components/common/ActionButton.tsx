import { Text, TouchableOpacity } from 'react-native';
import styled from "styled-components/native";
import Colors from '../../consts/Colors';
import Texts from '../../consts/Texts';

interface ActionButtonProps {
    text: String;
    onPress: () => void;
    disabled?: boolean;
};

const ActionButtonContainer = styled.TouchableOpacity<{ $disabled: boolean }>`
    width: 100%;
    padding: 10px 0;
    border-radius: 8px;
    background-color: ${props => props.$disabled ? Colors.Gray300 : Colors.Gray900};

    display: flex;
    justify-content: center;
`;

const ActionButton = (
    { text, onPress, disabled = false }: ActionButtonProps
) => {
    return (
        <ActionButtonContainer onPress={onPress} $disabled={disabled}>
            <Text style={[Texts.Body14Bold, { color: Colors.White }]}>{text}</Text>
        </ActionButtonContainer>
    );
};

export default ActionButton;
