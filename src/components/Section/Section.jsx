import PropTypes from "prop-types";
import scss from "./Section.module.scss";

const Section = ({ title = "Phonebook", children }) => (
  <section className={scss.section}>
    <h1 className={scss.title}>{title}</h1>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default Section;
