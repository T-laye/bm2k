import React from "react";
import Card from "../Card";
import card1 from "../../../public/images/card1.svg";
import card2 from "../../../public/images/card2.svg";
import card3 from "../../../public/images/card3.svg";
import card4 from "../../../public/images/card4.svg";
import card5 from "../../../public/images/card5.svg";
import card6 from "../../../public/images/card6.svg";

export default function Unique() {
  return (
    <div>
      <div className="container mx-auto px-6 py-20 ">
        <h2 className="text-center">WHAT MAKES BM2K UNIQUE</h2>
        <div className="flex flex-col lg:flex-row flex-wrap justify-evenly items-center mt-7">
          <Card
            icon={card1}
            title="Heartfelt Inception"
            text="BM2K's genesis is rooted in a unique interaction with Dogecoin creator Billy Markus, making it a token born out of genuine appreciation and sentiment."
          />
          <Card
            icon={card2}
            title="Limited Edition Appeal"
            text="With a capped supply of 42 million tokens, BM2K becomes a rare and exclusive tribute, each token representing a limited edition collector's item."
          />
          <Card
            icon={card3}
            title="Community-Centric Symbolism"
            text="Beyond a token, BM2K is a symbol of unity within the Dogecoin community, where holders actively contribute to the narrative and direction of the project."
          />
          <Card
            icon={card4}
            title="Interactive Governance"
            text="BM2K empowers token holders with governance rights, allowing them to vote on proposals and actively shape community initiatives, fostering inclusivity and democratic decision-making."
          />
          <Card
            icon={card5}
            title="NFT Integration"
            text="BM2K integrates NFTs, enabling token holders to unlock exclusive digital assets related to Billy Markus, enhancing engagement and personalization."
          />
          <Card
            icon={card6}
            title="Dynamic Development Fund"
            text="A dedicated fund ensures ongoing development, supporting initiatives, community events, and collaborations, keeping BM2K relevant and dynamic in the crypto landscape."
          />
        </div>
      </div>
    </div>
  );
}
