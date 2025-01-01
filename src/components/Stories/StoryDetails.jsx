import React from "react";
import S1 from "../../images/Story-img-1.jpg";
import S2 from "../../images/Story-img-2.jpg";
import S3 from "../../images/Story-img-3.jpg";
import S4 from "../../images/Story-img-4.jpg";

const story1 =
  "Ryno Van der Walt and Anja De Beer’s story is a charming tale that began in 2011 when they were just kids, playing a married couple with four children in a school play. Though they didn’t stay in touch afterward, fate brought them together again in 2016, and on April 29, they began their first real relationship. They shared 18 months together before life led them down separate paths—for now.";
const story2 =
  "In 2021, during a challenging period in both their lives, Ryno Van der Walt and Anja de Beer found their way back to each other on October 3, seemingly guided by fate. They found solace in each other's presence, sharing moments like gym sessions, ice cream outings, music-filled drives, and even a small vacation with friends. Their reconnection was a testament to the comfort and joy they bring to one another.";
const story3 =
  "Ryno Van der Walt and Anja de Beer’s relationship grew even stronger on January 2, 2022, when Ryno made their bond official with a heartfelt gesture at their special KFC spot. Since then, they’ve been inseparable, sharing countless adventures and firsts together. From road-tripping to Cape Town, flying for the first time (Anja was still a baby on her first flight, so it doesn't count.), and attending an international rugby game, to meeting Anja’s biological family and forming lasting friendships, their journey has been filled with unforgettable moments. In 2024, they began deepening their faith with a year-long study of the Old Testament, further cementing their connection and building a solid foundation for their future.";
const story4 =
  "As Ryno Van der Walt and Anja de Beer celebrate their three-year anniversary on January 2, 2025, they reflect on their shared journey and look forward to a bright future. Together, they are focused on achieving key milestones: Ryno clearing his debt and Anja completing her foundation phase education degree. Their commitment to faith remains steadfast as they plan to finish the Old Testament and begin a one-year study of the New Testament. With big dreams and a clear roadmap, they are determined to build the life they envision together.";

function StoryDetails() {
  return (
    <section>
      <section id="story1">
        <div className="container-xl">
          <div className="story-image-container">
            <img
              className="story-image"
              src={S1}
              alt="story1"
            />
          </div>
          <div className="story-text-container">
            <div>
              <h3>First time we dated</h3>
              <p className="date">29 April, 2016</p>
              <p>{story1}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="story2">
        <div className="container-xl">
          <div className="story-image-container">
            <img
              className="story-image"
              src={S2}
              alt="story2"
            />
          </div>
          <div className="story-text-container">
            <div>
              <h3>When we reconnected</h3>
              <p className="date">3 October, 2021</p>
              <p>{story2}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="story3">
        <div className="container-xl">
          <div className="story-image-container">
            <img
              className="story-image"
              src={S3}
              alt="story3"
            />
          </div>
          <div className="story-text-container">
            <div>
              <h3>Our lives together</h3>
              <p className="date">2 January, 2022</p>
              <p>{story3}</p>
            </div>
          </div>
        </div>
      </section>
      
      <section id="story4">
        <div className="container-xl">
          <div className="story-image-container">
            <img
              className="story-image"
              src={S4}
              alt="story4"
            />
          </div>
          <div className="story-text-container last">
            <div>
              <h3>Our future</h3>
              <p className="date">2025 - Endlessly</p>
              <p>{story4}</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default StoryDetails;
