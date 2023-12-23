import Button from "./Button";
import ThemeButton from "./ThemeButton";

export default function TopBar(){
    return <section class="flex justify-center items-center h-[8vh] bg-[#ffff]">
        <nav class="w-[97%] my-0 mx-auto flex justify-between items-center">
            <Button/>
            <ThemeButton/>
        </nav>
    </section>
}
