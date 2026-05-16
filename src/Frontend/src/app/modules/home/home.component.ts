import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BaseContainerComponent } from '../../shared/components/base-container/base-container.component';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { InputText } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SelectModule } from 'primeng/select';
import { Language } from '../../shared/models/language';
import { SelectButton } from 'primeng/selectbutton';
import { BaseCardComponent } from "../../shared/components/base-card/base-card.component";

@Component({
  selector: 'app-home',
  imports: [
    BaseContainerComponent,
    IconField,
    InputIcon,
    InputText,
    ButtonModule,
    FormsModule,
    SelectModule,
    SelectButton,
    BaseCardComponent
      ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  word: string = '';
  words: string[] = [];

  languages: Language[] = [];
  levels: string[] = [];
  contexts: string[] = [];
  tones: string[] = [];
  inputLanguage: Language | undefined;
  outputLanguage: Language | undefined;
  selectedlevel: string | null = null;
  context: string | null = null;
  tone: string | null = null;

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

    this.levels = ['BEGINNER', 'INTERMEDIATE', 'ADVANCED'];

    this.contexts = [
      'Academic',
      'Business',
      'Casual Conversation',
      'Healthcare',
      'Legal',
      'Literature',
      'Science & Technology',
      'Travel & Tourism',
      'Sports & Fitness',
      'Food & Cooking',
      'Entertainment & Media'
    ];

    this.tones = ['Informal', 'Formal'];

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
