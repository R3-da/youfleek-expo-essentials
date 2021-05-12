import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import Onboarding from "react-native-onboarding-swiper";
import Screen from "../../components/Screen";
import TextLink from "../../components/TextLink";

import { useTheme } from '@ui-kitten/components';

const Next = ({ ...props }) => (
  <TextLink style={{ marginHorizontal: 20 }} {...props}>Next</TextLink>
);

const Done = ({ ...props }) => (
  <TextLink style={{ marginHorizontal: 20 }} {...props}>Finish</TextLink>
);

const Skip = ({ ...props }) => (
  <TextLink style={{ marginHorizontal: 20 }} {...props}>Skip</TextLink>
);

const Dots = ({ selected }) => {
  const theme = useTheme();
  return (
    <View
      style={{
        width: 7,
        height: 7,
        marginHorizontal: 2,
        backgroundColor: selected ? theme['color-primary-default'] : theme['background-basic-color-1'],
        borderRadius: 10,
        borderWidth: 1,
        borderColor: theme['color-primary-default'],
      }}
    />
  );
};

var { width, height, scale } = Dimensions.get("screen");

export default function OnboardingScreen({ navigation }) {
  const theme = useTheme();

  return (
    <Screen withPadding={false}>
      <Onboarding
        onSkip={() => navigation.replace("Login")}
        onDone={() => navigation.navigate("Login")}
        DoneButtonComponent={Done}
        NextButtonComponent={Next}
        SkipButtonComponent={Skip}
        DotComponent={Dots}
        bottomBarHighlight={false}
        containerStyles={styles.containerStyles}
        titleStyles={styles.titleStyles}
        subTitleStyles={styles.subTitleStyles}
        imageContainerStyles={styles.imageContainer}
        pages={[
          {
            backgroundColor: theme['background-basic-color-1'],
            image: (
              <Image
                source={require("../../assets/images/onboarding1.png")}
                style={styles.image}
              />
            ),
            title: "Make reading fun",
            subtitle: "Read like a video game",
          },
          {
            backgroundColor: theme['background-basic-color-1'],
            image: (
              <Image
                source={require("../../assets/images/onboarding2.png")}
                style={styles.image}
              />
            ),
            title: "Get good",
            subtitle: "Keep Learning and achieve your goals",
          },
          {
            backgroundColor: theme['background-basic-color-1'],
            image: (
              <Image
                source={require("../../assets/images/onboarding3.png")}
                style={styles.image}
              />
            ),
            title: "Make it a habit",
            subtitle: "Stay accountable with reading groups",
          },
        ]}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  containerStyles: {
    justifyContent: "flex-start",
    top: 0.05 * height * scale,
  },
  imageContainer: {
    paddingBottom: 0.04 * height * scale,
  },
  titleStyles: {
    fontSize: 24,
    fontWeight: '800',
    fontFamily: "Poppins-Bold",
  },
  subTitleStyles: {
    fontSize: 16,
    fontWeight: '700',
    fontFamily: "Poppins-Regular",
  },
  image: {
    width: 0.7 * width,
    height: 0.7 * width,
  },
});
