export class QuestionText {
    jsonModelName: string;
    vocabsource: string;
    vocabType?: any;
    searchkey?: any;
    score?: any;
    numhits?: any;
    name?: any;
    textUID?: any;
    source?: any;
    text: string[];
    concepts?: any;
    nulled: boolean;

    constructor() {
        this.jsonModelName = 'com.ibm.medsieve.exam.models.QuestionText';
        this.vocabsource = 'EXAMBANK';
        this.vocabType = null;
        this.searchkey = null;
        this.score = null;
        this.numhits = null;
        this.name = null;
        this.textUID = null;
        this.source = null;
        this.text = [];
        this.concepts = null;
        this.nulled = true;
    }

    addText(text: string) {
        this.text.push(text);
    }
}