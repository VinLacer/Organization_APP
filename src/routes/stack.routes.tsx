import { createDrawerNavigator } from "@react-navigation/drawer";
import { StyleSheet } from "react-native";
import CustomDrawer from "../components/Drawer/CustomDrawer";

import Home from "../pages/Home/index";
import Add_Subject from "../pages/Add_school_subject";
import TESTE from "../pages/TESTE/index";

const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    return(
        <Drawer.Navigator 
        screenOptions={{drawerStyle: styles.drawerStyles, headerTransparent:true, headerStyle: {backgroundColor: "#D9D9D9"}}}
        drawerContent={(props) => <CustomDrawer{...props}/>}
        initialRouteName="Home">

            <Drawer.Screen name="Home" 
            component={Home}
            options={{title:""}}/>

            <Drawer.Screen name="Add subject" 
            component={Add_Subject}
            options={{title:"Adicionar matéria", headerTitleAlign:"center"}}/>

            <Drawer.Screen name="Teste"
            component={TESTE}
            options={{title:"Pagina de teste", headerTitleAlign:"center"}}/>

        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({
    drawerStyles: {
        width: "70%",
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20
    }
})
