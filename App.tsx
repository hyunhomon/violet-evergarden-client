import { NavigationContainer } from '@react-navigation/native';
import {SafeAreaView, StatusBar} from 'react-native';
import StackNavigation from './Router';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar hidden />
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
