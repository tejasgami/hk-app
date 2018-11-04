import { StyleSheet, Platform, Dimensions } from 'react-native';
const WINDOW = Dimensions.get('window');
import AppStyles from '../../config/styles';

const styles = StyleSheet.create({
    rootContainer: {
        flex:1,
        backgroundColor:AppStyles.COLOR_WHITE,
    },
    container: {
        backgroundColor:AppStyles.COLOR_WHITE,
    },
    content: {
        flex: 1,
        backgroundColor: AppStyles.COLOR_WHITE,
        paddingHorizontal: 20
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
    titleText: {
        color:AppStyles.COLOR_BLACK,
        fontSize:20,
        lineHeight:26,
        letterSpacing:0.25
    },
    bodyText: {
        color: AppStyles.COLOR_BLACK,
        fontSize: 12,
        letterSpacing:0.25,
        lineHeight: 18
    },
    mainGrid: {
        width:WINDOW.width,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:20
    },
    inputStyle: {
        flex: 1,
        color:AppStyles.COLOR_BLACK,
        fontSize:15,
        letterSpacing:0.25,
        padding: 0,
        marginBottom:8,
        lineHeight:24
    },
    labelInput: {
        color:AppStyles.COLOR_BLACK,
        fontSize: 15,
        letterSpacing:1,
        lineHeight: 20,
        padding: 0,
        backgroundColor: 'transparent',
        marginTop:5
    },

    labelInputSuccess: {
        color:AppStyles.COLOR_GREEN,
        fontSize:15,
        letterSpacing:1,
        lineHeight: 20,
        padding: 0,
        backgroundColor: 'transparent',
        marginTop:5
    },

    labelInputError: {
        color:AppStyles.COLOR_GREEN,
        fontSize: 15,
        letterSpacing:1,
        lineHeight:20,
        padding: 0,
        backgroundColor: 'transparent',
        marginTop:5
    },

    formFieldIcon:{
        resizeMode:'contain'
    },

    infoStyle:{
        color: '#FFFFFF',
        marginTop:5,
        padding: 0,
        letterSpacing: 0.25,
        fontSize: 10
    },

    headerSmallLabel:{
        color:AppStyles.COLOR_BLACK,
        fontSize: 10,
        letterSpacing:1
    },

    headerLabelView: {
        alignItems: 'center',
        backgroundColor:AppStyles.COLOR_BLACK,
        paddingLeft: 12,
        height: 29,
        shadowColor: AppStyles.COLOR_BLACK,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
        shadowOpacity: 0.25,
        elevation: 2
    },

    headerLabelText: {
        color: AppStyles.COLOR_WHITE,
        fontSize: 15,
        lineHeight: 20,
        letterSpacing: 0.25
    },

    headerLabelRed: {
        alignItems: 'center',
        backgroundColor: AppStyles.COLOR_GREY,
        paddingLeft: 14,
        height: 29,
        shadowColor: AppStyles.black,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 2,
        shadowOpacity: 0.25,
        elevation: 2
    },

    headerLabelNoColor: {
        color:AppStyles.COLOR_BLACK,
        fontSize: 15,
        letterSpacing: 1.5,
        lineHeight: 20,
        backgroundColor: 'transparent'
    },
    sideErrorInput: {
        color:AppStyles.COLOR_BLACK,
        marginTop:5,
        padding: 0,
        letterSpacing: 0.25,
        fontSize: 10
    },

    sideInputInfo: {
        color:AppStyles.COLOR_BLACK,
        marginTop:5,
        padding: 0,
        letterSpacing: 0.25,
        fontSize: 10
    },

    sideInputView: {
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between'
    },

    labelInputView: {
        flex:1,
        flexDirection:'row'
    },

    placeholder: {
        letterSpacing:1,
    },

    itemInput: {
        borderColor:AppStyles.COLOR_BLACK,
        borderWidth: 1,
        marginLeft:0
    },

    itemInputError: {
        borderColor: AppStyles.COLOR_GREY,
        marginLeft:0
    },

    itemInputSuccess: {
        borderColor:AppStyles.COLOR_GREEN,
        marginLeft:0
    },

    labelInfo: {
        
        fontSize: 15,
        color:AppStyles.COLOR_BLACK,
        letterSpacing:1
    },

    mainContainerWithLoader: {
        position:'absolute',
        height: WINDOW.height,
        width: WINDOW.width,
        zIndex:999999
    },
    mainContainer: {
        position:'absolute',
        right:0,
        left:0,
        height:0,
        width:WINDOW.width,
        zIndex:999,
    },
    empty:{
        height:0,
        width:0
    },
    serviceImage: {
        width: 38,
        height:38,
        resizeMode:'contain'
    },

    serviceBigImage: {
        width:62,
        height: 62,
        resizeMode:'contain'
    },

    serviceSmallImage: {
        width: 20,
        height: 20,
        resizeMode:'contain'
    },

    disabled: {
        opacity:0.5
    },

    personalAccountBg: {
        backgroundColor:AppStyles.COLOR_WHITE,
    },

    businessAccountBg: {
        backgroundColor:AppStyles.COLOR_BLACK,
    },

    personalAccountText: {
        color:AppStyles.COLOR_BLACK,
    },

    businessAccountText: {
        color: AppStyles.COLOR_WHITE,
    },

    buttonH1: {
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:18,
        shadowColor: AppStyles.COLOR_BLACK,
        shadowOffset:{ width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        borderRadius:15 / 2,
        backgroundColor: AppStyles.COLOR_WHITE,
        elevation: 1
    },

    buttonH1Text: {
        fontSize: 15,
        lineHeight: 20,
        letterSpacing:1.5,
        color:AppStyles.COLOR_WHITE,
        backgroundColor: 'transparent'
    },

    buttonH2: {
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:15,
        shadowColor: AppStyles.black,
        shadowOffset:{ width: 0, height: 1 },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        borderWidth: 1,
        borderRadius:15/ 2,
        backgroundColor: AppStyles.COLOR_WHITE,
        borderColor:AppStyles.COLOR_WHITE,
        padding: 0,
        elevation: 1
    },

    buttonH2Text: {
        fontSize: 15,
        lineHeight: 20,
        letterSpacing:1.5,
        color:AppStyles.COLOR_WHITE,
        backgroundColor: 'transparent'
    },

    scalarSpace: {
        marginRight: 15
    },

    cancelBtnRow:{
        position: 'absolute',
        bottom: 0,
        marginBottom:31,
        backgroundColor: 'transparent'
    },

    cancelBtnCol:{
        alignItems:'center'
    },

    cancelBtnText:{
        color:AppStyles.COLOR_BLACK,
        fontSize: 15,
        letterSpacing: 1.5,
        height:20,
        textAlign: 'center'
    },

    cancelButton: {
        backgroundColor: 'transparent',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:15
    },

    cancelButtonText: {
        backgroundColor:'transparent',
        ...(Platform.OS == 'ios') ? {lineHeight: 1.5} : {},
        fontSize: 15,
        letterSpacing:1,
        color:AppStyles.COLOR_BLACK
    },

    swapRow: {
        borderBottomWidth: 0
    },

    listDownArrow: {
        color:AppStyles.COLOR_BLACK,
        fontSize:20
    },
    labelView:{
        backgroundColor:AppStyles.COLOR_BLACK,
        height:30,
        width:4,
        justifyContent:'center',
        alignItems:'center',
        shadowColor: "#000",
        shadowOffset:{ width: 1, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2
    },
    labelViewTxt:{
        textAlign:'center',
        color:AppStyles.COLOR_WHITE,
        fontSize:15,
        lineHeight: 20,
        letterSpacing:1
    },
    dropdownTextView: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor:AppStyles.COLOR_WHITE,
        borderBottomWidth: 1
    },
    dropdownText: {
        flex: 1,
        padding: 0,
        color: AppStyles.white,
        fontSize: 15,
        letterSpacing: 0.25,
        lineHeight: 20,
        marginBottom:5
    },
    dropdownArrow: {
        flex: 1,
        textAlign: 'right',
        color: AppStyles.COLOR_BLACK,
        fontSize: 24,
        height: 25,
    },
    itemListView:{
        position: 'absolute',
        bottom: 55,
        alignItems: 'center',
        justifyContent: 'center',
        width:WINDOW.width,
        backgroundColor: AppStyles.COLOR_WHITE,
        shadowColor: AppStyles.COLOR_BLACK,
        shadowOffset: { width: 1, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 2,
        zIndex: 99,
        elevation: 3
    },
    itemRow: {
        height: 48,
        width: WINDOW.width,
        backgroundColor: AppStyles.COLOR_WHITE,
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemSelectedRow: {
        backgroundColor: AppStyles.COLOR_WHITE
    },
    itemText: {
        marginLeft: 22,
        fontSize:10,
        color:AppStyles.COLOR_BLACK,
        lineHeight:16
    },
    itemSelectedText: {
    },
    dropdownLabelRow:{
        flexDirection: 'row'
    },
    dropdownLabel:{
        color:AppStyles.COLOR_WHITE,
    }
});

export default styles;