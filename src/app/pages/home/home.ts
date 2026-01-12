import { Component } from '@angular/core';
import { Carousel } from "../../components/carousel/carousel";
import { Card } from "../../components/card/card";
import { Text } from "../../components/text/text";

@Component({
  selector: 'app-home',
  imports: [Carousel, Card, Text],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
