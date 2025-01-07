import React from "react";

interface InstaFlowLogoProps {
  textColor?: string; // Optional text color
  fontSize?: string; // Optional font size
}

const InstaFlowLogo: React.FC<InstaFlowLogoProps> = ({
  textColor = "linear-gradient(to right, #56CCF2, #2F80ED)", // Light gradient by default
  fontSize = "2rem", // Default font size
}) => {
  return (
    <div
      style={{
        background: textColor, // Apply gradient as background
        WebkitBackgroundClip: "text", // Make gradient appear on text
        WebkitTextFillColor: "transparent", // Ensure text is transparent to show gradient
        fontSize: fontSize,
        fontWeight: "bold",
        textAlign: "center",
        fontFamily: "'Poppins', sans-serif", // Stylish font
        letterSpacing: "2px", // Adds slight spacing for style
      }}
    >
      InstaFlow
    </div>
  );
};

export default InstaFlowLogo;
