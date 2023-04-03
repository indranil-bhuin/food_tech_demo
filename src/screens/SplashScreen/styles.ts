import { StyleSheet } from 'react-native';
import { colors } from '../../../assets/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.main,
        flexDirection: 'column'
    },
    imageContainer: {
        width: 300,
        height: 300,
        backgroundColor: 'white',
        borderRadius: 150
    },
    image: {
        width: 232,
        height: 206,
        left: 20,
        top: 40
    },
    splashTextContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 80
    },
    buttonText: {
        color: '#594AB5',
        fontFamily: 'Nunito-Black',
        //fontStyle: 'normal',
        //fontWeight: '700',
        fontSize: 17,
    },
    buttonContainer: {
        //marginTop: 0
    }

})

export default styles;