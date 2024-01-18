const SocialIcons = () => {
  const styles = {
    icon: {
      textDecoration: "none",
      fontSize: "22px",
      padding: "10px",
      transition: "0.2s ease-in",
    },
  };

  return (
    <div className="socialIcons" style={styles.socialIcons}>
      <a className="icon" style={styles.icon} href="#">
        <i className="fa-brands fa-github" aria-hidden="true" title="Aziz Bakayoko' GitHub Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://www.linkedin.com/in/abdoul-aziz-bakayoko-89012821a">
        <i className="fa-brands fa-linkedin" aria-hidden="true" title="Aziz Bakayoko' LinkedIn Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="https://instagram.com/dioula_je_suis?igshid=YmMyMTA2M2Y=">
        <i className="fa-brands fa-instagram" aria-hidden="true" title="Aziz bakayoko' Instagram Profile"></i>
      </a>
      <a className="icon" style={styles.icon} href="#">
        <i className="fa-brands fa-twitter" aria-hidden="true" title="Aziz Bakayoko' Twitter Profile"></i>
      </a>
    </div>
  );
};

export default SocialIcons;
