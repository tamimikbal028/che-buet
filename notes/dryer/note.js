window.NOTES_REGISTRY = window.NOTES_REGISTRY || [];
window.NOTES_REGISTRY.push({
  id: "dryer",
  title: "Drying of Solids / Dryer",
  shortTitle: "Drying of Solids / Dryer",
  subtitle: "Dr. Md Tanvir Sowgath &nbsp;|&nbsp; 99 Slides",
  meta: "10 Topics · 99 Slides",
  slideCount: "99 Slides",
  defaultSlidesPath: "slides",
  html: String.raw`
      <!-- SECTION 1 -->
      <section class="topic-section" id="topic-1" data-topic="1" data-short="Introduction &amp; Solid Handling">
      <h2 class="section-title">
        1. Introduction, Forms of Solids &amp; Solid Handling
      </h2>

      <h3 class="sub-title">
        1.1 Introduction
        <span class="slide-tag">Slides 1, 2</span>
      </h3>
      <ul>
        <li>
          <strong>Drying of a wet solid</strong> means the removal of relatively small amounts of water or
          other liquid from the solid material to reduce the content of residual liquid to an
          acceptably low value.
        </li>
        <li>
          Drying is usually the final step in a series of operations, and the product from a
          dryer is often ready for final packaging.
        </li>
        <li>
          <strong>Solid-liquid separation:</strong>
          <ul>
            <li>Mechanical separation: Filtration, Centrifugal Separation etc.</li>
            <li>Drying: Thermal vaporization.</li>
          </ul>
        </li>
        <li>
          It is generally cheaper to remove liquid mechanically than thermally. Thus it is
          advisable to reduce the liquid content as much as practicable before feeding the
          material to a heated dryer.
        </li>
        <li>
          <strong>Examples:</strong>
          <ul>
            <li>Production of soda ash: Drying of soda ash in a rotary dryer.</li>
            <li>Paper production: Drying of paper sheet on steam heated cylindrical dryer.</li>
          </ul>
        </li>
      </ul>

      <div class="grid-2">
        <div class="card">
          <h4>
            1.2 Forms of Solids to be dried
            <span class="slide-tag">Slide 3</span>
          </h4>
          <ul style="margin-bottom: 0">
            <li>Flakes, granules, crystals, powders, slabs, continuous sheets (paper, textile products).</li>
            <li>These may have widely different properties.</li>
            <li><strong>Salt crystals and sand:</strong> Liquid to be vaporized is on the surface of the solid.</li>
            <li><strong>Polymer sheet:</strong> Solvent to be removed may be entirely within the solid.</li>
            <li>The liquid may be partly outside and partly inside.</li>
          </ul>
        </div>

        <div class="card">
          <h4>
            1.3 Liquid content of dried substances
            <span class="slide-tag">Slide 4</span>
          </h4>
          <ul style="margin-bottom: 0">
            <li>The liquid content or equilibrium moisture content of a dried substance varies from product to product.</li>
            <li>
              <strong>Common dried substances do contain some liquid:</strong>
              <ul>
                <li>Dried table salt contains 0.5% water</li>
                <li>Dried coal contains 4% moisture</li>
                <li>Drying paper contains 6–10% moisture</li>
              </ul>
            </li>
            <li><strong>Bone dry:</strong> The product contains no liquid.</li>
            <li>Thus drying is a relative term and means merely that there is a reduction in liquid content from an initial value to some acceptable final value.</li>
          </ul>
        </div>
      </div>

      <div class="fig-box">
        <strong>Slide 4: Figure 25-3. Equilibrium-moisture curves at 25&deg;C (McCabe, Smith)</strong><br />
        <img src="{{SLIDES}}/slide_04.png" alt="Slide 4 - Figure 25-3 Equilibrium-moisture curves at 25 C" style="width:86%; margin:6px auto 0 auto;" />
      </div>

      <h3 class="sub-title">
        1.4 Drying environment and solid handling
        <span class="slide-tag">Slides 5, 6</span>
      </h3>
      <ul>
        <li>
          The dried product may be able to stand rough handling and a very hot environment,
          or it may require gentle treatment at low or moderate temperatures.
        </li>
        <li>
          Consequently, a wide variety of dryers are available on the market for commercial
          drying. These differ mainly in the way the solids are moved through the drying zone
          and in the way heat is transferred.
        </li>
      </ul>
      <p><strong>Solid Handling in Dryer (Figure 25-1, McCabe, Smith):</strong></p>
      <ul>
        <li><strong>a.</strong> Gas flow across a static bed of solids: Cross-circulation drying</li>
        <li><strong>b.</strong> Gas passing through a bed of preformed solids: Through-circulation drying</li>
        <li><strong>c.</strong> Showering action in a rotary dryer: Some entrainment of fine particles in the gas</li>
        <li><strong>d.</strong> Fluidized solids bed: There is some entrainment of finer particles</li>
        <li><strong>e.</strong> Co-current gas-solids flow in a pneumatic-conveyor flash dryer: After drying operation the gas and solids are separated in a mechanical separator.</li>
      </ul>

      <div class="fig-box">
        <strong>Slide 6: Figure 25-1. Patterns of gas-solid interaction in dryers (McCabe, Smith)</strong><br />
        <img src="{{SLIDES}}/slide_06.png" alt="Slide 6 - Figure 25-1 Patterns of gas-solid interaction in dryers" style="width:88%; margin:6px auto 0 auto;" />
      </div>
      </section>

      <!-- SECTION 2 -->
      <section class="topic-section" id="topic-2" data-topic="2" data-short="Principles of Drying &amp; Drying Curves">
      <h2 class="section-title">
        2. Principles of Drying: Drying Curves &amp; Falling-Rate Periods
      </h2>

      <h3 class="sub-title">
        2.1 Temperature patterns in dryers
        <span class="slide-tag">Slide 7</span>
      </h3>
      <ul>
        <li>Mechanism of drying: Drying curve</li>
        <li>Calculation of Drying time</li>
      </ul>
      <div class="fig-box">
        <strong>Slide 7: Figure 25-2. Temperature patterns in dryers: (a) batch dryer; (b) continuous countercurrent adiabatic dryer (McCabe, Smith)</strong><br />
        <img src="{{SLIDES}}/slide_07.png" alt="Slide 7 - Figure 25-2 Temperature patterns in dryers" style="width:88%; margin:6px auto 0 auto;" />
      </div>

      <h3 class="sub-title">
        2.2 Drying Curve &amp; Drying Rate Curve
        <span class="slide-tag">Slides 8, 9</span>
      </h3>
      <div class="fig-box">
        <strong>Slide 8: Figure 18.1 (Typical drying curve for constant drying conditions, moisture content as a function of time) &amp; Figure 18.2 (Typical drying rate curve for constant drying conditions, drying rate as a function of moisture content)</strong><br />
        <img src="{{SLIDES}}/slide_08.png" alt="Slide 8 - Figures 18.1 and 18.2 Typical drying curve and drying rate curve" style="width:92%; margin:6px auto 0 auto;" />
      </div>

      <div class="fig-box">
        <strong>Slide 9: Figures 18.4, 18.5 &amp; 18.6 — Moisture distribution in a particulate-solid bed during the first falling-rate period, second falling-rate period, and toward the end of the drying process</strong><br />
        <img src="{{SLIDES}}/slide_09.png" alt="Slide 9 - Figures 18.4, 18.5, 18.6 Moisture distribution in falling-rate periods" style="width:92%; margin:6px auto 0 auto;" />
      </div>
      </section>

      <!-- SECTION 3 -->
      <section class="topic-section" id="topic-3" data-topic="3" data-short="Classification, Tray, Conveyor, Drum &amp; Tunnel Dryers">
      <h2 class="section-title">
        3. Classification of Dryers &amp; Tray, Vacuum, Conveyor, Drum, Cylindrical &amp; Tunnel Dryers
      </h2>

      <h3 class="sub-title">
        3.1 Classification of dryers
        <span class="slide-tag">Slide 10</span>
      </h3>
      <ul>
        <li>
          <strong>a.</strong> There is no simple way of classifying drying equipment. Dryers may be:
          <ul>
            <li>Continuous</li>
            <li>Batch</li>
            <li>With agitation of solids</li>
            <li>Operation under vacuum (to reduce the drying temp.)</li>
          </ul>
        </li>
        <li><strong>b.</strong> Types of feed: Particles, slurry, paste etc.</li>
        <li>
          <strong>c.</strong> A major division of dryers:
          <ul>
            <li><strong>Direct contact dryers:</strong> The solids are exposed to a hot gas.</li>
            <li><strong>Indirect contact dryers:</strong> Heat is transferred to the drying solids through a wall (steam-heated dryer).</li>
          </ul>
        </li>
      </ul>

      <h3 class="sub-title">
        3.2 Tray Dryer
        <span class="slide-tag">Slides 11, 12</span>
      </h3>
      <ul>
        <li>The simplest type of dryer is Tray dryer.</li>
        <li>No of tray may be 10 to 20.</li>
        <li>Tray dryers are used for batch operation to <strong>dry small quantities</strong> of solids, and are used for a wide range of materials.</li>
        <li>The material to be dried is placed in solid bottomed trays over.</li>
        <li>Steam, electricity and heated air is usually drying medium.</li>
        <li>Batch dryers have high labour requirements.</li>
        <li>Close control can be maintained over the drying conditions and the product inventory, and they are suitable for drying valuable products.</li>
      </ul>
      <div class="grid-2">
        <div class="fig-box" style="margin: 0">
          <strong>Slide 11: Figure 18.14. A typical 20-tray dryer (30 by 40 in. trays on 4 in. centers; Proctor &amp; Schwartz, Inc., Foust)</strong><br />
          <img src="{{SLIDES}}/slide_11.png" alt="Slide 11 - Figure 18.14 Typical 20-tray dryer" style="width:100%; margin-top:6px;" />
        </div>
        <div class="fig-box" style="margin: 0">
          <strong>Slide 12: Figure 10.25. Tray dryer (Coulson and Richardson, Volume 6, 4th edition)</strong><br />
          <img src="{{SLIDES}}/slide_12.png" alt="Slide 12 - Figure 10.25 Tray dryer" style="width:100%; margin-top:6px;" />
        </div>
      </div>

      <h3 class="sub-title">
        3.3 Vacuum Self Dryer
        <span class="slide-tag">Slide 14</span>
      </h3>
      <ul>
        <li>These dryers are used for biological and other products that may be heat sensitive.</li>
      </ul>
      <div class="fig-box">
        <strong>Slide 14: Vacuum Self Dryer</strong><br />
        <img src="{{SLIDES}}/slide_14.png" alt="Slide 14 - Vacuum Self Dryer" style="width:78%; margin:6px auto 0 auto;" />
      </div>

      <h3 class="sub-title">
        3.4 Conveyor Dryer (Through Circulation)
        <span class="slide-tag">Slides 15, 16, 17, 18</span>
      </h3>
      <ul>
        <li>A layer of material is dried slowly carried on travelling screen trough a drying chamber. Temperature are varied in different section.</li>
        <li>
          <strong>Single conveyor dryer:</strong> Fans pull air through the heater section located beneath them, pass it through the wet stock on the conveyor, and return it to the bottom of the heater. The <strong>conveyor belt</strong> is made of perforated <strong>metal plate or woven wire</strong>, and the <strong>heater</strong> is usually <strong>of steam-heated finned tubes</strong>.
        </li>
        <li>
          Conveyor <strong>widths vary between 15 in. and 9 ft and lengths vary up to 160 ft</strong>. Preforming of the feed (extrusion, granulating, or scoring filter cake into uniform pieces) is often practiced to increase drying rate and obtain a more desirable product. Bed thickness on the belt can vary between <strong>1/2 and 6 in.</strong> (Courtesy of Proctor &amp; Schwartz, Inc.)
        </li>
        <li>The solids are fed on to an endless, perforated, slowly moving conveyor belt, through which hot air is forced.</li>
        <li>The belt is housed in a long rectangular cabinet, which consists of different zones / separate sections, so that the flow pattern and temperature of the drying air can be controlled.</li>
        <li>A layer 25 to 150 mm (1 to 6 in.) thick of material to be dried is slowly carried on a traveling metal screen through a long drying chamber or tunnel.</li>
        <li>At the inlet end (or wet end) of the dryer the air usually passes upward through the screen and the solids; near the discharge end, where the material is dry and may be dusty, air is passed downward through the screen.</li>
        <li>The air temperature and humidity may differ in the various sections, to give optimum conditions for drying at each point.</li>
        <li>Screen-conveyor dryers are typically <strong>2 m (6 ft) wide</strong> and <strong>4 to 50 m (12 to 150 ft) long</strong>, giving drying times of <strong>5 to 120 min</strong>.</li>
        <li>The minimum screen size is about <strong>30-mesh (0.595 mm)</strong>.</li>
        <li>Coarse granular, flaky, or fibrous materials can be dried by through circulation without pretreatment or loss through the screen; pastes and filter cakes of fine particles must be preformed first.</li>
        <li>The aggregates usually retain their shape while being dried and do not dust through the screen except in small amounts; provision is sometimes made for recovering any fines that do sift through.</li>
      </ul>
      <div class="grid-2">
        <div class="card">
          <h4>Advantages &amp; Application <span class="slide-tag">Slide 18</span></h4>
          <ul style="margin-bottom: 0">
            <li>Screen-conveyor dryers handle a variety of solids continuously and with a very gentle action.</li>
            <li>High drying rates can be achieved, with good product-quality control.</li>
            <li>Low steam consumption: typically <strong>2 kg of steam per kilogram of water evaporated</strong>.</li>
            <li>Air may be recirculated through and vented from each section separately, or passed from one section to another countercurrently to the solid.</li>
            <li><strong>Application:</strong> Particularly applicable when drying conditions must be appreciably changed as the moisture content of the solid is reduced.</li>
          </ul>
        </div>
        <div class="card">
          <h4>Disadvantages <span class="slide-tag">Slide 18</span></h4>
          <ul style="margin-bottom: 0">
            <li>High initial cost and, due to the mechanical belt, high maintenance costs.</li>
          </ul>
        </div>
      </div>
      <div class="grid-2">
        <div class="fig-box" style="margin: 0">
          <strong>Slide 15: Conveyer Dryer (Single conveyor dryer; Proctor &amp; Schwartz, Inc.)</strong><br />
          <img src="{{SLIDES}}/slide_15.png" alt="Slide 15 - Single Conveyor Dryer" style="width:100%; margin-top:6px;" />
        </div>
        <div class="fig-box" style="margin: 0">
          <strong>Slide 16: Fig. 20-30 (Sectional view) &amp; Fig. 20-31 (Section assembly) of continuous through-circulation conveyor dryer</strong><br />
          <img src="{{SLIDES}}/slide_16.png" alt="Slide 16 - Through Circulation Conveyor Dryer" style="width:100%; margin-top:6px;" />
        </div>
      </div>

      <h3 class="sub-title">
        3.5 Drum Dryer
        <span class="slide-tag">Slides 19, 20</span>
      </h3>
      <ul>
        <li>Slurries and pastes are dried in drum dryer.</li>
        <li>These dryers are rotating horizontal cylinders heated with steam on the inside.</li>
        <li>The slurry to be dried is spread over the outside surface.</li>
        <li>When the slurry has made about three quarters of a complete rotation, the drum surface is scrapped with doctor knife.</li>
        <li>The product is flaked form.</li>
        <li>The rotation rate, drum surface temperature, slurry thickness are adjusted to give desired moisture content of solid.</li>
        <li>The rotation rates: <strong>1–10 rpm</strong>.</li>
        <li>Various drum arrangements and feed methods are available (pan feed, dip feed, splash feed, double-drum, vacuum double-drum).</li>
      </ul>
      <div class="grid-2">
        <div class="fig-box" style="margin: 0">
          <strong>Slide 19: Figure 18.36 (Single-drum dryer with pan feed) &amp; Figure 18.37 (Vacuum double-drum dryer)</strong><br />
          <img src="{{SLIDES}}/slide_19.png" alt="Slide 19 - Figures 18.36 and 18.37 Drum dryers" style="width:100%; margin-top:6px;" />
        </div>
        <div class="fig-box" style="margin: 0">
          <strong>Slide 20: Figure 18.35 (Twin-drum dryer with splash feed) &amp; Figure 18.33 (Double-drum dryer, Foust)</strong><br />
          <img src="{{SLIDES}}/slide_20.png" alt="Slide 20 - Figures 18.35 and 18.33 Twin and double drum dryers" style="width:100%; margin-top:6px;" />
        </div>
      </div>

      <h3 class="sub-title">
        3.6 Rotary Vacuum Dryer
        <span class="slide-tag">Slide 21</span>
      </h3>
      <ul>
        <li>The dryer operate as batches.</li>
        <li>At high moisture content, the slurry is relatively free moving.</li>
        <li>As drying proceeds, it becomes viscous and paste.</li>
        <li>As drying continues, it become heavy adhesive material that is difficult to move.</li>
        <li>As drying continues mass break up into lumps. Lumps continuously break up until free flowing granular product.</li>
      </ul>
      <div class="fig-box">
        <strong>Slide 21: Figure 18.28. Interior view of a rotary vacuum dryer (Heat supplied by vessel jacket; rotor blades keep mass in motion and scrape surfaces clean; The Bethlehem Corporation)</strong><br />
        <img src="{{SLIDES}}/slide_21.png" alt="Slide 21 - Figure 18.28 Rotary Vacuum Dryer" style="width:82%; margin:6px auto 0 auto;" />
      </div>

      <h3 class="sub-title">
        3.7 Cylindrical Dryer
        <span class="slide-tag">Slide 22</span>
      </h3>
      <ul>
        <li>These dryers used to dry for continuous sheet of paper.</li>
        <li>They consists of a number of steam heated rolls over which sheet passes continuously.</li>
        <li>The Cylinders indicated as &ldquo;A&rdquo; and the sheet is indicated as &ldquo;B&rdquo;.</li>
        <li>The bearings that carry cylinders are shown as &ldquo;C&rdquo;.</li>
        <li>Steam is introduced at &ldquo;J&rdquo; and enters the cylinder through space between pipes &ldquo;A&rdquo; and &ldquo;G&rdquo;.</li>
        <li>&ldquo;G&rdquo; is a stationary pipe and serves as condensate outlet.</li>
      </ul>
      <div class="fig-box">
        <strong>Slide 22: FIG. 10-7. Cylinder dryer: A, cylinders; B, sheet; C, bearings</strong><br />
        <img src="{{SLIDES}}/slide_22.png" alt="Slide 22 - Fig 10-7 Cylinder dryer" style="width:82%; margin:6px auto 0 auto;" />
      </div>

      <h3 class="sub-title">
        3.8 Tunnel Kiln &amp; Ceramic Kiln (BISF)
        <span class="slide-tag">Slides 23, 24, 25</span>
      </h3>
      <ul>
        <li>Depending upon the flow of wet solid and hot gases, the kilns can be: (i) Parallel, (ii) Counter current, or (iii) Combination of both.</li>
        <li>Wet solids to be dried is placed in trays and trucks which moves progressively through the tunnel in contact with hot gases (combustion gases or hot air). Kilns are direct fired.</li>
        <li>Flow direction of hot gases and solid may be: Countercurrent, Parallel, Combination of both.</li>
        <li>The air is heated directly or indirectly by combustion or at temperature below 200&deg;C by finned steam coils. So refractory lining is necessary.</li>
        <li><strong>Application:</strong> These dryers are suitable for large quantity production.</li>
        <li><strong>BISF Tunnel Kiln / Ceramic Kiln BISF:</strong> Two computer-controlled, continuously operating tunnel kilns in BISF, Dhaka (one for sanitary ware, one for insulators), using natural gas as fuel.</li>
        <li>A tunnel kiln may comprise of several units, each unit with individual combustion and associated control system; handles large irregular shaped objects.</li>
      </ul>
      <div class="fig-box">
        <strong>Slide 23: FIG. 20-29. Three types of tunnel dryers: (a) Countercurrent, (b) Parallel Current, (c) Center Exhaust (Perry, 6th)</strong><br />
        <img src="{{SLIDES}}/slide_23.png" alt="Slide 23 - Fig 20-29 Tunnel dryers" style="width:88%; margin:6px auto 0 auto;" />
      </div>
      <div class="grid-2">
        <div class="fig-box" style="margin: 0">
          <strong>Slide 24: BISF Tunnel Kiln</strong><br />
          <img src="{{SLIDES}}/slide_24.png" alt="Slide 24 - BISF Tunnel Kiln" style="width:100%; margin-top:6px;" />
        </div>
        <div class="fig-box" style="margin: 0">
          <strong>Slide 25: Ceramic Kiln BISF (Pre-heating, Firing &amp; Cooling zones + Temperature vs. Time curve)</strong><br />
          <img src="{{SLIDES}}/slide_25.png" alt="Slide 25 - Ceramic Kiln BISF" style="width:100%; margin-top:6px;" />
        </div>
      </div>
      </section>

      <!-- SECTION 4 -->
      <section class="topic-section" id="topic-4" data-topic="4" data-short="Rotary Dryers, Design Ranges &amp; Efficiencies">
      <h2 class="section-title">
        4. Rotary Dryers, Design Ranges, Thermal Efficiencies &amp; Rotary Variants
      </h2>

      <h3 class="sub-title">
        4.1 Rotary Dryer Fundamentals &amp; Flights
        <span class="slide-tag">Slides 26, 27, 28</span>
      </h3>
      <ul>
        <li>In rotary dryers the solids are conveyed along the inside of a rotating, inclined, cylinder and are heated and dried by direct contact with hot air/gases flowing through the cylinder. In some, the cylinders are indirectly heated.</li>
        <li>More material is dried in rotary dryers than in any other type of dryer. The capital investment is low, they can last for years without maintenance problems, and their heat efficiency is high.</li>
        <li>A rotary dryer is a cylindrical shell which rests on exterior trunnions (rollers and gear-pinion arrangements) so placed that the entire shell may be rotated. Mounted at a modest angle with the horizontal so that feed material introduced at the upper end travels to the lower (discharge) end.</li>
        <li><strong>Length / diameter:</strong> 10 or 12 to 1, to as low as 2:1.</li>
        <li><strong>Rotary dryer flights:</strong> Fin-like structures affixed to the interior of the rotating cylinder and placed spirally or parallel along the length of the shell; radial or bent at a slight angle to shower the material through the open space of the dryer and increase heat transfer efficiency between the material and the gas stream.</li>
      </ul>
      <div class="grid-2">
        <div class="fig-box" style="margin: 0">
          <strong>Slide 27: Fig. Rotary dryer flights (Lifting flights sketch &amp; interior view)</strong><br />
          <img src="{{SLIDES}}/slide_27.png" alt="Slide 27 - Rotary dryer flights" style="width:100%; margin-top:6px;" />
        </div>
        <div class="fig-box" style="margin: 0">
          <strong>Slide 28: Fig. 10-25. Course of temperatures in a rotary dryer (Badger &amp; Banchero)</strong><br />
          <img src="{{SLIDES}}/slide_28.png" alt="Slide 28 - Fig 10-25 Course of temperatures in a rotary dryer" style="width:100%; margin-top:6px;" />
        </div>
      </div>

      <h3 class="sub-title">
        4.2 Rotary Dryer Practical Ranges of Dimensions and Operating Parameters (B.K. Dutta, 2007)
        <span class="slide-tag">Slide 29</span>
      </h3>
      <table>
        <thead>
          <tr>
            <th colspan="2">Rotary dryer practical ranges of dimensions and operating Parameters</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Shell i.d.:</strong> 1 to 10 ft</td>
            <td><strong>Length:</strong> L = 4 D to 15 D</td>
          </tr>
          <tr>
            <td><strong>Radial flight height:</strong> D/12 to D/8; <strong>shell rpm:</strong> 4 to 5</td>
            <td><strong>Peripheral shell speed:</strong> 50 &ndash; 100 ft/min</td>
          </tr>
          <tr>
            <td colspan="2"><strong>Flight count per circle:</strong> 2.4 D to 3 D</td>
          </tr>
          <tr>
            <td><strong>Inclination of the shell to the horizontal:</strong> up to 8 cm/m</td>
            <td><strong>Avg. solid retention time:</strong> 5 min to 2 h</td>
          </tr>
          <tr>
            <td><strong>Mass flow rate of the drying gas:</strong> 300 to 5000 lb/h&middot;ft<sup>2</sup></td>
            <td><strong>Drying capacity:</strong> 0.4 to 2.5 lb moisture/(h)(ft<sup>3</sup> dryer volume)</td>
          </tr>
          <tr>
            <td><strong>Number of heat transfer units in the dryer (N<sub>T</sub>):</strong> 1.5 to 2</td>
            <td><strong>Solid hold up m (i.e., fraction of the shell volume occupied by the solid at any time):</strong> 5&ndash;15%</td>
          </tr>
          <tr>
            <td colspan="2"><em>Courtesy: Principle of Mass Transfer and Separation Processes, B.K. Dutta, 2007</em></td>
          </tr>
        </tbody>
      </table>

      <h3 class="sub-title">
        4.3 Methods for Supplying Heat &amp; Rotary Dryer Thermal Efficiencies (McKetta)
        <span class="slide-tag">Slides 30, 31, 32</span>
      </h3>
      <ul>
        <li>
          <strong>Methods for supplying heat:</strong>
          <ul>
            <li>Hot air (Air heated rotary dryer) &rarr; McCabe &ndash; Smith</li>
            <li>Direct firing (Combustion gas heated rotary dryer and rotary kiln)</li>
            <li>Steam Heating (Steam tube dryer) &rarr; Perry</li>
          </ul>
        </li>
        <li>Hot air or combustion gases (in the case of direct firing) may flow in concurrent or counter current direction with the flow of material.</li>
        <li>Choice of heating medium and direction of flow largely depends upon the characteristics of material being dried.</li>
        <li>The efficiency of rotary dryer varies over a wide range.</li>
      </ul>

      <table style="max-width: 560px">
        <thead>
          <tr>
            <th>Rotary Dryer Type (McKetta)</th>
            <th>Thermal Efficiency</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Parallel current direct fired</td>
            <td>65%</td>
          </tr>
          <tr>
            <td>Parallel current hot air</td>
            <td>50%</td>
          </tr>
          <tr>
            <td>Counter current direct-fired</td>
            <td>60%</td>
          </tr>
          <tr>
            <td>Counter current hot air</td>
            <td>45%</td>
          </tr>
          <tr>
            <td><strong>Steam tube</strong></td>
            <td><strong>85%</strong></td>
          </tr>
          <tr>
            <td>Indirect fired</td>
            <td>25%</td>
          </tr>
        </tbody>
      </table>

      <div class="eq-box">
        <div class="eq-row">
          <span class="katex-eq">\text{Dryer thermal efficiency} = \left( \frac{\text{Heat needed to evaporate water}}{\text{Heat supplied to the dryer}} \right)</span>
        </div>
      </div>
      <ul>
        <li><strong>Steam tube dryers have a maximum thermal efficiency.</strong></li>
      </ul>

      <h3 class="sub-title">
        4.4 Air-Heated Rotary Dryer (McCabe &ndash; Smith)
        <span class="slide-tag">Slides 33, 34</span>
      </h3>
      <ul>
        <li>Countercurrent air-heated rotary dryer (direct contact), Fig. 25-12 (McCabe, Smith).</li>
        <li>Feed is introduced into the shell through a spout <strong>F</strong>. At the lower end the dried product discharges into a screw conveyor <strong>H</strong>.</li>
        <li>Just beyond the feed discharge point is a set of steam-heated finned pipes (<strong>J</strong>) which preheat the air. The air is moved through the dryer by a fan.</li>
        <li>In Fig. 25-12, the discharge fan (<strong>E</strong>) is placed in the stack, so that it draws air through the dryer and keeps the system under a slight vacuum. This type of draft is known as <strong>&ldquo;induced draft&rdquo;</strong>. This is desirable when the material tends to dust.</li>
        <li>The temperature profiles for the above type of dryer are shown in Fig. 10-25 (Badger and Banchero). Perry Fig. 20-34 shows component arrangements of a counter-current direct-heat rotary dryer.</li>
      </ul>
      <div class="fig-box">
        <strong>Slide 33: Figure 25-12. Countercurrent air-heated rotary dryer: A, dryer shell; B, shell-supporting rolls; C, drive gear; D, air-discharge hood; E, discharge fan; F, feed chute; G, lifting flights; H, product discharge; J, heater (McCabe, Smith)</strong><br />
        <img src="{{SLIDES}}/slide_33.png" alt="Slide 33 - Figure 25-12 Countercurrent air-heated rotary dryer" style="width:86%; margin:6px auto 0 auto;" />
      </div>

      <h3 class="sub-title">
        4.5 Direct-Heat Rotary Kilns (Perry)
        <span class="slide-tag">Slides 35, 36</span>
      </h3>
      <ul>
        <li>Direct-heat rotary kilns (Perry) &rarr; Chhatak Cement Factory.</li>
        <li>This is a metal cylinder lined on the interior with insulating brick and/or refractory brick. It is suitable for high temperature operation.</li>
        <li>The direct-fired rotary kiln replaces the ordinary rotary dryer when the wall temperature exceeds that which can be tolerated by a bare metal shell (<strong>up to 430&deg;C for carbon steel</strong>). Thus the level of temperature is the main difference.</li>
        <li>References: Fig. 20-37 Rotary kilns; Fig. 20-42 Temperatures in rotary kiln on wet process cement production; Perry 6th ed. pp. 20.33&ndash;20.38.</li>
      </ul>
      <div class="fig-box">
        <strong>Slide 35: Direct Heat Rotary kiln (Feed chute, Friction seal, Spiral flights, Girt gear, Knocker, Lifting flights, Riding rings, Trunnion and thrust roll assembly, Drive assembly, Shell, Breeching seals, Discharge)</strong><br />
        <img src="{{SLIDES}}/slide_35.png" alt="Slide 35 - Direct Heat Rotary kiln" style="width:86%; margin:6px auto 0 auto;" />
      </div>

      <h3 class="sub-title">
        4.6 Steam Tube Rotary Dryer (Foust &amp; Perry)
        <span class="slide-tag">Slides 37, 38, 39, 40</span>
      </h3>
      <ul>
        <li><strong>Indirect contact dryer</strong> (Cross-sectional view: Fig. 20-44, Perry; Photograph: Fig. 18.21 &amp; 18.22, Foust).</li>
        <li>In these dryers, steam-heated tubes run through the drying cylinder to maintain the air temperature and to act as drying surfaces.</li>
        <li><strong>Applications:</strong> Continuous drying of granular or powdery solids which cannot be exposed to ordinary atmospheric or combustion gases.</li>
        <li>Especially suitable for fine dusty particles, solvent recovery, and chemical reactions. Steam-tube units are used in <strong>soda-ash production</strong>.</li>
        <li>In Fig. 18.21 &amp; 18.22: steam enters tubes through a central inlet at the far end, distributed to a header and into the tubes; condensate discharges at the near end into a collection ring and returns through an internal tube. Each tube has a transverse spiral fin that roughly doubles the external surface area.</li>
      </ul>
      <div class="fig-box">
        <strong>Slide 37: FIG. 20-44. Steam-tube rotary dryer (General American Transportation Corp.)</strong><br />
        <img src="{{SLIDES}}/slide_37.png" alt="Slide 37 - Fig 20-44 Steam-tube rotary dryer" style="width:86%; margin:6px auto 0 auto;" />
      </div>
      <div class="grid-2">
        <div class="fig-box" style="margin: 0">
          <strong>Slide 39: Figure 18.21 &amp; Figure 18.22. Internal-steam-tube rotary dryer and internal spiral-fin tube view (Foust)</strong><br />
          <img src="{{SLIDES}}/slide_39.png" alt="Slide 39 - Figures 18.21 and 18.22 Internal steam-tube rotary dryer" style="width:100%; margin-top:6px;" />
        </div>
        <div class="fig-box" style="margin: 0">
          <strong>Slide 40: Steam Tube Rotary dryer (Cutaway schematic &amp; tube bundle photo)</strong><br />
          <img src="{{SLIDES}}/slide_40.png" alt="Slide 40 - Steam Tube Rotary dryer cutaway" style="width:100%; margin-top:6px;" />
        </div>
      </div>
      </section>

      <!-- SECTION 5 -->
      <section class="topic-section" id="topic-5" data-topic="5" data-short="Flash, Fluidized Bed, Spray &amp; Freeze Dryers">
      <h2 class="section-title">
        5. Flash, Fluidized Bed, Spray &amp; Freeze Dryers
      </h2>

      <h3 class="sub-title">
        5.1 Flash Dryer
        <span class="slide-tag">Slides 41, 42, 43</span>
      </h3>
      <ul>
        <li>Used where the needed residence time is <strong>a few seconds</strong>; requires little space and low maintenance.</li>
        <li>Adapted to drying filter cakes, centrifuge cakes, damp solids, and slurries.</li>
        <li>Turbulent flow tends to deagglomerate material down to the original feed particle size; larger wet particles stay longer and undergo further size reduction.</li>
        <li>Wet solids are added to hot dry air in a disintegrator; recycled solids may be added to hot air or mixed with wet feed. An internal recycling system (closed-loop cyclone withdrawing dry product from the center) is advantageous when a large fraction of larger particles must be recycled.</li>
        <li>
          <strong>Advantages of Flash Dryers:</strong>
          <ol>
            <li>Low residence time at dryer temperature (minimizes thermal degradation, which depends on both time and temperature).</li>
            <li>Deagglomerates powders down to original particle size.</li>
            <li>Small floor area requirements.</li>
            <li>Low maintenance and capital cost.</li>
            <li>Low residence times make it well suited to continuous operation.</li>
          </ol>
        </li>
        <li><strong>Typical materials dried:</strong> yeast filter cake, whey, starch, sewage sludge, gypsum, fruit pulp, copper sulfate, clay, chrome green, synthetic casein, potassium persulfate.</li>
      </ul>
      <div class="fig-box">
        <strong>Slide 42: FIG. 12. Flash-dryer system (Feed, Disintegrator, Ring duct, Air inlet, Heater, Manifold, Cyclone, Exhaust, Dry product)</strong><br />
        <img src="{{SLIDES}}/slide_42.png" alt="Slide 42 - Fig 12 Flash-dryer system" style="width:86%; margin:6px auto 0 auto;" />
      </div>

      <h3 class="sub-title">
        5.2 Fluidized Bed Dryers
        <span class="slide-tag">Slides 44, 45, 46</span>
      </h3>
      <ul>
        <li>Dryers in which solids are fluidized by the drying gas; units may be staged in series or with baffles.</li>
        <li>Nearly total back-mixing in a single stage gives good temperature control and allows high-temperature gas with high efficiency; pilot data are required to check fluidization characteristics; liquid feed can be sprayed into the bed in some cases.</li>
        <li>Best for fairly short residence times (for grain drying, residence time is too long and blower power too high, so spouted-bed dryers are used instead).</li>
        <li>Suitable for granular and crystalline materials within the particle size range <strong>1 to 3 mm</strong>; designed for continuous or batch operation.</li>
        <li><strong>Advantages:</strong> rapid and uniform heat transfer; short drying times with good control; low floor area requirements.</li>
        <li><strong>Disadvantage:</strong> high power requirements compared with other types.</li>
        <li><strong>Applications:</strong> large-scale drying of fertilizers, plastics materials, foundry sand, inorganic salts; small units for tablet granulations in the pharmaceutical industry.</li>
        <li>Wet feed is admitted to the top of the bed; dry product is withdrawn from the side near the bottom.</li>
        <li>Random distribution of residence times: average particle residence time is typically <strong>30 to 120 s</strong> for surface liquid vaporization only, and up to <strong>15 to 30 min</strong> when internal diffusion occurs.</li>
        <li>Small particles are heated essentially to the exit dry-bulb temperature of the fluidizing gas; thermally sensitive materials therefore require a relatively cool suspending medium.</li>
      </ul>
      <div class="fig-box">
        <strong>Slide 44: Fig. 13. Fluidized Bed Dryer flow diagram (Filtered inlet air, Blower, Air heater, Solids feed / Alternate liquid feed, Cyclone fines back-mix, Product discharge)</strong><br />
        <img src="{{SLIDES}}/slide_44.png" alt="Slide 44 - Fig 13 Fluidized Bed Dryer" style="width:86%; margin:6px auto 0 auto;" />
      </div>

      <h3 class="sub-title">
        5.3 Spray Dryer
        <span class="slide-tag">Slides 47, 48, 49, 50, 51</span>
      </h3>
      <ul>
        <li>Widely used for concentrated solutions, slurries, and thick pastes: feed is atomized in a nozzle or disc-type atomizer at the top of a vertical cylindrical vessel, mixed with hot gas (flowing upward, or downward in some designs), dried in <strong>5 to 30 s</strong>, and separated in a cyclone separator or bag filter (ref. Fig. 18.38).</li>
        <li>Open, porous particles form rapidly; combines the functions <strong>of an evaporator, a crystallizer, a dryer, a size-reduction unit, and a classifier</strong>.</li>
        <li>Especially adapted for large production units due to high installation cost; lab data from small dryers are hard to scale up.</li>
        <li><strong>Suitable materials:</strong> detergents, blood, skim milk, eggs, starch, yeast, pigments, zinc sulfate, lignin, aluminum hydroxide, silica gel, magnesium chloride, manganese sulfate, aluminum sulfate, urea, sodium sulfide.</li>
      </ul>
      <div class="grid-2">
        <div class="card">
          <h4>Advantages <span class="slide-tag">Slides 49, 50</span></h4>
          <ol style="margin-bottom: 0">
            <li>Single-step operation from liquid feed to dry product (eliminates precipitation/crystallization, centrifuging/filtering, grinding, classifying, and associated handling).</li>
            <li>Continuous operation (can also accept feed from a batch upstream step).</li>
            <li>Low maintenance costs (few moving parts).</li>
            <li>Low labor costs (single operator even on large units); slight vacuum keeps equipment and area clean.</li>
            <li>Reduced corrosion because material does not touch walls until dry, allowing lower-cost materials of construction.</li>
            <li>In cocurrent designs, rapid evaporation cools inlet gas near the atomizer, keeping surface temperatures low and further restraining corrosion.</li>
            <li>Produces uniform, hollow, spherical particles.</li>
            <li>Hollow/porous uniform particles yield lower bulk density.</li>
            <li>High solubility and reaction rates due to uniform porous particles.</li>
            <li>Preserves material quality: rapid cocurrent drying keeps wet particles near the wet-bulb temperature.</li>
            <li>Airborne process with very low material holdup.</li>
            <li>Operating variables control final moisture (above 20% down to below 0.2%), bulk density (via temperature), and particle size (via atomization).</li>
          </ol>
        </div>
        <div class="card">
          <h4>Disadvantages <span class="slide-tag">Slide 51</span></h4>
          <ul style="margin-bottom: 0">
            <li>Not highly efficient as dryers alone; much heat is lost in discharged gases.</li>
            <li>Bulky and very large, often <strong>25 m (80 ft)</strong> or more high, and not always easy to operate.</li>
            <li>Bulk density of dry solid (important for packaged products) is difficult to keep constant because it is sensitive to feed solids content, inlet gas temperature, and other variables.</li>
          </ul>
        </div>
      </div>
      <div class="fig-box">
        <strong>Slide 48: Spray Dryer (Laboratory/pilot vertical spray dryer unit with cyclone)</strong><br />
        <img src="{{SLIDES}}/slide_48.png" alt="Slide 48 - Spray Dryer" style="width:76%; margin:6px auto 0 auto;" />
      </div>

      <h3 class="sub-title">
        5.4 Freeze Drying (Tray dryer or active drying)
        <span class="slide-tag">Slides 52, 53</span>
      </h3>
      <ul>
        <li><strong>Goal:</strong> Liquid &rarr; Solid &rarr; Vapor (Cooling &rarr; Decrease Pressure below triple point [273.16 K, 611.73 Pa] &rarr; Heating / sublimation; removal of water after freezing).</li>
        <li>Produces uniform and consistent quality delicate-structure materials.</li>
        <li>Does not alter material characteristics (color and taste).</li>
        <li>Handles ultra-fine (nano) materials, temperature-sensitive products, living microorganisms, proteins, antibiotics, vitamins, blood plasma.</li>
        <li><em>&ldquo;...Freeze drying food is like cooking an egg to perfection! Temperatures and time are key for success... cook it for too short or too long, too hot or too cold and you won&rsquo;t have good eggs for your breakfast!&rdquo;</em></li>
      </ul>
      <div class="fig-box">
        <strong>Slide 52: Freeze Drying — Phase diagram (Cooling &rarr; Decrease Pressure &rarr; Heating: Liquid to Solid to Vapor)</strong><br />
        <img src="{{SLIDES}}/slide_52.png" alt="Slide 52 - Freeze Drying Phase Diagram" style="width:86%; margin:6px auto 0 auto;" />
      </div>
      </section>

      <!-- SECTION 6 -->
      <section class="topic-section" id="topic-6" data-topic="6" data-short="Selection of Drying Equipment &amp; Guidelines">
      <h2 class="section-title">
        6. Steps of Selection of Drying Equipment &amp; General Guidelines
      </h2>

      <h3 class="sub-title">
        6.1 Steps of Selection of Drying Equipment
        <span class="slide-tag">Slide 54</span>
      </h3>
      <ol>
        <li><strong>Initial selection of dryer:</strong> First consideration is operability (producing desired physical properties at desired rate). Commercial dryers are largely complementary; the nature of the material narrows selection to two or three possibilities.</li>
        <li><strong>Drying tests:</strong> Conducted in candidate dryers to determine optimum operating conditions and product characteristics, forming the basis for vendor quotations.</li>
        <li><strong>Final selection of dryer:</strong> Made from drying test results and quotations, selecting the most economical dryer based on product quality, capital cost, and operating costs.</li>
      </ol>

      <h3 class="sub-title">
        6.2 General Guidelines of Selection
        <span class="slide-tag">Slides 55, 56, 57, 58</span>
      </h3>
      <div class="grid-2">
        <div class="card">
          <h4>Process &amp; Material Criteria <span class="slide-tag">Slides 55, 56</span></h4>
          <ul style="margin-bottom: 0">
            <li><strong>Batch dryers:</strong> Production rate less than <strong>150 to 200 kg/h</strong>.</li>
            <li><strong>Continuous dryers:</strong> Production rates <strong>1 or 2 tons/h</strong> (rotary or spray dryer for larger rates; other types often more economical in small plants).</li>
            <li><strong>Feed and product handling:</strong> Select for wet feed and dry product handling. Liquids &rarr; spray, drum, or special dryers; sticky feeds &rarr; rotary vacuum dryer with scrapers, or recycle dry product.</li>
            <li><strong>Thermally sensitive materials:</strong> Dry at low temperature under vacuum, with a low-temperature heating medium, or rapidly in a flash or spray dryer (short contact time).</li>
            <li><strong>Adiabatic (direct contact) vs. nonadiabatic (indirect contact) dryers:</strong> Adiabatic units are generally less expensive despite lower thermal efficiency, but have dusting problems that can make them less economical. Nonadiabatic dryers (little or no gas) are chosen for very fine particles, gas-reactive solids, and solvent removal/recovery.</li>
          </ul>
        </div>
        <div class="card">
          <h4>Operation, Energy &amp; Cost Criteria <span class="slide-tag">Slides 55, 57, 58</span></h4>
          <ul style="margin-bottom: 0">
            <li><strong>Operation:</strong> Must be reliable, safe, and economic; should not cause plant shutdowns.</li>
            <li><strong>Dust problem:</strong> Steam tube units have minor dust problems; direct-contact dryers may have serious dust problems where stack dust removal can cost more than the dryer itself.</li>
            <li><strong>Energy efficiency:</strong> Minimize energy consumption and seek high thermal efficiency, though overall economics matter (e.g., 85% steam-tube rotary vs. 50% plain-tube rotary, since steam generation adds cost). Higher inlet gas temperature raises efficiency, except lower temperature is required for heat-sensitive materials.</li>
            <li><strong>Types of fuel:</strong> Direct heating is usually most efficient; <strong>natural gas and L.P.G.</strong> are best, followed by <strong>light oil</strong> (&ldquo;clean&rdquo; stack); heavy fuel oil needs special burners and may not give a clean stack; coal is dusty and hard to handle.</li>
            <li><strong>Maintenance costs:</strong> Major consideration; wear or breakdown of moving parts from material &ldquo;balling-up&rdquo; or sticking causes costly shutdowns.</li>
            <li><strong>Labor cost:</strong> Tray dryers have high labor costs, yet are best when only small amounts are handled.</li>
            <li><strong>Pollution:</strong> Must be controlled.</li>
          </ul>
        </div>
      </div>
      </section>

      <!-- SECTION 7 -->
      <section class="topic-section" id="topic-7" data-topic="7" data-short="Adiabatic Rotary Dryer Design Theory">
      <h2 class="section-title">
        7. Continuous Adiabatic Rotary Dryer Design Theory
      </h2>

      <h3 class="sub-title">
        7.1 Temperature Profiles &amp; Notation
        <span class="slide-tag">Slides 59, 60</span>
      </h3>
      <ul>
        <li><strong>a &rarr; INLET</strong>, <strong>b &rarr; OUTLET</strong></li>
        <li>Gas enters at T<sub>ha</sub> and exits at T<sub>hb</sub>; solid enters at T<sub>sa</sub>, remains near wet-bulb temperature of gas (T<sub>w</sub>) during constant-rate vaporization, and exits at T<sub>sb</sub>.</li>
      </ul>
      <div class="fig-box">
        <strong>Slide 60: Fig. &mdash; Temperature profiles for a counter-current rotary dryer (a &rarr; INLET, b &rarr; OUTLET, Wet bulb temp. of gas T<sub>w</sub>)</strong><br />
        <img src="{{SLIDES}}/slide_60.png" alt="Slide 60 - Temperature profiles for a counter-current rotary dryer" style="width:86%; margin:6px auto 0 auto;" />
      </div>

      <h3 class="sub-title">
        7.2 Heat Duty &amp; Energy Balance
        <span class="slide-tag">Slides 61, 62, 63, 71</span>
      </h3>
      <p><strong>Heat Duty:</strong> Sensible heat balance gives:</p>
      <div class="eq-box">
        <div class="eq-row">
          <span class="katex-eq">\begin{aligned}
\text{Heat duty} &= \left(\text{Heating of solids to its final temp}\right) + \left(\text{Heating of liq. to temp. } T_w\right) + \left(\text{Vaporization of liquid}\right) \\
&\quad + \left(\text{Heating of residual liq. from } T_w \text{ to } T_{sb}\right) + \left(\text{Heating of vapor from } T_w \text{ to exit temp. of gas}\right)
\end{aligned}</span>
        </div>
        <div class="eq-row">
          <span class="katex-eq">\begin{aligned}
\frac{q_T}{\dot{m}_s} &= c_{ps}(T_{sb} - T_{sa}) + X_a c_{pL}(T_w - T_{sa}) + (X_a - X_b)\lambda \\
&\quad + X_b c_{pL}(T_{sb} - T_w) + (X_a - X_b) c_{pv}(T_{hb} - T_w)
\end{aligned}</span>
          <span class="eq-ref">Eq. (25-1) modified (air&ndash;H<sub>2</sub>O)</span>
        </div>
      </div>
      <ul>
        <li><strong>m&#775;<sub>s</sub></strong> = mass BDS / time &nbsp; (<strong>BDS = Bone Dry Solid</strong>)</li>
        <li><strong>X<sub>a</sub></strong> = initial mass of liq. / mass BDS; &nbsp; <strong>X<sub>b</sub></strong> = final mass of liq. / mass BDS</li>
        <li><strong>q<sub>T</sub></strong> = heat transfer rate, Btu/h; &nbsp; <strong>q<sub>T</sub>/m&#775;<sub>s</sub></strong> = Btu / lb BDS</li>
        <li><strong>T<sub>w</sub></strong> = wet bulb temp. of gas = vaporization temp. (T<sub>v</sub>)</li>
        <li><strong>T<sub>hb</sub></strong> = exit gas temp. = final vapor temp. (T<sub>vb</sub>)</li>
        <li><strong>&lambda;</strong> = heat of vaporization</li>
        <li><strong>c<sub>ps</sub>, c<sub>pL</sub>, c<sub>pv</sub></strong> = sp. heats of solid, liq., and vapor respectively</li>
      </ul>

      <p>Heat duty q<sub>T</sub>/m&#775;<sub>s</sub> comes from <strong>the cooling of the gas</strong>. For a continuous adiabatic dryer, the heat balance gives:</p>
      <div class="eq-box">
        <div class="eq-row">
          <span class="katex-eq">q_T = \dot{m}_g (1 + H_a)\, c_{sa} (T_{ha} - T_{hb})</span>
          <span class="eq-ref">Eq. (25-2)</span>
        </div>
      </div>
      <ul>
        <li><strong>m&#775;<sub>g</sub></strong> = mass flow rate of dry gas</li>
        <li><strong>H<sub>a</sub></strong> = humidity of gas at inlet</li>
        <li><strong>c<sub>sa</sub></strong> = humid heat of gas at inlet humidity</li>
      </ul>

      <p><strong>Heat Transfer Coefficients:</strong></p>
      <div class="eq-box">
        <div class="eq-row">
          <span class="katex-eq">q_T = U_a V \overline{\Delta T}</span>
          <span class="eq-note">Volumetric form</span>
        </div>
        <div class="eq-row">
          <span class="katex-eq">q_T = U A \overline{\Delta T}</span>
          <span class="eq-ref">Eq. (24.3)</span>
        </div>
      </div>
      <ul>
        <li><strong>U<sub>a</sub></strong> = volumetric heat transfer coefficient, Btu / ft<sup>3</sup>&middot;h&middot;&deg;F; &nbsp; <strong>V</strong> = dryer volume, ft<sup>3</sup></li>
        <li><strong>U</strong> = overall coefficient; &nbsp; <strong>A</strong> = heat-transfer area; &nbsp; <strong>&Delta;T&#772;</strong> = average temp. difference (not necessarily logarithmic mean)</li>
      </ul>

      <h3 class="sub-title">
        7.3 Heat Transfer Units, Mass Transfer &amp; Rotary Dryer Sizing
        <span class="slide-tag">Slides 64, 65, 66</span>
      </h3>
      <p><strong>Heat Transfer Units (based on the temp. change in the gas):</strong></p>
      <div class="eq-box">
        <div class="eq-row">
          <span class="katex-eq">N_t = \int_{T_{hb}}^{T_{ha}} \frac{dT_h}{T_h - T_s} \;\Rightarrow\; N_t = \frac{T_{ha} - T_{hb}}{\overline{\Delta T}}</span>
          <span class="eq-ref">Eq. (25-6)</span>
        </div>
        <div class="eq-row">
          <span class="katex-eq">(T_w)_{\text{outlet}} = (T_w)_{\text{inlet}} \quad \text{(air-water system, adiabatic cooling)}</span>
        </div>
        <div class="eq-row">
          <span class="katex-eq">N_t = \ln \frac{T_{ha} - T_{wa}}{T_{hb} - T_{wa}}</span>
          <span class="eq-ref">Eq. (25-8)</span>
        </div>
      </div>
      <ul>
        <li><strong>&Delta;T&#772;</strong> = log mean temp. difference between the dry bulb and wet bulb temperatures of the gas.</li>
        <li><strong>T<sub>wa</sub></strong> = wet bulb temp. of the gas at inlet.</li>
        <li>For economic operation of rotary dryers: <strong>N<sub>t</sub> = 1.5 to 2.5</strong>.</li>
      </ul>

      <p><strong>Mass Transfer:</strong> In adiabatic dryers, a gas is passed over or through the solids. From the viewpoint of the gas, this kind of drying is much like adiabatic humidification.</p>
      <div class="eq-box">
        <div class="eq-row">
          <span class="katex-eq">\dot{m}_v = \dot{m}_s (X_a - X_b)</span>
          <span class="eq-ref">Eq. (25-9)</span>
        </div>
        <div class="eq-row">
          <span class="katex-eq">H_b = H_a + \frac{\dot{m}_s (X_a - X_b)}{\dot{m}_g} = H_a + \frac{\dot{m}_v}{\dot{m}_g}</span>
          <span class="eq-ref">Eq. (25-10)</span>
        </div>
      </div>
      <ul>
        <li><strong>m&#775;<sub>v</sub></strong> = average rate of mass transfer (vaporization rate); &nbsp; <strong>m&#775;<sub>s</sub></strong> = mass BDS / time</li>
        <li><strong>H<sub>a</sub></strong> = inlet humidity of gas; &nbsp; <strong>H<sub>b</sub></strong> = outlet humidity of gas</li>
      </ul>

      <p><strong>Design of Rotary Dryers:</strong> Volumetric heat transfer coefficient and heat transfer rate:</p>
      <div class="eq-box">
        <div class="eq-row">
          <span class="katex-eq">U_a = \frac{0.5\, G^{0.67}}{D}</span>
          <span class="eq-ref">Eq. (25-28)</span>
        </div>
        <div class="eq-row">
          <span class="katex-eq">q_T = U_a V \overline{\Delta T} = \frac{0.5\, G^{0.67}}{D}\, V \overline{\Delta T} = 0.125 \pi D L G^{0.67} \overline{\Delta T}</span>
          <span class="eq-ref">Eq. (25-29)</span>
        </div>
      </div>
      <ul>
        <li><strong>U<sub>a</sub></strong> = Btu / h&middot;ft<sup>3</sup>&middot;&deg;F; &nbsp; <strong>G</strong> = mass velocity of the gas, lb / h&middot;ft<sup>2</sup>; &nbsp; <strong>D</strong> = dryer diameter, ft</li>
        <li><strong>V</strong> = dryer volume, ft<sup>3</sup> = (&pi;/4) D<sup>2</sup> L; &nbsp; <strong>L</strong> = dryer length, ft; &nbsp; <strong>&Delta;T&#772;</strong> = log mean temp. diff.</li>
      </ul>
      </section>

      <!-- SECTION 8 -->
      <section class="topic-section" id="topic-8" data-topic="8" data-short="Worked Example 1: Rotary Dryer (Ex. 25-4)">
      <h2 class="section-title">
        8. Worked Example 1: Adiabatic Rotary Dryer Sizing (Example 25-4, McCabe-Smith)
      </h2>

      <div class="example-box">
        <h4>
          Example 25-4: Diameter and Length of an Adiabatic Rotary Dryer
          <span class="slide-tag">Slides 67&ndash;75, 86&ndash;93</span>
        </h4>
        <p style="margin: 0 0 8px 0">
          Calculate the <strong>diameter</strong> and <strong>length</strong> of an adiabatic rotary dryer to dry
          <strong>2,800 lb/h (1,270 kg/h)</strong> of a heat-sensitive solid from an initial moisture content of
          <strong>15%</strong> to a final moisture content of <strong>0.5%</strong>, both dry basis.
          The solids have a specific heat of <strong>0.52 Btu/lb-&deg;F</strong>; they enter at
          <strong>80&deg;F (26.7&deg;C)</strong> and must not be heated above <strong>125&deg;F (51.7&deg;C)</strong>.
          Heating air is available at <strong>260&deg;F (126.7&deg;C)</strong> and a humidity of
          <strong>0.01 lb water / lb dry air</strong>. The maximum allowable mass velocity of the air is
          <strong>700 lb/ft<sup>2</sup>-h (3,420 kg/m<sup>2</sup>-h)</strong>.
        </p>

        <p style="margin: 0 0 6px 0"><strong>Given Data (Handwritten summary, Slide 87):</strong></p>
        <ul style="margin: 0 0 10px 0">
          <li>G (max mass velocity of air) = 700 lb/ft<sup>2</sup>&middot;h; &nbsp; m&#775;<sub>s</sub> = 2,800 lb BDS/h (BDS = Bone Dry Solid)</li>
          <li>c<sub>ps</sub> = 0.52 Btu/lb&middot;&deg;F; &nbsp; c<sub>pv</sub> = 0.45 Btu/lb&middot;&deg;F (Appendix 15); &nbsp; c<sub>pL</sub> = 1.0 Btu/lb&middot;&deg;F (Appendix 16)</li>
          <li>X<sub>a</sub> = 0.15 lb H<sub>2</sub>O / lb BDS; &nbsp; X<sub>b</sub> = 0.005 lb H<sub>2</sub>O / lb BDS</li>
          <li>* &lambda; (at 102&deg;F, T<sub>w</sub>) = 1036 Btu/lb (Appendix 7/8) &mdash; <em>* after calculating wet bulb temp. of air</em></li>
        </ul>

        <p style="margin: 0 0 6px 0">
          <strong>Step 1 &mdash; Flow Arrangement &amp; Exit Gas Temperature (Eq. 25-8 / 24.8):</strong><br />
          Because the solids are heat-sensitive, <strong>cocurrent operation</strong> is used. Assume <strong>N<sub>t</sub> = 1.5</strong>.
          From the Humidity Chart (Fig. 23-3), at T<sub>ha</sub> = 260&deg;F and H<sub>a</sub> = 0.01 lb/lb, the inlet wet-bulb temperature is <strong>T<sub>wa</sub> = 102&deg;F</strong>.
          Set T<sub>sb</sub> at the maximum allowable value, <strong>125&deg;F</strong>.
        </p>
        <div class="eq-box" style="background: #fff">
          <div class="eq-row">
            <span class="katex-eq">N_t = \ln \frac{T_{ha} - T_{wa}}{T_{hb} - T_{wa}} \;\Rightarrow\; 1.5 = \ln \frac{260 - 102}{T_{hb} - 102} \;\Rightarrow\; T_{hb} = 137^\circ\text{F}</span>
            <span class="eq-ref">Eq. (25-8)</span>
          </div>
        </div>

        <p style="margin: 8px 0 6px 0"><strong>Step 2 &mdash; Rate of Vaporization &amp; Heat Duty (Eqs. 25-9 &amp; 25-1):</strong></p>
        <div class="eq-box" style="background: #fff">
          <div class="eq-row">
            <span class="katex-eq">\dot{m}_v = \dot{m}_s(X_a - X_b) = 2800(0.15 - 0.005) = 406\text{ lb/h}</span>
            <span class="eq-ref">Eq. (25-9)</span>
          </div>
          <div class="eq-row">
            <span class="katex-eq">\begin{aligned}
\frac{q_T}{\dot{m}_s} &= 0.52(125 - 80) + 0.15 \times 1.0(102 - 80) + (0.15 - 0.005)(1036) \\
&\quad + 0.005 \times 1.0(125 - 102) + 0.145 \times 0.45(137 - 102)
\end{aligned}</span>
            <span class="eq-ref">Eq. (25-1)</span>
          </div>
          <div class="eq-row">
            <span class="katex-eq">\frac{q_T}{\dot{m}_s} = 23.4 + 3.3 + 150.2 + 0.1 + 2.3 = 179.3\text{ Btu/lb}</span>
            <span class="eq-note">Only the first (23.4) and third (150.2) terms are significant</span>
          </div>
          <div class="eq-row">
            <span class="katex-eq">q_T = 179.3 \times 2800 = \mathbf{502,040\text{ Btu/h}}</span>
          </div>
        </div>

        <p style="margin: 8px 0 6px 0"><strong>Step 3 &mdash; Entering Air Flow Rate &amp; Outlet Humidity (Eqs. 25-2 &amp; 25-10):</strong><br />
        From Fig. 23-3, humid heat c<sub>sa</sub> = <strong>0.245 Btu/lb-&deg;F</strong>.</p>
        <div class="eq-box" style="background: #fff">
          <div class="eq-row">
            <span class="katex-eq">\dot{m}_g (1 + H_a) = \frac{q_T}{c_{sa}(T_{ha} - T_{hb})} = \frac{502,040}{0.245(260 - 137)} = 16,660\text{ lb/h}</span>
            <span class="eq-ref">Eq. (25-2)</span>
          </div>
          <div class="eq-row">
            <span class="katex-eq">\dot{m}_g = \frac{16,660}{1.01} = 16,495\text{ lb/h of dry air}</span>
          </div>
          <div class="eq-row">
            <span class="katex-eq">H_b = H_a + \frac{\dot{m}_v}{\dot{m}_g} = 0.01 + \frac{406}{16,495} = 0.0346\text{ lb H}_2\text{O vap / lb DA}</span>
            <span class="eq-ref">Eq. (25-10)</span>
          </div>
        </div>
        <p style="margin: 6px 0 6px 0">
          <em>Check:</em> At dry-bulb temp. T<sub>hb</sub> = 137&deg;F and H<sub>b</sub> = 0.0346, wet-bulb temp. T<sub>wb</sub> = <strong>102&deg;F</strong>, equal to T<sub>wa</sub> (as required for adiabatic drying).
        </p>

        <p style="margin: 8px 0 6px 0"><strong>Step 4 &mdash; Dryer Diameter &amp; Length (Eq. 25-29):</strong></p>
        <div class="eq-box" style="background: #fff; margin-bottom: 0">
          <div class="eq-row">
            <span class="katex-eq">\text{Cross-sectional area} = \frac{\dot{m}_g(1 + H_a)}{G} = \frac{16,660}{700} = 23.8\text{ ft}^2</span>
          </div>
          <div class="eq-row">
            <span class="katex-eq">\frac{\pi}{4} D^2 = 23.8 \;\Rightarrow\; D = \left(\frac{4 \times 23.8}{\pi}\right)^{0.5} = \mathbf{5.50\text{ ft (1.68 m)}}</span>
          </div>
          <div class="eq-row">
            <span class="katex-eq">\overline{\Delta T} = \frac{(260 - 102) - (137 - 102)}{\ln\left[(260 - 102)/(137 - 102)\right]} = 81.6^\circ\text{F}</span>
          </div>
          <div class="eq-row">
            <span class="katex-eq">L = \frac{q_T}{0.125 \pi D G^{0.67} \overline{\Delta T}} = \frac{502,040}{0.125 \pi \times 5.5 \times 700^{0.67} \times 81.6} = 35.4\text{ ft} \;\Rightarrow\; \mathbf{\text{say } 36\text{ ft (11.0 m)}}</span>
            <span class="eq-ref">Eq. (25-29)</span>
          </div>
          <div class="eq-row">
            <span class="katex-eq">\frac{L}{D} = \frac{36}{5.5} = \mathbf{6.54} \quad \text{(a reasonable value for rotary dryers)}</span>
          </div>
        </div>
      </div>

      <div class="grid-2">
        <div class="fig-box" style="margin: 0">
          <strong>Slide 67 (also Slide 86): Cocurrent Rotary Kiln Schematic &amp; Stream Conditions for Example 25-4</strong><br />
          <img src="{{SLIDES}}/slide_67.png" alt="Slide 67 - Example 25-4 Rotary Kiln Schematic" style="width:100%; margin-top:6px;" />
        </div>
        <div class="fig-box" style="margin: 0">
          <strong>Slide 69 (also Slide 93): Figure 23-3. Humidity chart. Air-water at 1 atm.</strong><br />
          <img src="{{SLIDES}}/slide_69.png" alt="Slide 69 - Figure 23-3 Humidity chart Air-water at 1 atm" style="width:100%; margin-top:6px;" />
        </div>
      </div>
      </section>

      <!-- SECTION 9 -->
      <section class="topic-section" id="topic-9" data-topic="9" data-short="Psychrometric &amp; Batch Drying-Time Equations">
      <h2 class="section-title">
        9. Psychrometric &amp; Batch Drying-Time Equations (Foust)
      </h2>

      <h3 class="sub-title">
        9.1 Psychrometric Relations: Saturation &amp; Relative Saturation
        <span class="slide-tag">Slides 84, 85</span>
      </h3>
      <div class="eq-box">
        <div class="eq-row">
          <span class="katex-eq">p_a = P y_s = P_a x</span>
          <span class="eq-ref">(17.1)</span>
        </div>
        <div class="eq-row">
          <span class="katex-eq">y_s = \frac{P_a}{P} \quad (\text{for single-component liquid phase, } x = 1)</span>
          <span class="eq-ref">(17.2)</span>
        </div>
        <div class="eq-row">
          <span class="katex-eq">\text{Percent saturation} = \frac{100\, Y \cdot \frac{M_a}{M_b}}{Y_s \frac{M_a}{M_b}} = 100\,\frac{Y}{Y_s}</span>
          <span class="eq-ref">(17.3)</span>
        </div>
        <div class="eq-row">
          <span class="katex-eq">\text{Percent relative saturation} = \frac{100\, p_a}{(p_a)_s} = \frac{100\, y}{y_s}</span>
          <span class="eq-ref">(17.4)</span>
        </div>
        <div class="eq-row">
          <span class="katex-eq">\text{Percent saturation} = \frac{\frac{100\, y}{1 - y}}{\frac{y_s}{1 - y_s}} = \frac{100\, y}{y_s} \cdot \frac{1 - y_s}{1 - y}</span>
          <span class="eq-note">Since Y = y / (1 &minus; y)</span>
        </div>
      </div>
      <ul>
        <li><strong>p<sub>a</sub></strong> = partial pressure of condensable component in the gas phase; &nbsp; <strong>P</strong> = total gas-phase pressure; &nbsp; <strong>P<sub>a</sub></strong> = vapor pressure of condensable component</li>
        <li><strong>y<sub>s</sub>, x</strong> = saturation mole fraction of condensable component in the equilibrium vapor and liquid phases, respectively</li>
        <li><strong>Y</strong> = mole ratio of condensable to noncondensable component present; &nbsp; <strong>Y<sub>s</sub></strong> = mole ratio present at saturation</li>
        <li><strong>M<sub>a</sub>, M<sub>b</sub></strong> = molecular weights of condensable and noncondensable components, respectively</li>
        <li>Relative saturation is a ratio of mole fractions (used in reporting weather data), whereas percent saturation is a ratio of mole ratios.</li>
      </ul>

      <h3 class="sub-title">
        9.2 Batch Drying Rate, Constant-Rate &amp; Falling-Rate Period Equations
        <span class="slide-tag">Slides 94, 95, 96, 97, 98, 99</span>
      </h3>
      <p><strong>Drying Rate &amp; General Drying-Time Integral:</strong></p>
      <div class="eq-box">
        <div class="eq-row">
          <span class="katex-eq">R = \frac{-W_s\, d\bar{X}'}{A\, d\theta} = \frac{N_a M_a}{A}</span>
          <span class="eq-ref">(18.5)</span>
        </div>
        <div class="eq-row">
          <span class="katex-eq">\int_{0}^{\theta} d\theta = \frac{-W_s}{A} \int_{\bar{X}_1'}^{\bar{X}_2'} \frac{d\bar{X}'}{R}</span>
          <span class="eq-ref">(18.6)</span>
        </div>
      </div>
      <ul>
        <li><strong>R</strong> = drying rate, lb of liquid evaporated per hr&middot;ft<sup>2</sup> of solid surface</li>
        <li><strong>W<sub>s</sub></strong> = weight of dry solid, lb; &nbsp; <strong>X&#772;&prime;</strong> = bulk moisture content of the solid, lb of liquid / lb of dry solid</li>
        <li><strong>X&#772;<sub>1</sub>&prime;</strong> = bulk moisture content at time 0; &nbsp; <strong>X&#772;<sub>2</sub>&prime;</strong> = bulk moisture content at time &theta;</li>
      </ul>

      <p><strong>The Constant-Rate Period (R = R<sub>C</sub>):</strong></p>
      <div class="eq-box">
        <div class="eq-row">
          <span class="katex-eq">\theta_C = \frac{-W_s}{A R_C}\left(\bar{X}_C' - \bar{X}_1'\right)</span>
          <span class="eq-ref">(18.7)</span>
        </div>
        <div class="eq-row">
          <span class="katex-eq">R_C = k_Y (Y_i - Y_V) M_a = \frac{h_V}{\lambda}(T_V - T_i)</span>
          <span class="eq-ref">(18.8)</span>
        </div>
      </div>
      <ul>
        <li><strong>X&#772;<sub>C</sub>&prime;</strong> = critical moisture content (at end of constant-rate period), lb of water / lb of dry solid; &nbsp; <strong>&theta;<sub>C</sub></strong> = time of constant-rate drying, hr</li>
        <li><strong>Critical Moisture Content:</strong> Moisture content at the end of the constant-rate period, where liquid movement to the solid surface becomes insufficient to replace evaporated liquid.</li>
      </ul>

      <p><strong>Heat-Transfer Mechanisms &amp; Correlations for h<sub>V</sub>:</strong></p>
      <div class="eq-box">
        <div class="eq-row">
          <span class="katex-eq">q_T = h_V A (T_V - T_i) = h_c A (T_V - T_i) + h_r A (T_W - T_i) + U_k A (T_V - T_i)</span>
          <span class="eq-ref">(18.9)</span>
        </div>
        <div class="eq-row">
          <span class="katex-eq">h_V = h_c + h_r + U_k \quad (\text{when chamber walls are at bulk-gas temp.})</span>
          <span class="eq-ref">(18.10)</span>
        </div>
        <div class="eq-row">
          <span class="katex-eq">\left(\frac{h_V}{c_P G_V}\right)(N_{\text{Pr}})^{2/3} = b \left(\frac{D G_V}{\mu}\right)^n</span>
          <span class="eq-ref">(18.11)</span>
        </div>
        <div class="eq-row">
          <span class="katex-eq">\left(\frac{h_V}{c_L G_V}\right)(N_{\text{Pr}})^{2/3} = 26.6 \left(\frac{D G_V}{\mu}\right)^{-0.7}</span>
          <span class="eq-ref">(18.11a)</span>
        </div>
        <div class="eq-row">
          <span class="katex-eq">h_V = 0.0128\, G_V^{0.8} \quad (\text{air drying, English units: Btu/hr}\cdot\text{ft}^2\cdot{}^\circ\text{F})</span>
          <span class="eq-ref">(18.12)</span>
        </div>
      </div>
      <ul>
        <li><strong>h<sub>c</sub></strong> = convection coefficient from gas to solid surface; &nbsp; <strong>h<sub>r</sub></strong> = radiation coefficient between material surface and chamber walls</li>
        <li><strong>U<sub>k</sub></strong> = overall coefficient by convection and conduction through the bed to the evaporating surface</li>
        <li><strong>T<sub>W</sub></strong> = temperature of walls of drying space; &nbsp; <strong>T<sub>V</sub>, T<sub>i</sub></strong> = temperatures of drying gas and liquid-gas interface (taken as wet-bulb temp. of air in Eq. 18.12)</li>
      </ul>

      <p><strong>The Falling-Rate Period (rate proportional to moisture content):</strong></p>
      <div class="eq-box">
        <div class="eq-row">
          <span class="katex-eq">\frac{R}{\bar{X}'} = \frac{R_C}{\bar{X}_C'}</span>
          <span class="eq-ref">(18.13)</span>
        </div>
        <div class="eq-row">
          <span class="katex-eq">\int_{\theta_C}^{\theta} d\theta = \frac{-W_s}{A} \int_{\bar{X}_C'}^{\bar{X}'} \frac{d\bar{X}'}{\frac{R_C}{\bar{X}_C'}\,\bar{X}'}</span>
          <span class="eq-note">Substituting in Eq. (18.6)</span>
        </div>
        <div class="eq-row">
          <span class="katex-eq">(\theta - \theta_C) = \frac{-W_s}{A}\,\frac{\bar{X}_C'}{R_C} \ln \frac{\bar{X}'}{\bar{X}_C'}</span>
          <span class="eq-ref">(18.14)</span>
        </div>
      </div>
      </section>

      <!-- SECTION 10 -->
      <section class="topic-section" id="topic-10" data-topic="10" data-short="Worked Example 2: Batch Tray Dryer (Ex. 18.1)">
      <h2 class="section-title">
        10. Worked Example 2: Batch Tray Drying Time of Raw Cotton (Example 18.1, Foust)
      </h2>

      <div class="example-box">
        <h4>
          Example 18.1: Batch Tray Drying Time for Raw Cotton
          <span class="slide-tag">Slides 76&ndash;83</span>
        </h4>
        <p style="margin: 0 0 8px 0">
          Raw cotton (dry density <strong>0.7 g/cm<sup>3</sup></strong>) is dried in a batch tray dryer from
          <strong>1 g H<sub>2</sub>O / g dry solids</strong> to <strong>0.1 g H<sub>2</sub>O / g dry solids</strong>.
          Trays are <strong>60 cm square</strong> and <strong>1 cm thick</strong>, arranged so drying occurs from the
          top surface only (bottom surface insulated). Air at <strong>75&deg;C</strong> with a <strong>50&deg;C</strong>
          wet-bulb temperature circulates across the pan surface at <strong>G<sub>V</sub> = 2500 kg/hr&middot;m<sup>2</sup></strong>.
          Critical moisture content is <strong>0.4 g H<sub>2</sub>O / g dry solids</strong>, and drying rate in the
          falling-rate period is proportional to free moisture content. Determine the drying time required.
        </p>

        <p style="margin: 0 0 6px 0">
          <strong>Step 1 &mdash; Initial Assumption &amp; Equilibrium Moisture Content (Fig. 18.11):</strong><br />
          With no initial stock temperature given, the constant-rate period is presumed to start at initial moisture content (equivalent to initial stock temp. = 50&deg;C).
          From the humidity chart at 75&deg;C dry-bulb and 50&deg;C wet-bulb: <strong>Y = 0.122 mol H<sub>2</sub>O / mol dry air</strong> and percent humidity = <strong>20%</strong>.
        </p>
        <div class="eq-box" style="background: #fff">
          <div class="eq-row">
            <span class="katex-eq">Y_s = \frac{0.122}{0.20} = 0.61 \quad (\text{saturated air at } 75^\circ\text{C})</span>
          </div>
          <div class="eq-row">
            <span class="katex-eq">Y = \frac{y}{1 - y} \;\Rightarrow\; y = 0.167, \quad y_s = 0.379</span>
          </div>
          <div class="eq-row">
            <span class="katex-eq">\text{Relative humidity} = \frac{0.167}{0.379} \times 100 = \mathbf{44.1\%}</span>
          </div>
        </div>
        <p style="margin: 6px 0 6px 0">
          From <strong>Figure 18.11</strong> (raw cotton desorption data), equilibrium moisture content
          <strong>X&#772;<sub>E</sub>&prime; = 0.052 g H<sub>2</sub>O / g dry solids</strong>.
        </p>

        <p style="margin: 8px 0 6px 0">
          <strong>Step 2 &mdash; Heat Transfer Coefficient h<sub>V</sub> (Eq. 18.12) &amp; Constant Drying Rate R<sub>C</sub>:</strong><br />
          Convert G<sub>V</sub> to English units, compute h<sub>V</sub> from Eq. (18.12), and reconvert to SI units:
        </p>
        <div class="eq-box" style="background: #fff">
          <div class="eq-row">
            <span class="katex-eq">G_V \text{ (English units)} = G_V \text{ (SI units)} \times \frac{2.2\text{ lb/kg}}{10.8\text{ ft}^2/\text{m}^2} = 2500 \times \frac{2.2}{10.8} = 509.3\text{ lb/hr}\cdot\text{ft}^2</span>
          </div>
          <div class="eq-row">
            <span class="katex-eq">h_V = 0.0128(509.3)^{0.8} = 1.874\text{ Btu/hr}\cdot\text{ft}^2\cdot{}^\circ\text{F} = 10.64\text{ watt/m}^2\text{K}</span>
            <span class="eq-ref">Eq. (18.12)</span>
          </div>
          <div class="eq-row">
            <span class="katex-eq">R_C = \frac{10.64}{\lambda}(T_V - T_i) = \frac{10.64 \times 3600}{2.383 \times 10^6}(75 - 50) = \mathbf{0.4018\text{ kg/hr}\cdot\text{m}^2}</span>
          </div>
          <div class="eq-row">
            <span class="katex-eq">W_s = 60 \times 60 \times 1 \times 0.7 \times \frac{1}{1000} = 2.52\text{ kg of dry solids}</span>
            <span class="eq-note">Tray area A = 0.60 &times; 0.60 = 0.36 m<sup>2</sup></span>
          </div>
        </div>

        <p style="margin: 8px 0 6px 0"><strong>Step 3 &mdash; Constant-Rate, Falling-Rate &amp; Total Drying Time:</strong></p>
        <div class="eq-box" style="background: #fff; margin-bottom: 0">
          <div class="eq-row">
            <span class="katex-eq">\theta_C - \theta_0 = \frac{(1 - 0.4) \times 2.52}{0.4018 \times 0.36} = \mathbf{10.45\text{ hr}}</span>
            <span class="eq-note">Constant-rate period</span>
          </div>
          <div class="eq-row">
            <span class="katex-eq">\theta_f - \theta_C = \frac{-W_s\left(\bar{X}_C' - \bar{X}_E'\right)}{A R_C} \ln \frac{\bar{X}_f - \bar{X}_E'}{\bar{X}_C' - \bar{X}_E}</span>
            <span class="eq-ref">(18.14a)</span>
          </div>
          <div class="eq-row">
            <span class="katex-eq">\theta_f - \theta_C = \frac{-2.52(0.4 - 0.052)}{0.36 \times 0.4018} \ln \frac{0.1 - 0.052}{0.4 - 0.052} = \mathbf{12.01\text{ hr}}</span>
            <span class="eq-note">Falling-rate period</span>
          </div>
          <div class="eq-row">
            <span class="katex-eq">\text{Total drying time: } \theta_f - \theta_i = 10.45 + 12.01 = \mathbf{22.46\text{ hr}}</span>
          </div>
        </div>
      </div>

      <div class="grid-2">
        <div class="fig-box" style="margin: 0">
          <strong>Slide 79: Figure 18.11. Equilibrium moisture content of raw cotton, desorption data (32)</strong><br />
          <img src="{{SLIDES}}/slide_79.png" alt="Slide 79 - Figure 18.11 Equilibrium moisture content of raw cotton" style="width:100%; margin-top:6px;" />
        </div>
        <div class="fig-box" style="margin: 0">
          <strong>Slide 82: Figure 18.18. Drying rate diagram for Example 18.1</strong><br />
          <img src="{{SLIDES}}/slide_82.png" alt="Slide 82 - Figure 18.18 Drying rate diagram for Example 18.1" style="width:100%; margin-top:6px;" />
        </div>
      </div>
      </section>
  `,
});
