import React from "react";
import { View, Text, Button, ScrollView, Pressable, PixelRatio } from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./welcomeScreenStyles";




const HomeScreen = ({navigation}) => {

  const handlePress1 = () =>{
    console.log('Button pressed');
    console.warn('Pressed Pressed')
    navigation.navigate('InfoAge')
  }

  const handlePressNGO = () =>{
    console.log('Button pressedNGO');
    navigation.navigate('Search')
  }


    return (
      <SafeAreaView>
      <ScrollView >
      <View style={styles.container}>


              <View style={styles.roundXL}>
              <Button color='white' title='If you are in a vulnerable situation...' onPress={() => console.warn("big bubble tapped")} />
              <Text style={styles.textTitle}>test test</Text>
              </View>    
               
                <View style={styles.roundM}>
                <Pressable onPress={handlePress1}>  
                <Text style={styles.textButton}>If someone else needs help...</Text>
                </Pressable>
            </View>

            <View style={styles.roundS}>
              <Pressable
                onPress={handlePressNGO}
                >
                  <Text style={styles.textButton}>
                  If you are at risk...</Text>  
              </Pressable>
              </View>

      </View>
      </ScrollView>
      </SafeAreaView>
    );
  };

  
  export default HomeScreen;