import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from '@/components/ProductCard.styles';

// Definindo o tipo para evitar o erro de 'any'
export interface ProductItem {
  category: string;
  id: string;
  title: string;
  rating: number;
  status: 'Novo' | 'Usado' | 'Doação';
  price: string;
  description: string;
  image: any; 
}

interface Props {
  item: ProductItem;
}

export default function ProductCard({ item }: Props) {
  return (
    <View style={styles.card}>
        {/*A imagem do produto*/}
      <Image source={item.image} style={styles.img} />
      
      <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
      
      {/*Avaliação e Estado dos produtos*/}
      <View style={styles.row}>
        <Text style={styles.status}>{item.status}</Text>
        <Text style={styles.rating}>⭐ {item.rating}</Text>
      </View>
    
        {/*Mini descrição vai aqui*/}
      <Text style={styles.desc} numberOfLines={2}>{item.description}</Text>

        {/*Botão e os preços*/}
      <View style={styles.row}>
        <Text style={styles.price}>{item.price}</Text>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}