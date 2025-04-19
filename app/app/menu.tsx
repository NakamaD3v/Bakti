import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Alert, Button } from 'react-native';
import { useRouter } from 'expo-router';
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import {app} from '@/firebaseConfig';
import { FontAwesome5, Ionicons, Feather, AntDesign } from '@expo/vector-icons';
import {useState, useEffect} from 'react';

export default function MenuScreen() {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    })

    return () => unsubscribe();

  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Profile Header */}
      <View style={styles.profileContainer}>
        <Image
          source={{ uri: 'https://i.pravatar.cc/100' }}
          style={styles.avatar}
        />
        {user ? (
          <View style={{alignItems:'center'}}>
            <Text style={styles.name}>{user.displayName ?? 'User'}</Text>
            <Text style={styles.email}>{user.email}</Text>
          </View>
        ) : (
          <View style={{alignItems:'center'}}>
            <Text style={styles.name}>Users</Text>
            <Text style={styles.email}>No email provided</Text>
          </View>
        )}
      </View>

      {/* Menu Items */}
      <View style={styles.menu}>
        <MenuItem icon={<Ionicons name="information-circle-outline" size={20} />} label="About Bakti" />
        <MenuItem icon={<FontAwesome5 name="box-open" size={18} />} label="Start a Fundraiser" onPress={() => {router.push('./form')}} />
        <MenuItem icon={<Feather name="zap" size={20} />} label="Apply for Tabung Kilat" onPress={() => {router.push('./tabungKilatForm')}} />
        <MenuItem icon={<Feather name="trending-up" size={20} />} label="Statistics" onPress={() => {router.push('./statistics')}}/>
        <MenuItem icon={<Ionicons name="shield-outline" size={20} />} label="Privacy" />
        <MenuItem icon={<Feather name="settings" size={20} />} label="Settings" />
      </View>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Logout */}
      { !user ? (
        <>
      <TouchableOpacity style={styles.logout} onPress={()=>{router.push('./logIn')}}>
        <AntDesign name="poweroff" size={20} color="green" />
        <Text style={styles.loginText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.logout} onPress={()=>{router.push('./signUp')}}>
        <AntDesign name="poweroff" size={20} color="grey" />
        <Text style={styles.signupText}>Sign Up</Text>
      </TouchableOpacity>
      </>
      ) : (
        <TouchableOpacity style={styles.logOut} onPress={() => auth.signOut()}>
          <AntDesign name="poweroff" size={20} color="red" />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>
      )}


    </ScrollView>
  );
}

function MenuItem({ icon, label, onPress }: { icon: React.ReactNode, label: string, onPress?: () => void }) {
  return (
    <TouchableOpacity style={styles.menuItem} onPress={onPress}>
      {icon}
      <Text style={styles.menuText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: '#ffffff',
    flexGrow: 1,
  },
  logOut:{
    flexDirection: 'row',
    gap: 10, 
  },
  loginText: {
    fontSize: 20,
    color: 'green',
    fontWeight: 'bold',
  },
  signupText: {
    fontSize: 20,
    color: 'grey',
    fontWeight: 'bold',
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
    backgroundColor: '#2AA484',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  email: {
    color: 'black',
    fontSize: 14,
    marginTop: 5,
  },
  menu: {
    gap: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  menuText: {
    fontSize: 16,
    color: '#000',
  },
  divider: {
    marginVertical: 30,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  logout: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 20,
  },
  logoutText: {
    fontSize: 16,
    color: 'red',
    fontWeight: 'bold',
  },
});
