import type { ImageWidget } from "apps/admin/widgets.ts";
// import Icon, { AvailableIcons } from "$store/components/ui/Icon.tsx";
import Header from "./Header.tsx";
import Image from "apps/website/components/Image.tsx";

export interface Props {
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
}

export default function Benefits(
  props: Props,
) {
  const {
    title = "",
    description = "",
    benefits = [{
      icon: "Truck",
      label: "Entrega em todo Brasil",
      description: "Consulte o prazo no fechamento da compra.",
      image:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/7b3a9d75-57a5-43cf-a3c5-f689a997f24e",
    }, {
      icon: "Discount",
      label: "15% na primeira compra",
      description: "Aplicado direto na sacola de compras.",
      image:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/7b3a9d75-57a5-43cf-a3c5-f689a997f24e",
    }, {
      icon: "ArrowsPointingOut",
      label: "Devolução grátis",
      description: "Veja as condições para devolver seu produto.",
      image:
        "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/7b3a9d75-57a5-43cf-a3c5-f689a997f24e",
    }],
    layout,
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
          reverse ? "bg-primary text-[#383838] p-4 lg:px-8 lg:py-4" : ""
        } flex items-center justify-center max-[1020px]:w-full max-[1020px]:justify-between max-[1020px]:border-[#383838] max-[1020px]:border-solid max-[1020px]:border-b max-[1020px]:pb-4${
          benefitLayout == "piledup"
            ? "flex-col items-center text-center text-[#383838]"
            : ""
        } ${showDivider && benefitLayout !== "piledup" ? "" : ""} ${
          showDivider ? "pb-4 " : ""
        } ${showDivider && !reverse ? "lg:pb-0" : ""}`}
      >
        <div class="flex bg-[#FCFAFA] rounded-[50%] p-[10px] mx-[10px]">
          {
            /* <Icon
            id={benefit.icon}
            class={reverse ? "text-base-100" : "text-primary"}
            width={33}
            height={33}
            strokeWidth={0.01}
            fill="#383838"
          /> */
          }
          <Image
            src={benefit.image}
            width={33}
            height={33}
            decoding="async"
            loading="lazy"
          />
        </div>
        <div class=" flex flex-col w-[50%] benefits-child max-[1020px]:w-[100%]">
          <div
            class={`text-base leading-7 text-[#383838] font-body text-[22px] ${
              reverse ? "text-base-100" : "text-[#383838]"
            }`}
          >
            {benefit.label}
          </div>
          {
            /* <p
            class={`text-sm leading-5 text-[#383838] ${
              reverse ? "text-base-100" : "text-neutral"
            } ${benefitLayout == "piledup" ? "hidden lg:block" : ""}`}
          >
            {benefit.description}
          </p> */
          }
        </div>
      </div>
    );
  });

  return (
    <>
      {!layout?.variation || layout?.variation === "Simple"
        ? (
          <div class="w-full px-4 py-8 flex flex-row  lg:py-10 lg:px-0 bg-gradient-to-r from-[#EAEBE6] to-[#DACABE] max-[1020px]:flex-col">
            <Header
              title={title}
              description={description}
              alignment={layout?.headerAlignment || "center"}
            />
            <div class="w-full flex justify-center container">
              <div class="flex flex-row gap-4 lg:gap-8 w-full lg:grid grid-flow-col auto-cols-fr text-[#383838] items-center max-[1020px]:flex-col">
                {listOfBenefits}
              </div>
            </div>
          </div>
        )
        : ""}
    </>
  );
}
