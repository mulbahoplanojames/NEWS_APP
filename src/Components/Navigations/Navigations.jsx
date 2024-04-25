import NAVIGATION_LINKS from "../../Constant/Constant";
import PrimaryButton from "../../Interfaces/Primary_Button/PrimaryButton";

const Navigations = () => {
  return (
    <>
      <section className="md:overflow-x-hidden flex gap-3 pt-4 pb-12 overflow-x-auto">
        {NAVIGATION_LINKS.map((link) => (
          <PrimaryButton key={link.label} text={link.label} path={link.path} />
        ))}
      </section>
    </>
  );
};

export default Navigations;
