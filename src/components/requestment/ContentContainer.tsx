import { Text, View } from "react-native";
import Colors from "../../consts/Colors";
import Texts from "../../consts/Texts";

interface ContentContainerProps {
    title: string;
    content: string;
};

const ContentContainer = (
    { title, content }: ContentContainerProps
) => {
    return (
        <View style={{flexGrow: 1, gap: 4}}>
            <Text style={[Texts.Body16Bold, {color: Colors.Gray900}]}>{title}</Text>
            <Text style={[Texts.Body14Bold, {color: Colors.Gray500}]}>{content}</Text>
        </View>
    );
};

export default ContentContainer;
