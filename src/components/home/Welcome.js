import React from 'react';
import { Link} from 'react-router-dom';


const Welcome = () => {
  return (
    <div class="sec" id="sec" >
      <h3> Welcome to the Orb </h3>
      <p> Electric vehicles are the technology of choice for eco-friendly car buyers because they have no emissions tied to their operation; they can be powered with clean, renewable energy; and even when charged with power from nonrenewable sources, the inherent fuel efficiency of electric motors versus internal combustion engines means they release less carbon per mile (when similar vehicles are compared).</p>
      <hr/><br/>
      <h4> LITHIUM-ION BATTERY </h4>
      <p>The lithium-ion battery packs that power EVs have to be plugged into 240 volts and adequate current to charge in a reasonable number of hours, so buyers should count on additional costs for the hardware and installation. Clearly, renters and those without garages are at a disadvantages.</p><br/><hr/>
      <br/>
      <p>In a country with gas prices as low as ours, this still-new technology needs a leg up to succeed, and incentives seem to be waning even as much of the world embraces or even mandates EV adoption.</p>

      <h3> What We Offer</h3>
      <p> Our Aim is to reduce the impact of Gasoline/Diesel vehicles on our Planet Earth by Replacing old Engines with Electric, Hybrid and Plug-In Hybrid Vehicles</p>
      <p> By Selecting a Plan, We can assist you </p>
      <ul>
        <li><p>Get a Brand new Vehicle on the spot or in due time</p></li>
        <li><p>Exchange your old Vehicle for a New One</p></li>
        <li><p>Replace Your old Diesel/Gas Engine for an Electric Engine </p></li>
        <li><p>Insure your car safety </p></li>
        <li><p>Assure a long lasting Battery Life and give you free charging priviledge at any charging terminals for a year or more </p></li>
      </ul>
      <hr/>
      <br/> <hr/><hr/>

      <h3> Our Plans </h3>

      <div class="card-container">
        <div class="card">
          <div class="box">
            <div class="content">
              <h2>00.</h2>
              <h3> Null Plans </h3>
              <p> Pay Full and get a Model of your choice in a Month </p>
              <ul>
                <li> (10% discount ++) </li>
              </ul>
              <Link to="/plans">Read More</Link>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="box">
            <div class="content">
              <h2>01</h2>
              <h3> Binary Plans </h3>
              <p> Pay 50%, get a Model of your choice, then pay 50% within Validity Period</p>
              <ul>
                <li> (20% discount ++) </li>
                <li> (free charge up to a year) </li>
                <li> (partly insured) </li>
              </ul>
              <Link to="/plans">Read More</Link>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="box">
            <div class="content">
              <h2>10</h2>
              <h3> Tenary Plans </h3>
              <p> Pay within a consecutive period of time, Rewarded after full installment </p>
              <ul>
                <li> (40% discount ++) </li>
                <li> (free charge up to 3 years) </li>
                <li> (free insurance) </li>
                <li>(Up to 10years warranty)</li>
                <li>( Car tracker and other accessories installed) </li>
                <li> (get a Million-Mile panasonic lithium-ion battery installed when released ) </li>
              </ul>
              <Link to="/plans">Read More</Link>
            </div>
          </div>
        </div>

        
        <div class="card">
          <div class="box">
            <div class="content">
              <h2>11.</h2>
              <h3> Even Plan </h3>
              <p> Insure your car from theft, accident, e.t.c. Your safety is our number one priority </p>
              <ul>
                <li> (Installation of tracking tools)</li>
                <li> (Free sotware updates)</li>
              </ul>
              <Link to="#"> Coming Soon </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome
