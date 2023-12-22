import ContainerMain from "./ContainerMain";
import TicketContainer from "./TicketContainer";

export default function MainContent(){
    return <main class="bg-[#F4F5F8] h-auto">
        <section class="grid grid-cols-5 gap-[15px] pt-2.5 pb-2.5 ml-[21.594px] mr-[21.609px] min-h-[92vh] box-border scroll-smooth">
            <div>
                <ContainerMain/>
                <div class="flex flex-col gap-[0.5rem]">
                    <TicketContainer/>
                    <TicketContainer/>
                    <TicketContainer/>
                </div>
            </div>
            <div>
                <ContainerMain/>
                <div class="flex flex-col gap-[0.5rem]">
                    <TicketContainer/>
                </div>
            </div>
            <div>
                <ContainerMain/>
                <div class="flex flex-col gap-[0.5rem]">
                    <TicketContainer/>
                </div>
            </div>
            <div>
                <ContainerMain/>
                <div class="flex flex-col gap-[0.5rem]">
                    <TicketContainer/>
                </div>
            </div>
            <div>
                <ContainerMain/>
                <div class="flex flex-col gap-[0.5rem]">
                    <TicketContainer/>
                </div>
            </div>
        </section>
    </main>
}