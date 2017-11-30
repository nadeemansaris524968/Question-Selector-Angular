import { Question } from './question';

export class RootCase {
    caseUID?: any;
    questions: Question[];
    specialty?: any;
    source?: any;
    state?: any;
    nulled: boolean;
    name: string;

    constructor() {
        this.caseUID = null;
        this.questions = [];
        this.specialty = null;
        this.source = null;
        this.state = null;
        this.nulled = true;
        this.name = '';
    }

    addQuestions(question: Question) {
        this.questions.push(question);
    }
}