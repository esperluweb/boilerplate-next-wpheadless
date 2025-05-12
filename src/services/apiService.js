/**
 * Service pour gérer les appels API
 */

export default class ApiService {
    constructor() {
        this.baseUrl = process.env.NEXT_PUBLIC_API_URL || 'https://api.example.com';
    }

    /**
     * Fait une requête GET à l'API
     * @param {string} endpoint - La fin de l'URL (optionnel)
     * @returns {Promise<any>} Les données de la réponse
     * @throws {Error} Si la requête échoue ou si aucun résultat n'est trouvé
     */
    async get(endpoint = '') {
        try {
            const response = await fetch(`${this.baseUrl}${endpoint}`);
            
            if (!response.ok) {
                throw new Error('Erreur lors de la requête API');
            }

            const data = await response.json();
            
            if (!data || Object.keys(data).length === 0) {
                throw new Error('Pas de résultats trouvés');
            }

            return data;
        } catch (error) {
            console.error('Erreur lors de l\'appel API:', error);
            throw new Error('Une erreur est survenue lors de la requête API');
        }
    }

    /**
     * Fait une requête POST à l'API
     * @param {string} endpoint - La fin de l'URL
     * @param {Object} body - Les données à envoyer
     * @returns {Promise<any>} Les données de la réponse
     * @throws {Error} Si la requête échoue ou si aucun résultat n'est trouvé
     */
    async post(endpoint, body) {
        try {
            const response = await fetch(`${this.baseUrl}${endpoint}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });

            if (!response.ok) {
                throw new Error('Erreur lors de la requête API');
            }

            const data = await response.json();
            
            if (!data || Object.keys(data).length === 0) {
                throw new Error('Pas de résultats trouvés');
            }

            return data;
        } catch (error) {
            console.error('Erreur lors de l\'appel API:', error);
            throw new Error('Une erreur est survenue lors de la requête API');
        }
    }
}
