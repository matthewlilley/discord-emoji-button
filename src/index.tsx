import { Emoji, EmojiData, EmojiProps, EmojiSet } from 'emoji-mart';
import data from 'emoji-mart/data/emojione.json';
import React, { Component } from 'react';
import styled from 'styled-components';

const Button = styled.button`
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  margin: 0;
  .emoji-mart-emoji {
    display: inline-block;
    filter: greyscale(100%);
    opacity: 0.5;
    transition: transform 0.1s ease-in-out, opacity 0.1s ease-in-out, filter 0.1s ease-in-out;
  }
  .emoji-mart-emoji:hover {
    filter: none;
    opacity: 1;
    transform: scale(1.275);
  }
`;

export interface DiscordEmojiButtonProps {
  emoji: string | EmojiData;
  emojis: string[] | EmojiData[];
  style?: object;
  className?: string;
  size: number;
  set?: EmojiSet;
  onClick?(event: any): void;
}

export interface DiscordEmojiButtonState {
  emoji: string | EmojiData;
  emojis: string[] | EmojiData[];
}

export class DiscordEmojiButton extends Component<
  DiscordEmojiButtonProps,
  DiscordEmojiButtonState
  > {
  static defaultProps = {
    emoji: 'grinning',
    emojis: data.categories[0].emojis.slice(0, 83),
    style: {},
    className: 'discord-emoji-button',
    size: 24,
    set: 'emojione',
  };
  state = {
    emoji: this.props.emoji,
    emojis: this.props.emojis,
  };
  onMouseEnter = () => {
    this.setState({
      emoji: this.state.emojis[Math.floor(Math.random() * this.state.emojis.length)],
    });
  }
  render() {
    return (
      <Button
        onClick={this.props.onClick}
        onMouseEnter={this.onMouseEnter}
        className={this.props.className}
        style={this.props.style}
        type='button'
      >
        <Emoji emoji={this.state.emoji} size={this.props.size} set={this.props.set} />
      </Button>
    );
  }
}

// export function DiscordEmojiButton({
//   emoji = 'grinning',
//   emojis = data.categories[0].emojis.slice(0, 83),
//   style = {},
//   className = 'discord-emoji-button',
//   size = 24,
//   set = 'emojione',
//   onClick,
//   ...rest
// }: DiscordEmojiButtonProps) {
//   const [emoji, setEmoji] = useState(emoji)
//   function onMouseEnter() {
//     setEmoji(emojis[Math.floor(Math.random() * emojis.length)]);
//   }
//   return (
//     <Button
//       onClick={onClick}
//       onMouseEnter={onMouseEnter}
//       className={className}
//       style={style}
//       type='button'
//     >
//       <Emoji emoji={emoji} size={size} set={set} />
//     </Button>
//   );
// }
