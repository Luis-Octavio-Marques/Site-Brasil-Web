import { useLocation } from "react-router-dom";

function History() {
  const location = useLocation();
  const origin = location.state?.origin || "default";

  const content = {
    brazil: "História do Brasil...",
    japan: "História do Japão...",
    default: "História padrão sem local específico.",
  };

  const text = content[origin] || content.default;

  return (
    <div className="p-6 text-white">
      <h1 className="text-3xl mb-4">História</h1>
      <p className="text-lg">{text}</p>
    </div>
  );
}

export default History;
