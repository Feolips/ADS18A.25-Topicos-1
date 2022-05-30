import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import CustomImage from './components/CustomImage';

/*    Imagem local importada para uma variável    */
import imagemLocal from './assets/Andromeda_Galaxy_(with_h-alpha).jpg';

/*    Imagem remota com URI atribuída para uma variável */
const ImagemRemotaURI =
  'https://firebasestorage.googleapis.com/v0/b/heymyapp.appspot.com/o/man-1352025_640.png?alt=media&token=0b924d68-d525-4959-919f-67e7d1f009e0';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" backgroundColor="#AD6200" />
      <View>
        <Text style={styles.tituloView}>Três formas de inserir imagens: </Text>

        <CustomImage
          fromWeb={false}
          image={require('./assets/Pluto.jpg')}
          title={'Imagem local usando "require"'}
          width={213}
          height={171}
        />

        <CustomImage
          fromWeb={false}
          image={imagemLocal}
          title={'Imagem local usando "import"'}
          width={213}
          height={171}
        />

        <CustomImage
          fromWeb={true}
          image={ImagemRemotaURI}
          title={'Imagem Remota com "URI"'}
          width={213}
          height={171}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFC300',
  },
  tituloView: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
