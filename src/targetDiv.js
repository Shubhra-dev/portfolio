const scrollToTargetDiv = (id) => {
  const targetDiv = document.getElementById(id);
  targetDiv.scrollIntoView({ behavior: "smooth" });
};
export default scrollToTargetDiv;
