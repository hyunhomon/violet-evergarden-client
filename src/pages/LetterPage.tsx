import { StyleSheet, Text, TextInput, View } from "react-native";
import Colors from "../consts/Colors";
import IconButton from "../components/common/IconButton";
import Texts from "../consts/Texts";
import ActionButton from "../components/common/ActionButton";
import { useState } from "react";
import Finish from "../components/requestment/Finish";
import { useNavigation } from "@react-navigation/native";

const Style = StyleSheet.create({
    WholeContainer: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 16,
        paddingVertical: 24,
    },
    InsideContainer: {
        width: '100%',
        height: '100%',
    },
    TopContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    TextInput: {
        width: '100%',
        height: '60%',
        marginVertical: 16,
        paddingHorizontal: 18,
        paddingVertical: 14,
        color: Colors.Gray900,
        borderWidth: 1,
        borderColor: Colors.Gray900,
        textAlignVertical: 'top',
    },
});

const LetterPage = () => {
    const navigation = useNavigation();
    const sender = '김현호';
    const receiver = '박찬규';
    const [isFinish, setIsFinish] = useState(false);
    const [content, setContent] = useState('');
    const onChangeText = (text: string) => {
        setContent(text);
    };

    return (
        <View style={Style.WholeContainer}>
            {
                !isFinish ?
                <View style={Style.InsideContainer}>
                    <View style={Style.TopContainer}>
                        <IconButton name="Back" size={24}
                            onPress={() => {
                                navigation.navigate('Chat')
                            }}
                        />
                        <Text style={[Texts.Body14Bold, {color: Colors.Gray900}]}>편지 확인</Text>
                        <View style={{width: 24}} />
                    </View>
                    <Text style={[Texts.Body14Reg, {color: Colors.Gray900, width: '100%', marginTop: 24}]}>{'To. ' + sender}</Text>
                    <TextInput
                        value={content}
                        onChangeText={onChangeText}
                        placeholder="편지의 내용을 입력해주세요 ..."
                        placeholderTextColor={Colors.Gray500}
                        multiline={true}
                        style={Style.TextInput}
                    />
                    <Text style={[Texts.Body14Reg, {color: Colors.Gray900, textAlign: 'right', width: '100%'}]}>{'From. ' + receiver}</Text>
                    <ActionButton text="작성 완료" onPress={() => {setIsFinish(true)}} />
                </View> :
                <View style={Style.InsideContainer}>
                    <Finish
                        title={receiver + '님 주소로\n편지가 안전하게 배달되었어요'}
                        content="편지는 수취인의 편지 보관함에 추가되었습니다"
                        onPress={() => {}}
                    />
                    <ActionButton text="확인" onPress={() => {}} />
                </View>
            }
        </View>
    );
};

export default LetterPage;
