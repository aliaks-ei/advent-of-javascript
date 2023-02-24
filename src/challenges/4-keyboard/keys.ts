export type Key = {
  name: string;
  code: string;
  isSpecial?: boolean;
};

export const keyboardKeysByRows: Key[][] = [
  [
    { name: "`", code: "Backquote" },
    { name: "1", code: "Digit1" },
    { name: "2", code: "Digit2" },
    { name: "3", code: "Digit3" },
    { name: "4", code: "Digit4" },
    { name: "5", code: "Digit5" },
    { name: "6", code: "Digit6" },
    { name: "7", code: "Digit7" },
    { name: "8", code: "Digit8" },
    { name: "9", code: "Digit9" },
    { name: "0", code: "Digit0" },
    { name: "-", code: "Minus" },
    { name: "=", code: "Equal" },
    { name: "Del", code: "Backspace", isSpecial: true },
  ],
  [
    { name: "Tab", code: "Tab", isSpecial: true },
    { name: "q", code: "KeyQ" },
    { name: "w", code: "KeyW" },
    { name: "e", code: "KeyE" },
    { name: "r", code: "KeyR" },
    { name: "t", code: "KeyT" },
    { name: "y", code: "KeyY" },
    { name: "u", code: "KeyU" },
    { name: "i", code: "KeyI" },
    { name: "o", code: "KeyO" },
    { name: "p", code: "KeyP" },
    { name: "[", code: "BracketLeft" },
    { name: "]", code: "BracketRight" },
    { name: "\\", code: "Backslash" },
  ],
  [
    { name: "Caps", code: "CapsLock", isSpecial: true },
    { name: "a", code: "KeyA" },
    { name: "s", code: "KeyS" },
    { name: "d", code: "KeyD" },
    { name: "f", code: "KeyF" },
    { name: "g", code: "KeyG" },
    { name: "h", code: "KeyH" },
    { name: "j", code: "KeyJ" },
    { name: "k", code: "KeyK" },
    { name: "l", code: "KeyL" },
    { name: ";", code: "Semicolon" },
    { name: "'", code: "Quote" },
    { name: "Enter", code: "Enter", isSpecial: true },
  ],
  [
    { name: "Shift", code: "ShiftLeft", isSpecial: true },
    { name: "z", code: "KeyZ" },
    { name: "x", code: "KeyX" },
    { name: "c", code: "KeyC" },
    { name: "v", code: "KeyV" },
    { name: "b", code: "KeyB" },
    { name: "n", code: "KeyN" },
    { name: "m", code: "KeyM" },
    { name: ",", code: "Comma" },
    { name: ".", code: "Period" },
    { name: "/", code: "Slash" },
    { name: "Shift", code: "ShiftRight", isSpecial: true },
  ],
];

export const allKeyboardKeys: Key[] = keyboardKeysByRows.flat();

// Only not special keys will be triggered
export const participatingKeys: Key[] = allKeyboardKeys.filter(
  (key) => !key.isSpecial
);
