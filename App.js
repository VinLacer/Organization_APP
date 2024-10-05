import Routes from "./src/routes/index"
import { StatusBar } from 'react-native'

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
