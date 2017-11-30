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
    correctAnswerChoice: any[];
    state: string;
    nulled: boolean;
    type?: any;
    name?: any;
    features?: any;

    constructor() {
        this.questionUID = null;
        this.source = null;
        this.specialty = null;
        this.modality = null;
        this.questionText = null;
        this.questionMedia = [];
        this.answerChoices = [];
        this.answerKey = null;
        this.correctAnswerChoice = [];
        this.state = 'NOTATTEMPTED';
        this.nulled = true;
        this.name = null;
        this.features = null;
    }

    setQuestionText(questionText: QuestionText) {
        this.questionText = questionText;
    }

    addQuestionMedia(questionMedia: QuestionMedia) {
        this.questionMedia.push(questionMedia);
    }

    addAnswerChoices(answerChoice: AnswerChoice) {
        this.answerChoices.push(answerChoice);
    }

    addCorrectAnswerChoice(correctAnswer: string) {
        this.correctAnswerChoice.push(correctAnswer);
    }
}