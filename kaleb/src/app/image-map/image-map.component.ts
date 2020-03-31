import { Component, OnInit } from "@angular/core";

@Component({
  selector: "image-map",
  templateUrl: "./image-map.component.html",
  styleUrls: ["./image-map.component.scss"]
})
export class ImageMapComponent implements OnInit {
  data = {
    aa: {
      name: "Room 1 ",
      temp: " 55C"
    },
    bb: {
      name: "Room 2 ",
      temp: " 45C"
    }
  };

  constructor() {}

  ngOnInit(): void {}

  room(s) {
    console.log(s);
  }
}
