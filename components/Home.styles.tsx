import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9F8' },
  
    header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },

  logoHeader: {
    width: 60,
    height: 60,
    borderRadius: 5,
    resizeMode: 'contain'
  },
    searchSection: {
    backgroundColor: '#FFF',
    marginHorizontal: 20,
    borderRadius: 15,
    paddingHorizontal: 15,
    height: 40,
    justifyContent: 'center',
    elevation: 2,
    
  },
  input: { fontSize: 16 },

  shop: {
    
  },

  welcome: {
    display: 'flex',
    paddingTop: 10,
    paddingBottom: 20,
  },

  banner: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: 200,
    padding: 20,
  },

  // Estilos das seções com "Ver tudo"
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: '#1A1A1A' },
  seeMore: { color: '#56AEFF', fontWeight: 'bold', fontSize: 14 },
  
  // Estilos da grade de 2 colunas
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 10,
  },
  gridItem: {
    width: '50%', // Define 2 cards por linha
  },
});