export class Color {
  red: number;
  green: number;
  blue: number;
  alpha: number;

  constructor(color: string) {
    color = color.substring(1);
    const colrValue = parseInt(color, 16);
    this.red = (colrValue & 0xFF0000) >> 16;
    this.green = (colrValue & 0xFF00) >> 8;
    this.blue = colrValue & 0xFF;
  }

  toString(): string {
    return this.color;
  }

  valueOf(): number {
    return this.red * 0x10000 + this.green * 0x100 + this.blue;
  }

  get color(): string {
    return '#' + ('0' + this.red.toString(16)).slice(-2) +
                ('0' + this.green.toString(16)).slice(-2) +
                ('0' + this.blue.toString(16)).slice(-2)
  }
}

console.log(new Color('#FF1122'));