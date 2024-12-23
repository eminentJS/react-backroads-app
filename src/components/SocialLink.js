const SocialLink = ({ href, icon, itemClass }) => {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noreferrer" //every link open on a new tab
        className={itemClass}
      >
        <i className={icon}></i>
      </a>
    </li>
  );
};
export default SocialLink;
