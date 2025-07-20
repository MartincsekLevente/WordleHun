import './KeyboardButton.scss';

interface KeyboardButtonProps {
    buttonKey: string,
    long?: boolean,
    onClick: () => void,
}

export default function KeyboardButton({buttonKey, long, onClick}: KeyboardButtonProps) {
    return (
        <div className={`keyboard-button-container ${long ? "long" : ""}`} onClick={onClick}>
            {buttonKey}
        </div>
    );
}
