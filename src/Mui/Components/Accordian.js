import React from "react";
import AccordionsStep from "./AccordionsStep";

export default function Accordian() {
  const array = [
    {
      heading: "WHO MANAGES THE PLATFORM?",
      paragraph: "Smartxblockchain does not have a Manager. This means that the platform is fully decentralized (i.e. it has no leaders or admins)."
    },
    {
      heading: " WHAT IS DECENTRALIZATION?",
      paragraph: "It is a system in which there are no admins, there is no single server or system monitoring, project management. The creators of the platform are the same project participants like you."
    },
    {
      heading: " WHAT IS SMARTX?",
      paragraph: "SMARTX is one of the leading cryptocurrency, which has existed since 2017 At the same time, it is a software framework for the Defi (decentralized finance) market, since the blockchain of this crypto currency allows you not only to follow the history of transactions, but also to save any executable software products (smart contracts). A huge number of major crypto companies use this platform."
    },
    {
      heading: " WHAT IS A SMART CONTRACT?",
      paragraph: "Smart contract– the algorithm inside the blockchain cryptocurrencies. In our case that BNB is number one among the those on which it is possible to create smart contracts. The main purpose of such contracts is the automation of the relationship, the opportunity to make commitments samospalenie."
    },
    {
      heading: " HOW MUCH CAN YOU EARN?",
      paragraph: "The amount of your income depends on the number of invited people and how actively they will work."
    },
    {
      heading: " WHAT DATA DO I NEED TO REGISTER?",
      paragraph: "To register you will need only a wallet trust wallet, meta mask, binance wallet"
    },
  ]
  return (
    <div className="flex flex-col justify-center items-center bg1-gradient-to-r from-primary from-90% via-secondary via-30% to-bgprimary to-10%">
      <div 
      data-aos="zoom-in"
      className="my-5 text-primary font-bold text-2xl underline">Frequently Asked Questions.</div>
      <div className="w-full sm:w-[50%]">
        {array.map((x, i) => (
          <AccordionsStep key={i} heading={x.heading} paragraph={x.paragraph} />
        ))}
      </div>
    </div>
  );
}
