Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

Pomodorro 1
✅ Clean up repository
✅ Understand problem
✅ Single words: returns the same word if the length of the word is less than 5.
spinWords("test") -> "test"

- Single words: words with length greater than 5 are reversed
  spinWords("another") -> "rehtona"
- Multiple words: rules are applied to each word.
