import { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";
import "./ImageHoverProfileCard.css";

const layerCount = 10;

const ImageHoverProfileCard = ({
  imageUrl = "/assets/IMG_20251128_080934.jpg",
  name = "Achmad Binu Caputra Fikri",
  title = "Backend Developer",
}) => {
  const cardRef = useRef(null);
  const stackRef = useRef(null);
  const layers = useMemo(() => Array.from({ length: layerCount }), []);

  useEffect(() => {
    const card = cardRef.current;
    const stack = stackRef.current;
    if (!card || !stack) return undefined;

    const imageLayers = [...stack.querySelectorAll(".image-layer")];
    const setLayerState = (hovered) => {
      gsap.to(imageLayers, {
        x: 0,
        y: 0,
        rotation: 0,
        scale: (index) => (hovered ? 1 - index * 0.018 : index === 0 ? 1 : 0.96),
        opacity: (index) => (hovered ? 1 - index * 0.06 : index === 0 ? 1 : 0),
        duration: 0.8,
        stagger: 0.06,
        ease: "power2.inOut",
        overwrite: true,
      });
    };

    const handleMove = (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      gsap.to(stack, {
        rotateY: x * 14,
        rotateX: -y * 14,
        duration: 0.25,
        ease: "power2.out",
        overwrite: true,
      });
    };

    const handleEnter = () => setLayerState(true);
    const handleLeave = () => {
      setLayerState(false);
      gsap.to(stack, { rotateX: 0, rotateY: 0, duration: 0.5, ease: "power2.out" });
    };

    gsap.set(imageLayers, { opacity: (index) => (index === 0 ? 1 : 0), scale: (index) => (index === 0 ? 1 : 0.96) });
    card.addEventListener("pointermove", handleMove);
    card.addEventListener("pointerenter", handleEnter);
    card.addEventListener("pointerleave", handleLeave);

    return () => {
      card.removeEventListener("pointermove", handleMove);
      card.removeEventListener("pointerenter", handleEnter);
      card.removeEventListener("pointerleave", handleLeave);
      gsap.killTweensOf([...imageLayers, stack]);
    };
  }, []);

  return (
    <div ref={cardRef} className="image-profile-card" data-image-hover>
      <div ref={stackRef} className="image-stack">
        {layers.map((_, index) => (
          <img
            key={index}
            className="image-layer"
            src={imageUrl}
            alt={index === 0 ? `${name} profile` : ""}
            aria-hidden={index !== 0}
          />
        ))}
      </div>
      <div className="image-profile-info">
        <strong>{name}</strong>
        <span>{title}</span>
      </div>
    </div>
  );
};

export default ImageHoverProfileCard;
