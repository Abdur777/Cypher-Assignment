import Button from "./Button";
import ThemeButton from "./ThemeButton";

export default function TopBar(){
    return <nav class="flex justify-between">
        <Button/>
        <ThemeButton/>
    </nav>
}