import { createStackNavigator } from "@react-navigation/stack";
import RequestmentPage from "./src/pages/RequestmentPage";
import LetterPage from "./src/pages/LetterPage";

const Stack = createStackNavigator();
const StackNavigation = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Requestment" component={RequestmentPage} />
            <Stack.Screen name="Letter" component={LetterPage} />
        </Stack.Navigator>
    );
};

export default StackNavigation;
