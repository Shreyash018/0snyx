import React, { Component } from 'react';

class AnimatedText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: ['websites', 'webapps', 'UI/UX', 'mobile apps', 'vedios'], // Add more words as needed
      currentWordIndex: 0,
      currentWord: '',
      currentLetterIndex: 0,
      charSet: '!@#$%^&*(){}/', // You can customize this set of characters
    };

    // Change the character every 200 milliseconds (adjust as needed)
    this.intervalId = setInterval(this.changeCharacter, 250);
  }

  componentWillUnmount() {
    // Clear the interval when the component is unmounted
    clearInterval(this.intervalId);
  }

  changeCharacter = () => {
    const { words, currentWordIndex, currentLetterIndex, charSet } = this.state;
    const currentWord = words[currentWordIndex];

    if (currentLetterIndex <= currentWord.length) {
        const nextLetterIndex = currentLetterIndex + 1;
        const randomChar =
          currentLetterIndex === currentWord.length
            ? '' // Set an empty string for the last character to make it disappear
            : charSet[Math.floor(Math.random() * charSet.length)];
      const newWord = currentWord.substring(0, nextLetterIndex) + randomChar;
      this.setState({
        currentWord: newWord,
        currentLetterIndex: nextLetterIndex,
      });
    } else {
      // Move to the next word
      const nextWordIndex = (currentWordIndex + 1) % words.length;
      this.setState({
        currentWordIndex: nextWordIndex,
        currentLetterIndex: 0,
      });
    }
  };

  render() {
    const { currentWord } = this.state;

    return (
      <div>
        <span className="anim-txt">{currentWord}</span>
      </div>
    );
  }
}

export default AnimatedText;