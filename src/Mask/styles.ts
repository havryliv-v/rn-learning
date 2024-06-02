import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  maskView: {
    flex: 1,
    flexDirection: 'row',
    height: '100%',
  },
  maskContainer: {
    // Transparent background because mask is based off alpha channel.
    backgroundColor: 'transparent',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  maskText: {
    fontSize: 60,
    color: 'black',
    fontWeight: 'bold',
  },
  mask: {flex: 1, height: '100%'},
  maskOne: {backgroundColor: '#324376'},
  maskTwo: {backgroundColor: '#F5DD90'},
  maskThree: {backgroundColor: '#F76C5E'},
  maskFour: {backgroundColor: '#e1e1e1'},
});
