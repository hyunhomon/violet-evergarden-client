import { createStackNavigator } from "@react-navigation/stack";
import RequestmentPage from "./src/pages/RequestmentPage";
import LetterPage from "./src/pages/LetterPage";
import Main from "./src/pages/Main.tsx";
import Onboard from "./src/pages/Onboard.tsx";
import Chat from "./src/pages/Chat.tsx";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createStackNavigator();
const StackNavigation = () => {
  const navigation = useNavigation<any>();
  useEffect(() => {
    AsyncStorage.getItem("isFirst").then(res => res && navigation.navigate("Main"));
  }, []);
  return (
    <Stack.Navigator initialRouteName="Onboard" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboard" component={Onboard} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Requestment" component={RequestmentPage} />
      <Stack.Screen name="Letter" component={LetterPage} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
