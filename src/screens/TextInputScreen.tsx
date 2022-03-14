import React from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { useForm } from '../hooks/useForm';
import { HeaderTitle } from '../components/HeaderTitle';
import { CustomSwitch } from '../components/CustomSwitch';

export const TextInputScreen = () => {

    const { form, onChange, isSuscribed } = useForm({
        name: '',
        email: '',
        phone: '',
        isSuscribed: false
    });

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView style={styles.globalMargin}>
              <HeaderTitle title="TextInputs" />

              <TextInput
                style={styles.input}
                placeholder="Ingrese su nombre"
                autoCorrect={false}
                autoCapitalize="words"
                onChangeText={(value) => onChange(value, 'name')}
              />

              <TextInput
                style={styles.input}
                placeholder="Ingrese su email"
                autoCorrect={false}
                autoCapitalize="none"
                keyboardType="email-address"
                onChangeText={(value) => onChange(value, 'email')}
              />

              <View style={styles.switchRow}>
                  <Text style={styles.switchText}>Suscribirme</Text>
                  <CustomSwitch isOn={ isSuscribed } onChange={ (value) => onChange( value, 'isSuscribed' ) } />
              </View>

              <TextInput
                style={styles.input}
                placeholder="Ingrese su teléfono"
                autoCorrect={false}
                keyboardType="phone-pad"
                onChangeText={(value) => onChange(value, 'phone')}
              />

              <HeaderTitle title={ JSON.stringify( form, null, 3) } />
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    )
}
