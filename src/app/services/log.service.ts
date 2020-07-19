import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Observable } from 'rxjs';
import { of } from 'rxjs';

import { Log } from '../models/Log';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  logs: Log[];

  private logSource = new BehaviorSubject<Log>({
    id: null,
    text: null,
    date: null,
  });

  selectedLog = this.logSource.asObservable();

  constructor() {
    this.logs = [
      { id: '1', text: 'generate comp', date: new Date('12/12/2018 12:54:23') },
      { id: '2', text: 'text comp', date: new Date('10/10/2018 13:54:23') },
      { id: '3', text: 'removed comp', date: new Date('09/31/2019 09:34:23') },
    ];
  }

  getLog(): Observable<Log[]> {
    return of(this.logs);
  }

  setFormLog(log: Log) {
    this.logSource.next(log);
  }

  addLog(newLog: Log) {
    this.logs.unshift(newLog);
  }

  updateLog(updLog: Log) {
    this.logs.forEach((cur, index) => {
      if (updLog.id === cur.id) {
        this.logs.splice(index, 1);
      }
    });
    this.logs.unshift(updLog);
  }

  deleteLog(log: Log) {
    this.logs.forEach((cur, index) => {
      if (log.id === cur.id) {
        this.logs.splice(index, 1);
      }
    });
  }
}
