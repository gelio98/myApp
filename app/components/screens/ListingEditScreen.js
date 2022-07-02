import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";
import CategoryPickerItem from "../CategoryPickerItem";

import MapView, {Marker } from 'react-native-maps';
import { addIncidencia, uploadImage, uploadImageToBucket, getUserEmail, auth } from "../../api/firebase"


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
import listingsApi from '../../api/listings'
import { View } from "react-native-web";
import { user, } from "../../api/firebase"
const validationSchema = Yup.object().shape({
  title: Yup.string().required( "Por favor, ponga un título").label("Title"),
  description: Yup.string().label("Description"),
  category: Yup.object().required("Añada una categoría.").label("Category"),
  images: Yup.array().min(1, "Por favor, selecciona al menos una imagen.").max(4, "Por favor, selecciona como máximo 4 imagenes.").label("Images"),
});

const categories = [
  { label: "Dog", value: 1 },
  { label: "Cat", value: 2 },
  { label: "Others", value: 3 },
];

function ListingEditScreen() {

  const [emailUser, setEmailUser] = useState("")

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        setEmailUser(user.email)
      }
    })
  
    return unsubscribe
  }, [])
  
  const location = useLocation();


 

  /*
  const  handleSubmit =  listing =>{
   const result =  listingsApi.addListing({...listing, location})
  }
*/
  return (
    
      <Screen style={styles.container}>
        <Form
          initialValues={{
            title: "",
            price: "",
            description: "",
            //category: null,
            images: [],
          }}
          onSubmit={async (values) => {
           
           
        // addIncidencia(values.title, values.description)
        let imgURL = await uploadImageToBucket (values.images[0])
        addIncidencia(values.title, values.description, imgURL, emailUser)
        
        }
          
        }
          validationSchema={validationSchema}
        >

          
          <FormImagePicker name="images" />
          <FormField maxLength={255} name="title" placeholder="Título" />
          
          <Picker
            items={categories}
            name="category"
            numberOfColumns={3}
            PickerItemComponent={CategoryPickerItem}
            placeholder="Categoria"
            
          />
          <FormField
            maxLength={255}
            multiline
            name="description"
            numberOfLines={3}
            placeholder="Descripcion"
          />




          <SubmitButton title="Crear incidencia" />
        
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