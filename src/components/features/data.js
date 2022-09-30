import { FaAccessibleIcon, FaGg } from "react-icons/fa";
import { SiDatabricks } from "react-icons/si";
import { MdConnectWithoutContact } from "react-icons/md";

export const FeatureList = [
  {
    id: 1,
    icon: <FaAccessibleIcon color="#0a1930" size={22} />,
    heading: "Trendy Cars",
    text: "As a company with diverse taste, our automobile collection includes the best and most durable cars that will serve you excellently well.",
  },
  {
    id: 2,
    icon: <SiDatabricks color="#0a1930" size={22} />,
    heading: "Affordable Prices",
    text: "Taking into consideration the present economic climate in Ghana, our prices have been reviewed to be quite affordable for an average earning citizen.",
  },
  {
    id: 3,
    icon: <MdConnectWithoutContact color="#0a1930" size={22} />,
    heading: "Mobile Engagement",
    text: "Whether it is through calls via mail or visiting our office, we are always available and ready to engage with you. Our website also contains a knowledgebase of frequently asked questions",
  },
  {
    id: 4,
    icon: <FaGg color="#0a1930" size={22} />,
    heading: "Customer Friendly",
    text: "We operate with a mindset of the needs of customers and everything we do is tilted towards your satisfaction.",
  },
];
