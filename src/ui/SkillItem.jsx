function SkillItem({ text, dark }) {
  return (
    <h2
      className={`py-2 px-4 ${
        dark ? "bg-prime/20" : "bg-sub/20"
      } rounded-md text-lg font-semibold`}
    >
      {text}
    </h2>
  );
}

export default SkillItem;
