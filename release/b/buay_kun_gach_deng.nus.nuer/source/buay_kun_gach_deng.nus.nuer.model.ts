const source: LexicalModelSource = {
  format: 'trie-1.0',
  wordBreaker: {
    use: 'default',
  },
  /* Point Keyman to both of your custom Nuer lists */
  sources: ['book_wordlist.tsv', 'natural_sentences_wordlist.tsv', 'bible_wordlist.tsv'],
};
export default source;
