import { useState } from "react";

export function useGameController() {
    const [input, setInput] = useState<string[]>([]);

    function handleKeyPress(letter: string) {
        setInput((prev) => [...prev, letter]);
    }

    return {
        input,
        handleKeyPress,
    };
}
