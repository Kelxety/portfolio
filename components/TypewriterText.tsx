import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

type Props = {
  words: string[];
};

export default function TypewriterText({ words }: Props) {
  const [text] = useTypewriter({ words, loop: true, delaySpeed: 2000 });
  return (
    <>
      <span>{text}</span>
      <Cursor cursorColor="#F7AB0A" />
    </>
  );
}
