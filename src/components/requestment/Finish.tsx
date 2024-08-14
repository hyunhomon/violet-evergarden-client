import { Text, View } from "react-native";
import IconButton from "../common/IconButton";
import Texts from "../../consts/Texts";
import Colors from "../../consts/Colors";

interface FinishProps {
    title: string;
    content: string;
    onPress: () => void;
};

const Finish = (
    { title, content, onPress }: FinishProps
) => {
    return (
        <View style={{width: '100%', marginTop: 200, alignItems: "center"}}>
            <IconButton name='Check' size={60} onPress={onPress} />
            <Text style={[Texts.Body20Bold, {color: Colors.Gray900, textAlign: "center", marginTop: 20, marginBottom: 8}]}>{title}</Text>
            <Text style={[Texts.Body14Reg, {color: Colors.Gray500, textAlign: "center"}]}>{content}</Text>
        </View>
    );
};

export default Finish;
