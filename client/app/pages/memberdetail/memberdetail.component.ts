import { Component, OnInit } from "@angular/core";
const ELEMENT_DATA = [
  { memberID: 1, fname: "abc", lname: "def", state: "mh", groupNumber: 1234 },
  { memberID: 2, fname: "xyz", lname: "def", state: "mh", groupNumber: 567 },
  { memberID: 3, fname: "pqr", lname: "def", state: "mh", groupNumber: 5678 },
  { memberID: 4, fname: "ghi", lname: "def", state: "mh", groupNumber: 123 },
];
@Component({
  selector: "app-memberdetail",
  templateUrl: "./memberdetail.component.html",
  styleUrls: ["./memberdetail.component.scss"],
})
export class MemberdetailComponent implements OnInit {
  constructor() {}
  searchData = ELEMENT_DATA;
  ngOnInit(): void {}
}
