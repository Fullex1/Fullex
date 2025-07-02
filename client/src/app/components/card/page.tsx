import Image from "next/image";
import styles from "./card.module.css";

type CardProps = {
  image: string;
  title: string;
  description: string;
  width?: number;
  height?: number;
};

export default function Card({ image, title, description, width = 180, height = 180 }: CardProps) {
  return (
    <div className={`${styles.serviceCard} group flex justify-center`}>
      <div className="relative bg-[#021327] rounded-2xl p-8 h-[400px] border border-gray-700/30 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col items-center w-full max-w-md mx-auto">
        {/* Icon section */}
        <div className={`${styles.iconContainer} mb-5 relative flex items-center justify-center`} style={{ width, height }}>
          <Image
            src={image}
            alt={title}
            fill
            style={{ objectFit: "contain", objectPosition: "center" }}
            className={`${styles.serviceIcon} transition-all duration-300 `}
          />
        </div>
        {/* Content */}
        <div className="text-center w-full">
          <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-300 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
            {description}
          </p>
        </div>
        {/* Bottom accent */}
        <div className="mt-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      </div>
    </div>
  );
}
