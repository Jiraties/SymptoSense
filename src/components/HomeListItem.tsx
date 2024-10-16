import LottieView from "lottie-react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Modal,
  Image,
  Linking,
} from "react-native";

import CustomButton from "./CustomButton";
import { Shadows } from "../constants/styles";

const HomeListItem: React.FC<{
  text: string;
  button: string;
  image?: boolean;
  redirectTo: string;
  warningModal?: boolean;
}> = (props) => {
  const navigation = useNavigation<any>();
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const customButtonPressHandler = () => {
    if (props.warningModal) {
      setModalIsVisible(true);
    } else {
      navigation.navigate(props.redirectTo);
    }
  };

  return (
    <View
      style={{
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 20,
        shadowOpacity: 0.2,
      }}
    >
      <Modal
        visible={modalIsVisible}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <View style={s.modal}>
          {/* <Image
            source={require("../../assets/images/modal.png")}
            style={s.modalImage}
          /> */}
          <LottieView
            source={require("../../assets/animations/diagnosisAnimation.json")}
            style={s.animation}
            autoPlay
          />
          <View style={s.modalTextWrapper}>
            <View>
              <Text style={s.headerText}>
                {/* ก่อนจะประเมินควรทราบว่าแอปนี้ควรใช้ในการประเมินเบื้องต้นเท่านั้น
              ไม่ใช่คำวินิจฉัยอาจเกิดข้อผิดพลาดได้ควรได้รับคำแนะนำจากแพทย์ */}
                แอปพลิเคชันใกล้หมอนั้นทำมาเพื่อให้คำแนะนำด้านสุขภาพเบื้องต้นเท่านั้น
              </Text>
              <Text style={[s.headerText, { fontSize: 15, marginBottom: 30 }]}>
                ไม่ควรใช้เป็นใช่เครื่องมือวินิจฉัยอย่างเป็นทางการ
                ควรปรึกษาผู้เชี่ยวชาญด้านสุขภาพ
                และจะไม่รับผิดชอบต่อการตัดสินใจใดๆ ที่เกิดจากคำแนะนำของแอป
              </Text>
            </View>
            <CustomButton
              style={s.termsAndConditions__button}
              onPress={() =>
                Linking.openURL(
                  "https://docs.google.com/document/d/1F2cQv9utSkQ8fEZvSraeTjy1bewv5agTMVC84yN9YTs/edit?usp=sharing"
                )
              }
            >
              <Text style={s.termsAndConditions__text}>
                ดูข้อกำหนดและเงื่อนไขเต็ม
              </Text>
            </CustomButton>
          </View>

          {/* <CustomButton
            style={[
              s.homeListItem__button,
              { width: "100%", marginBottom: 20 },
            ]}
            pressedStyle={s.homeListItem__buttonPressed}
            onPress={() => setModalIsVisible(false)}
          >
            <Text style={s.homeListItem__buttonText}>Back</Text>
          </CustomButton> */}
          <CustomButton
            style={[
              s.homeListItem__button,
              { width: "100%", height: 50, marginTop: 30 },
            ]}
            pressedStyle={s.homeListItem__buttonPressed}
            onPress={() => {
              navigation.navigate(props.redirectTo);
              setModalIsVisible(false);
            }}
          >
            <Text style={s.homeListItem__buttonText}>รับทราบ</Text>
          </CustomButton>
        </View>
      </Modal>
      <View style={s.homeListItem}>
        <ImageBackground
          style={s.homeListItem__image}
          source={
            props.image ? require("../../assets/images/diagnosis.png") : ""
          }
          resizeMode="cover"
        >
          <Text style={s.homeListItem__text}>{props.text}</Text>

          <CustomButton
            style={s.homeListItem__button}
            pressedStyle={s.homeListItem__buttonPressed}
            onPress={customButtonPressHandler}
          >
            <Text style={s.homeListItem__buttonText}>{props.button}</Text>
          </CustomButton>
        </ImageBackground>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  homeListItem: {
    width: "100%",
    backgroundColor: "#fdfdfd",
    borderRadius: 20,
    marginBottom: 20,
    height: 175,
    overflow: "hidden",
  },
  homeListItem__text: {
    fontSize: 20,
    flex: 1,
    fontFamily: "SemiBold",
  },
  homeListItem__button: {
    backgroundColor: "#3246FF",
    width: "40%",
    height: 40,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "auto",
  },
  animation: {
    height: 250,
    width: 250,
  },
  homeListItem__buttonText: {
    color: "#fff",
    fontFamily: "SemiBold",
  },
  homeListItem__buttonPressed: {
    backgroundColor: "#2533b3",
    elevation: 1,
    ...Shadows.default,
  },
  homeListItem__image: {
    borderRadius: 20,
    marginBottom: 20,
    height: 175,
    padding: 20,
    // opacity: 0.5,
  },
  modal: {
    backgroundColor: "#efefef",
    borderRadius: 20,
    // marginTop: 200,
    // height: "100%",
    borderTopRightRadius: 30,
    flex: 1,
    padding: 20,
    gap: 30,
    alignItems: "center",
    paddingTop: "20%",
    paddingBottom: "10%",
  },
  modalTextWrapper: {
    flex: 1,
  },
  modalImage: {
    width: 300,
    height: 300,
  },
  headerText: {
    textAlign: "left",
    fontSize: 30,
    fontFamily: "SemiBold",
    marginBottom: 10,
  },
  headerTextHighlight: {
    textAlign: "left",
    fontSize: 20,
    color: "#FB6E90",
    fontFamily: "SemiBold",
    overflow: "visible",
  },
  termsAndConditions__button: {},
  termsAndConditions__text: {
    fontFamily: "SemiBold",
    color: "#3246FF",
    fontSize: 15,
  },
});

export default HomeListItem;
