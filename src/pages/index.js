import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import Threemobile from "../images/Threemobile.png"
import firstmobile from "../images/firstmobile.png"
import secondmobile from "../images/secondmobile.png"
import thirdmobile from "../images/thirdmobile.png"
import cards from "../images/cards.png"
import graph from "../images/graph.png"
import linegraph from "../images/linegraph.png"
import twocards from "../images/twocards.png"
import phoneone from "../images/phoneone.png"
import smallimg from "../images/smallimg.png"
import phonetwo from "../images/phonetwo.png"
import coin from "../images/coin.png"
import phonethree from "../images/phonethree.png"
import arrow from "../images/arrow.png"
import frame from "../images/frame.png"
import threecards from "../images/threecards.png"
import tenthcard from "../images/tenthcard.png"
import mic from "../images/mic.png"
import backgroundimg from "../images/backgroundimg.png"
import threeperson from "../images/threeperson.png"
import overmbl from "../images/overmbl.png"
// import "../components/styles/styles"
// const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <div>
      <div className={styles.firstContainer}>
        <h1 className={styles.mainhead}>
          <b>
            It’s time to trade,<br></br>the <span>future.</span>
          </b>
        </h1>
        <p>Trade BTC, ETH Futures with 125x leverage and earn rewards.</p>
        <div className={styles.threemobile}>
          <img className="image" src={Threemobile} alt="" />
          <div className="overlay"></div>
        </div>
        <table>
          <tr>
            <th>00%</th>
            <th>500 Mn+</th>
            <th>250+</th>
            <th>15,000+</th>
          </tr>
          <tr>
            <td>Conversion Fee</td>
            <td>Lifetime Volume Traded</td>
            <td>Total Tradable Pairs</td>
            <td>Traders</td>
          </tr>
        </table>
      </div>
      <div className={styles.secondContainer}>
        <img src={firstmobile} alt="1" />
        <br />
        <img src={secondmobile} alt="1" />
        <br />
        <img src={thirdmobile} alt="1" />
      </div>
      <div className={styles.thirdContainer}>
        <h2>
          Trade More. <span>Pay Less.</span>
        </h2>
        <p>Our low Fees Supercharge Your Profits</p>
        <img src={cards} alt="cards" />
      </div>
      <div className={styles.fourthContainer}>
        <h2>
          Explore the Markets
          <br />
          like it is your <span>Playground.</span>
        </h2>
        <p>Search for your favorite coins and stay ahead of the market</p>
        <img src={graph} alt="3" />
        <button>Explore Markets</button>
      </div>
      <div className={styles.fifthContainer}>
        <h2> <span>   Unlock </span>New Frontiers.</h2>
        <p>Are you a stock trader looking for new opportunities to make<br/>  money? We got you covered!</p>
        <table>
          <tr>
            <th>Same<br/> Strategies</th>
            <th>Same<br/> Indicators</th>
            <th>Better<br/> Leverage</th>
            <th>24x7<br/> Trading</th>
          </tr>
        </table>
        <img src={linegraph} alt="3" />
      </div >
      <div className={styles.sixthContainer}>
        <h2>Start Small. Earn Big.</h2>
        <p>Deposity a minimum of 1000 and get a Deposit bonus +<br/> dedicagted relationship manager</p>
        <img src={twocards} alt="3" />
      </div>
      <div className={styles.seventhContainer}>
        <h2>Derivates made simple<br/>in <span>3 Easy</span> Steps </h2>
        <div className={styles.twopart}>
          <img src={phoneone} alt="3" />
          <div className={styles.sidepart}>
            <img src={smallimg} alt="s"/>
            <h3>Create an Account</h3>
            <p>Register & Complete your <br/>Verification in less than 2 minutes</p>
            <button>TRADE NOW</button>
          </div>
        </div>
        
        <div className={styles.twopart}>
          <img src={phonetwo} alt="3" />
          <div className={styles.sidepart}>
            <img src={coin} alt="s"/>
            <h3>Deposit Funds</h3>
            <p>Add funds quickly using a variety  <br/>of payment methods</p>
            <button>TRADE NOW</button>
          </div>
        </div>

        <div className={styles.twopart}>
          <img src={phonethree} alt="3" />
          <div className={styles.sidepart}>
            <img src={arrow} alt="s"/>
            <h3>Become a Trader</h3>
            <p>Choose Your Trading Pair & Trade <br/> Seamlessly </p>
            <button>TRADE NOW</button>
          </div>
        </div>
      </div>
      <div className={styles.eightContainer}>
        <h2>Backed by the Best.</h2>
        <img src={frame} alt="fr"/>
      </div>
      <div className={styles.ninethContainer}>
        <h2>Don’t take our word for it.</h2>
        <p>Hear it from our expert community of traders who have made<br/> insane amounts in a short amount of time</p>
        <img src={threecards} alt="3" />
      </div>
      <div className={styles.tenthContainer}>
        <img src={mic} alt="9"/>
        <h2>Earn Money. <span>The Easy Way.</span></h2>
        <p>No Complexity of Trading Fee, generate volume and win</p>
        <img src={tenthcard} alt="3" />
        <button>START EARNING NOW</button>
      </div>
      <div className={styles.eleventhContainer} >
        <img src={backgroundimg} alt="b"/>
        <h2>Meet the <span>Visionaries</span><br/> behind Density.</h2>
        <img src={threeperson} alt="t"/>
      </div>
      <div className={styles.twelthContainer}>
        <h1>Get started now.</h1>
        <img src={overmbl} alt="o"/>
        <button>Start Trading!</button>
      </div>
    </div>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
