"use client"
import { MendableSearchBar } from "@mendable/search";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {

    setInterval(() => {
      const firstFooter = document.querySelector("div.ms-mt-2:has(div.ms-w-fit)") as HTMLElement
      if (firstFooter?.innerText) {
        firstFooter.innerText = ""
      }

      const secondFooter = document.querySelector('.\\!ms-mt-2') as HTMLElement
      if (secondFooter?.innerText) {
        secondFooter.innerText = ""
      }
    }, 200)

  }, []);

  return (
    <div className="flex bg-gray-100 min-h-screen items-center justify-center">
      <div className="max-w-xl">

        <MendableSearchBar
          anon_key={process.env.NEXT_PUBLIC_MENDABLE_API_KEY!}
          showSimpleSearch={true}
          placeholder="Sök svar, fråga för hjälp..."
          dialogPlaceholder="Sök det du behöver, fråga vad du vill."
          botIcon={
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" fill="#FF620F" />
              <path fillRule="evenodd" clipRule="evenodd" d="M25.148 7L26 20.6408L15.4229 21.2672L11.1795 24L9.55913 21.6144L6.852 21.7747L6 8.13391L25.148 7ZM17.4405 10.3003L14.5595 10.4408L14.8254 15.6082L17.7064 15.4677L17.4405 10.3003ZM23.0174 10.3003L20.1364 10.4408L20.4024 15.6082L23.2833 15.4677L23.0174 10.3003Z" fill="white" />
            </svg>
          }
          askAIText="Fråga Bosse"
          messageSettings={
            { prettySources: true }
          }
          language="sv"
          welcomeMessage="Hej! Jag är Bosse. Hur kan jag hjälpa dig idag?"
          style={{
            darkMode: false,
            accentColor: "#FF620F",
          }}
        />
      </div>
    </div>
  );
}
