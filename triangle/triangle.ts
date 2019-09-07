export default class Triangle {

  sides: number[]
  triangleMap: Map<number, string> = new Map([[1, 'equilateral'], [2, 'isosceles'], [3, 'scalene']])

  constructor(...sides: number[]) {
    this.sides = sides
  }

  private determineDistinctSides = (): number => {
    const determineDistinct = new Set(this.sides)
    return determineDistinct.size;
  }

  private mathCannotCompute(): boolean {
    return this.impossibleAccordingToEuclid() || this.violatesFundamentalInequality()
  }

  private impossibleAccordingToEuclid(): boolean {
    const [x, y, z] = this.sides
    return x + y <= z || x + z < y || y + z < x
  }

  private violatesFundamentalInequality(): boolean {
    return !this.sides.every((side) => side > 0);
  }

  public kind() {
   if (this.mathCannotCompute()) {
      throw new TypeError("Triangles have rules...unless this is non-euclidean space...or you are Gauss...or Riemannian!");
    }
    return this.triangleMap.get(this.determineDistinctSides())
  }
}
