import type { HTMLWidget } from "apps/admin/widgets.ts";
import type { ImageWidget } from "apps/admin/widgets.ts";
import { Picture, Source } from "apps/website/components/Picture.tsx";

export interface BannerMainAtendimento {
  srcDesktop?: ImageWidget;
}

export interface Props {
  text: HTMLWidget;
  containerWidth?: number;
  imagem?: BannerMainAtendimento[];
}

const DEFAULT_PROPS: Props = {
  text: `MEU ATENDIMENTO
    Você merece se sentir confiante, feliz e radiante em 
    sua própria pele. E eu estou aqui para guiá-la nessa jornada 
    de descoberta e cuidado, onde a beleza e o bem-estar se 
    encontram.
    
    Acredito que a beleza vai além da superfície - ela está 
    profundamente ligada ao seu bem-estar emocional e 
    mental. 
    
    Entendo que cada paciente é única, com necessidades e 
    objetivos individuais. Não se trata apenas de resolver queixas 
    relacionadas à pele, cabelos e unhas, mas de elevar a 
    autoestima e melhorar a qualidade de vida. 
    
    Nós sabemos o quanto a autoestima impacta em nossas 
    atitudes e até mesmo nas relações interpessoais e é por 
    isso que não se trata apenas de estética.`,
  imagem: [
    {
      srcDesktop:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/2291/986b61d4-3847-4867-93c8-b550cb459cc7",
    },
  ],
};

export default function RichText(props: Props) {
  const {
    text,
    imagem,
    containerWidth,
  } = { ...DEFAULT_PROPS, ...props };
  return (
    <div class="flex items-center bg-[#EAEBE6]" id="meu-atendimento">
      <div class="container flex items-center py-[40px] max-[1020px]:flex-col max-[1020px]:pt-[0]">
        <Picture class="">
          <Source
            src={imagem[0].srcDesktop}
            height={600}
            width={404}
          />
          <img
            class="max-[1020px]:w-full"
            src={imagem[0].srcDesktop}
            decoding="async"
            loading="lazy"
          />
        </Picture>
        <div
          dangerouslySetInnerHTML={{ __html: text }}
          style={{
            maxWidth: containerWidth ? containerWidth : 1280,
            margin: "50px auto",
          }}
          class="flex flex-col atendimento w-[55%] text-[#353535] max-[1020px]:w-[90%]"
        >
        </div>
      </div>
    </div>
  );
}
