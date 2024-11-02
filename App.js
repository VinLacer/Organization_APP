import Routes from "./src/routes/index"
import { StatusBar } from 'react-native'
import { SafeAreaProvider } from "react-native-safe-area-context"; 

export default function App() {
  return(
    <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
    />,
    <Routes/>
  );
}
