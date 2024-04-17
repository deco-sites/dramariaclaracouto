import type { ImageWidget } from "apps/admin/widgets.ts";
// import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";
import Header from "./Header.tsx";
import Image from "apps/website/components/Image.tsx";

export interface Props {
  titleHeader?: string;
  title?: string;
  description?: string;
  benefits?: Array<{
    label: string;
    // icon?: AvailableIcons;
    description?: string;
    image?: ImageWidget;
  }>;
  layout?: {
    variation?: "Simple" | "With border" | "Color reverse";
    headerAlignment?: "center" | "left";
  };
  imageHeader?: ImageWidget;
}

export default function Benefits(
  props: Props,
) {
  const {
    titleHeader = "Saiba o que irá encontrar no seu tratamento personalizado:",
    title = "",
    description = "",
    benefits = [{
      icon: "Truck",
      label: "Minha experiência profissional:",
      description:
        "uma sólida trajetória na área de dermatologia. Empatia, conhecimento e expertise são o alicerce do meu atendimento. Minha prática é fundamentada em anos de aprendizado contínuo e atualizações constantes, garantindo os tratamentos mais avançados e eficazes para você.",
      image:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/7b3a9d75-57a5-43cf-a3c5-f689a997f24e",
    }, {
      icon: "Discount",
      label: "Dermatologia Integrativa:",
      description:
        "acredito que a beleza é muito mais do que apenas aparência. É uma expressão do seu bem-estar interno e externo. Ofereço tratamentos personalizados que abordam não apenas as questões dermatológicas, mas também promovem a saúde mental e a autoconfiança.",
      image:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/7b3a9d75-57a5-43cf-a3c5-f689a997f24e",
    }, {
      icon: "ArrowsPointingOut",
      label: "Resultados que elevam a Autoestima:",
      description:
        "meu foco é alcançar resultados que vão além da superfície da pele. Quero que você se sinta empoderada e confiante, com uma pele saudável que reflita a sua beleza única. Através de procedimentos cuidadosamente selecionados e orientações de cuidados com a pele",
      image:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/7b3a9d75-57a5-43cf-a3c5-f689a997f24e",
    }],
    layout,
    imageHeader =
      "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/7b3a9d75-57a5-43cf-a3c5-f689a997f2",
  } = props;

  const listOfBenefits = benefits.map((benefit, index) => {
    const showDivider = index < benefits.length - 1;
    const reverse = layout?.variation === "Color reverse";
    const benefitLayout = !layout?.variation || layout?.variation === "Simple"
      ? "tiled"
      : "piledup";

    return (
      <div
        class={`${
          reverse ? "bg-[#DBCABE] text-[#383838] p-4 lg:px-8 lg:py-4" : ""
        } flex items-center justify-center flex-col bg-[#DBCABE] py-[25px] min-h-[380px] rounded-[14px] text-left w-[90%] container ${
          benefitLayout == "piledup"
            ? "flex-col items-center text-center text-[#383838]"
            : ""
        } ${showDivider && benefitLayout !== "piledup" ? "" : ""} ${
          showDivider ? " " : ""
        } ${showDivider && !reverse ? "" : ""}`}
      >
        <div class="w-[80%] mx-auto flex flex-col items-start">
          <div class="flex bg-[#FCFAFA] rounded-[50%] p-[10px] mx-[10px] mb-[15px]">
            <Image
              src={benefit.image}
              width={33}
              height={33}
              decoding="async"
              loading="lazy"
            />
          </div>
          <div class=" flex flex-col w-[100%] benefits-child">
            <div
              class={`text-base leading-7 text-[#1E1A1A] font-body text-[22px] font-[700] block mb-[15px] ${
                reverse ? "text-base-100" : "text-[#1E1A1A]"
              }`}
            >
              {benefit.label}
            </div>
            {
              <p
                class={`text-sm leading-5 text-[#1E1A1A] ${
                  reverse ? "text-base-100" : "text-[#1E1A1A]"
                } ${benefitLayout == "piledup" ? "hidden lg:block" : ""}`}
              >
                {benefit.description}
              </p>
            }
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      {!layout?.variation || layout?.variation === "Simple"
        ? (
          <div class="w-full px-4 py-8 flex flex-col  lg:py-10 lg:px-0 bg-[#353535]">
            <div class="header-description flex justify-center flex-col items-center">
              <Image
                src={imageHeader}
                width={60}
                height={60}
                decoding="async"
                loading="lazy"
              />
              <h3 class="font-display text-[50px] font-[700] block w-[53%] mx-auto text-[#EAEBE6] text-center max-[1020px]:w-[95%] max-[1020px]:text-[30px]">
                {titleHeader}
              </h3>
            </div>
            {/* <Header
              title={title}
              description={description}
              alignment={layout?.headerAlignment || "center"}
            /> */}
            <div class="w-full flex justify-center container mt-[20px]">
              <div class="flex flex-row gap-4 lg:gap-8 w-full lg:grid grid-flow-col auto-cols-fr text-[#383838] items-center max-[1020px]:flex-col">
                {listOfBenefits}
              </div>
            </div>
          </div>
        )
        : ""}
      {layout?.variation === "With border" && (
        <div class="w-full container flex flex-col px-4 py-8 gap-8 lg:gap-10 lg:py-10 lg:px-0">
          {/* <Header
            title={title}
            description={description}
            alignment={layout?.headerAlignment || "center"}
          /> */}
          <div class="w-full flex justify-center">
            <div class="grid grid-cols-2 gap-4 w-full py-6 px-4 border border-base-300 lg:gap-8 lg:grid-flow-col lg:auto-cols-fr lg:p-10">
              {listOfBenefits}
            </div>
          </div>
        </div>
      )}
      {layout?.variation === "Color reverse" && (
        <div class="w-full container flex flex-col px-4 py-8 gap-8 lg:gap-10 lg:py-10 lg:px-0">
          {/* <Header
            title={title}
            description={description}
            alignment={layout?.headerAlignment || "center"}
          /> */}
          <div class="w-full flex justify-center">
            <div class="grid grid-cols-2 gap-4 w-full lg:gap-8 lg:grid-flow-col lg:auto-cols-fr">
              {listOfBenefits}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
