import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Summary } from '../../shared/summary.model';

@Injectable()
export class SummaryService {
    private summarySource = new BehaviorSubject(new Summary('', ''));
    currentSummary = this.summarySource.asObservable();

    constructor() {}

    changeSummary(summary: Summary) {
        this.summarySource.next(summary);
    }
}