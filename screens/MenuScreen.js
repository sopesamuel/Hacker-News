import React from 'react';
import { View, Text, Image } from 'react-native';
import CustomText from '../components/customText';
import { Dimensions } from 'react-native';
import { Pressable } from 'react-native';
import { Linking } from 'react-native'; 


const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').width;

function MenuScreen() {
 
    return (

        <View style={{paddingTop: 20, paddingRight: 30, height: HEIGHT}}>

         <View style={{alignItems: 'center', justifyContent: 'center', flexDirection:'column', width: WIDTH}}>
        <Image 
           style={{width: 250, height: 250, borderRadius: 500, alignSelf: 'center',marginTop: 40, marginBottom: 20}}
                 source= {require('../assets/sope.jpeg')}
            />
         </View>
    
 
<View style={{width: WIDTH, height: HEIGHT, borderTopLeftRadius: 60, borderTopRightRadius: 60,backgroundColor: '#FAC898' }}>
        <Text style={{fontSize: 15,color: '#A0522D', margin: 10 ,lineHeight: 27,paddingTop: 20,textAlign: 'center',padding: 10 ,fontWeight: '400'}}>

    Hello! I'm Mosope, and I'm based in Lagos, Nigeria. My Tech journey has been a beautiful one and I hope to grow even further as a Software Engineer. My current focus these days is on expanding my portfolio by building more projects and getting better as an individual.
Asides Engineering software's I love my social life, We could connect with any of my social media's below.
</Text>
<View style={{flexDirection: 'row', alignSelf: 'center', height: HEIGHT}}>

<Pressable onPress={() => Linking.openURL('https://mobile.twitter.com/sope_sa')}>

<Image 
           style={{width: 50, height: 50, borderRadius: 50, alignSelf: 'center', marginTop: 40, marginBottom: 20, marginRight: 25}}
                 source= {require('../assets/icons8-twitter-160.png')}
                    />
</Pressable>
<Pressable onPress={() => Linking.openURL('https://github.com/sopesamuel')}>

                         <Image 
           style={{width: 50, height: 50, borderRadius: 50, alignSelf: 'center', marginTop: 40, marginBottom: 20}}
                 source= {require('../assets/icons8-github-144.png')}
                    onPressItem={() => Linking.openURL(story.url)}/>
</Pressable>
<Pressable onPress={() => Linking.openURL('https://www.linkedin.com/in/mosope-fasusi-b7079a207/')}>
    
      <Image 
           style={{width: 50, height: 50, borderRadius: 50, alignSelf: 'center', marginTop: 40, marginBottom: 20, marginLeft: 25}}
                 source= {require('../assets/icons8-linkedin-circled-144.png')}
                    onPressItem={() => Linking.openURL(story.url)}/>
</Pressable>
</View>
</View>


 </View>
        
    
        
      
    );
}

export default MenuScreen;