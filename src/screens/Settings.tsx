import { Text, StyleSheet, ScrollView, View, Switch } from "react-native";
import { useState } from "react";

import RootContainer from "../components/RootContainer";
import CustomButton from "../components/CustomButton";
import { useDispatch } from "react-redux";
import authenticationSlice, {
  authenticationActions,
} from "../context/authenticationSlice";
import Toast from "react-native-toast-message";
import { settings } from "firebase/analytics";

const Settings = (props) => {
  const [theme, setTheme] = useState("light");
  const dispatch = useDispatch();

  const themeSwitchHandler = () =>
    theme === "light" ? setTheme("dark") : setTheme("light");

  const logoutHandler = () => {
    dispatch(authenticationActions.logout());
    Toast.show({
      type: "logout",
      text1: "ออกจากระบบสำเร็จ",
      position: "top",
      swipeable: true,
      visibilityTime: 1500,
      topOffset: 50,
    });
    // props.navigation.navigate("splashscreen");
  };

  return (
    <RootContainer>
      <Text style={s.headerText}>ตั้งค่า</Text>
      <ScrollView style={s.settingsList}>
        <View style={s.settingsItem}>
          <Text style={s.settingsItem__text}>บัญชี</Text>
          <CustomButton style={s.button} onPress={logoutHandler}>
            <Text style={s.button__text}>ออกจากระบบ</Text>
          </CustomButton>
        </View>
        <View style={s.settingsItem}>
          <Text style={s.settingsItem__text}>Debug</Text>
          <CustomButton
            style={s.button}
            onPress={() =>
              Toast.show({
                type: "warning",
                text1: "TESTING TOAST",
                text2: "successfully testing",
              })
            }
          >
            <Text style={s.button__text}>Toast</Text>
          </CustomButton>
        </View>
      </ScrollView>
    </RootContainer>
  );
};

const s = StyleSheet.create({
  headerText: {
    fontSize: 40,
    fontFamily: "SemiBold",
    marginBottom: 30,
  },
  settingsList: {
    gap: 20,
  },
  settingsItem: {
    padding: 20,
    backgroundColor: "#fdfdfd",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#3246FF",
    width: "40%",
    padding: 15,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
  },
  button__text: {
    color: "#fff",
    fontFamily: "SemiBold",
  },
  settingsItem__text: {
    fontFamily: "SemiBold",
  },
});

export default Settings;
