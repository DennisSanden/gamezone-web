"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "./WikiImage.module.css";

type WikiImageProps = {
    src: string;
    alt: string;
};

export default function WikiImage({
                                      src,
                                      alt,
                                  }: WikiImageProps) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <figure className={styles.figure}>
                <button
                    type="button"
                    className={styles.imageButton}
                    onClick={() => setOpen(true)}
                >
                    <Image
                        src={src}
                        alt={alt}
                        width={1400}
                        height={800}
                        className={styles.image}
                    />
                </button>

                {alt && (
                    <figcaption className={styles.caption}>
                        {alt}
                    </figcaption>
                )}
            </figure>

            {open && (
                <div
                    className={styles.overlay}
                    onClick={() => setOpen(false)}
                >
                    <Image
                        src={src}
                        alt={alt}
                        width={1800}
                        height={1200}
                        className={styles.fullImage}
                    />
                </div>
            )}
        </>
    );
}