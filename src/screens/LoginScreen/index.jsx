import { SafeAreaView, View, Button, Text} from 'react-native';
import InputEmail from "../../components/InputEmail";
import InputPassword from '../../components/InputPassword';
import LoginButton from '../../components/LoginButton';
import styles from './styles.js'
import ActionBar from '../../components/ActionBar';

export default function LoginScreen({ navigation }){
    
    return(
        <SafeAreaView style={styles.background}>

        <View style={styles.container}>
            <InputEmail/>
            <InputPassword/>
            <LoginButton/>
        </View>

        <ActionBar/>

        </SafeAreaView>    
    );
}