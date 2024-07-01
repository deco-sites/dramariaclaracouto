import { Picture, Source } from "apps/website/components/Picture.tsx"
import type { ImageWidget } from "apps/admin/widgets.ts";

export interface BannerPrincipal {
  srcDesktop?: ImageWidget;
}

export interface Props {
  /**
   * @description Imagem do Banner
  */
  banner: BannerPrincipal;
  /**
   * @description Título h1 - Banner Principal
  */
  titleH1: string;
  /**
   * @description Texto de apoio - Banner Principal
  */
  textBanner: string;
  /**
   * @description Texto Botão - Banner Principal
  */
  textButton: string;
  /**
   * @description Link Botão - Banner Principal 1
  */
  linkButton: string;
}

export default function bannerMainNew( props: Props ) {
  const {
    banner = { srcDesktop: 'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/7b3a9d75-57a5-43cf-a3c5-f689a997f24e' },
    titleH1 = '',
    textBanner = '',
    textButton = '',
    linkButton = ''
  } = { ...props }


  return (
    <section class="flex bg-[#353535] ">
      <div class="container flex items-start justify-around w-[80%] max-[1020px]:flex-col mx-auto max-[1440px] xl:mb-[110px] 2xl:mb-[145px] max-[1020px]:mb-[20px] max-[1020px]:w-[95%] max-[1020px]:mx-auto max-[1020px]:justify-start lg:pt-[40px] min-[1440px]:mb-[25px]">
        <div class="w-[40%] mt-[10%] max-[1020px]:w-full max-[1020px]:mt-[0] max-[1020px]:z-[2] max-[1020px]:order-2">
          <h1 class="font-display font-[900] text-[45px] leading-[50px] text-[#EAEBE6] block mb-[10px] max-[1020px]:text-[30px] max-[150px]:leading-[25px] max-[1020px]:mt-[0]">
            {titleH1}
          </h1>
          <p class="font-body text-[30px] font-[300] leading-[40px] text-[#EAEBE6] block mb-[10px] max-[1020px]:text-[20px]">
            {textBanner}
          </p>
          <a
            href={linkButton}
            target="_blank"
            rel="noopener noreferrer"
            class="bg-[#D5C9BD] w-[65%] text-[#1E1A1A] px-[15px] py-[15px] mt-[10px] block text-center font-body text-[15px] font-[400] rounded-[8px] max-[1020px]:text-[13px] primary-button-home max-[1020px]:ml-0"
          >
            {textButton}
          </a>
        </div>
        <div class="w-[60%] relative max-[1020px]:z-1 max-[1020px]:order-1 max-[1020px]:relative max-[1020px]:w-full">
          <Picture class="">
            <Source
              media="(min-width: 768px)"
              src={banner.srcDesktop}
              height={500}
            />
            <img
              class="w-[135%] absolute top-[-80px] right-[-150px] block max-w-[1003px] 2xl:w-[94%] 2xl:top-[-100px] max-[1020px]:w-[150%] max-[1020px]:top-[0] max-[1020px]:right-0 max-[1020px]:left-[-186px] max-[1366px]:top-[-35px] max-[1020px]:relative min-[1399px]:w-[101%] min-[1399px]:top-0 max-[1370px]:w-[121%]"
              src={banner.srcDesktop}
              decoding="async"
              loading="lazy"
            />
          </Picture>
        </div>
      </div>
    </section>
  )

}