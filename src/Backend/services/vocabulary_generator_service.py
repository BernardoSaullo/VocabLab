import asyncio
import json
import os
import re
from groq import AsyncGroq
from services.prompt_service import PromptService


class VocabularyGeneratorService:
    async def generate(self, words, input_language, output_language, num_words=10, context="Daily life"):
        system_prompt = PromptService().render(
            "system",
            {
                "input_language": input_language,
                "output_language": output_language,
                "num_words": str(num_words),
                "context": context,
            },
        )
        api_key=os.environ.get("GROQ_API_KEY")

        client = AsyncGroq(
            api_key=os.environ.get("GROQ_API_KEY"),
            )
        

        chat_completion = await client.chat.completions.create(
    
            messages=[
                {
                    "role": "system",
                    "content": system_prompt,
                },

                {
                    "role": "user",
                    "content": f"{words}"
                }
            ],

            model="llama-3.3-70b-versatile",

            temperature=0.5,

            max_completion_tokens=1024,

            top_p=1,

            stop=None,

            stream=False,
        )
        data = chat_completion.choices[0].message.content
        
        array_match = re.search(r'\[\s*{.*?}\s*]', data, re.DOTALL)

        
        if array_match:
            return json.loads(array_match.group())
            
        
            