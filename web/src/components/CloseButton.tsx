import { Popover, } from "@headlessui/react"
import { X } from "@phosphor-icons/react"


export function CloseButton() {
    return (
        <Popover.Button className="top-5 right-5 absolute text-zinc-400 hover:text-zinc-100" title="Fechar formulario de feedback" >
            <X  className="w-4 h-4 "/>
        </Popover.Button>
    )
}