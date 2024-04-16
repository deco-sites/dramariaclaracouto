import type { HTMLWidget } from "apps/admin/widgets.ts";

export interface MapsContent {
    /**
     * @description Link Iframe Google Maps
    */
    linkIframe?: string;
     /**
     * @description Dias de Funcionamento
    */
    funcionalDay?: string;
     /**
     * @description Horário de Funcionamento
    */
    timeDay?: string;
    /**
     * @description Endereço
    */
    addressInfo?: string;
    /**
     * @description Telefone para contacto
    */
    numberContact?: HTMLWidget
}

export interface Props {
  mapsContent?: MapsContent[];
}

const DEFAULT_PROPS = {
    mapsContent: [
        {
            linkIframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.627225387751!2d-46.64589272456288!3d-23.54590637881036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce584d956dbb39%3A0x24b586fc829027dc!2sUse%20Org%C3%A2nico%20%7C%20Aromaterapia%20e%20Cosm%C3%A9ticos%20Veganos%2C%20Naturais%20e%20Org%C3%A2nicos!5e0!3m2!1spt-BR!2sbr!4v1706989077921!5m2!1spt-BR!2sbr",
            funcionalDay: "Segunda à sexta-feira",
            timeDay: "08:00h - 22:00h",
            addressInfo: "Av. xxxxxx, 754 - Sala 621 - MT, CEP Localizado em: FICTICIO",
            numberContact: "<a href='tel:+5571999999999'>Celular: (xx) xxxxxxxxx</a>"
        },
        {
          linkIframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58522.03803015663!2d-46.68451753299137!3d-23.54590093284803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5912b4e8f6dd%3A0xf3b910ad3b0e5bdb!2sCasas%20Bahia!5e0!3m2!1spt-BR!2sbr!4v1706990020202!5m2!1spt-BR!2sbr",
          funcionalDay: "Segunda à sexta-feira",
          timeDay: "08:00h - 22:00h",
          addressInfo: "Av. xxxxxx, 754 - Sala 621 - MT, CEP Localizado em: FICTICIO",
          numberContact: "<a href='tel:+5571999999999'>Celular: (xx) xxxxxxxxx</a>"
      }
    ]
}


export default function RichText(props: Props) {
  const {
    mapsContent
  } = { ...DEFAULT_PROPS, ...props}

  const mappingData = mapsContent.map((mapa) => {

    return (
      <div class="flex flex-col text-left w-[35%] max-[1020px]:w-[80%] my-[30px] text-[#EAEBE6]">
        {/* <iframe 
          src={mapa.linkIframe} 
          width="400" 
          height="300" 
          style="border:0;" 
          allowfullscreen="" 
          loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"
          class="mb-[10px] max-[1020px]:w-[100%]"
          >
        </iframe> */}
        <address class="flex flex-col address-text">
          <p><b>{mapa.funcionalDay}</b></p>
          <p>{mapa.timeDay}</p>
          <p>{mapa.addressInfo}</p>
          <p
            dangerouslySetInnerHTML={{ __html: mapa.numberContact }}
          ></p>
        </address>
      </div>
    )

  })

  return (

    <div
      class="container mx-auto flex items-center justify-around flex-wrap max-[1020px]:flex-col"
    >
      <h2 class="w-[85%] mx-auto text-[30px] font-bold text-[#EAEBE6]">Endereços:</h2>
      {mappingData}
    </div>
  );
}
