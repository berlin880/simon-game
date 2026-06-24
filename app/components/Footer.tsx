
const currentDate = new Date().toLocaleDateString();
const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4" style={{ position: "fixed", bottom: 0, width: "100%" }}>
      <div className="container mx-auto text-center">
        <p>&copy; {currentYear} My Website. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
