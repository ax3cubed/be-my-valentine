"use client";
import { useState } from "react";
import emailjs from "@emailjs/browser";
export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;
  const [loading, setLoading] = useState(false);
  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_7ks9kgc",
        "template_7xpaoas",
        {
          from_name: "Jemimah JCOBS",
          to_name: "Adeola Akinwole",
          from_email: "jacobsjemimah@gmail.com",
          to_email: "adeola.akinwole.me@gmail.com",
          message: "I accept to be your valentine",
        },
        "2wrHfj5HQqeLF6BbR"
      )
      .then(
        (result) => {
          console.log(result);
          setLoading(false);
        },
        (error) => {
          console.error(error);

          setLoading(false);
        }
      );
  };
  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "What if I asked really nicely?",
      "Pretty please",
      "With a chocolate cake on top",
      "What about a cinnamon rolls",
      "PLEASE JEMMY",
      "But :*(",
      "I am going to die",
      "Yep im dead",
      "ok ur talking to Denny duckett's ghost",
      "please baby",
      ":((((",
      "PRETTY PLEASE",
      "PRETTY PRETTY PLEASE",
      "Estoy muerto",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  const handleYesClick = (e: any) => {
    handleSubmit(e);
    setYesPressed(true);
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="my-4 text-4xl font-bold">
            WOOOOOO!!! I love you baby!! ;))
          </div>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl">Will you be my Valentine?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={handleYesClick}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
