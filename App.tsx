import { Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Teams } from '@screens/Teams';
import theme from '@theme/index';
import { useFonts } from 'expo-font';
import { ThemeProvider } from 'styled-components/native';

export default function App() {
  const [] = useFonts({Roboto_400Regular, Roboto_700Bold})
  return (
    <ThemeProvider theme={theme}>
   <Teams/>
   </ThemeProvider>
  );
}


