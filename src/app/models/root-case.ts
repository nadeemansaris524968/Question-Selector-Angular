import { Question } from './question';

export class RootCase {
    caseUID?: any;
    questions: Question[];
    specialty?: any;
    source?: any;
    state?: any;
    nulled: boolean;
    name: string;
}