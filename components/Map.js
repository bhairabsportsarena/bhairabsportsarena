import React from 'react'

const Map = () => {
    return (
        <>
            <section className='map'>
                <div className="container">
                    <h2 className='primary-heading map__heading'>Our Location</h2>
                    <div className="map__content">
                        <div className='map__skyturf'>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.9070793945216!2d90.40709642442512!3d24.73007015046447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37564f0062bc0bbd%3A0x93c8ee01755d1aca!2sMymensingh%20Turf%20%26%20Treat!5e0!3m2!1sen!2sbd!4v1786212468773!5m2!1sen!2sbd"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className='map__map'
                            ></iframe>
                            <h3 className='our-turfs__turf-name'>Bhairab Sports Arena</h3>
                            <p className='our-turfs__turf-text'>The Home of Football in Bhairab</p>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Map