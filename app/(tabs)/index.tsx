import { Image, StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView, Platform, SafeAreaView} from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={{flex: 1}}>
    <ScrollView style={styles.container} contentContainerStyle={{ flexGrow: 1 }}>
      {/* Header */}
      <View style={styles.header}>
      <View style={{backgroundColor: 'rgba(255, 255, 255, 0.45)',marginBottom: 20, borderRadius: 15}}><Image source={require('@/assets/images/bakti-logo-b.png')}
      style= {{width: 80, height: 80, alignSelf: 'center', marginTop: 10, marginBottom: 15,}}/></View>
        <TouchableOpacity style={styles.searchWrapper}>
          <Ionicons name="menu" size={30} color="#fff" style={{ marginRight: 10 }} onPress={()=>router.push('/menu')}/>
          <TextInput
            placeholder="Help others..."
            placeholderTextColor="#eee"
            style={styles.searchInput}
          />
          <Ionicons name="chatbubble-ellipses-outline" size={20} color="#fff" style={{ marginLeft: 10 }} onPress={()=>router.push('/chatbot')}/>
        </TouchableOpacity>
      </View>

      {/* Categories */}
      <View style={styles.categorySection}>
        <TouchableOpacity style={styles.categoryBtn} onPress={() => router.push('/zakat')}>
          <FontAwesome5 name="hand-holding-usd" size={20} color="#2AA484" />
          <Text style={styles.categoryText}>Zakat</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryBtn} onPress={() => router.push('/donation')}>
          <FontAwesome5 name="donate" size={20} color="#2AA484" />
          <Text style={styles.categoryText}>Donation</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.categoryBtn} onPress={() => router.push('/waqaf')}>
          <FontAwesome5 name="leaf" size={20} color="#2AA484" />
          <Text style={styles.categoryText}>Waqf</Text>
        </TouchableOpacity>
      </View>

      {/* Bulletin */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Bulletin</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true} style={{flexDirection: 'row', paddingHorizontal: 20,}}>
        <TouchableOpacity style={styles.bulletinCard} onPress={()=>router.push('/bulletin1')}>
          <Image
            source={{ uri: 'https://themalaysianreserve.com/wp-content/uploads/2020/10/FW1085217_SB07_06102020__BANJIR_KB-lpr.jpg' }}
            style={styles.bulletinImage}
          />
          <View style={styles.bulletinContent}>
            <Text style={styles.bulletinTitle}>Disaster: Flood in Kampung Keledek{'\n'}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bulletinCard} onPress={()=>router.push('/bulletin2')}>
          <Image
            source={{ uri: 'https://www.wilayahku.com.my/canon/uploads/2023/10/IMG-20220308-WA0119.jpg' }}
            style={styles.bulletinImage}
          />
          <View style={styles.bulletinContent}>
            <Text style={styles.bulletinTitle}>🕊️ SyriaCare: The Mercy Fund{'\n'}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bulletinCard} onPress={()=>router.push('/bulletin3')}>
          <Image
            source={{ uri: 'https://www.hopeww.org.my/wp-content/uploads/2023/11/23-1080x675.jpg' }}
            style={styles.bulletinImage}
          />
          <View style={styles.bulletinContent}>
            <Text style={styles.bulletinTitle}>Orang Asli Outreach: Medical & Education Aid</Text>
          </View>
        </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Tabung Kilat */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Tabung Kilat</Text>

        {[
          {
            title: 'Help build mosques in rural areas',
            description: 'Support construction of mosques in remote locations.',
            progress: 'RM 5,000 / RM 10,000',
            image: 'https://uwt.org/wp-content/uploads/2023/12/2023-12-28.-1203.-Masjid-Construction.jpg'
          },
          {
            title: 'Help Batu Pahat floods',
            description: 'Every cent counts to help with flood victims in Johor.',
            progress: 'RM 900 / RM 10,000',
            image: 'https://img.astroawani.com/2023-03/51678199562_MangsabanjirBatu.jpg'
          },
          {
            title: 'Carpet for Masjid Kampung Keledek',
            description: 'Help us replace worn-out carpets for comfort.',
            progress: 'RM 10,000 / RM 50,000',
            image: 'https://5.imimg.com/data5/SELLER/Default/2023/8/339761666/AU/GN/ZO/5746244/premium-quality-masjid-carpet.jpeg'
          },
        ].map((item, index) => (
          <View key={index} style={styles.campaignCard}>
            <Image source={{ uri: item.image }} style={styles.cardImage} />
            <View style={{ flex: 1, paddingHorizontal: 10 }}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardDesc}>{item.description}</Text>
              <Text style={styles.cardProgress}>{item.progress}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9' },

  header: {
    backgroundColor: '#2AA484',
    paddingTop: Platform.OS === 'ios' ? 25 : 40,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  
  },

  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1c816a',
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 45,
  },

  searchInput: {
    flex: 1,
    color: '#fff',
  },

  categorySection: {
    marginHorizontal: 20,
    marginTop: 20,
    backgroundColor: '#2AA484',
    borderRadius: 15,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  categoryBtn: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
    width: 80,
  },

  categoryText: {
    marginTop: 5,
    fontSize: 12,
    color: '#2AA484',
    fontWeight: '600',
  },

  sectionContainer: {
    marginTop: 25,
    marginBottom: 45,
    paddingHorizontal: 20,

  },

  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },

  bulletinCard: {
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: '#E0F2F1',
    marginRight: 12, // 👈 add spacing between scroll items
    width: 320,
  },

  bulletinImage: {
    width: '100%',
    height: 130,
  },

  bulletinContent: {
    padding: 15,
    backgroundColor: '#2AA484',
  },

  bulletinTitle: {
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 10,
  },

  bulletinBtn: {
    backgroundColor: '#FFD600',
    alignSelf: 'flex-start',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
  },

  campaignCard: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderRadius: 15,
    padding: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },

  cardImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
  },

  cardTitle: {
    fontWeight: 'bold',
    fontSize: 13,
    marginBottom: 4,
  },

  cardDesc: {
    fontSize: 11,
    color: '#555',
  },

  cardProgress: {
    fontSize: 11,
    color: '#2AA484',
    fontWeight: 'bold',
    marginTop: 5,
  },
});
