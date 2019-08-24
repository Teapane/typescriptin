class Transcriptor {
  public toRna(input: string): string {
    const mapping: { [key: string]: string } = {
      G: "C",
      C: "G",
      T: "A",
      A: "U"
    }
    const nucleotide = input.split("");
    let transcribed = "";
    for (const x of nucleotide) {
      const current = mapping[x]
      if (current != undefined) {
        transcribed += current;
      } else {
        throw new Error("Invalid input DNA.");
      }
    }
    return transcribed;
  }
}

export default Transcriptor
