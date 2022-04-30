import React from "react";
import { StyleSheet } from "react-native";
import { useFormikContext } from "formik";

import AppButton from "../AppButton";

import colors from "../../config/colors";

function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();

  return <AppButton title={title} onPress={handleSubmit} styles={styles.buttonColor} />;
}

export default SubmitButton;

const styles = StyleSheet.create({
  buttonColor: {
    color: colors.green
  }
})
