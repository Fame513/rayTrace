import {Camera} from './models/camera';
import {Point} from './models/point';
import {Scene} from './models/scene';
import {Sphere} from './models/sphere';
import {Color} from './models/color';

 const canvas: HTMLCanvasElement = document.getElementById('canvas') as HTMLCanvasElement;

const ctx: CanvasRenderingContext2D = canvas.getContext('2d');

const ctxWidth = ctx.canvas.clientWidth;
const ctxHeight = ctx.canvas.clientHeight;


const cameraPos: Point = new Point(0, 0, 0);
const cameraDirection: Point = new Point(0, 0, 10);
const camera: Camera = new Camera(cameraPos, cameraDirection, ctxWidth, ctxHeight);
const scene: Scene = new Scene();
scene.objects = [new Sphere(new Point(0, 0, 15.1), 15)];

draw();

function draw() {
  for (let x = -camera.viewPortWidth/2; x <= camera.viewPortWidth/2; x++) {
    for (let y = -camera.viewPortHeight/2; y <= camera.viewPortHeight/2; y++) {
      const color: Color = traceRay([camera.position, new Point(x, y, camera.vector.z)]);
      drawPoint(x + camera.viewPortWidth/2, -y + camera.viewPortHeight/2, color.toString());
    }
  }
}

function traceRay(ray:[Point, Point]): Color {
  let closestPoint = Infinity;
  let closestShape = null;

  for (const shape of scene.objects) {
    const [t1, t2] = (shape as Sphere).rayIntersect(ray);

    if (t1 < closestPoint) {
      closestPoint = t1;
      closestShape = shape;
    }
    if (t2 < closestPoint) {
      closestPoint = t2;
      closestShape = shape;
    }
  }
  if (closestShape) {
    let color = new Color('#FF0000');
    color.green = (closestPoint * 0xFF);
    return color;
  } else
    return new Color('#000000');
}


function drawPoint(x: number, y: number, color: string) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, 1, 1);
}