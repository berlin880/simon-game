function Nav() {
  return (
    <nav>
      <ul style={{ display: "flex", gap: "1rem" , backgroundColor: "lightblue" }} >
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}  
export default Nav;