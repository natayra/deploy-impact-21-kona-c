import React from "react";
import {
  View,
  Text,
  ScrollView,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./stylesPInfo";


// this is a future feature where we return user data gathered from the personal information
// based on your answers, we found help for you
const ResultInfoScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>

          <Text>hello i am a new screen</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ResultInfoScreen;
