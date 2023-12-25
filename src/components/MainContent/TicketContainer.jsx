export default function TicketContainer({ ticket }){
    return <div class="bg-[#ffff] flex flex-col gap-2 py-[0.8rem] px-[1.2rem] w-[100%] rounded-md shadow-[0px_0px_8px_0px_#0000001a] border-[1px] border-solid border-[#e6e7eb]">
            <div class="flex justify-between items-center w-[100%]">
                <span class="text-[1rem] text-[#8D8D8D]">{ticket.id}</span>
                </div>
                <div class="flex items-start gap-[5px]">
                    <div>
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M7.5 4.21l0 .01"></path>
                            <path d="M4.21 7.5l0 .01"></path>
                            <path d="M3 12l0 .01"></path>
                            <path d="M4.21 16.5l0 .01"></path>
                            <path d="M7.5 19.79l0 .01"></path>
                            <path d="M12 21l0 .01"></path>
                            <path d="M16.5 19.79l0 .01"></path>
                            <path d="M19.79 16.5l0 .01"></path>
                            <path d="M21 12l0 .01"></path>
                            <path d="M19.79 7.5l0 .01"></path>
                            <path d="M16.5 4.21l0 .01"></path>
                            <path d="M12 3l0 .01"></path>
                            </svg>
                            </div>
                            <p class="text-[1rem] text-[#373737] font-medium leading-[102%]">{ticket.title}</p>
                            </div>
                            <div class="flex items-center gap-2 mt-[3px]">
                            <div class="border-[1px] border-solid border-[#e6e7eb] rounded-[3px] p-[2px]">
                                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 20h.01"></path>
                                    <path d="M7 20v-4"></path>
                                    <path d="M12 20v-8"></path>
                                    </svg>
                                    </div>
                                <div class="text-[0.85rem] py-[1px] px-[0px]">
                                    <div class="flex gap-[5px] items-center border-[1px] border-solid border-[#e6e7eb] rounded-[3px] py-[1px] px-[5px]">
                                        <div>
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 256 256" class="icon" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M232,128A104,104,0,1,1,128,24,104.13,104.13,0,0,1,232,128Z"></path>
                                            </svg>
                                            </div>
                                            <span class="text-[0.85rem] text-[#8D8D8D]">{ticket.tag}</span>
                                            </div>
                                            </div>
                                            </div>
                                            </div>
                                                        
}