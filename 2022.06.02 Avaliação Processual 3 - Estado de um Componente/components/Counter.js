import * as React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function Counter() {
  const [count, setCount] = React.useState(0);
      
      // var contaToca = '';
      // if (count == 0) {
      //    contaToca = 'Você ainda não tocou'
      // } else if (count == 1) {
      //   contaToca = 'Você tocou 1 vez!'
      // } else if (count >  1) {
      //   contaToca = `Você tocou ${count} vezes!`
      // }

  return (
    <>
        {
          (count === 0) ?
          <Text style={styles.title}>Você ainda não tocou</Text>
        : (count === 1) ?
          <Text style={styles.title}>Você tocou 1 vez!</Text>
        : (count > 1 && count != 0) &&
          <Text style={styles.titlePlus}>Você tocou {count} vezes!</Text>
        }

       
       <TouchableOpacity style={styles.button} onPress={() => setCount(count + 1)}>
       <Text style={styles.buttonText}>Toca aqui!</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  titlePlus: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#AD6200',
    textAlign: 'center'
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#AD6200',
    textAlign: 'center'
  },
  button: {
    alignItens: "center",
    backgroundColor: "#AD6200",
    padding: 10,
    borderRadius: 15
  },
  buttonText: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});