import React, { useContext, useState } from 'react';
import {
  View,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';
import { UserContext } from '../context/Usercontext';
import UserList from '../UserList';
import UserForm from '../UserForm';

const HomeScreen = () => {
  const { users, loading, addUser, updateUser, deleteUser } = useContext(UserContext);
  const [showForm, setShowForm] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleAddUser = () => {
    setSelectedUser(null);
    setShowForm(true);
  };

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setShowForm(true);
  };

  const handleDeleteUser = (userId) => {
    const user = users.find(u => u.id === userId);
    Alert.alert(
      'Confirmer la suppression',
      `Êtes-vous sûr de vouloir supprimer ${user?.name} ?`,
      [
        { text: 'Annuler', style: 'cancel' },
        {
          text: 'Supprimer',
          style: 'destructive',
          onPress: () => {
            deleteUser(userId);
          },
        },
      ]
    );
  };

  const handleSaveUser = (userData) => {
    if (selectedUser) {
      // Modification
      updateUser({
        ...selectedUser,
        ...userData,
      });
    } else {
      // Ajout
      addUser(userData);
    }
    setShowForm(false);
    setSelectedUser(null);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setSelectedUser(null);
  };

  return (
    <View style={styles.container}>
      {/* En-tête */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Gestion d'Utilisateurs</Text>
        <TouchableOpacity
          style={styles.addButton}
          onPress={handleAddUser}
        >
          <Text style={styles.addButtonText}>+ Ajouter</Text>
        </TouchableOpacity>
      </View>

      {/* Liste des utilisateurs */}
      <UserList
        users={users}
        loading={loading}
        onUserPress={handleEditUser}
        onUserLongPress={handleDeleteUser}
      />

      {/* Modal formulaire */}
      <Modal
        visible={showForm}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={handleCloseForm}
      >
        <UserForm
          user={selectedUser}
          onSave={handleSaveUser}
          onCancel={handleCloseForm}
        />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#2196F3',
    paddingTop: 12,
    paddingBottom: 16,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  addButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  addButtonText: {
    color: '#2196F3',
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default HomeScreen;