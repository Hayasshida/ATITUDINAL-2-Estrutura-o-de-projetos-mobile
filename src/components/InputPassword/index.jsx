import * as React from 'react';
import { TextInput } from "react-native-paper"
import styles from "./styles"


export default function InputPassword() {
  
    const [showPassword, setShowPassword] = React.useState(false);

    return(
        <TextInput
              mode='outlined'
              placeholder='Password'
              secureTextEntry={!showPassword}
              right={<TextInput.Icon icon={showPassword ? 'eye-off' : 'eye'} onPress={() => setShowPassword(!showPassword)}/>}
  
              style={styles.input}
        ></TextInput>
    )
  }
  