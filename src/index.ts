import { words } from './words';
import { randomSync } from 'pure-random-number';

/**
 * Generates and array of random words. Maximal length of the words is defined by the `maxLength` parameter.
 * @param numberOfWords Number of unique words to generate
 */
export const randomWords = async (numberOfWords = 1): Promise<string[]> => {
  if (numberOfWords > words.length) {
    throw new Error(
      'Number of words requested is greater than the number of words available'
    );
  }

  let result = new Set<string>([]);

  do {
    const rdm = await randomSync(0, words.length - 1);
    result.add(words[rdm]);
  } while (result.size < numberOfWords);

  return await Promise.all(Array.from(result));
};

export const maxLength = words.length;

export const wordList = words;
