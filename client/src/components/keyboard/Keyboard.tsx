import './Keyboard.scss';
import KeyboardButton from "./keyboardButton/KeyboardButton.tsx";

interface KeyboardProps {
    onKeyPress: (letter: string) => void;
}

export default function Keyboard({onKeyPress}: KeyboardProps) {
    const rows = [
        ["Á", "É", "Í", "Ó", "Ö", "Ő", "Ú", "Ü", "Ű"],
        ["Q", "W", "E", "R", "T", "Z", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
        ["⌫", "Z", "X", "C", "V", "B", "N", "M", "➤"],
    ]

    return (
        <div className="keyboard-container">
            {rows.map((row, rowIndex) =>
                <div key={rowIndex} className="keyboard-row">
                    {row.map((letter) =>
                        <KeyboardButton
                            key={letter}
                            buttonKey={letter}
                            onClick={() => onKeyPress(letter)}
                        />
                    )}
                </div>
            )}
        </div>
    );
}
