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
        </main>
    )
}

export default Main;