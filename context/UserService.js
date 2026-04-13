// Service API pour communiquer avec JSONPlaceholder
const API_URL = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsers = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error('Erreur réseau');
    }
    const data = await response.json();
    
    // Enrichir les données avec des genres aléatoires pour la démonstration
    return data.map(user => ({
      id: user.id,
      name: user.name,
      email: user.email,
      gender: Math.random() > 0.5 ? 'homme' : 'femme',
    }));
  } catch (error) {
    console.error('Erreur lors de la récupération:', error);
    throw error;
  }
};