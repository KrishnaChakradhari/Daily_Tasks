import React from 'react';
import Elements from './elements.jpg';

function Home() {
    return (
        <>
            <div className="texts">
                <h1>Free HTML5 Website Templates</h1>
                <p style={{fontSize: 18}}>
                    HTML Website templates are pre-designed web pages that are ready for you to insert your own content. These free HTML templates are written in HTML5 and CSS & are free to download and use (under a Creative Commons Attribution 3.0 licence) for both personal and commercial websites, providing the ‘design from’ link is retained. Or the footer link can be removed if you make a £15 donation – Click here, or leave a donation amount of your own choosing by clicking the donate button to the right. Be assured that our responsive web templates are cleanly coded, standards-compliant and fast to load.
                </p> 
                <div className="textandimage">
                    <div className="text12">
                        <img src={Elements} alt="Description of the image" width={300} height={200} style={{ float: 'right', marginRight: '15px' }} />
                        <p style={{fontSize: 18}}>
                            Our latest template ‘Elements‘ is a fully RESPONSIVE website template and works as beautifully on mobile devices as it does desktop monitors, you can find all our HTML5 Templates here ‘Web Templates‘.<br/> <br/> Want a contact form on your beautiful, simple and responsive website but don’t know how to to it? Read our FAQ page for a tip on a simple contact form solution.
                        </p>
                    </div>
                </div> 
                <h1>HTML5 and CSS Templates</h1>
                <p style={{fontSize: 18}}>
                HTML5 is currently under development as the next major revision of the HTML standard. HTML 5 is a new version of HTML 4.01 and XHTML 1.0, and includes lots of new and exciting tags, including.
                </p>
                <p style={{fontSize: 18}}>
                You can find out more about these new elements by visiting the W3 Schools HTML5 Tutorial or by searching Google for ‘HTML5 elements’. Also keep in mind that with the advent of Google’s ‘mobile-first indexing’ it is imperative that your site uses a responsive and mobile-friendly design and so you should use CSS templates and website templates which are responsive, like our ‘Elements’ template.
                </p>
                <p style={{fontSize: 18}}>
                Our responsive web templates can be hosted by almost all shared hosting providers, although for higher quality and expandability you might want to compare some cheap dedicated server providers.  A sensible middle ground would be a reputable, low cost hosting provider.  We provide these html web templates free of charge but we do not offer web design services.
                </p>
                <p style={{fontSize: 18}}>
                Once your site is live you may want to bring in the professional services of an online marketing agency like new Agency.


                </p>
            </div>
        </>
    );
}

export default Home;