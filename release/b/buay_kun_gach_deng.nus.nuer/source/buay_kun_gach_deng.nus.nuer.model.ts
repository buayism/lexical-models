/// <reference types="@keymanapp/lexical-model-compiler/dist/kmlmc.d.ts" />

const source: LexicalModelSource = {
  format: 'trie-1.0',

  sources: [
    'book_wordlist.tsv',
    'natural_sentences_wordlist.tsv',
    'bible_wordlist.tsv',
  ],

  wordBreaker: function (text: string): Span[] {
    const wordPattern = /\/[\p{L}\p{M}]+|[\p{L}\p{M}]+/gu;
    const words: Span[] = [];
    let match: RegExpExecArray | null;

    while ((match = wordPattern.exec(text)) !== null) {
      words.push({
        text: match[0],
        start: match.index,
        end: match.index + match[0].length,
        length: match[0].length,
      });
    }

    return words;
  },
};

export default source;