import React, { createContext, useState, useEffect } from 'react';
import { fetchUsers } from './UserService';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Charger les utilisateurs au démarrage
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchUsers();
      setUsers(data);
    } catch (err) {
      setError('Erreur lors du chargement des utilisateurs');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Ajouter un utilisateur
  const addUser = (newUser) => {
    const userWithId = {
      ...newUser,
      id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1,
    };
    setUsers([...users, userWithId]);
  };

  // Modifier un utilisateur
  const updateUser = (updatedUser) => {
    setUsers(
      users.map(user => (user.id === updatedUser.id ? updatedUser : user))
    );
  };

  // Supprimer un utilisateur
  const deleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  return (
    <UserContext.Provider
      value={{
        users,
        loading,
        error,
        addUser,
        updateUser,
        deleteUser,
        loadUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};