type Words = {
  [key: string]: string;
};

class Dict {
  private words: Words;

  constructor() {
    this.words = {};
  }

  add(word: Word) {
    //**  class를 타입처럼 사용 할 수 있음 */
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }

  def(term: string) {
    return this.words[term];
  }
}

class Word {
  constructor(public term: string, public def: string) {}
}

const kimchi = new Word("kimchi", "한국의 음식");
const bread = new Word("bread", "서양 음식");
const dict = new Dict();

dict.add(kimchi);
dict.add(bread);
// dict.def("kimchi");

console.log(dict);
console.log(dict.def("bread"));
