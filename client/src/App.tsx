import './App.scss'
import Background from "./components/background/Background.tsx";
import GamePage from "./pages/game/GamePage.tsx";

export default function App() {
    return (
        <>
            <Background></Background>
            <GamePage></GamePage>
        </>
    );
}
