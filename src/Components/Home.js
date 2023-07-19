import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import kalma from "../images/kalma.jpg";
import salah from "../images/salah.jpeg";
import roza from "../images/roza.jpg";
import zakat1 from "../images/zakat1.jpg";
import hajj1 from "../images/hajj1.jpg";
import "../styles/Islam1.css";
//
import quran4 from "../images/quran4.jpg";
import bukhari from "../images/bukhari.jpg";

import islamic from "../images/islamic.jpg";

import {
  AiFillGoogleCircle,
  AiFillYoutube,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";

function Home() {
  return (
    <>
      <div className="Home" id="Home">
        <main>
          <h1>aaahjn</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            sequi a excepturi ea corporis eum fugit neque explicabo eius ab
            corrupti quidem, harum quia, animi temporibus quo voluptas dolorum
            sit officia. Totam illum necessitatibus repellat quod porro sapiente
            id numquam. In tempora odio cumque laudantium nostrum, labore sunt
            totam neque quam, aspernatur dolor accusantium itaque! Blanditiis
            veritatis molestias, ipsa reprehenderit ad tenetur corrupti labore?
            Adipisci, nisi quae officiis recusandae nostrum eveniet at illo
            velit blanditiis doloribus eligendi ipsum veritatis tempore sapiente
            fuga distinctio amet dicta ut odit dolorem laudantium sequi
            necessitatibus. Perferendis dolores deleniti itaque doloribus ipsum
            doloremque. Officiis, corporis?
          </p>
        </main>
      </div>

      <div className="Islam1" id="Islam">
        <Carousel
          infiniteLoop
          autoPlay
          showStatus={false}
          showArrows={false}
          interval={3000}
        >
          <div>
            <img src={kalma} alt="" />
            <p className="legend"></p>
          </div>
          <div>
            <img src={salah} alt="" />
            <p className="legend"></p>
          </div>
          <div>
            <img src={roza} alt="" />
            <p className="legend"></p>
          </div>
          <div>
            <img src={zakat1} alt="" />
            <p className="legend"></p>
          </div>
          <div>
            <img src={hajj1} alt="" />
            <p className="legend"></p>
          </div>
        </Carousel>
      </div>

      <div className="Quran" id="Quran">
        <img src={quran4} alt="ssss" />
        <div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
            voluptate dignissimos quaerat reprehenderit eaque iste quas.
            Officia, quo cumque doloribus non dolorem perferendis odio error
            pariatur odit suscipit. Enim autem delectus non, sint quas minus.
            Nihil harum enim ad accusamus velit dignissimos reprehenderit
            explicabo adipisci facere, earum aliquam magni soluta?
          </p>
        </div>
      </div>
      <div className="Hadees" id="Hadees">
        <img src={bukhari} alt="" />
        <div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti
            voluptate dignissimos quaerat reprehenderit eaque iste quas.
            Officia, quo cumque doloribus non dolorem perferendis odio error
            pariatur odit suscipit. Enim autem delectus non, sint quas minus.
            Nihil harum enim ad accusamus velit dignissimos reprehenderit
            explicabo adipisci facere, earum aliquam magni soluta?
          </p>
        </div>
      </div>
      <div className="Home3" id="About">
        <div>
          <h1>About</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit
            explicabo aperiam debitis, harum quis, modi consequuntur dolore,
            recusandae facere itaque corporis maxime architecto inventore
            laboriosam officiis nisi. Minima sequi dignissimos reiciendis sint
            explicabo maxime itaque enim distinctio eum ipsa reprehenderit fugit
            dolorem voluptate recusandae deleniti voluptas, ea, quas cupiditate
            aliquam.
          </p>
        </div>
      </div>
      <div className="Home4" id="Contact">
        <div>
          <h1>Contact</h1>

          <article>
            <div
              style={{
                animationDelay: "0.3s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div
              style={{
                animationDelay: "0.5s",
              }}
            >
              <AiFillFacebook />
              <p>Facebook</p>
            </div>
            <div
              style={{
                animationDelay: "0.7s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
            <div
              style={{
                animationDelay: "1s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default Home;
