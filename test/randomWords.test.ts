import { randomWords, wordList } from '../src/index';

describe('Test random words', () => {
  it('should return a random word', async () => {
    const randomWord = await randomWords(1);
    expect(randomWord).toBeDefined();
  });

  it('should return 5 words', async () => {
    const rndmWrds = await randomWords(5);
    expect(rndmWrds).toHaveLength(5);
  });

  it('should return 10 words', async () => {
    const rndmWrds = await randomWords(10);
    expect(rndmWrds).toHaveLength(10);
  });

  it('should return all words', async () => {
    const rndmWrds = await randomWords(wordList.length);
    expect(rndmWrds).toHaveLength(wordList.length);
  });

  it('sould fail with more words requested then available', async () => {
    await expect(randomWords(wordList.length + 1)).rejects.toThrow();
  });
});
