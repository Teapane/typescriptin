export default class ReverseString {
  static reverse(phrase:string): string {
    return phrase.split("").reverse().join("")
  }
}
