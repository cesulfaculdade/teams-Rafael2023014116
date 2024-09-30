import { Loading } from '@components/Loading';
import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import { NewTeam } from '@screens/NewTeam';
import { Teams } from '@screens/Teams';
import theme from '@theme/index';
import { StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold})
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      {fontsLoaded ? < NewTeam/> : <Loading/>}
   </ThemeProvider>
  );
}


