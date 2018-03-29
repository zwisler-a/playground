import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-custom-carousel",
  templateUrl: "./custom-carousel.component.html",
  styleUrls: ["./custom-carousel.component.scss"]
})
export class CustomCarouselComponent implements OnInit {
  slides = [
    {
      text: {
        title: "Title",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis neque quis ex euismod cursus. " +
          "Nam felis tortor, tempus vulputate justo ac, ullamcorper scelerisque quam. Maecenas sollicitudin purus" +
          " vel lobortis vestibulum. Vivamus metus lorem, dapibus eget nibh a, posuere vulputate neque."
      },
      actions: { primary: "Primary Action", secondary: "Secondary action" },
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Mount_Wilhelm.jpg/1200px-Mount_Wilhelm.jpg"
    },
    {
      imageUrl:
        "https://www.slovenia.info/uploads/narava/Mountains-and-hills-julian-alps.jpg"
    },
    {
      imageUrl:
        "https://handluggageonly.co.uk/wp-content/uploads/2017/08/IMG_5159-a.jpg"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
