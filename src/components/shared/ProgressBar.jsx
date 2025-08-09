import { useEffect, useRef, useState, useCallback } from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import PropTypes from "prop-types";

/**
 * Estiliza la barra de progreso para un aspecto más parecido a un reproductor.
 * Se puede personalizar el color, la altura y el estilo del "thumb".
 */
const CustomLinearProgress = styled(LinearProgress)(
  ({ theme, barcolor, trackcolor, barheight }) => ({
    height: barheight || 6,
    borderRadius: 5,
    backgroundColor:
      trackcolor ||
      (theme.palette.mode === "light"
        ? "rgba(0, 0, 0, 0.1)"
        : "rgba(255, 255, 255, 0.3)"),
    cursor: "pointer",

    "& .MuiLinearProgress-bar": {
      borderRadius: 5,
      backgroundColor: barcolor || "#1db954", // Color de la barra de progreso
      transition: "none", // Deshabilita la transición para un seguimiento instantáneo
    },

    // Esto crea el "thumb" o "circulo" que aparece al pasar el mouse por encima
    "& .MuiLinearProgress-bar::after": {
      content: '""',
      position: "absolute",
      right: 0,
      top: "50%",
      transform: "translateY(-50%)",
      width: "0px",
      height: "0px",
      borderRadius: "50%",
      backgroundColor: "white",
      boxShadow: "0 0 4px rgba(0,0,0,0.3)",
      transition: "width 0.2s, height 0.2s",
    },
    "&:hover .MuiLinearProgress-bar::after": {
      width: "12px",
      height: "12px",
    },
  }),
);

export default function ProgressBar({
  value,
  onValueChange,
  barColor,
  trackColor,
  barHeight,
}) {
  const [isDragging, setIsDragging] = useState(false);
  const progressBarRef = useRef(null);

  // Usa useCallback para memoizar la función y evitar que se recree en cada render
  const handleSeek = useCallback(
    (e) => {
      const progressBar = progressBarRef.current;
      if (!progressBar) return;

      const rect = progressBar.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const newProgress = Math.max(
        0,
        Math.min(100, (clickX / rect.width) * 100),
      );

      onValueChange(newProgress);
    },
    [onValueChange],
  );

  const handleMouseDown = useCallback(
    (e) => {
      setIsDragging(true);
      handleSeek(e);
    },
    [handleSeek],
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleMouseMove = useCallback(
    (e) => {
      if (isDragging) {
        handleSeek(e);
      }
    },
    [isDragging, handleSeek],
  );

  // Agrega y elimina los listeners en el documento para manejar el arrastre
  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  return (
    <Box
      sx={{ width: "100%", cursor: "pointer" }}
      ref={progressBarRef}
      onMouseDown={handleMouseDown}
    >
      <CustomLinearProgress
        variant="determinate"
        value={value}
        barcolor={barColor}
        trackcolor={trackColor}
        barheight={barHeight}
      />
    </Box>
  );
}

ProgressBar.propTypes = {
  value: PropTypes.number,
  onValueChange: PropTypes.func,
  barColor: PropTypes.string,
  trackColor: PropTypes.string,
  barHeight: PropTypes.number,
};
