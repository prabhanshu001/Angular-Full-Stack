import { Component, OnInit } from "@angular/core";
const ELEMENT_DATA = [
  { memberID: 1, fname: "abc", lname: "def", state: "mh", groupNumber: 1234 },
  { memberID: 2, fname: "xyz", lname: "def", state: "mh", groupNumber: 567 },
  { memberID: 3, fname: "pqr", lname: "def", state: "mh", groupNumber: 5678 },
  { memberID: 4, fname: "ghi", lname: "def", state: "mh", groupNumber: 123 },
];
@Component({
  selector: "app-dashboard",
  templateUrl: "dashboard.component.html",
  styles: [
    `
      input {
        padding: 0;
        background: transparent;
        border: none;
        border-radius: 0;
        border-bottom: 1px solid #000000;
      }
    `,
  ],
})
export class DashboardComponent {
  searchData = ELEMENT_DATA;

  searchClicked = false;
  searchHandler() {
    this.searchClicked = true;
    var searchKeyword = document.querySelector("");
  }
  clearHandler() {
    this.searchClicked = false;
  }
}
