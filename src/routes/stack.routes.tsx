import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet } from "react-native";
import CustomDrawer from "../components/Drawer/CustomDrawer";

import Home from "../pages/Home/index";
import Add_subject from "../pages/Add_school_subject";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    return(
        <Drawer.Navigator 
        screenOptions={{drawerStyle: styles.drawerStyles, headerTransparent:true}}
        drawerContent={(props) => <CustomDrawer{...props}/>}
        initialRouteName="Home">

            <Drawer.Screen name="Home" component={Home}
            options={{title:""}}/>
            <Drawer.Screen name="Add subject" 
            component={Add_subject}
            options={{title:"Adicionar matéria", headerTitleAlign:"center"}}/>

        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({
    drawerStyles: {
        width: "70%",
        backgroundColor:"white",
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20
    }
})
