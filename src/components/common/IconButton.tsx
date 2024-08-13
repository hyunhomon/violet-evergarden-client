import { TouchableOpacity } from "react-native";
import * as Icons from "../../assets/icons";

interface IconButtonProps {
    name: keyof typeof Icons;
    size: number;
    onPress: () => void;
};

const IconButton = (
    { name, size, onPress }: IconButtonProps
) => {
    const Comp = Icons[name];
    return (
        <TouchableOpacity onPress={onPress}>
            <Comp
                width={size}
                height={size}
            />
        </TouchableOpacity>
    );
};

export default IconButton;
