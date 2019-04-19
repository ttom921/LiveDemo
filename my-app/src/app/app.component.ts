import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '這是';
  url = 'rtmp://live.hkstv.hk.lxdns.com/live/hks';
  safeUrl: any
  constructor(private sanitizer: DomSanitizer) {
    this.getUrl(this.url);
  }
  getUrl(url: string) {
    this.safeUrl= this.sanitizer.bypassSecurityTrustUrl(url);
  }
}
