import React from "react";
import { Text, ImageBackground, View, Pressable } from "react-native";
import { FontAwesome5, FontAwesome, Ionicons } from "@expo/vector-icons";
import { styles } from "../../screens/needsScreens/aComponentStyles";

const InfoGender = ({ route, navigation }) => {
  const selectedRegion = route.params["selectedRegion"];
  const selectedInstitutionType = route.params["selectedInstitutionType"];
  const selectedForWho = route.params["selectedForWho"];

  const handlePress = (selectedGender) => {
    if (selectedGender === "O") {
      navigation.navigate("OtherGender", {
        selectedRegion: selectedRegion,
        selectedInstitutionType: selectedInstitutionType,
        selectedForWho: selectedForWho,
        selectedGender: selectedGender,
      });
    } else {
      navigation.navigate("InfoAge", {
        selectedRegion: selectedRegion,
        selectedInstitutionType: selectedInstitutionType,
        selectedForWho: selectedForWho,
        selectedGender: selectedGender,
      });
    }
  };

  return (
    <View>
      <ImageBackground
        source={require("../../assets/background.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.titleTextStyle}>
          What is the gender identity of the person seeking help?
        </Text>
        <View>
          <View style={styles.container1}>
            <View style={styles.bubbleContainer}>
              <Pressable
                style={styles.circleButton}
                onPress={() => handlePress("F")}
              >
                <View style={styles.severalIconsButton}>
                  <Ionicons name="woman-sharp" style={styles.userImage} />
                </View>
              </Pressable>
              <Text style={styles.textStyle}>Female</Text>
            </View>
            <View style={styles.bubbleContainer}>
              <Pressable
                style={styles.circleButton}
                onPress={() => handlePress("M")}
              >
                <View style={styles.severalIconsButton}>
                  <Ionicons name="man-sharp" style={styles.userImage} />
                </View>
              </Pressable>
              <Text style={styles.textStyle}>Male</Text>
            </View>
          </View>
          <View style={styles.container2}>
            <View style={styles.bubbleContainer}>
              <Pressable
                style={styles.circleButton}
                onPress={() => handlePress("O")}
              >
                <View style={styles.severalIconsButton}>
                  <FontAwesome name="heart" style={styles.userImage} />
                </View>
              </Pressable>
              <Text style={styles.textStyle}>Other</Text>
            </View>
            <View style={styles.bubbleContainer}>
              <Pressable
                style={styles.circleButton}
                onPress={() => handlePress("M")}
              >
                <View style={styles.severalIconsButton}>
                  <FontAwesome5 name="question" style={styles.userImage} />
                </View>
              </Pressable>
              <Text style={styles.textStyle}>Prefer not to say</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default InfoGender;
