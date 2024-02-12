import { StyleSheet, TextInput } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { useState } from 'react';
import { api } from 'app/utils/trpc'

export default function TabTwoScreen() {

  // react state that holds the name
  const [name, setName] = useState('');

  // this calls the emailByName endpoint defined in api/src/router/user.ts
  // it will automatically refetch when `name` changes
  const { data, isLoading } = api.user.emailByName.useQuery(name, {
    enabled: name.length > 0 // only call the endpoint if the name is not empty
  });
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter name:</Text>
      {/* input field, on change, set the `name` the text within the input */}
      <TextInput style={{ height: 40, width: 100, borderColor: 'gray', borderWidth: 1 }} onChangeText={text => setName(text)} />

      <Text style={styles.title}>Email:</Text>
      {/* If its loading, display loading text */}
      {isLoading && <Text>Loading...</Text>}

      {/* Else, display the email */}
      {data && <Text>{data.email}</Text>}
      
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/two.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
