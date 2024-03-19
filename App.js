import { StatusBar } from 'expo-status-bar';
import { Text, View, Image } from 'react-native';
import { styles } from './AppStyle';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Taylor Swift diva</Text>
      <Image style={styles.imagens}
          source={require('./assets/TS.jpg')}
      />
      <StatusBar style="auto" />
    </View>
  );
}

