import CopyIcon from "@/components/Icons/CopyIcon";

interface CopyButtonProps {
  textToCopy: string;
}

export default function CopyButton({ textToCopy }: CopyButtonProps) {
  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
  };

  return (
    <button onClick={handleCopy}>
      <CopyIcon title="Clique aqui para copiar" className="fill-white" />
    </button>
  );
}
