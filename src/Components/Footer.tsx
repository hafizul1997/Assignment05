
import NavLogo from '../assets/logo-text.png'
const Footer = () => {
    return (
<div className="max-w-[1280px] mx-auto">

  {/* Main Footer */}
  <div className="px-6 py-10 md:p-15 mb-5 grid grid-cols-12 gap-8">

    {/* Logo + Description + Social
        Mobile: 12 columns
        Desktop: 6 columns
    */}
    <div className="col-span-12 md:col-span-6 text-[#64748b]">

     {/* Logo + Description + Social */}
<div className="col-span-12 md:col-span-6 text-[#64748b] text-center md:text-left">

  <img
    src={NavLogo}
    alt="Dev Stack Logo"
    className="mb-4 mx-auto md:mx-0"
  />

  <p className="mb-4">
    Curated tools, technologies, and resources for developers
    building modern software.
  </p>

  <ul className="flex justify-center md:list-none  md:justify-start gap-4 text-[#454e5a] font-semibold mt-10">
    <li className="hover:text-[#d91b7e]">
      <a href="#">Github</a>
    </li>

    <li className="hover:text-[#d91b7e]">
      <a href="#">Twitter</a>
    </li>

    <li className="hover:text-[#d91b7e]">
      <a href="#">LinkedIn</a>
    </li>
  </ul>

</div>

    </div>


    {/* Product
        Mobile: Hidden
        Desktop: Visible
    */}
    <div className="hidden md:block md:col-span-2 text-[#64748b]">

      <h2 className="text-[#0f172a] font-bold mb-4">
        Product
      </h2>

      <ul className="list-none">
        <li className="mb-4 hover:text-[#d91b7e]">
          <a href="#">Home</a>
        </li>

        <li className="mb-4 hover:text-[#d91b7e]">
          <a href="#">Technologies</a>
        </li>

        <li className="hover:text-[#d91b7e]">
          <a href="#">Projects</a>
        </li>
      </ul>

    </div>


    {/* Company
        Mobile: Hidden
        Desktop: Visible
    */}
    <div className="hidden md:block md:col-span-2 text-[#64748b]">

      <h2 className="text-[#0f172a] font-bold mb-4">
        Company
      </h2>

      <ul className="list-none">
        <li className="mb-4 hover:text-[#d91b7e]">
          <a href="#">About</a>
        </li>

        <li className="mb-4 hover:text-[#d91b7e]">
          <a href="#">Contact</a>
        </li>

        <li className="hover:text-[#d91b7e]">
          <a href="#">Careers</a>
        </li>
      </ul>

    </div>


    {/* Legal
        Mobile: Hidden
        Desktop: Visible
    */}
    <div className="hidden md:block md:col-span-2 text-[#64748b]">

      <h2 className="text-[#0f172a] font-bold mb-4">
        Legal
      </h2>

      <ul className="list-none">
        <li className="mb-4 hover:text-[#d91b7e]">
          <a href="#">Privacy Policy</a>
        </li>

        <li className="hover:text-[#d91b7e]">
          <a href="#">Terms of Policy</a>
        </li>
      </ul>

    </div>

  </div>


  {/* Copyright Section
      Visible on Mobile + Desktop
  */}
  <div className="px-6 md:px-15 py-8  text-[#64748b] flex justify-between md: gap-4 ">

    <p>
      © 2026 Dev Stack. All rights reserved.
    </p>

    <ul className="list-none flex gap-4">
      <li className="hover:text-[#d91b7e]">
        <a href="#">Privacy</a>
      </li>

      <li className="hover:text-[#d91b7e]">
        <a href="#">Terms</a>
      </li>
    </ul>

  </div>

</div>

    );
};

export default Footer;