import Header from "@/components/Header";
import Image from "next/image";
import React from "react";
import paper from "../../public/images/whitepaper.jpeg";
import Link from "next/link";

export default function whitepaper() {
  return (
    <div>
      <div className="container mx-auto py-10 text-lg px-5">
        {/* <Header /> */}
        <div
          data-aos="fade-left"
          data-aos-delay=""
          className="font-bold text-primary"
        >
          <Link href="/">Back to Home</Link>
        </div>
        <h3
          data-aos="fade-up"
          data-aos-delay=""
          className="text-2xl font-bold text-center mt-20"
        >
          BRIEF HISTORY
        </h3>
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-lg mt-4 mx-auto"
        >
          The historical account of drc20 holds notable significance within the
          Dogecoin and Doginals community. As recounted by those familiar with
          its evolution, drc20 stands out as the first token to establish
          contact with the creator of Dogecoin, earning the informal designation
          of &apos;&apos;very beta.&apos;&apos; Furthermore, bm2k&apos;s early
          endorsement, evidenced by being the first to like a post on drc20,
          contributed to its initial visibility. A crucial chapter in
          drc20&apos;s narrative involves the community&apos;s collaborative
          efforts in rectifying a critical bug in Doggy Market, a proactive
          intervention that played a pivotal role in safeguarding the interests
          of numerous shibes within the ecosystem. During the nascent stages of
          Doginals, the public response received from Billy, with the initiator
          of this account being the first to engage with him, sheds light on the
          early days when Doginals was relatively unknown. The association with
          apezord further solidifies the community&apos;s presence during this
          period. Adding to its milestones, the drc20 community achieved the
          first documented sale and purchase utilizing drc20 (bm2k) tokens,
          marking a significant moment in its history. Additionally, the
          acquisition of the initial NTF Doginals with bm2k and a drc20 token
          further underscores the community&apos;s pioneering role. It is worth
          noting that these developments were not part of a premeditated plan
          but rather unfolded organically. The intention here is not to assert
          personal importance but to emphasize the historical significance of
          these events, which have become integral to the collective history of
          Dogecoin and Doginals, specifically within the context of drc20.
        </p>

        <div>
          <h3
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-2xl font-bold text-center mt-10"
          >
            WHITE PAPER
          </h3>
          <div
            data-aos="fade-down"
            data-aos-delay=""
            className="h-24 w-2/3 lg:w-1/3 max-[300px]:w-14 mx-auto"
          >
            <Image src={paper} height={1000} width={1000} alt="paper" />
          </div>
        </div>
      </div>
    </div>
  );
}
