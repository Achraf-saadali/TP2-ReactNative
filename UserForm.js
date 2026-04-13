import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';

const UserForm = ({ user = null, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: 'homme',
  });

  // Pré-remplir le formulaire si on modifie un utilisateur
  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name,
        email: user.email,
        gender: user.gender || 'homme',
      });
    }
  }, [user]);

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleGenderChange = (gender) => {
    setFormData({
      ...formData,
      gender,
    });
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      Alert.alert('Erreur', 'Le nom est obligatoire');
      return false;
    }
    if (!formData.email.trim()) {
      Alert.alert('Erreur', "L'email est obligatoire");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      Alert.alert('Erreur', 'Email invalide');
      return false;
    }
    return true;
  };

  const handleSave = () => {
    if (validateForm()) {
      onSave({
        ...(user?.id && { id: user.id }),
        ...formData,
      });
    }
  };

  const bgColor =
    formData.gender === 'femme' ? '#FFE0F0' : '#E0F0FF';

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: bgColor }]}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.formWrapper}>
        <Text style={styles.title}>
          {user ? 'Modifier l\'utilisateur' : 'Ajouter un utilisateur'}
        </Text>

        {/* Champ Nom */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Nom</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez le nom"
            value={formData.name}
            onChangeText={(text) => handleInputChange('name', text)}
            placeholderTextColor="#999"
          />
        </View>

        {/* Champ Email */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez l'email"
            value={formData.email}
            onChangeText={(text) => handleInputChange('email', text)}
            keyboardType="email-address"
            placeholderTextColor="#999"
          />
        </View>

        {/* Sélection Genre */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Genre</Text>
          <View style={styles.genderContainer}>
            <TouchableOpacity
              style={[
                styles.genderButton,
                formData.gender === 'homme' && styles.genderButtonActive,
              ]}
              onPress={() => handleGenderChange('homme')}
            >
              <Text
                style={[
                  styles.genderButtonText,
                  formData.gender === 'homme' && styles.genderButtonTextActive,
                ]}
              >
                Homme
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.genderButton,
                formData.gender === 'femme' && styles.genderButtonActive,
              ]}
              onPress={() => handleGenderChange('femme')}
            >
              <Text
                style={[
                  styles.genderButtonText,
                  formData.gender === 'femme' && styles.genderButtonTextActive,
                ]}
              >
                Femme
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Boutons d'action */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[
              styles.button,
              formData.gender === 'femme' ? styles.buttonPink : styles.buttonBlue,
            ]}
            onPress={handleSave}
          >
            <Text style={styles.buttonText}>Enregistrer</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonCancel}
            onPress={onCancel}
          >
            <Text style={styles.buttonCancelText}>Annuler</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  formWrapper: {
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#333',
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    backgroundColor: '#fff',
    color: '#333',
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  genderButton: {
    flex: 1,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  genderButtonActive: {
    borderColor: '#2196F3',
    backgroundColor: '#2196F3',
  },
  genderButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
  },
  genderButtonTextActive: {
    color: '#fff',
  },
  buttonContainer: {
    marginTop: 30,
    gap: 12,
  },
  button: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonBlue: {
    backgroundColor: '#2196F3',
  },
  buttonPink: {
    backgroundColor: '#E91E63',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonCancel: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderWidth: 1,
    borderColor: '#ddd',
  },
  buttonCancelText: {
    color: '#666',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default UserForm;