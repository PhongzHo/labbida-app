import { logotext, aramith, helix, pba, logoAlliex } from "../assets";

const Ticker = () => {
    return (
        <div className="flex overflow-hidden bg-black mx-6 px-6 pt-10 group">
            <div className="flex animate-loop-scroll group-hover:paused">
                <img loading="lazy" src={aramith} class="max-w-none mr-4" alt="logo-aramith-billiards" />
                <img loading="lazy" src={helix} class="max-w-none mr-4" alt="logo-helix-billiards" />
                <img loading="lazy" src={pba} class="max-w-none mr-4" alt="logo-pba-billiards" />
                <img loading="lazy" src={logoAlliex} class="max-w-none mr-4" alt="logo-Alliex-billiards" />
                <img loading="lazy" src={logotext} class="max-w-none mr-4" alt="logo-lab-billiards" />
            </div>
            <div className=" flex relative animate-loop-scroll group-hover:paused">
                <img loading="lazy" src={aramith} class="max-w-none mr-4" alt="logo-aramith-billiards" />
                <img loading="lazy" src={helix} class="max-w-none mr-4" alt="logo-helix-billiards" />
                <img loading="lazy" src={pba} class="max-w-none mr-4" alt="logo-pba-billiards" />
                <img loading="lazy" src={logoAlliex} class="max-w-none mr-4" alt="logo-Alliex-billiards" />
                <img loading="lazy" src={logotext} class="max-w-none mr-4" alt="logo-lab-billiards" />
            </div>
        </div>
  );
};

export default Ticker;
