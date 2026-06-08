# import asyncio

# from dotenv import load_dotenv

# from services.vocabulary_generator_service import VocabularyGeneratorService

# async def main():
#     load_dotenv()
#     vocab_generator = VocabularyGeneratorService()
#     await vocab_generator.generate(
#         words="apple, book, run",
#         input_language="English",
#         output_language="Portuguese",
#         num_words=10,
#         context="Daily life",
#     )



# asyncio.run(main())

from fastapi import FastAPI

app = FastAPI()


@app.get("/")
def root():
    teste = "ratatui"
    return {"message": teste}