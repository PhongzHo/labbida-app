import { logotext, aramith, helix, pba, logoAlliex } from "../assets";

const Ticker = () => {
    return (
        <div className=" bg-black px-6 pt-4 flex space-x-28 group">
            <div className="flex animate-loop-scroll space-x-28 group-hover:paused">
                <img loading="lazy" src={aramith} class="max-w-none" alt="logo-aramith-billiards" />
                <img loading="lazy" src={helix} class="max-w-none" alt="logo-helix-billiards" />
                <img loading="lazy" src={pba} class="max-w-none" alt="logo-pba-billiards" />
                <img loading="lazy" src={logoAlliex} class="max-w-none" alt="logo-Alliex-billiards" />
                <img loading="lazy" src={logotext} class="max-w-none" alt="logo-lab-billiards" />
            </div>
            <div className="flex animate-loop-scroll space-x-28 group-hover:paused">
                <img loading="lazy" src={aramith} class="max-w-none" alt="logo-aramith-billiards" />
                <img loading="lazy" src={helix} class="max-w-none" alt="logo-helix-billiards" />
                <img loading="lazy" src={pba} class="max-w-none" alt="logo-pba-billiards" />
                <img loading="lazy" src={logoAlliex} class="max-w-none" alt="logo-Alliex-billiards" />
                <img loading="lazy" src={logotext} class="max-w-none" alt="logo-lab-billiards" />
            </div>
        </div>
  );
};

export default Ticker;
