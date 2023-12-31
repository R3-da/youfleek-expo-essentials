import React, { useState, useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import Page from "../../components/Page";
import Heading from "../../components/Heading";
import Button from "../../components/Button";
import Toast from "react-native-root-toast";

import { useTheme } from "@ui-kitten/components";

import AuthContext from "../../contexts/auth";
import authStorage from "../../utilities/authStorage";

function ProfileHome({ navigation }) {
  const authContext = useContext(AuthContext);
  const theme = useTheme();

  const handleLogOut = () => {
    Toast.show('Logout Successful', {
      duration: Toast.durations.SHORT,
      backgroundColor: theme["notification-success"],
    });

    setTimeout(() => {
      authContext.setUser(null);
      authStorage.removeToken();
    }, 300);
  };

  return (
    <Page>
      <Heading>Profile</Heading>
      <Button status='danger' onPress={handleLogOut}>Log Out</Button>
    </Page>
  );
}

const styles = StyleSheet.create({
  container: {},
});

export default ProfileHome;
