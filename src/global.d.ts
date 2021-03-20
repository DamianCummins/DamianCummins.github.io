declare module 'lancaster-stemmer'

interface messages {}

interface PredictionResponse {
    tag: string;
    probability: number;
    response?: string;
}