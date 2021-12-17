import { css } from 'lit';

const componentStyles = css`
  :host {
    --drus-avatar-size: 18px;
  }

  :host([size='S']) {
    --drus-avatar-size: 14px;
  }

  :host([size='L']) {
    --drus-avatar-size: 24px;
  }

  :host([size='XL']) {
    --drus-avatar-size: 28px;
  }

  :host .wrapper {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--drus-avatar-size);
    height: var(--drus-avatar-size);
    border-radius: 50%;
    overflow: hidden;
    padding: calc(var(--drus-avatar-size) * 0.8);
    color: rgb(255, 255, 255);
    font-size: var(--drus-avatar-size);
    font-family: sans-serif;
    font-weight: 700;
    background-color: var(--drus-avatar-color, #000);
    user-select: none;
  }
`;

export default componentStyles;
