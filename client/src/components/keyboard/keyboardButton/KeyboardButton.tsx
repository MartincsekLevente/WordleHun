import './KeyboardButton.scss';

interface KeyboardButtonProps {
    buttonKey: string,
    long?: boolean
}

export default function KeyboardButton({buttonKey, long = false}: KeyboardButtonProps) {
    return (
        <div className={`keyboard-button-container ${long ? "long" : ""}`}>
            {buttonKey}
        </div>
    );
}
