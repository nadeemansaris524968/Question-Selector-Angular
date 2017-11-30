
export class AnswerChoice {
    jsonModelName: string;
    vocabsource: string;
    vocabType?: any;
    searchkey?: any;
    score?: any;
    numhits?: any;
    name?: any;
    answerUID?: any;
    type: string;
    choice: string;
    choiceName?: any;
    modalitychoice?: any;
    concepts?: any;
    nulled: boolean;

    constructor(choice: string) {
        this.jsonModelName = 'com.ibm.medsieve.exam.models.AnswerChoice';
        this.vocabsource = 'EXAMBANK';
        this.vocabType = null;
        this.searchkey = null;
        this.score = null;
        this.numhits = null;
        this.name = null;
        this.answerUID = null;
        this.type = 'TEXT';
        this.choice = choice;
        this.choiceName = null;
        this.modalitychoice = null;
        this.concepts = null;
        this.nulled = true;
    }
}