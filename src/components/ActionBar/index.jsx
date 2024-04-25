import { Text, View } from "react-native";
import { Button } from "react-native-paper";
import styles from "./styles";


export default function ActionBar(){
    return(
        <View style={styles.ViewButtons}>
            <Button icon="google"/>
            <Button icon="facebook"/>
            <Button icon="twitter"/>
        </View>
    );
}