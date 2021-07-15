import React from 'react'
import './Content.css'

const Content = () => {
    return (
        <>
            <section>
                <div className="banner">
                    <div>
                        <p className="car-model">Audi Q5 Premium</p>
                        <p className="info">Capitalize on low hanging fruit to identify a ballpark.<br />Current bid: $5550</p>
                    </div>
                    <div>
                        <img src="http://www.pngplay.com/wp-content/uploads/6/Audi-Car-Transparent-Background.png" alt="" />
                        <button className="place-bid">PLACE BID NOW</button>
                    </div>
                </div>

                <div className="service">
                    <div className="item">
                        <img className="service-img" src="https://ibid.modeltheme.com/automotive/wp-content/uploads/2020/01/support_icons_m.png" alt="" />
                        <div className="text">
                            <p>Call Center</p>
                            <p>Completely synergize</p>
                        </div>
                    </div>
                    <div className="item">
                        <img className="service-img" src="https://ibid.modeltheme.com/automotive/wp-content/uploads/2020/01/tracking_icons_m.png" alt="" />
                        <div className="text">
                            <p>Order Tracking</p>
                            <p>Objectively Empowered</p>
                        </div>
                    </div>
                    <div className="item">
                        <img className="service-img" src="https://ibid.modeltheme.com/automotive/wp-content/uploads/2020/01/deliveries_icons_m.png" alt="" />
                        <div className="text">
                            <p>Fastest Delivery</p>
                            <p>Efficiently unleash media</p>
                        </div>
                    </div>
                    <div className="item">
                        <img className="service-img" src="https://ibid.modeltheme.com/automotive/wp-content/uploads/2020/01/money_icons_m.png" alt="" />
                        <div className="text">
                            <p>Instant Buying</p>
                            <p>Podcasting operationla</p>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Content
