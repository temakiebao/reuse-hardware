import React from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProductCard, { ProductItem } from '@/components/ProductCard';
import { styles } from '@/components/Home.styles';
import { HARDWARE_DATA } from '@/components/Products';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const SectionHeader = ({ title, onMorePress }: { title: string, onMorePress: () => void }) => (
  <View style={styles.sectionHeader}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <TouchableOpacity onPress={onMorePress}>
      <Text style={styles.seeMore}>Ver tudo ➔</Text>
    </TouchableOpacity>
  </View>
);

export default function HomeScreen() {
  // Filtros simples para as áreas solicitadas
  const populares = HARDWARE_DATA.slice(0, 4); // Pega os primeiros 4 cards
  const donation = HARDWARE_DATA.filter(item => item.category === 'Donation');
  const gpus = HARDWARE_DATA.filter(item => item.category === 'GPU');
  const cpus = HARDWARE_DATA.filter(item => item.category === 'CPU');
  const memories = HARDWARE_DATA.filter(item => item.category === 'Memory');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* Header Superior */}
        <View style={styles.header}>
          <Image source={require('@/assets/images/icon.png')} style={styles.logoHeader} />
          <View style={styles.searchSection}>
          <TextInput 
            style={styles.input} 
            placeholder="Pesquisar componentes..." 
            placeholderTextColor="#999"
          />
        </View>
        <View>
          <MaterialCommunityIcons name="cart-variant" size={24} color="black" />
        </View>
        </View>

        {/* Campo de Busca */}
        
        {/* Campo do Banner */}
        <View style={styles.welcome}>
          <Image source={require('@/assets/images/seja_bem_vindo.gif')} style={styles.banner} />
        </View>

        {/*Mais Populares (4 cards)*/}
        <SectionHeader 
          title="Mais Populares" 
          onMorePress={() => console.log('Navegar para Populares')} 
        />
        <View style={styles.grid}>
          {populares.map(item => (
            <View key={item.id} style={styles.gridItem}>
              <ProductCard item={item} />
            </View>
          ))}
        </View>
         <SectionHeader title="Doações" onMorePress={() => {}} />
        <View style={styles.grid}>
          {donation.map(item => (
            <View key={item.id} style={styles.gridItem}><ProductCard item={item} /></View>
          ))}
        </View>
        {/* Seção 2: Categoria GPUs */}
        <SectionHeader title="Placas de Vídeo (GPUs)" onMorePress={() => {}} />
        <View style={styles.grid}>
          {gpus.map(item => (
            <View key={item.id} style={styles.gridItem}><ProductCard item={item} /></View>
          ))}
        </View>

        {/* Você pode até adicionar uma seção de CPUs agora! */}
        <SectionHeader title="Processadores" onMorePress={() => {}} />
        <View style={styles.grid}>
          {cpus.map(item => (
            <View key={item.id} style={styles.gridItem}><ProductCard item={item} /></View>
          ))}
        </View>
        
        <View style={{ height: 100 }} />
      </ScrollView>
    </SafeAreaView>
  );
}