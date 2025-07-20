import { useState } from "react";

export function useGameController() {
    const [input, setInput] = useState<string[]>([]);

    function handleKeyPress(letter: string) {
        if (letter === "Töröl") {
            setInput((prev) => [...prev.slice(0, -1)]);
        } else if (input.length < 5) {
            setInput((prev) => [...prev, letter]);
        }
    }

    return {
        input,
        handleKeyPress,
    };
}
