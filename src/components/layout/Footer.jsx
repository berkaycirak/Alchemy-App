import FooterLogo from '../../assets/FooterLogo.png';
function Footer() {
  return (
    <div className='bg-black '>
      <div className='container mx-auto flex xl:gap-x-8 items-center relative'>
        <img src={FooterLogo} alt='' className='h-48' />
        <span className=' bg-gray-400 h-28 w-0.5 top-2relative rounded-lg ' />
        <div className=' text-yellow-300 ml-16 '>
          <p>
            Email:{' '}
            <span className='uppercase tracking-wide'>
              info@thealchemylaboryatory.io
            </span>{' '}
          </p>
          <p>Whatsapp: </p>
          <p className='text-gray-300 text-sm mt-4 tracking-wide'>
            The Alchemy Laboratory Limited - Registered Office: 24 Wandsworth
            Bridge Road
            <br />
            Company Number: 14120620
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;