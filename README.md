# Secure Random Words

Generate random words from a list of words. Those words are borrowed from `xkcd password generator` which borrowed it from wherever.

[https://github.com/punkave/random-words](random-words) uses `Math.random` to generate random numbers, and therefore the words. This library aims not to replicate this repository. A mere random selection of the words in `./src/words/` is intended.

This package intends to use [https://github.com/telamon/pure-random-number](pure-random-number) to generate random numbers, and therefore the words.
Those will be cryptographically secure, assuming the pure-random-number package is.
