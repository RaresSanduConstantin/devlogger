import { Component, OnInit } from '@angular/core';

import { Log } from '../../models/Log';
import { LogService } from '../../services/log.service';

@Component({
  selector: 'app-log-form',
  templateUrl: './log-form.component.html',
  styleUrls: ['./log-form.component.css'],
})
export class LogFormComponent implements OnInit {
  text: string;
  id: string;
  date: any;

  constructor(private logService: LogService) {}

  ngOnInit(): void {
    // Subscribe to the selectedLog observable

    this.logService.selectedLog.subscribe((log) => {
      if (log.id !== null) {
        this.id = log.id;
        this.text = log.text;
        this.date = log.date;
      }
    });
  }
}
