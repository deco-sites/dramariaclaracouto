import type { ImageWidget, HTMLWidget } from "apps/admin/widgets.ts";
import Image from "apps/website/components/Image.tsx";

interface Props {
    title?: string
    image?: ImageWidget
    contentTop?: HTMLWidget
    /**
     * @description Texto Botão - Banner Principal
     */
    textButton: string;
    /**
     * @description Link Botão - Banner Principal
     */
    linkButton: string;
    contentLast?: HTMLWidget
}

export default function CapturePage({
    title = 'Botox - Quais os benefícios do Botox?',
    image = 'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/6165/e61c427c-9a90-4101-bb5c-4f79d111d59e',
    contentTop = 'Quando utilizada em doses controladas e aplicada em pontos estratégicos do rosto, essa substância revela-se um aliado poderoso na redução de linhas de expressão e rugas. Sua ação visa relaxar temporariamente os músculos responsáveis por essas marcas, proporcionando uma aparência mais suave, descansada e jovial.',
    linkButton = 'https://wa.me/5511933058210',
    textButton = 'Quero agendar minha consulta!',
    contentLast = '<h2>Benefícios adicionais</h2> <p>Além de seus efeitos já conhecidos, a toxina botulínica oferece outros benefícios, como a prevenção da formação de novas rugas (Botox Preventivo) e a promoção de uma pele mais saudável e radiante (Skin Quality). Inclusive, esse impacto positivo na qualidade da pele, especialmente no que diz respeito à redução de poros e controle da oleosidade, tem sido reconhecido e amplamente apreciado.</p>'
}: Props) {
    
    return (
        <section class="pt-20">
            <div class="container flex justify-between items-center">
                <div class="w-1/2">
                    <h1 class="text-5xl font-bold text-[#EAEBE6]">{title}</h1>
                    <p class="font-body text-[30px] font-[300] leading-[40px] text-[#EAEBE6] my-7 block max-[1020px]:text-[20px]">{contentTop}</p>
                    <a
                        href={linkButton}
                        target="_blank"
                        rel="noopener noreferrer"
                        class="bg-[#D5C9BD] primary-button-home w-[65%] text-[#1E1A1A] px-[15px] py-[15px] mt-[10px] block text-center font-body ml-0 text-[15px] font-[400] rounded-[8px] max-[1020px]:text-[13px]"
                    >
                        {textButton}
                    </a>
                </div>
                <div class="w-1/2 rounded-md">
                    <Image
                        class="mx-auto w-full p-4 rounded-md block"
                        src={image}
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </section>
    )
}