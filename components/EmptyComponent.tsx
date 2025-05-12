import Image from "next/image";
import React from "react";

function EmptyComponent({ icon, title, description }: EmptyStateProps) {
  return (
    <section className="empty-state">
      <div>
        <Image src={icon} alt="empty" width={64} height={64} />
      </div>
      <article>
        <h1>{title}</h1>
        <p>{description}</p>
      </article>
    </section>
  );
}

export default EmptyComponent;
