import styled from "styled-components/native";
import Colors from "../../consts/Colors.tsx";
import Texts from "../../consts/Texts.tsx";
import React from "react";

interface chatProps {
  message: string;
}

export const VioletUnit = ({ message }: chatProps) => {
  return (
    <VioletChatContainer>
      <VioletImg source={require("../../assets/images/violet.png")} />
      <VioletTextContainer>
        <VioletName>바이올렛 에버가든</VioletName>
        <VioletContents>{message}</VioletContents>
      </VioletTextContainer>
    </VioletChatContainer>
  );
};

const VioletChatContainer = styled.View`
    align-items: flex-start;
    gap: 8px;
    flex-direction: row;
`;
const VioletImg = styled.Image`
    width: 24px;
    height: 24px;
    border-radius: 20px;
`;
const VioletTextContainer = styled.View`
    flex: 1;
    gap: 6px;
    align-items: flex-start;
`;
const VioletName = styled.Text`
    color: ${Colors.Gray900};
    ${Texts.Small10Reg}
`;
const VioletContents = styled.Text`
    color: ${Colors.Gray900};
    ${Texts.Caption12Reg}
    background-color: ${Colors.Gray50};
    max-width: 95%;
    padding: 4px 12px;
    border-radius: 0 8px 8px 8px;
`;

export const MyUnit = ({ message }: chatProps) => {
  return (<MyChatContainer>{message}</MyChatContainer>);
};

const MyChatContainer = styled.Text`
    ${Texts.Caption12Reg}
    color: ${Colors.White};
    max-width: 88%;
    background-color: ${Colors.Gray900};
    padding: 4px 12px;
    border-radius: 8px 8px 0 8px;
    align-self: flex-end;
    margin-top: 10px;
`;
