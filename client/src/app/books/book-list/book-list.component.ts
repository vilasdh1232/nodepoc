import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
const API_URL = environment.apiUrl;

@Component({
  selector: 'app-book',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: any;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(API_URL + '/book').subscribe(data => {
      this.books = data;
    });
  }

}
