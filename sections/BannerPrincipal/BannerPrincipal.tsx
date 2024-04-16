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
   * @description Link Botão - Banner Principal
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

  console.log('banner', banner.srcDesktop)

  return (
    <section class="flex items-start justify-around w-[80%] mx-auto max-[1440px] xl:mb-[110px] 2xl:mb-[145px] bg-[#353535] max-[1020px]:flex-col max-[1020px]:mb-[15px] max-[1020px]:w-[95%] max-[1020px]:mx-auto">
      <div class="w-[40%] mt-[10%] max-[1020px]:w-[72%] max-[1020px]:mt-[0] max-[1020px]:z-[2]">
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
          class="bg-[#D5C9BD] w-[65%] text-[#1E1A1A] px-[15px] py-[15px] mt-[10px] block text-center font-body text-[15px] font-[400] rounded-[8px] max-[1020px]:text-[13px]"
        >
          {textButton}
        </a>
      </div>
      <div class="w-[60%] relative max-[1020px]:z-1">
        <Picture class="">
          <Source
            src={banner.srcDesktop}
            height={500}
          />
          <img
            class="w-[135%] absolute top-[-80px] right-[-150px] block max-w-[1003px] 2xl:w-[125%] 2xl:top-[-100px] max-[1020px]:w-[100%] max-[1020px]:top-[-162px] max-[1020px]:right-[-158px] max-[1366px]:top-[50px]"
            src={banner.srcDesktop}
            decoding="async"
            loading="lazy"
          />
        </Picture>
      </div>
    </section>
  )

}