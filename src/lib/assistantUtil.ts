import * as tf from "@tensorflow/tfjs";
import lancasterStemmer from "lancaster-stemmer";
import intents from "./intents.json";

let model: tf.LayersModel;

const classes = ['education', 'experience', 'goodbye', 'greeting', 'hobbies', 'options', 'projects', 'skills', 'thanks'];
const words = ["'m", "'s", ',', '.', 'a', 'about', 'account', 'any', 'anyon', 'ar', 'at', 'awesom', 'be', 'blog', 'bsc', 'bye', 'can', 'chat', 'comput', 'could', 'day', 'degr', 'develop', 'did', 'do', 'down-time', 'expery', 'famili', 'for', 'fun', 'github', 'go', 'good', 'goodby', 'hav', 'hello', 'help', 'hi', 'hobby', 'how', 'i', 'ibm', 'in', 'is', 'jav', 'javascrib', 'know', 'langu', 'lat', 'look', 'me', 'next', 'nic', 'of', 'outsid', 'person', 'program', 'project', 'provid', 'python', 'sci', 'see', 'skil', 'som', 'techn', 'tel', 'thank', 'that', 'ther', 'til', 'tim', 'to', 'un', 'univers', 'what', 'wher', 'with', 'work', 'writ', 'yo', 'you'];

async function init() {
    model = await tf.loadLayersModel(window.location.protocol + "//" + window.location.host + "/model/model.json");
    return Promise.resolve();
}

function predict(message: string) {
    const errorThreshold = 0.25;
    const bow = bagOfWords(message, words);
    const inputData = tf.tensor2d([bow]);
    const prediction = model.predict(inputData) as tf.Tensor;
    return prediction.data().then((data) => {
        const results = [];
        for(var i = 0; i < data.length; i++) {
            if (data[i] > errorThreshold) {
                results.push([i, data[i]]);
            }
        }

        const returnList: PredictionResponse[] = [];
        results.reverse().forEach((result) => {
            returnList.push({
                tag: classes[result[0]],
                probability: result[1],
                response: getResponse(classes[result[0]])
            });
        });
        return Promise.resolve(returnList);
    });
}

function getResponse(tag: string) {
    const tagObj = intents.intents.find((value) => value.tag === tag);
    return tagObj && tagObj.responses[Math.floor(Math.random() * Math.floor(tagObj.responses.length))];
}

function cleanUpSentence(sentence: string) {
    let sentenceWords = sentence.split(" ");
    sentenceWords = sentenceWords.map((word) => lancasterStemmer(word));
    return sentenceWords;
}

function bagOfWords(sentence: string, words: string[]) {
    const sentenceWords = cleanUpSentence(sentence);
    const bag = new Array(words.length).fill(0.0);
    sentenceWords.forEach((sentenceWord) => {
        words.forEach((word, index) => {
            if(word === sentenceWord) {
                bag[index] = 1.0
            }
        });
    });
    return bag;
}

export default {
    init,
    predict
}
