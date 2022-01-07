import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        minHeight: 40,
        alignItems: 'flex-start',
        justifyContent: 'center',
        margin: 15,
        marginHorizontal: 5,
    },

    inputLabelWrapper: {
        height: 56,
        width: '92%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#41E1FD',
        marginHorizontal: 10,
        borderColor: '#D9D5DC',
        borderWidth: 1,
        borderRadius: 4,
    },

    inputLabel: {
        height: 50,
        width: '99%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 4,
        borderRadius: 4,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 4,
        backgroundColor: 'white',
        shadowOffset: { width: 0, height: 0 },
    },

    labelTextWrapper: {
        height: 50,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft:5
    },

    valueWrapper: {
        width: '60%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },

    iconWrapper: {
        height: 50,
        flexDirection: 'row',
        width: '7%',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    labelText: {
        fontSize: 18,
        lineHeight: 20,
        minHeight: 20,
        color: '#ADADAD',
        fontFamily: 'roboto',
        textAlign: 'left',
        fontWeight: '300',
        paddingStart: 5,
        flex:1
    },

    iconStyle: {
        fontFamily: 'roboto',
        alignSelf: 'center',
        fontSize: 18,
        lineHeight: 20,
        height: 20,
        color: '#41E1FD',
    },

    inputText: {
        fontSize: 15,
        lineHeight: 20,
        minHeight: 20,
        color: '#575757',
        fontFamily: 'roboto',
        alignSelf: 'center',
        fontWeight: '100',
    },

    button: {
        height: 50,
        backgroundColor: '#48BBEC',
        margin: 0,
        alignSelf: 'stretch',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center',
    },
    selectedContainer: {
        height: 40,
        width: '50%',
    },

    selectedStatusOuter: {
        height: 30,
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#6AD97B',
        borderRadius: 15,
        borderColor: 'white',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
    },

    selectedText: {
        color: 'white',
        fontFamily: 'roboto',
        paddingLeft: 10,
        paddingRight: 10,
        alignItems: 'center',
        fontSize: 12,
        width: '70%',
    },

    removeFilterIcon: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 30,
        width: 30,
        marginEnd: 10,
    },
    headerWrapper: {
        alignSelf: 'stretch',
        backgroundColor: 'rgb(255,255,255)',
        height: 60,
        ...Platform.select({
            ios: {
                paddingTop: 30,
                height: 120,
                marginBottom: 30,
            },
            android: {
                paddingTop: 0,
                marginBottom: 0,
            },
        }),
    },
    header: {
        alignSelf: 'stretch',
        backgroundColor: 'rgb(255,255,255)',
        flexDirection: 'row',
        elevation: 5,
        height: 59,
    },
    headerLeft: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerCenter: {
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerCenterIconView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        flexDirection: 'column',
        borderTopWidth: 2,
        borderColor: '#d6d7da',
        elevation: 20,
        height: '100%',
        width: '100%',
        position: 'absolute',
        top: 0,
        bottom: 0,
    },
    headerBottom: {
        height: 1,
        alignSelf: 'stretch',
        flexDirection: 'row',
        elevation: 2,
        opacity: 1,
        backgroundColor: 'transparent',
    },
    headerRight: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    searchBar: {
        height: 40,
        alignSelf: 'stretch',
        color: 'rgb(0,151,235)',
        fontSize: 18,
        borderTopWidth:0,
        borderLeftWidth:0,
        borderRightWidth:0
    },
});

export default styles;
