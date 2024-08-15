import { Animated, KeyboardAvoidingView, Platform, Text, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import Texts from "../consts/Texts.tsx";
import Colors from "../consts/Colors.tsx";
import { Back, Check } from "../assets/icons";
import React, { useEffect } from "react";
import { MyUnit, VioletUnit } from "../components/chat/ChatUnit.tsx";
import { useNavigation } from "@react-navigation/native";

interface message {
  who: string;
  text: string;
  index: number;
}

const Chat = () => {
  const navigation = useNavigation();
  const [violetMessages, setVioletMessages] = React.useState<string[]>([
    "고객님이 원하신다면 어디든 달려가겠습니다.\n자동 수기 인형 서비스, 바이올렛 에버가든입니다.",
    "고객님이 원하신다면 어디든 달려가겠습니다.\n자동 수기 인형 서비스, 바이올렛 에버가든입니다.",

  ]);
  const [myMessages, setMyMessages] = React.useState<string[]>([
    "안녕",
    "안녕",

  ]);

  let sumMessages: message[] = [
    { who:"vi", text:"adfaf", index:1 },
    { who:"vi", text:"adfaf", index:1 },
    { who:"vi", text:"adfaf", index:1 },
    { who:"vi", text:"adfaf", index:1 },
    { who:"vi", text:"adfaf", index:1 },
  ]

  useEffect(() => {

  }, [violetMessages, myMessages]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}>
      <Screen>
        <Header>
          <Back />
          <Text style={[Texts.Body14Bold, { color: "#000" }]}>편지 대필</Text>
          <TouchableOpacity style={{ borderRadius: 20, backgroundColor: "#000" }} onPress={()=>{
            navigation.navigate('Letter')
          }}><Check width={24} height={24}/></TouchableOpacity>
        </Header>
        <ChatContainer>
          {sumMessages.map((items:message)=>(<MyUnit message={items.text}/>))}
          {myMessages.map((message) => (<MyUnit message={message}/>))}
          <VioletUnit message={"짧은 문장"} />
          <MyUnit message={"짧은 문장"} />
          <VioletUnit message={"기이이이이이ㅣ이이ㅣ이이ㅣ이이잉이이이ㅣ이이이이이이이이인문장"} />
          <MyUnit message={"기이이이이이이이ㅣ이이ㅣ이이이ㅣ이이이이ㅣ이이이이이이ㅣ인문장"} />
        </ChatContainer>
        <InputBox placeholder={"메세지를 입력하세요 ..."} /></Screen>
    </KeyboardAvoidingView>

  );
};

export const Screen = styled.View`
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    padding: 24px 16px;
    gap: 24px;
`;

const Header = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
const ChatContainer = styled.ScrollView`
    flex: 1;
    width: 100%;
`;
const InputBox = styled.TextInput`
    width: 100%;
    background-color: ${Colors.Gray50};
    border-radius: 8px;
    color: ${Colors.Gray500};
    placeholder-color: ${Colors.Gray500};
    padding: 10px 18px;
    ${Texts.Caption12Reg}
`;

export default Chat;
