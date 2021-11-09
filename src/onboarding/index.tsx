import { useRef, useState } from "react"
import { FlatList, StyleSheet, View,Animated } from "react-native"
import OnboardingScreen from "./onboarding-screen"




const Onboarding = ()=>{

    const onboardingSlides = [
        {
            title:'This is screen number 1',
            description:'Screen number 1 loading',
            image: require('../assets/1.png')
        },

        {
            title:'Make your orders in 1 go',
            description:'Screen number 2 loading',
            image: require('../assets/2.png')
        },


        {
            title:'Get them delivered to your private address',
            description:'Screen number 3 loading',
            image: require('../assets/3.png')
        }


    ]
    
    const [currentIndex,setCurrentIndex] = useState(0);
 
    const scrollX = useRef(  new Animated.Value(0)).current

    const slideRef = useRef<any>(null) 

    const viewableItemsChanged = useRef<(p:any)=>any>(({viewableItems})=>{
        setCurrentIndex(viewableItems[0].index)
      }).current
    
    const viewConfig = useRef({viewAreaCoveragePercentThreshhold:0 }).current 

    return(
        <View style={styles.container}>
            <View style={{flex:3} }>
            <FlatList data={onboardingSlides}  
             horizontal
             showsHorizontalScrollIndicator
             pagingEnabled
             bounces={false}
             keyExtractor={(item:any)=>item?.id}   
             renderItem={({item})=> <OnboardingScreen item={item}/> }
             onScroll={Animated.event([{nativeElement:{
                contentOffset: {x:scrollX   }
             }}],{useNativeDriver:false} )}
             scrollEventThrottle={32} 
             onViewableItemsChanged={viewableItemsChanged}   
             viewabilityConfig={viewConfig}
             ref={slideRef} 
            />
            </View>
            
        </View>


    )


}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})


export default Onboarding