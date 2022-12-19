import React from "react";
import "./Newpaper.css";
export const Newspaper = () => {
  return (
    <div>
      <nav>
        <ul className="Nav">
          <li className="Nav__item ">Issue, june</li>
          <li className="Nav__item Nav--align">News</li>
        </ul>
      </nav>
      <header className="Heading">
        <h1 className="Heading__item">NEWSPAPER</h1>
      </header>
      <div className="News1">
        <div className="News1__dis">
          <h2 className="News1__dis__heading">
            ET HARUM QUIDEM RERUM FACILIS EST ET EXPEDITA DISTINCTIO.
          </h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam officiis aliquid inventore at commodi, mollitia perspiciatis! Perferendis adipisci qui sit aperiam maiores expedita sed reprehenderit unde! Officiis, maxime vitae? Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni qui sit soluta ab, suscipit culpa eius quae dignissimos unde cumque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, obcaecati. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex veniam quasi impedit quaerat vel culpa distinctio sequi rem omnis provident. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quam reprehenderit nulla molestias provident eligendi exercitationem doloribus incidunt animi maxime. </p>
        </div>
        <div className="news1__img"></div>
      </div>
      <div className="News2 News1">
        <div className="News2__img ">
        </div>
        <div className="News2__dis">
            <h2 className="Newws2__dis__heading">ET HARUM QUIDEM RERUM FACILIS EST.</h2>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem aliquid natus explicabo, atque, labore totam quisquam odio saepe obcaecati et, suscipit repellat aspernatur mollitia dignissimos placeat unde itaque blanditiis? Itaque rerum a voluptas pariatur quae, id, iusto impedit ducimus et sapiente reprehenderit laborum consectetur ex tenetur natus at corrupti eos. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque autem eos alias perferendis a explicabo consequuntur sed dolores aperiam esse!</p>
        </div>
      </div>
      <div className="Footer">
        <div className="Footer__item">
            <h2 className="Footer_item_head">Your Title Here</h2>
            <p className="Footer__item_para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. At eligendi ab quasi error repellat! Impedit ea nobis praesentium vero nostrum obcaecati ipsum, accusamus eius quam ipsa ex animi. Ab tempore rerum veniam numquam eos doloremque labore expedita aliquid enim dolorum, iusto aut laborum omnis libero harum dicta, quasi tempora et.</p>
        </div>
        <div  className="Footer__item">
        <h2 className="Footer_item_head">Your Title Here</h2>
            <p className="Footer__item_para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. At eligendi ab quasi error repellat! Impedit ea nobis praesentium vero nostrum obcaecati ipsum, accusamus eius quam ipsa ex animi. Ab tempore rerum veniam numquam eos doloremque labore expedita aliquid enim dolorum, iusto aut laborum omnis libero harum dicta, quasi tempora et.</p>
        </div>
        <div className="Footer__item">
        <h2 className="Footer_item_head">Your Title Here</h2>
            <p className="Footer__item_para">Lorem ipsum dolor, sit amet consectetur adipisicing elit. At eligendi ab quasi error repellat! Impedit ea nobis praesentium vero nostrum obcaecati ipsum, accusamus eius quam ipsa ex animi. Ab tempore rerum veniam numquam eos doloremque labore expedita aliquid enim dolorum, iusto aut laborum omnis libero harum dicta, quasi tempora et.</p>
        </div>
      </div>
    </div>
  );
};
