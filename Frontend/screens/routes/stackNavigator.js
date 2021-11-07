import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Development from "../development/developmentScreen";
import HomeScreen from "../welcomeScreen/welcomeScreen";
import Search from "../searchNGOscreen/searchNGO";
import OrganisationsListScreen from "../organisationsListScreen/organisationsListScreen";
import OrganisationDetailsScreen from "../organisationDetailsScreen/organisationDetailsScreen";
import InfoAge from "../personalInfo/4_ageScreen";
import PersonType from "../personalInfo/5_personTypeScreen";
import ResultInfoScreen from "../personalInfo/resultPersonalInfoScreen";
import InfoGender from "../personalInfo/3_genderScreen";
import InstitutionType from "../personalInfo/1_institutionTypeScreen";
import HelpForWho from "../personalInfo/2_helpForWhoScreen";
import NewScreen from "../personalInfo/newScreen";
import LocationScreen from "../locationScreen/locationScreen";
import NextButton from "../../components/nextButton";
import NeedsScreenA from "../needsScreens/needsScreenA";
import MainContainer from "../../navigation/mainContainer";

const Stack = createNativeStackNavigator();

const StackNavigation = () => (
<NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#8A449D",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        {/* instead of doing the below styling for the header we can put the code above  with the screenOptions and have the header style same for all the screens */}
        <Stack.Screen name="Development" component={Development} />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: "Dots." }}
        />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Group>
          <Stack.Screen name="InstitutionType" component={InstitutionType} />
          <Stack.Screen name="HelpForWho" component={HelpForWho} />
          <Stack.Screen name="InfoGender" component={InfoGender} />
          <Stack.Screen name="InfoAge" component={InfoAge} />
          <Stack.Screen name="PersonType" component={PersonType} />
          <Stack.Screen name="ResultInfoScreen" component={ResultInfoScreen} />
        </Stack.Group>
        <Stack.Screen name="NewScreen" component={NewScreen} />
        <Stack.Screen name="NextButton" component={NextButton} />
        <Stack.Screen
          name="OrganisationsListScreen"
          component={OrganisationsListScreen}
        />
        <Stack.Screen name="LocationScreen" component={LocationScreen} />
        <Stack.Screen name="NeedsScreenA" component={NeedsScreenA} />
        <Stack.Screen
          name="MainContainer"
          component={MainContainer}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OrganisationDetailsScreen"
          component={OrganisationDetailsScreen}
        />
      </Stack.Navigator>
      </NavigationContainer>
);

export default StackNavigation;