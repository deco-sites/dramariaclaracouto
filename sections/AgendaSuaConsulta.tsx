import type { HTMLWidget } from "apps/admin/widgets.ts";

export interface Props {
  headLine?: HTMLWidget;
  midLine?: HTMLWidget;
  baseLine?: HTMLWidget;
  buttonContent?: HTMLWidget
}

const DEFAULT_HEAD_LINE = '<h1 class="font-display"><span class="text-[#DBCABE]">Cuidar da sua pele</span> é um <span class="text-[#DBCABE]">investimento</span> em sua felicidade.</h1>';

const DEFAULT_MID_LINE = '<h3 class="font-display">Agende uma consulta para iniciar a sua jornada em direção a uma pele saudável e um bem-estar duradouro.</h3>';

const DEFAULT_BASE_LINE = '<h4 class="font-display">Lembre-se: você é linda e merece o melhor cuidado possível.</h4>';

const DEFAULT_BUTTON_CONTENT = '<a href="#" target="_blank" class="font-display mx-auto my-[25px] text-center w-[25%] block text-[20px] p-[15px] rounded-[8px] bg-gradient-to-r from-[#DBCABE] to-[#A58C7B] shadow-lg text-[#FFFFFF] max-[1020px]:w-[80%]">AGENDE SUA CONSULTA!</a>';

export default function RichText(
  { headLine = DEFAULT_HEAD_LINE, midLine = DEFAULT_MID_LINE, baseLine = DEFAULT_BASE_LINE, buttonContent = DEFAULT_BUTTON_CONTENT}: Props,
) {
  return (

    <div
      style={{
        maxWidth: 1440,
        margin: "0 auto",
      }}
    >

      <div 
        dangerouslySetInnerHTML={{ __html: headLine }}
        class="home-head-line__contact font-display text-[50px] w-[35%] mx-auto font-[700] text-[#EAEBE6] text-center max-[1020px]:w-[95%] max-[1020px]:text-[30px]"
      >
      </div>

      <div 
        dangerouslySetInnerHTML={{ __html: midLine }}
        class="home-mid-line__contact font-display text-[26px] w-[35%] mx-auto font-[500] text-[#E9E9E9] text-center block my-[20px] max-[1020px]:w-[95%] max-[1020px]:text-[16px]"
      >
      </div>

      <div 
        dangerouslySetInnerHTML={{ __html: baseLine }}
        class="home-mid-line__contact font-display text-[26px] w-[35%] mx-auto font-[100] text-[#E9E9E9] text-center max-[1020px]:w-[95%] max-[1020px]:text-[16px]"
      >
      </div>
      
      <div 
        dangerouslySetInnerHTML={{ __html: buttonContent }}
        class="home-button-contact__contact"
      >
      </div>
    </div>
  );
}
