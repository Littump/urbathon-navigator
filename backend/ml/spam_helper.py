from string import punctuation
import os

import joblib
import nltk
from bs4 import BeautifulSoup
from nltk.stem import PorterStemmer
from nltk.tokenize import word_tokenize


class SpamHelper():
    def __init__(self):
        dirname = 'models'
        model_filename = 'spam_predictor.pkl'
        vectorizer_filename = 'spam_vec.pkl'
        current_file_path = os.path.abspath(__file__)
        current_directory = os.path.dirname(current_file_path)
        path_model = os.path.join(current_directory, dirname, model_filename)
        path_vectorizer = os.path.join(
            current_directory,
            dirname,
            vectorizer_filename
        )
        self.loaded_model = joblib.load(path_model)
        self.loaded_vectorizer = joblib.load(path_vectorizer)

    def normalize_text(self, text):
        soup = BeautifulSoup(text, 'html.parser')
        for data in soup(['style', 'script']):
            data.decompose()
        script_out = ' '.join(soup.stripped_strings)
        tokens = word_tokenize(script_out)
        tokens_without_punct = [i for i in tokens if i not in punctuation]
        low_tokens = [i.lower() for i in tokens_without_punct]
        stopwords = nltk.corpus.stopwords.words('english')
        words_without_stop = [i for i in low_tokens if i not in stopwords]
        lemmatizer = nltk.WordNetLemmatizer()
        lemms = [lemmatizer.lemmatize(word) for word in words_without_stop]
        ps = PorterStemmer()
        stems = [ps.stem(i) for i in lemms]
        total = ' '.join(stems)
        return total

    def predict_sentiment(self, input_text):
        input_text_processed = self.normalize_text(input_text)
        input_vectorized = (
            self.loaded_vectorizer
            .transform([input_text_processed])
        )
        prediction = self.loaded_model.predict(input_vectorized)
        return prediction
