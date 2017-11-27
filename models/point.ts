export class Point {
  x: number;
  y: number;
  z: number;


  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  plus(point: Point): Point {
    return new Point(
      this.x + point.x,
      this.y + point.y,
      this.z + point.z
    )
  }

  minus(point: Point): Point{
    return new Point(
      this.x - point.x,
      this.y - point.y,
      this.z - point.z
    )
  }

  dot(point: Point): number {
    return (this.x * point.x) + (this.y * point.y) + (this.z * point.z)
  }
}