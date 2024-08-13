import React, {useState} from 'react'; // Changed from useRef to useState
import {View, Text, StyleSheet} from 'react-native';

export const ResponderDemo = () => {
  const [responderStatus, setResponderStatus] = useState('Touch anywhere'); // Changed from useRef to useState

  return (
    <View
      style={styles.container}
      onStartShouldSetResponder={() => true} // Always return true to become the responder on touch start
      onMoveShouldSetResponder={() => true} // Always return true to become the responder on touch move
      onResponderGrant={() => {
        setResponderStatus('Responder granted'); // Update status with setResponderStatus
        console.log('onResponderGrant');
      }}
      onResponderReject={() => {
        setResponderStatus('Responder rejected'); // Update status with setResponderStatus
        console.log('onResponderReject');
      }}
      onResponderMove={evt => {
        const {locationX, locationY} = evt.nativeEvent;
        setResponderStatus(`Moving at (${locationX}, ${locationY})`); // Update status with setResponderStatus
        console.log('onResponderMove');
      }}
      onResponderRelease={() => {
        setResponderStatus('Touch released'); // Update status with setResponderStatus
        console.log('onResponderRelease');
      }}
      onResponderTerminationRequest={() => {
        console.log('onResponderTerminationRequest');
        return true; // Allow release of responder
      }}
      onResponderTerminate={() => {
        setResponderStatus('Responder terminated'); // Update status with setResponderStatus
        console.log('onResponderTerminate');
      }}>
      <Text style={styles.text}>{responderStatus}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 18,
    color: 'black',
  },
});
