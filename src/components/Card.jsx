const Card = ({ title, items }) => (
  <div className="bg-white/5 backdrop-blur-md border border-white rounded-lg p-6">
    <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
    <ul className="text-white/90 space-y-6">
      {items.map((item, idx) => (
        <li key={idx} dangerouslySetInnerHTML={{ __html: `• ${item}` }} />
      ))}
    </ul>
  </div>
);

export default Card;
