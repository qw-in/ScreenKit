"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Page() {
  const handleSignIn = async () => {
    return await authClient.signIn.social({ provider: "google" });
  };
  return (
    <main className="sign-in">
      <aside className="testimonial">
        <Link href="/">
          <Image
            src="/assets/icons/logo.svg"
            alt="logo"
            width={32}
            height={32}
          />
          <h1>ScreenKit</h1>
        </Link>
        <div className="description">
          <section>
            <figure>
              {Array.from({ length: 5 }).map((_, index) => (
                <Image
                  src="/assets/icons/star.svg"
                  alt="star"
                  width={20}
                  height={20}
                  key={index}
                />
              ))}
            </figure>
            <p>
              This screen recorder is a game-changer! Incredibly user-friendly
              with crystal-clear recording quality. I’d highly recommend it to
              anyone looking for a reliable way to capture their screen
              effortlessly.
            </p>
            <article>
              <Image
                src="/assets/images/Pedro.jpg"
                alt="json"
                width={64}
                height={64}
                className="rounded-full"
              />
              <div>
                <h2>Pedro Pascal</h2>
                <p>Founding Enginner, Illuminati Technologies</p>
              </div>
            </article>
          </section>
        </div>
        <p> ScreenKit {new Date().getFullYear()}</p>
      </aside>
      <aside className="google-sign-in">
        <section>
          <Link href="/">
            <Image
              src="/assets/icons/logo.svg"
              alt="logo"
              width={40}
              height={40}
            />
            <h1>ScreenKit</h1>
          </Link>
          <p>
            Build and launch your very own <span> screen recording</span> in no
            time – quick, easy, and hassle-free
          </p>
          <button onClick={handleSignIn}>
            <Image
              src="/assets/icons/google.svg"
              alt="google"
              width={22}
              height={22}
            />
            <span>Sign in with Google</span>
          </button>
        </section>
      </aside>
      <div className="overlay" />
    </main>
  );
}

export default Page;
