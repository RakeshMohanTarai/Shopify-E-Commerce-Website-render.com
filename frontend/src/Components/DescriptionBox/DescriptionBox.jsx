import React from 'react';
import './DescriptionBox.css';

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box-fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">

        <p>Unlock exclusive deals and discounts with the enticing world of online shopping. From limited-time offers to seasonal
          promotions, the virtual marketplace provides a plethora of savings at your fingertips. Dive into a realm where every
          click unveils a new opportunity to snag exciting deals, making your shopping experience not only convenient but also
          budget-friendly. Explore, click, and seize the offers that elevate your online shopping journey.
        </p>

        <p>Online shopping, a modern convenience, offers an extensive range of products at your fingertips. With 24/7 accessibility,
          it allows users to explore diverse options at their convenience. The virtual marketplace provides infinite choices,
          making it easy to compare prices and find the best deals. Embrace the ease and efficiency of online shopping for a
          seamless retail experience.
        </p>

      </div>
    </div>
  )
}

export default DescriptionBox;