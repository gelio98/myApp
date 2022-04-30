import React from 'react';
import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';
import { useFormikContext } from 'formik'

function AppFormField( { name, ...otherProps }) {

    const {setFieldTouched, handleChange, errors, touched} = useFormikContext()
    return (
        <>
            <AppTextInput
          //  autoCapitalize="none"
           // autoCorrect={false}
            //icon="email"
            onChangeText={handleChange(name)}
            onBlur={ () => setFieldTouched(name)}
            {...otherProps}
          //  placeholder="Email"
           // textContenType="emailAddress" 
           />
            <ErrorMessage error={errors[name]} visible={touched[name]} />
                        </>
    );
}

export default AppFormField;