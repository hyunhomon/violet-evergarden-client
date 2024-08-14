import { Animated, Text} from "react-native";
import styled from "styled-components/native";
import Texts from "../consts/Texts.tsx";
import Colors from "../consts/Colors.tsx";
import React, { useState } from "react";
import { Add, Check } from "../assets/icons";
import View = Animated.View;

interface unitProps {
  onPress: () => void;
  title: string;
  date: string;
  checked?: boolean;
}

const Main = () => {

  //false is request
  const [activated, setActivated] = useState(false);

  const [requestList, setRequestList] = useState<unitProps[]>([
    {
      title: "대충 편지 이름", date: "대충 날짜 객체", onPress: () => {
      }, checked: true
    },
    {
      title: "대충 편지 이름", date: "대충 날짜 객체", onPress: () => {
      }, checked: false
    },

  ]);
  const [letterList, setLetterList] = useState<unitProps[]>([
    // {title: '대충 편지 이름', date:'대충 날짜 객체', onPress: ()=>{}},
  ]);

  return (<Screen>
    <MenuContainer>
      <RequestMenuButton $disabled={activated} onPress={() => {
        setActivated(false);
      }}><Text style={[Texts.Body14Bold, { color: (activated ? Colors.Gray500 : Colors.Gray900) }]}>의뢰
        목록</Text></RequestMenuButton>
      <LetterMenuButton $disabled={!activated} onPress={() => {
        setActivated(true);
      }}><Text style={[Texts.Body14Bold, { color: (!activated ? Colors.Gray500 : Colors.Gray900) }]}>편지
        보관함</Text></LetterMenuButton>
    </MenuContainer>
    {!activated ? (
      requestList.length ? <ListContainer>{requestList.map((unit) => (
        <ListUnit title={unit.title} date={unit.date} onPress={() => {
        }} checked={unit.checked} />
      ))}</ListContainer> : <NoContentContainer>
        <Text style={[Texts.Body16Bold, { color: Colors.Gray900 }]}>아직 접수된 의뢰가 없습니다</Text><Text
        style={[Texts.Caption12Reg, { color: Colors.Gray500 }]}>하단의 + 버튼을 통해 시작해보세요</Text>
      </NoContentContainer>
    ) : (
      letterList.length ? <ListContainer>{letterList.map((unit, index) => (
          <ListUnit title={unit.title} date={unit.date} onPress={() => {
          }} checked={unit.checked} />))}</ListContainer> :
        <NoContentContainer><Text style={[Texts.Body16Bold, { color: Colors.Gray900 }]}>아직 보관된 편지가 없습니다</Text><Text
          style={[Texts.Caption12Reg, { color: Colors.Gray500 }]}>도착하면 이메일로 알려드릴게요</Text></NoContentContainer>
    )}
    <AddButton onPress={() => {
    }}><Add /></AddButton>
  </Screen>);
};

const Screen = styled.View`
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    padding: 24px 16px;
`;

const NoContentContainer = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    gap: 6px;
`;
const MenuContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;
const LetterMenuButton = styled.TouchableOpacity
  <
  { $disabled: boolean } > `
    width: 50%;
    padding: 8px 36px;
    justify-content: center;
    align-items: center;
    color: ${Colors.Gray900};
    border-bottom-color: ${props => (props.$disabled ? 0 : Colors.Gray900)};
    border-bottom-width: 1px;
    border-bottom: solid;
    `;

const RequestMenuButton = styled.TouchableOpacity
  <
  { $disabled: boolean } > `
    width: 50%;
    padding: 8px 36px;
    justify-content: center;
    align-items: center;
    color: ${Colors.Gray900};
    border-bottom-color: ${props => (props.$disabled ? 0 : Colors.Gray900)};
    border-bottom-width: 1px;
    border-bottom: solid;
    `;
const AddButton = styled.TouchableOpacity`
    padding: 10px;
    justify-content: center;
    align-items: center;
    background-color: ${Colors.Gray900};
    position: absolute;
    border-radius: 100px;
    right: 16px;
    bottom: 32px;
`;
const ListContainer = styled.ScrollView`
    width: 100%;
    flex: 1;
`;
const ListUnitContainer = styled.TouchableOpacity`
    flex-direction: row;
    width: 100%;
    padding: 10px 0;
    justify-content: flex-start;
    align-items: center;
    gap: 4px;

    border-bottom-width: 1px;
    border-bottom-color: ${Colors.Gray100};
`;

const ListUnit = ({ title, date, onPress, checked }: unitProps) => {
  return (<ListUnitContainer onPress={onPress}>
    <View style={{ flex: 1, width: "100%" }}>
      <Text style={[Texts.Body14Bold, { color: Colors.Gray900 }]}>{title}</Text>
      <Text style={[Texts.Small10Reg, { color: Colors.Gray500 }]}>{date}</Text>
    </View>
    {checked ? <View style={{
      position: "absolute",
      right: 0,
      width: 24,
      height: 24,
      backgroundColor: Colors.Gray900,
      borderRadius: 100
    }}><Check /></View> : null}
  </ListUnitContainer>);
};

export default Main;
