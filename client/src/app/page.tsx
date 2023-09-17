import Feature from "@/components/Feature";
import Slider from "@/components/Slider";
import Offer from "@/components/offer";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Slider />
      <Feature />
      <Offer />
    </main>
  );
}
