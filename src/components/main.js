import React from 'react';

const Main = () => {
    return <main>
                <div class="container">
                <div id="banner"></div>
                    <div class="wrap">
                        <div id="profile_top">
                            <img alt="Lisan Shidqi Farizan" src="assets/img/me.png" style={{ width: '25vh', filter: 'drop-shadow(4px 4px 4px black)', margin: '15px'}} />
                            <h1>I'm Lisan Shidqi Farizan</h1>
                        </div>
                        <div id="about_me">
                            <h2>Front-End Developer</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi corrupti neque laborum exercitationem, asperiores ab perspiciatis? Pariatur, facere numquam odio beatae cum reiciendis id tenetur aperiam dolor itaque, earum laboriosam.
                            </p>
                        </div>
                    </div>
                    <div class="wrap">
                        <div id="fake_project">
                            <h2>Fake Project</h2>
                            <div>
                                <a href="./Simple Calculator/withhtmlnstyle/index.html"><img alt=''/>Simple Node Calculator</a>
                                <a href="https://github.com/VEOveneht/fakeproject/tree/main/Simple%20Calculator/withhtmlnstyle/index.html"><img alt='' />Simple Calculator</a>
                                <a href><img alt=''/></a>
                                <a href><img alt=''/></a>
                            </div>
                        </div>
                        <div id="tugas_kuliah">
                            <h2>Tugas Kuliah</h2>
                            <div>
                                <a href="./Simple Calculator/withhtmlnstyle/index.html"><img alt=''/>Simple Node Calculator</a>
                                <a href="https://github.com/VEOveneht/fakeproject/tree/main/Simple%20Calculator/withhtmlnstyle/index.html"><img alt=''/>Simple Calculator</a>
                                <a href><img alt=''/></a>
                                <a href><img alt=''/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
}

export default Main;