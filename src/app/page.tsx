"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };

export default function Home() {
  const router = useRouter();

  const handleCardClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const cardPosition = event.currentTarget.getBoundingClientRect(); // Get card position
    const { x, top } = cardPosition;
    router.push(`/model?x=${x}&top=${top}`);
  };
  return (
    <div className="app-container flex flex-wrap gap-10  w-full justify-center">
      {[1, 2, 3, 4, 5, 6].map((item, index) => (
        <div className="image-app-container  " key={index}>
          <div
            className="thumbnail"
            style={{
              width: 324,
              height: 450,
            }}>
            <div className="">
              <button onClick={handleCardClick}>
                <motion.img
                  src={"/yasmeen.webp"}
                  placeholder={"/compressed-image.jpg"}
                  alt="Yasmeen Tariq"
                  whileHover={{ scale: 1.1 }}
                  transition={transition}
                />
              </button>
            </div>
          </div>
          <motion.div
            exit={{ opacity: 0 }}
            transition={transition}
            className="information">
            <div className="title">Yasmeen Tariq</div>
            <div className="location">
              <span>28.538336</span>
              <span>-81.379234</span>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
}
