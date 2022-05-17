import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import CategoryPickerItem from "../CategoryPickerItem";


import {
  AppForm as Form,
  AppFormField as FormField,
  AppFormPicker as Picker,
  SubmitButton,
} from "../forms";
import FormImagePicker from "../forms/FormImagePicker";
import Screen from "../Screen";
import AppButton from "../AppButton";
import useLocation from "../../hooks/useLocation";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please, select at least one image.").max(4, "Please, select at maximun four images").label("Images")
});

const categories = [
  { label: "Dog", value: 1 },
  { label: "Cat", value: 2 },
  { label: "Others", value: 3 },
];

function ListingEditScreen() {
  
  const location = useLocation();

  return (
    
      <Screen style={styles.container}>
        <Form
          initialValues={{
            title: "",
            price: "",
            description: "",
            category: null,
            images: [],
          }}
          onSubmit={(values) => console.log(location)}
          validationSchema={validationSchema}
        >
          <FormImagePicker name="images" />
          <FormField maxLength={255} name="title" placeholder="Title" />
          
          <Picker
            items={categories}
            name="category"
            numberOfColumns={3}
            PickerItemComponent={CategoryPickerItem}
            placeholder="Category"
            
          />
          <FormField
            maxLength={255}
            multiline
            name="description"
            numberOfLines={3}
            placeholder="Description"
          />
          <SubmitButton title="Post" />
        </Form>
      </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default ListingEditScreen;