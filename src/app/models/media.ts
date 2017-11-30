export class Media {
    modality?: any;
    specialty?: any;
    format?: any;
    nulled: boolean;
    multiFrame: boolean;

    constructor() {
        this.modality = null;
        this.specialty = null;
        this.format = null;
        this.nulled = true;
        this.multiFrame = false;
    }
}