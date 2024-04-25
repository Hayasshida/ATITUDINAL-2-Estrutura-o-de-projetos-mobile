import * as React from 'react';
import { Button } from "react-native-paper";
import styles from "./styles";
import { Text } from "react-native";



export default function LoginButton(){
    return(
        <Button style={styles.button}
            mode="contained"
            buttonColor="#1d309b"
            onPress={() => console.log('pressed')}
        >
            <Text>Sign in</Text>
        </Button>
    );

}