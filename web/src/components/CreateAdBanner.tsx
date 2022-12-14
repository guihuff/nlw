import { MagnifyingGlassPlus } from "phosphor-react";
import * as Dialog from '@radix-ui/react-dialog';


export function CreateAdBanner() {
  return (
    <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg overflow-hidden mt-8">
      <div className="bg-[#2A2634] px-8 py-6 flex flex-col sm:flex-row justify-between">
        <div>
          <strong className="text-2xl text-white font-black block"> 
            Não encontrou seu duo?
          </strong>
          <span className="text-zinc-400">
            Publique um anúncio para encontrar novos players!
          </span>
        </div>
        <Dialog.Trigger className="py-3 px-4 bg-violet-400 hover:bg-purple-600 text-white rounded flex items-center gap-3 w-56 self-end sm:my-0 my-4">
          <MagnifyingGlassPlus size={24} />
          Publicar anúncio
        </Dialog.Trigger>
      </div>
    </div>
  )
}