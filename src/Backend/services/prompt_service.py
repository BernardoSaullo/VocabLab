import re
from pathlib import Path
from typing import Mapping


class PromptService:
    def __init__(self, prompts_dir: Path | None = None) -> None:
        self._prompts_dir = prompts_dir or Path(__file__).resolve().parent.parent / "prompts"

    def render(self, prompt_name: str, values: Mapping[str, str]) -> str:
        template = self._read_template(prompt_name)
        return self._replace_placeholders(template, values)

    def _read_template(self, prompt_name: str) -> str:
        prompt_path = self._prompts_dir / f"{prompt_name}.md"
        return prompt_path.read_text(encoding="utf-8").strip()

    def _replace_placeholders(self, template: str, values: Mapping[str, str]) -> str:
        def replace(match: re.Match[str]) -> str:
            placeholder = match.group(1)
            if placeholder not in values:
                raise ValueError(f"Missing value for placeholder: {placeholder}")
            return str(values[placeholder])

        return re.sub(r"\[([A-Za-z0-9_]+)\]", replace, template)