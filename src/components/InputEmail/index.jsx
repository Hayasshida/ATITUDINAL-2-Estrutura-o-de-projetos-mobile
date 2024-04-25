import * as React from 'react';
import { TextInput } from "react-native-paper";
import styles from './styles';


export default function InputEmail() {

    const email = () => {
        const [text, setText] = React.useState("");
    }
    
    return (

      <TextInput style={styles.input}
      mode="outlined"
      placeholder="Email"
      ></TextInput>
    );
  }