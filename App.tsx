import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, StatusBar } from "react-native";
import StackNavigation from "./Router.tsx";
import { createStackNavigator } from "@react-navigation/stack";

const App = () => {

  const Stack = createStackNavigator();

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <StatusBar hidden />
        <StackNavigation/>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
