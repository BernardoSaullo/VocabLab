import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface Language {
  name: string;
  code: string;
}
import { BaseContainerComponent } from '../../shared/components/base-container/base-container.component';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { InputText } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';


@Component({
  selector: 'app-home',
  imports: [BaseContainerComponent, IconField, InputIcon, InputText, ButtonModule, FormsModule, SelectModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  word: string = '';
  words: string[] = [];

  languages: Language[] = [];
  selectedLanguage: Language | undefined;

  ngOnInit() {
    this.languages = [
      { name: 'Portuguese', code: 'pt' },
      { name: 'English', code: 'en' },
      { name: 'Spanish', code: 'es' },
      { name: 'French', code: 'fr' },
      { name: 'German', code: 'de' },
      { name: 'Japanese', code: 'ja' },
      { name: 'Chinese', code: 'zh' },
      { name: 'Italian', code: 'it' },
      { name: 'Russian', code: 'ru' },
      { name: 'Arabic', code: 'ar' },
      { name: 'Korean', code: 'ko' },
    ];
  }


  public addWord()
  {
    if(this.word.trim())
    {
      this.words.push(this.word);
      this.word = '';
    }
  }

  public removeWord(index: number): void
  {
    this.words.splice(index, 1);
  }
}
