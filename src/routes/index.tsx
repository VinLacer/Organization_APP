import {NavigationContainer} from "@react-navigation/native"
import DrawerRoutes from "./stack.routes"

export default function Routes() {
    return(
        <NavigationContainer>
            <DrawerRoutes/>
        </NavigationContainer>
    )
}
