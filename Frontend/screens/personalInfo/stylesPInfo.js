import { StyleSheet, Dimensions, PixelRatio } from "react-native";
import normalize from "react-native-normalize";

const { width, height } = Dimensions.get("window");
let partialHeight = 0.22 * height;
let bubbleWidth = 0.33 * width;
let bubbleSize = Math.round((bubbleWidth + partialHeight) / 2);

export const styles = StyleSheet.create({
  container1: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%",
    paddingRight: "7%",
  },
  container1for2options: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%",
    paddingRight: "30%",
  },
  container2: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "2%",
    paddingLeft: "6%",
  },
  container2for2options: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "2%",
    paddingLeft: "23%",
  },
  textStyle: {
    color: "white",
    fontSize: normalize(23),
    textAlign: "center",
  },
  titleTextStyle: {
    color: "#921CB1",
    fontSize: normalize(25),
    margin: 35,
    textAlign: "center",
  },
  circleButtonOnlyText: {
    width: bubbleSize,
    height: bubbleSize,
    borderRadius: bubbleSize / 2,
    backgroundColor: "#A169B1",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: 8,
    margin: 7,
  },
  circleButton: {
    width: bubbleSize,
    height: bubbleSize,
    borderRadius: bubbleSize / 2,
    backgroundColor: "#A169B1",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: 8,
    margin: 7,
  },
  userImage: {
    fontSize: normalize(60),
    color: "white",
  },
});
