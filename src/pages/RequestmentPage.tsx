import { useEffect, useState } from 'react';
import { View, Text, TextInput, KeyboardAvoidingView, StyleSheet, Platform } from 'react-native';
import Texts from '../consts/Texts';
import Colors from '../consts/Colors';
import IconButton from '../components/common/IconButton';
import ActionButton from '../components/common/ActionButton';
import ContentContainer from '../components/requestment/ContentContainer';
import Finish from '../components/requestment/Finish';

interface Req {
    title: string;
    placeholder: string;
    maxLength: number;
};

const Style = StyleSheet.create({
    WholeContainer: {
        width: '100%',
        height: '100%',
        paddingHorizontal: 16,
        paddingVertical: 24,
    },
    ContentContainer: {
        width: '100%',
        paddingTop: 14,
        flexDirection: 'column',
        gap: 20,
        borderTopWidth: 1,
        borderTopColor: Colors.Gray300,
    },
    Title: {
        color: Colors.Gray900,
        marginTop: 40,
        marginBottom: 28,
    },
    TextInput: {
        width: '100%',
        paddingHorizontal: 16,
        paddingVertical: 10,
        color: Colors.Gray900,
        backgroundColor: Colors.Gray50,
        borderRadius: 8,
    },
});

const RequestmentPage = () => {
    const [index, setIndex] = useState(0);
    const [inputText, setInputText] = useState('');
    const [buttonActivate, setButtonActivate] = useState(false);
    const [resList, setResList] = useState(['', '', '', '']);
    const reqList: Req[] = [
        {title: '고객님,\n당신의 이름을 알려주시겠어요?', placeholder: '예시) 김현호 (최대 8자)', maxLength: 8},
        {title: '편지를 받을 분의\n이름을 알려주시겠어요?', placeholder: '예시) 박찬규 (최대 8자)', maxLength: 8},
        {title: '편지가 향할 곳의\n주소가 어떻게 되나요?', placeholder: '예시) hyunhomon (@gmail.com 생략)', maxLength: 64},
        {title: '편지를 작성하는\n목적은 무엇인가요?', placeholder: '예시) 부모님께 드릴 생신편지', maxLength: 100},
        {title: '아래의 정보가\n정확한지 확인해주세요.', placeholder: '', maxLength: 0},
    ];
    const onChangeText = (text: string) => {
        setInputText(text);
        setButtonActivate(text.length > 0);
    };
    const onChangeIndex = (index: number) => {
        const temp = resList;
        temp[index] = inputText;
        setResList(temp);
    };
    const onNextIndex = () => {
        if(buttonActivate) {
            if(index > 4) {
                // todo: else case
                console.log('end')
                return;
            }
            else if(index < 3) onChangeText(resList[index+1]);
            onChangeIndex(index);
            setIndex(prev => prev+1);
        }
    };

    return (
        <KeyboardAvoidingView
            style={Style.WholeContainer}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            {
                index < 5 ?
                <View>
                    <IconButton name='Back' size={24}
                        onPress={() => {
                            if(index > 0) {
                                onChangeIndex(index);
                                onChangeText(resList[index-1]);
                                setIndex(prev => prev-1);
                            }
                            else {
                                // todo: else case
                                console.log('start')
                            }
                        }}
                    />
                    <Text style={[Texts.Body20Bold, Style.Title]}>{reqList[index].title}</Text>
                    {
                        index < 4 ?
                        <TextInput
                            value={inputText}
                            onChangeText={onChangeText}
                            placeholder={reqList[index].placeholder}
                            placeholderTextColor={Colors.Gray500}
                            maxLength={reqList[index].maxLength}
                            returnKeyType='done'
                            onSubmitEditing={onNextIndex}
                            blurOnSubmit={false}
                            style={Style.TextInput}
                        /> :
                        <View style={Style.ContentContainer}>
                            <View style={{flexDirection: 'row'}}>
                                <ContentContainer title='의뢰인' content={resList[0]} />
                                <ContentContainer title='수취인' content={resList[1]} />
                            </View>
                            <ContentContainer title='주소' content={resList[2] + '@gmail.com'} />
                            <ContentContainer title='작성 목적' content={resList[3]} />
                        </View>
                    }
                </View> :
                <Finish
                    title={'작성하신 의뢰서가\n성공적으로 접수되었어요'}
                    content='접수된 의뢰는 의뢰 목록에 추가되었습니다'
                    onPress={() => {}}
                />
            }
            <ActionButton
                text='다음'
                onPress={onNextIndex}
                disabled={!buttonActivate}
            />
        </KeyboardAvoidingView>
    );
};

export default RequestmentPage;
