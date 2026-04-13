import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

const UserList = ({ users, onUserPress, onUserLongPress, loading }) => {
  const renderUserItem = ({ item }) => {
    const bgColor = item.gender === 'femme' ? '#FFE0F0' : '#E0F0FF';
    const borderColor = item.gender === 'femme' ? '#E91E63' : '#2196F3';

    return (
      <TouchableOpacity
        style={[styles.userCard, { backgroundColor: bgColor, borderColor }]}
        onPress={() => onUserPress(item)}
        onLongPress={() => onUserLongPress(item.id)}
        delayLongPress={500}
      >
        <View style={styles.userContent}>
          <Text style={styles.userName}>{item.name}</Text>
          <Text style={styles.userEmail}>{item.email}</Text>
          <View style={styles.genderBadge}>
            <Text style={styles.genderText}>
              {item.gender === 'femme' ? '👩 Femme' : '👨 Homme'}
            </Text>
          </View>
        </View>
        <Text style={styles.hint}>Appuyez pour modifier • Long press pour supprimer</Text>
      </TouchableOpacity>
    );
  };

  const renderEmptyList = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>Aucun utilisateur trouvé</Text>
      <Text style={styles.emptySubText}>Cliquez sur "Ajouter" pour créer un utilisateur</Text>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#2196F3" />
        <Text style={styles.loadingText}>Chargement des utilisateurs...</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={users}
      renderItem={renderUserItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.listContainer}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={renderEmptyList}
      scrollEventThrottle={16}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 12,
    paddingBottom: 20,
  },
  userCard: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  userContent: {
    marginBottom: 12,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  userEmail: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  genderBadge: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  genderText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
  },
  hint: {
    fontSize: 11,
    color: '#999',
    fontStyle: 'italic',
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  loadingText: {
    marginTop: 12,
    fontSize: 14,
    color: '#666',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 80,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#999',
    marginBottom: 8,
  },
  emptySubText: {
    fontSize: 14,
    color: '#bbb',
  },
});

export default UserList;