import { Media } from './media';

export class QuestionMedia {
    jsonModelName: string;
    vocabsource: string;
    vocabType?: any;
    searchkey?: any;
    score?: any;
    numhits?: any;
    name?: any;
    mediaUID?: any;
    mediasrcID?: any;
    mediaURL: string;
    source?: any;
    media: Media;
    caption?: any;
    concepts?: any;
    nulled: boolean;

    constructor() {
        this.jsonModelName = 'com.ibm.medsieve.exam.models.ExamMmItem';
        this.vocabsource = 'EXAMBANK';
        this.vocabType = null;
        this.searchkey = null;
        this.score = null;
        this.numhits = null;
        this.name = null;
        this.mediaUID = null;
        this.mediasrcID = null;
        this.mediaURL = '';
        this.source = null;
        this.media = null;
        this.caption = null;
        this.concepts = null;
        this.nulled = true;
    }

    setMediaURL(mediaURL: string) {
        this.mediaURL = mediaURL;
    }

    setMedia(media: Media) {
        this.media = media;
    }
}