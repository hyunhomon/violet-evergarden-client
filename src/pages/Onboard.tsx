import styled from "styled-components/native";
import Chapter from "../components/onboard/Chapter.tsx";
import ActionButton from "../components/common/ActionButton.tsx";
import React, { useEffect, useState } from "react";
import Texts from "../consts/Texts.tsx";
import Colors from "../consts/Colors.tsx";
import {Text} from "react-native";

const Onboard = () => {
  const [contents, setContents] = useState([
    "️편지를 통해\n당신의 진심을 전해보세요",
    "직접 작성하거나\n그녀에게 대필을 맡겨보세요",
    "주고받은 편지는\n보관함에서 확인해보세요",
    "고객님이 원하신다면\n어디든 달려가겠습니다",
    "자동 수기인형 서비스,\n바이올렛 에버가든입니다"
  ]);
  const [imgPath, setImgPath] = useState([
    require("../assets/images/img1.png"),
    require("../assets/images/img2.png"),
    require("../assets/images/img3.png"),
    require("../assets/images/img4.png"),
    require("../assets/images/img5.png")
  ]);
  const [current, setCurrent] = useState<number>(1);
  const [enableLogin, setEnableLogin] = useState<boolean>(false);

  useEffect(() => {
    if (current > 5) setCurrent(1);
    console.log(current);
  }, [current]);

  return (
      <Screen>
        <OnboardImg source={imgPath[current - 1]} />
        <Text
          style={[Texts.HeadingSmall, { color: Colors.Gray900, textAlign: "center" }]}>{contents[current - 1]}</Text>
        <Chapter index={current} />
        {current !== 5 ? <ButtonContainer><ActionButton text={"다음"} onPress={() => {
          setCurrent(current + 1);
        }} disabled={false} /></ButtonContainer> : <ButtonContainer><Text>대충 구글 로그인 버튼</Text></ButtonContainer>}
      </Screen>
  );
};

const Screen = styled.View`
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    gap: 60px;
`;

const OnboardImg = styled.Image`
    height: 465px;
    width: 100%;
`;

const ButtonContainer = styled.View`
    width: 100%;
    position: absolute;
    bottom: 40px;
    padding: 0 16px;
`;
const GooleLoginButton = styled.TouchableOpacity`
`;

export default Onboard;
