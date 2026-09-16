function ligurianSearchTermToKey(
  term: string,
  applyCasing?: (form: string, text: string) => string,
): string {
  const lowercased = Array.from(term)
    .map((character) => applyCasing ? applyCasing('lower', character) : character.toLowerCase())
    .join('');

  return lowercased
    .replace(/nn-/g, 'ñ')
    .normalize('NFKD')
    .replace(/n\u0303/g, 'ñ')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[\u02bc\u2018\u2019\u201b\uff07]/g, "'")
    .replace(/[“”]/g, '"');
}

const source: LexicalModelSource = {
  format: 'trie-1.0',
  languageUsesCasing: true,
  searchTermToKey: ligurianSearchTermToKey,
  wordBreaker: {
    use: 'default',
    joinWordsAt: ["'", '-'],
  },
  sources: ['wordlist.tsv'],
};

export default source;
