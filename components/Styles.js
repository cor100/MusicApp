import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexWrap: 'wrap',
        justifyContent: 'center',
        verticalAlign: 'center',
        position: 'relative',
        padding: 40
    },

    box: {
        verticalAlign: 'center',
        color: 'rgb(0, 0, 0)',
        height: 40,
        marginLeft: 20,
        marginRight: 30,
        position: 'relative',
        width: 320
    },

    content: {
        paddingLeft: 20,
        paddingRight: 40,
        alignContent: 'center',
        color: 'rgb(255, 255, 255)',
        fontSize: 24,
        marginBottom: 10
    },

    heading2: {
        display: 'flex',
        paddingTop: 90,
        verticalAlign: 'center',
        textAlign: 'center',
        color: 'rgb(255, 255, 255)',
        fontSize: 24,
        marginBottom: 10,
        fontFamily: 'sans-serif',
        fontWeight: 'normal',
    },

    heading4: {
        display: 'flex',
        paddingTop: 45,
        verticalAlign: 'center',
        textAlign: 'center',
        color: 'rgb(255, 255, 255)',
        fontSize: 16,
        marginBottom: 10,
        fontFamily: 'sans-serif',
        fontWeight: 'normal',
    },

    paragraph: {
        color: 'rgb(255, 255, 255)',
        fontSize: 12,
        marginBottom: 10,
        fontFamily: 'sans-serif',
        fontWeight: 'normal',
    },

    hyperlink: {
        color: 'rgb(0, 0, 255)',
        fontSize: 12,
        marginBottom: 10,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
    }
})

export { styles }