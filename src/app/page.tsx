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
    <main>
      <div className="app-container flex flex-wrap gap-10  w-full justify-center">
        <div className="image-app-container">
          <div
            className="thumbnail"
            style={{
              width: 524,
              height: 650,
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
        <div className="image-app-container">
          <div
            className="thumbnail"
            style={{
              width: 524,
              height: 650,
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
        </div>{" "}
        <div className="image-app-container">
          <div
            className="thumbnail"
            style={{
              width: 524,
              height: 650,
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
        </div>{" "}
        <div className="image-app-container">
          <div
            className="thumbnail"
            style={{
              width: 524,
              height: 650,
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
        </div>{" "}
        <div className="image-app-container">
          <div
            className="thumbnail"
            style={{
              width: 524,
              height: 650,
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
        </div>{" "}
        <div className="image-app-container">
          <div
            className="thumbnail"
            style={{
              width: 524,
              height: 650,
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
        </div>{" "}
        <div className="image-app-container">
          <div
            className="thumbnail"
            style={{
              width: 524,
              height: 650,
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
        </div>{" "}
        <div className="image-app-container">
          <div
            className="thumbnail"
            style={{
              width: 524,
              height: 650,
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
        </div>{" "}
        <div className="image-app-container">
          <div
            className="thumbnail"
            style={{
              width: 524,
              height: 650,
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
        </div>{" "}
        <div className="image-app-container">
          <div
            className="thumbnail"
            style={{
              width: 524,
              height: 650,
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
        </div>{" "}
        <div className="image-app-container">
          <div
            className="thumbnail"
            style={{
              width: 524,
              height: 650,
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
        <div className="image-app-container">
          <div
            className="thumbnail"
            style={{
              width: 524,
              height: 650,
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
      </div>
    </main>
  );
}
