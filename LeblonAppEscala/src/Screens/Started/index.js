import React from 'react'; 
import { StackActions, NavigationActions } from 'react-navigation';
import { Container, LogoArea, ImageArea, ButtonArea } from './style'; 
import TimeLogo from '../../Assets/images/TimeLogo.svg'; 
import TextLogo from '../../Assets/images/TextLogo.svg'; 
import Button from '../../Components/Button'; 

const Started = (props) => {
    
    const handleButton = () => {
        const resetAction = StackActions.reset({
            index:0, 
            actions:[
                NavigationActions.navigate({routeName:'Login'})
            ]
        }); 
        props.navigation.dispatch(resetAction); 
    }

    return(
        <Container>
            <LogoArea>
                <TextLogo/>
            </LogoArea>

            <ImageArea>
                <TimeLogo/>
            </ImageArea>

            <ButtonArea>
                <Button 
                    value="Cadastrar" 
                    color='#fff' 
                    textColor="#003366"
                    
                />
                <Button 
                    value="Login" 
                    color='#003366'
                    textColor="#fff"
                    onPress={handleButton}
                />
            </ButtonArea>
            
        </Container>
    ); 
}; 


export default Started; 
