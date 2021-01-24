import React from 'react'; 
import { 
    StyleSheet, 
    View, 
    Text,
    Image 
} from 'react-native'; 

const TabBarIcon = ( props ) => { 
    let img = null; 

    switch(props.route){
        case 'Welcome':
            img = (props.focused)?
                require('../image/home-active.png'):
                require('../image/home-black.png');
            break;
        case 'Login':
            img = (props.focused)?
                require('../image/msg-active.png'):
                require('../image/msg-black.png');
            break;
    }

    return(
        <View style={styles.TabBarIcon}>
            <Image style={styles.img} source={img} />
            
            {props.badge > 0 &&
            <View style={styles.TabBarBadge} >
                <Text style={styles.TabBarBadgeCount}>{props.badge}</Text>
            </View>
            }
        </View>
    ); 
}; 

const styles = StyleSheet.create({
    TabBarIcon:{
        width:30, 
        height:30, 
        justifyContent:'center', 
        alignItems:'center'
    }, 
    img:{
        width:30, 
        height:30
    }, 
    TabBarBadge:{
        width:15, 
        height:15, 
        borderRadius:15, 
        backgroundColor:'#ff0000', 
        position:'absolute', 
        justifyContent:'center', 
        alignItems:'center',
        right:0, 
        top:0
    }, 
    TabBarBadgeCount:{
        fontSize:12, 
        color:'#fff'
    }
}); 

export default TabBarIcon