import './App.scss'
import Background from "./components/background/Background.tsx";
import GamePage from "./pages/game/GamePage.tsx";
import Header from "./components/header/Header.tsx";

export default function App() {
    return (
        <>
            <Background></Background>
            <Header></Header>
            <GamePage></GamePage>
        </>
    );
}
