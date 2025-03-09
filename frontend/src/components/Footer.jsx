import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* {-------left section-----} */}
            <div>
                <img src={assets.logo} alt="" />
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            {/* {-------center section-----} */}
            <div>
                <p>BANK</p>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            {/* {-------right section-----} */}
            <div>
                <p>Get in touch</p>
                <ul>
                    <li>+9-999-999-9999</li>
                    <li>teamavengers@gmail.com</li>
                </ul>
            </div>

        </div>
        <div>
            {/* {--------Copy right text---------------} */}
            <hr />
            <p>Copyright © 2024 GreatStack - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer
