import {Platform, StyleSheet, Dimensions} from 'react-native';
import AppStyles from "../../config/styles";
const WINDOW = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    scrollView: {
        width: WINDOW.width,
        height: WINDOW.height - 40 - (Platform.OS === 'android' ? 24 : 0),
        backgroundColor: AppStyles.COLOR_WHITE
    },
    contentContainerStyle: {
        flexGrow: 1,
        backgroundColor: AppStyles.COLOR_WHITE,
        paddingHorizontal: 20
    },
});

export default styles;
