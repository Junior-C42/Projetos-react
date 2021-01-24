import React from 'react'; 
import { 
    StyleSheet, 
    View, 
    ScrollView, 
    SafeAreaView, 
    Button
} from 'react-native'; 

import { DrawerNavigatorItems } from 'react-navigation-drawer'; 

const CustomDrawer = ( props ) => {


    return(
        <ScrollView style={styles.scrollContainer}>
            <SafeAreaView style={styles.viewContainer}>
                <View style={styles.box}></View>
                <DrawerNavigatorItems 
                    {...props} 
                    itemsContainerStyle={{width:'100%'}}
                />
                <Button title="Sair"/>
            </SafeAreaView>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    scrollContainer:{
        flex:1,
    }, 
    viewContainer:{
        flex:1,
        alignItems:'center', 
    }, 
    box:{
        width:50, 
        height:50, 
        backgroundColor:'#000'
    }
})

export default CustomDrawer; 