import { AnswerChoice } from './answer-choice';
import { QuestionMedia } from './question-media';
import { QuestionText } from './question-text';


export class Question {
    questionUID?: any;
    source?: any;
    specialty?: any;
    modality?: any;
    questionText: QuestionText;
    questionMedia: QuestionMedia[];
    answerChoices: AnswerChoice[];
    answerKey?: any;
    correctanswerchoice: any[];
    state: string;
    nulled: boolean;
    type?: any;
    name?: any;
    features?: any;
}