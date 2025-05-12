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
          <h1>Screen Recorder App</h1>
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
              I love this screen recorder! It's so easy to use and the quality
              is amazing. I highly recommend it to anyone who needs to record
              their screen.
            </p>
            <article>
              <Image
                src="/assets/images/jason.png"
                alt="json"
                width={64}
                height={64}
                className="rounded-full"
              />
              <div>
                <h2>Json Statham</h2>
                <p>Staff Enginner, Oxx Technologies</p>
              </div>
            </article>
          </section>
        </div>
        <p> Screen Recorder App {new Date().getFullYear()}</p>
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
            <h1>Screen Recorder App</h1>
          </Link>
          <p>
            Create and share you very first <span> Screen Recorder App</span> in
            no time !
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
