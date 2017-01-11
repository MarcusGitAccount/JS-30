
// export function helloFromTheOtherFile() { console.log('Hello') };

class Point {
  constructor(x, y){
    this._x = x;
    this._y = y;
  }

  get X()  { return this._x; }
  get Y()  { return this._y; }
  set X(x) { this._x = x; }
  set Y(y) { this._y = y; }

  toString() { return Object.keys(this).join(' '); }
  whatClass() { return Point.name; }

  static origin() { return new Point(0, 0); }
  static distance(A, B) {
    const _distance = Math.pow(A.X - B.X, 2) + Math.pow(A.Y - B.Y, 2);
    return Math.sqrt(_distance);
  }
}

class Circle extends Point {
  constructor(x, y, radius){
    super(x, y);
    this._radius = radius;
  }

  get radius() { return this._radius; }
  set radius(_radius) { this._radius = _radius; }

  toString() { return Object.keys(this).join(' '); }
  whatClass() { return Circle.name; }
  area() { return Math.trunc(Math.pow(this.radius, 2) * Math.PI); }

}

console.group('Point');

let origin = Point.origin();
let circle = new Circle(0, 0, 2);

console.log(origin);
console.groupEnd('Point');