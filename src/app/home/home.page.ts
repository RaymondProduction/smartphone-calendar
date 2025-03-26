import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false
})
export class HomePage {
  message: string = 'Loading...';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<{ message: string }>('https://example.com/api/hello')
      .subscribe({
        next: (response) => this.message = response.message,
        error: () => this.message = 'Error fetching data',
      });
  }
}
