
class City {
  constructor(id, name, county, country, population){
    this.id = id;
    this.name = name;
    this.county = county;
    this.country = country;
    this.population = population;
  }

  toString(){
    return Object.keys(this).join(' ');
  }

  getClass(){
    return City.name;
  }
}

class Point2D {
  constructor(x, y){
    this.x = x;
    this.y = y;
  }

  static get Origin(){
    return new Point2D(0, 0);
  }

  toString(){
    return Object.keys(this).join(' ');
  }

  getClass(){
    return Point2D.name;
  }

  get X(){
    return this.x;
  }

  set X(value){
    this.x = value;
  }

  get Y(){
    return this.y;
  }

  set Y(value){
    this.y = value;
  }

  [['distance', 'From', 'Origin'].join('')](){
    return Math.sqrt(Math.pow(this.X, 2) + Math.pow(this.Y, 2));
  }
}

class Point3D extends Point2D {
  constructor(x, y, z){
    super(x, y);
    this.z = z;
  }

  getClass(){
    return Point3D.name;
  }

  get Z(){
    return this.z;
  }

  set Z(value){
    this.z = z;
  }
}


let city = new City(1, 'Cluj-Napoca', 'Cluj', 'Romania');
let point2d = new Point2D(3, 4);
let point3d = new Point3D(3, 4, 5);