import { Image, StyleSheet, Text, useWindowDimensions, View } from "react-native";



const OnboardingScreen = ({item}:{ item:any } )=>{

    const {width} = useWindowDimensions();

    return(
        <View style={[styles.container,{width}]}>
           <Image  source={item?.image}    style={[styles.image,{width,resizeMode:'contain'}]} />  

            <View style={{flex:0.4}}>
                <Text style={styles.title}> {item?.title} </Text>
                <Text style={styles.description}> {item.description} </Text>
            </View> 
        </View>  
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    image:{
        flex:0.5,
        justifyContent:'center' 
    },
    title:{
        fontWeight:'800',
        fontSize:20,
        marginBottom:10,
        textAlign:'center',
        color:'$62656b',
    },
    description:{
        paddingHorizontal:64,  
        color:'$62656b',
        fontWeight:'300',
        textAlign:'center',
 
    }
})



export default OnboardingScreen;