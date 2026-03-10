import React from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '@/components/Menu.styles';
import { Ionicons } from '@expo/vector-icons';


// Aqui uma função reutilizável
const MenuItem = ({ icon, title, onPress, isLast = false, color = "#1A1A1A" }: any) => (
  <TouchableOpacity style={[styles.menuItem, isLast && { borderBottomWidth: 0 }]} onPress={onPress}>
    <View style={styles.menuItemLeft}>
      <Ionicons name={icon} size={22} color="#56AEFF" />
      <Text style={[styles.menuItemText, { color }]}>{title}</Text>
    </View>
    <Ionicons name="chevron-forward" size={18} color="#CCC" />
  </TouchableOpacity>
);

export default function MenuScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* A partir daqui, a área do perfil */}
        <View style={styles.profileHeader}> 
          {/* Alteração do avatar do usuário*/}
          <Image 
            source={require('@/assets/images/avatar.jpg')}
            style={styles.avatar}
          />
          {/* Descrição */}
          <View style={styles.profileInfo}>
            <Text style={styles.userName}>Ronaldo Ribeiro</Text>
            <Text style={styles.userEmail}>RM99999@fiap.com.br</Text>
          </View>
        </View>

        {/* Todos os outros atalhos */}
        <View style={styles.menuGroup}>
          <MenuItem icon="person-outline" title="Meu Perfil" onPress={() => {}} />
          <MenuItem icon="settings-outline" title="Configurações" onPress={() => {}} />
          <MenuItem icon="notifications-outline" title="Notificações" onPress={() => {}} />
          <MenuItem icon="card-outline" title="Pagamentos" onPress={() => {}} />
          <MenuItem icon="help-circle-outline" title="Ajuda" onPress={() => {}} />
          <MenuItem icon="log-out-outline" title="Sair" onPress={() => {}} color="#FF4444" isLast={true}/>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}