import {Point} from './point';

export class Sphere {
  center: Point;
  radius: number;


  constructor(center: Point, radius: number) {
    this.center = center;
    this.radius = radius;
  }

  rayIntersect(ray: [Point, Point]): number[] {
    let oc = ray[0].minus(this.center);

    let k1 = ray[1].dot(ray[1]);
    let k2 = 2 * oc.dot(ray[1]);
    let k3 = oc.dot(oc) - (this.radius * this.radius);

    let discriminant = k2*k2 - 4*k1*k3;
    if( discriminant < 0)
      return [Infinity, Infinity];

    let t1 = (-k2 + Math.sqrt(discriminant)) / (2*k1);
    let t2 = (-k2 - Math.sqrt(discriminant)) / (2*k1);
    return [t1, t2]
  }
}

const spere: Sphere = new Sphere(new Point(3, 0, 4), 3);
console.log(spere.rayIntersect([new Point(0, 0, 0), new Point(3, 0, 4)]));