import React from 'react';
import './Main.css';
import bgnudge from '../../assets/images/bg-shorten-mobile.svg'

const Main = () => {
    return (
        <main>
            <section>
                <div className='link-container'>
                    {/* <div className='bg-nudge'><img src={bgnudge} alt='bg-nudge' /></div> */}
                    <div>
                        <div className='link-input'>Shorten a link here...</div>
                        <div className='link-submit'>Shorten It!</div>
                    </div>
                </div>
            </section>
            <section>
                <div className='stat-container'>
                    <h2 className='stat-header'>Advanced Statistics</h2>
                    <p>Track how your links are performing across the web with our
                        advanced statistics dashboard.
                    </p>
                </div>
            </section>
        </main>
    )
}

export default Main;