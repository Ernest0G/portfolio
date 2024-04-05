const Nav = ({ item }: { item: string }) => {
  return (
    <li className="text-base sm:text-2xl font-bold text-white">
      <a href={`#${item}`}>{item}</a>
    </li>
  );
};

export default Nav;
