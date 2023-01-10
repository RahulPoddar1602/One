import React from 'react'
import vg from "../assets/2.webp"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"

const Home = () => {
  return (
    <>
    <div className='home' id="home">
        <main>
            <h1>TechStar</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, repellendus.</p>
        </main>
    </div>
    <div className="home2">
        <img src={vg} alt="Graphics" />
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam maiores animi repudiandae debitis molestiae expedita quibusdam beatae. Illum, numquam odit.</p>
        </div>
    </div>
    <div className="home3" id="about">
        <div>
            <h1>Who we are?</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore veniam harum animi. Illum asperiores nesciunt, magni, numquam qui officia placeat laborum possimus quas similique tenetur sunt quae hic quaerat maxime, exercitationem cum aut atque tempore consequatur suscipit. Possimus quaerat, sed voluptas in molestias recusandae libero minima ratione dolorem aperiam architecto dolor vitae, itaque cum reprehenderit non consequatur? Temporibus excepturi tempora ratione id quis, recusandae odit cum doloribus nam nesciunt numquam? Doloribus at voluptates voluptatum eligendi fugit, ex modi hic beatae numquam dignissimos perspiciatis assumenda dolorem nam iste sequi, facere dicta rem dolorum consectetur placeat. Rerum, natus. Blanditiis voluptate voluptas quis.
            </p>
        </div>
    </div>
    <div className="home4" id="brands">
    <div>

        <h1>Brands</h1>
        <article>
            <div style={{
                animationDelay:'0.3s'
            }}>
                <AiFillGoogleCircle />
                <p>Google</p>
            </div>
            <div style={{
                animationDelay:'0.5s'
            }}>
                <AiFillAmazonCircle />
                <p>Amazon</p>
            </div>
            <div style={{
                animationDelay:'0.7s'
            }}>
                <AiFillInstagram />
                <p>Instagram</p>
            </div>
            <div style={{
                animationDelay:'0.9s'
            }}>
                <AiFillYoutube  />
                <p>YouTube</p>
            </div>
        </article>
    </div>
    </div>
    </>
  )
}

export default Home