export default function Footer() {
  return (
    <>
      <div className="bg-beig">
        <footer className="bg-beig mt-16 ">
          {/* Brand Name */}
          <div className="border border-dark font-utah">
            <div className="text-center p-6">
              <h2 className="text-2xl font-bold tracking-wide">AMINLABS</h2>
            </div>
          </div>

          {/* Grid Columns */}
          <div className="grid grid-cols-1 md:grid-cols-4 border-y border-dark font-helvetica tracking-tight divide-y md:divide-y-0 md:divide-x divide-dark mt-8">
            {/* Column 1 */}
            <div className="p-6">
              <h3 className="font-bold mb-4">CLIENT SERVICES</h3>
              <ul className="space-y-2 text-sm">
                <li>FAQ</li>
                <li>TRACK ORDER</li>
                <li>RETURNS</li>
                <li>DELIVERY</li>
                <li>PAYMENT</li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="p-6">
              <h3 className="font-bold mb-4">CONNECT</h3>
              <ul className="space-y-2 text-sm">
                <li>FACEBOOK</li>
                <li>INSTAGRAM</li>
                <li>TIKTOK</li>
                <li>SPOTIFY</li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="p-6">
              <h3 className="font-bold mb-4">THE COMPANY</h3>
              <ul className="space-y-2 text-sm">
                <li>CAREERS</li>
                <li>CAREERS - DESIGN</li>
                <li>LEGAL</li>
                <li>PRIVACY POLICY</li> 
                <li>COOKIES</li>
              </ul> 
            </div>

            {/* Column 4 */}
            <div className="p-6">
              <h3 className="font-bold mb-4">CONTACT US</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  CALL US AT <br /> +62 831 1124 7317
                </li>
                <li>
                  <a href="mailto:salisahmad48@gmail.com" className="underline">
                    SEND US AN EMAIL
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
