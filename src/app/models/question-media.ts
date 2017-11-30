import { Media } from './media';

export interface QuestionMedia {
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
}