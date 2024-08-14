import {SafeAreaView, StatusBar} from 'react-native';
import RequestmentPage from './src/pages/RequestmentPage';
import LetterPage from './src/pages/LetterPage';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar hidden />
      <LetterPage />
    </SafeAreaView>
  );
};

export default App;
