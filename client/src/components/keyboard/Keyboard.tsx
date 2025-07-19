import './Keyboard.scss';
import KeyboardButton from "./keyboardButton/KeyboardButton.tsx";

export default function Keyboard() {
    return (
        <div className="keyboard-container">
            <div className="keyboard-row">
                <KeyboardButton buttonKey={"Á"}></KeyboardButton>
                <KeyboardButton buttonKey={"É"}></KeyboardButton>
                <KeyboardButton buttonKey={"Í"}></KeyboardButton>
                <KeyboardButton buttonKey={"Ó"}></KeyboardButton>
                <KeyboardButton buttonKey={"Ö"}></KeyboardButton>
                <KeyboardButton buttonKey={"Ő"}></KeyboardButton>
                <KeyboardButton buttonKey={"Ú"}></KeyboardButton>
                <KeyboardButton buttonKey={"Ü"}></KeyboardButton>
                <KeyboardButton buttonKey={"Ű"}></KeyboardButton>
            </div>
            <div className="keyboard-row">
                <KeyboardButton buttonKey={"Q"}></KeyboardButton>
                <KeyboardButton buttonKey={"W"}></KeyboardButton>
                <KeyboardButton buttonKey={"E"}></KeyboardButton>
                <KeyboardButton buttonKey={"R"}></KeyboardButton>
                <KeyboardButton buttonKey={"T"}></KeyboardButton>
                <KeyboardButton buttonKey={"Z"}></KeyboardButton>
                <KeyboardButton buttonKey={"U"}></KeyboardButton>
                <KeyboardButton buttonKey={"I"}></KeyboardButton>
                <KeyboardButton buttonKey={"O"}></KeyboardButton>
                <KeyboardButton buttonKey={"P"}></KeyboardButton>
            </div>
            <div className="keyboard-row">
                <KeyboardButton buttonKey={"A"}></KeyboardButton>
                <KeyboardButton buttonKey={"S"}></KeyboardButton>
                <KeyboardButton buttonKey={"D"}></KeyboardButton>
                <KeyboardButton buttonKey={"F"}></KeyboardButton>
                <KeyboardButton buttonKey={"G"}></KeyboardButton>
                <KeyboardButton buttonKey={"H"}></KeyboardButton>
                <KeyboardButton buttonKey={"J"}></KeyboardButton>
                <KeyboardButton buttonKey={"K"}></KeyboardButton>
                <KeyboardButton buttonKey={"L"}></KeyboardButton>
            </div>
            <div className="keyboard-row">
                <KeyboardButton buttonKey={"⌫"} long={true}></KeyboardButton>
                <KeyboardButton buttonKey={"Y"}></KeyboardButton>
                <KeyboardButton buttonKey={"X"}></KeyboardButton>
                <KeyboardButton buttonKey={"C"}></KeyboardButton>
                <KeyboardButton buttonKey={"V"}></KeyboardButton>
                <KeyboardButton buttonKey={"B"}></KeyboardButton>
                <KeyboardButton buttonKey={"N"}></KeyboardButton>
                <KeyboardButton buttonKey={"M"}></KeyboardButton>
                <KeyboardButton buttonKey={"➤"} long={true}></KeyboardButton>
            </div>
        </div>
    );
}
