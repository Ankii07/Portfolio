const Footer = () => {

  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5"  >
      <div className="text-white-500 flex gap-2"  >
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon" >
         <a href="https://github.com/Ankii07" target="_blank"  ><img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2 m-auto " /></a> 
        </div>
        <div className="social-icon">
        <a href="https://leetcode.com/u/ANKI_007/" target="_blank"  ><img src="/assets/leetcode.png" alt="leetcode" className="w-1/2 h-1/2 m-auto" /></a> 
        </div>
        <div className="social-icon" >
          <a href="https://www.linkedin.com/in/ankit-kumar-61774a205/" target="_blank"  ><img src="/assets/linkedin_1.png" alt="leetcode" className="max-w-[36px] h-1/2 m-auto bg-[rgb(29,29,33)]" /></a> 
        </div>
      </div>

      <p className="text-white-500">© 2025 Ankit Kumar. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
