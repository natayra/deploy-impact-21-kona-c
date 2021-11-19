import React from "react";
import {
  Text,
  ImageBackground,
  View,
  Pressable,
  ScrollView,
} from "react-native";
import { styles } from "../../styles/screensStyles/longerButtonsScreenStyles";
import companies_options from "../../assets/jsonFiles/companies_options_map.json";

const NeedsScreenD = ({ route, navigation }) => {
  const handlePress = (selectedOptionD) => {
    navigation.navigate("CompaniesOrganisationsList", {
      uniqueRegionsArray: route.params["uniqueRegionsArray"],
      selectedRegion: route.params["selectedRegion"],
      selectedOptionD: selectedOptionD,
    });
  };

  return (
    <ImageBackground
      source={require("../../assets/background.png")}
      resizeMode="cover"
      style={styles.image}
    >
      <ScrollView>
        {companies_options
          .map((option) => option.First_layer)
          .map((option) => (
            <View key={option} style={styles.containerD}>
              <View style={styles.bubbleContainer}>
                <Pressable
                  style={styles.circleButton}
                  onPress={() => handlePress(option)}
                >
                  <Text style={styles.textStyle}>{option}</Text>
                </Pressable>
              </View>
            </View>
          ))}
      </ScrollView>
    </ImageBackground>
  );
};

export default NeedsScreenD;
