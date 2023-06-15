import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/assets/images/benefit-one.png";
import benefitTwoImg from "../public/assets/images/benefit-two.png";

const benefitOne = {
  title: "Ablauf des Immobilienerwerbes",
  desc: "Text Text Text.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Vorbereitung",
      desc: "text text text.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Notarielle Beglaubigung",
      desc: "text text text.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "èbergabe des Objektes",
      desc: "text text.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
