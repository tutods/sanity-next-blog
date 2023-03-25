import styles from "@components/ui/Icon/styles.module.scss";

type Props = {
  name: string;
  size: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
  className?: string;
};

export const Icon = ({ name, size, className = "" }: Props) => {
  return (
    <svg className={`${size ? styles[`size-${size}`] : ""} ${className}`}>
      <use href={`/assets/sprite.svg#${name}`} />
    </svg>
  );
};
