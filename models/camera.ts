import {Point} from './point';

export class Camera {
  position: Point;
  vector: Point;
  viewPortWidth: number;
  viewPortHeight: number;


  constructor(position: Point, vector: Point, viewPortWidth: number, viewPortHeight: number) {
    this.position = position;
    this.vector = vector;
    this.viewPortWidth = viewPortWidth;
    this.viewPortHeight = viewPortHeight;
  }
}