import { StyleSheet, View, Modal } from "react-native";
import React, { useState, useEffect } from "react";
import { ThemedText } from "../ThemedText";
import { AuthButton } from "./Button";

export default function ModalComponent({
  closePopup,
  openPopup,
  children,
}: {
  closePopup?: () => void;
  openPopup?: boolean;
  children?: React.ReactNode;
}) {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (openPopup) {
      setOpenModal(true);
    }
  }, [openPopup]);

  return (
    <View style={styles.container}>
      <Modal
        visible={openModal}
        statusBarTranslucent={true}
        transparent={true}
        animationType="slide"
      >
        <View style={styles.content}>
          <View style={styles.card}>
            <View style={styles.desc}>
              {children || (
                <ThemedText type="default">
                  {null}
                </ThemedText>
              )}
            </View>
              <AuthButton formatBlue="blue" asyncFunctionPass={() => {
                setOpenModal(false);
                closePopup?.();
              }} Title="CLOSE" />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  desc: {
    paddingBottom: 12,
    color: "white",
  },
  card: {
    width: "90%",
    padding: 20,
    backgroundColor: "rgba(30, 32, 33, 1)",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(0, 140, 255, 1)",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  container: {
    flex: 1,
  },
});
