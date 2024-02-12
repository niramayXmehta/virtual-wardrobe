import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { api } from 'app/utils/trpc'


export default function TabOneScreen() {
  const { data, isLoading } = api.user.all.useQuery();

  if (isLoading) {
    return <Text>Loading...</Text>
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>All current users:</Text>
      {
        data?.map((user) => {
          return <Text key={user.id}>{user.name}</Text>
        })
      }
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
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
