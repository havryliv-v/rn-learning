import React, {useEffect, useState} from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';

export const WebSocketExample = () => {
  const [message, setMessage] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const ws = new WebSocket('https://echo.websocket.org/.ws');

    ws.onopen = () => {
      setIsConnected(true);
      ws.send('Hello Server');
    };

    ws.onmessage = e => {
      setMessage(e.data);
    };

    ws.onerror = e => {
      console.error('WebSocket error:', e.message);
    };

    ws.onclose = e => {
      setIsConnected(false);
      console.log('WebSocket closed:', e.code, e.reason);
    };

    // Cleanup on component unmount
    return () => {
      ws.close();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.status}>
        WebSocket {isConnected ? 'Connected' : 'Disconnected'}
      </Text>
      <Text style={styles.message}>Received Message: {message}</Text>
      <Button
        title="Send Message"
        onPress={() => {
          const ws = new WebSocket('https://echo.websocket.org/.ws');
          ws.onopen = () => ws.send('Another message');
        }}
        disabled={!isConnected}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  status: {
    fontSize: 18,
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    marginBottom: 20,
  },
});
