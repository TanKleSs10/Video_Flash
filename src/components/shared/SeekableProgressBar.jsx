import { useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";

// Estiliza la barra de progreso para un aspecto más parecido a un reproductor
const CustomLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  backgroundColor:
    theme.palette.mode === "light"
      ? "rgba(0, 0, 0, 0.1)"
      : "rgba(255, 255, 255, 0.3)",
  // Estilo del thumb (el círculo que se arrastra). Esto se hace con un pseudo-elemento.
  "& .MuiLinearProgress-bar": {
    borderRadius: 5,
    backgroundColor: "#44BBA4", // Color verde de Spotify
  },
  "&:hover .MuiLinearProgress-bar::after": {
    // Esto crea el "thumb" o "circulo" que aparece al pasar el mouse por encima
    content: '""',
    position: "absolute",
    right: 0,
    top: "50%",
    transform: "translateY(-50%)",
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    backgroundColor: "white",
    boxShadow: "0 0 4px rgba(0,0,0,0.3)",
  },
}));

// Componente principal de la barra de progreso arrastrable
export default function SeekableProgressBar() {
  const [progress, setProgress] = useState(0); // Estado para el progreso de la canción (0-100)
  const [isDragging, setIsDragging] = useState(false); // Estado para saber si el usuario está arrastrando
  const progressBarRef = useRef(null); // Referencia al elemento DOM de la barra

  // Función para calcular la nueva posición del progreso
  const handleSeek = (e) => {
    // Obtiene el elemento y sus dimensiones
    const progressBar = progressBarRef.current;
    if (!progressBar) return;

    const rect = progressBar.getBoundingClientRect();
    const clickX = e.clientX - rect.left; // Posición del click/mouse dentro de la barra
    const newProgress = (clickX / rect.width) * 100;

    // Actualiza el estado del progreso. Asegura que el valor esté entre 0 y 100
    setProgress(Math.max(0, Math.min(100, newProgress)));
  };

  // Maneja el inicio del arrastre
  const handleMouseDown = (e) => {
    setIsDragging(true);
    handleSeek(e); // Actualiza la posición inmediatamente al hacer click
  };

  // Maneja el arrastre del mouse (sólo si isDragging es true)
  const handleMouseMove = (e) => {
    if (isDragging) {
      handleSeek(e);
    }
  };

  // Maneja el fin del arrastre
  const handleMouseUp = () => {
    setIsDragging(false);
    // Aquí podrías llamar a una función para actualizar la posición real de la canción
    // por ejemplo, `onSeek(progress)`.
  };

  // Agrega y elimina los listeners del mouse en el documento para manejar el arrastre
  // incluso si el mouse sale del componente
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }); // Dependencia en isDragging para re-suscribir si cambia

  return (
    <Box
      sx={{ width: "100%", cursor: "pointer" }}
      ref={progressBarRef}
      onMouseDown={handleMouseDown}
    >
      <CustomLinearProgress variant="determinate" value={progress} />
    </Box>
  );
}
