import asyncio
from dotenv import load_dotenv
from services.vocabulary_generator_service import VocabularyGeneratorService
from fastapi import FastAPI

app = FastAPI()
load_dotenv()

@app.get("/")
async def root():
    vocab_generator = VocabularyGeneratorService()
    sentences = await vocab_generator.generate(
        words="apple, book, run",
        input_language="English",
        output_language="Portuguese",
        num_words=10,
        context="Daily life",
    )

    return {"message": sentences}