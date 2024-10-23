import cls from "./overlay.module.css";

type OverlayProps = {
    onClick: () => void;
};

export const Overlay = ({ onClick }: OverlayProps) => (
    <div onClick={onClick} className={cls.overlay} />
);
