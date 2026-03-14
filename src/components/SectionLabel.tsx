const SectionLabel = ({ number, label }: { number: string; label: string }) => (
  <div className="serial-number mb-6 flex items-center gap-2">
    <span>[{number}]</span>
    <span className="uppercase">{label}</span>
  </div>
);

export default SectionLabel;
