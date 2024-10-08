"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 0.7, duration: 0.4, ease: "easeInOut" },
        }}
      >
        <div className="w-[248px] h-[248px] xl:w-[420px] xl:h-[420px] dark:mix-blend-lighten mix-blend-darken overflow-hidden relative rounded-full">
          <Image
            src="/assets/photo.png"
            priority
            quality={100}
            fill
            alt=""
            className="inline w-auto m-0 h-full absolute"
            sizes="100%"
            style={{
              maskImage:
                "radial-gradient(circle , rgba(0, 0, 0, 1) 50%, transparent 90%)",
            }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Photo;
