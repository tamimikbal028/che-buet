export default {
  order: 2,
  id: "02-mech-sep-1",
  title: "Mechanical Separation (Lecture 1)",
  shortTitle: "Mechanical Separation (Lecture 1)",
  subtitle: "02 - Mech.sep_1_January 2025-1.pdf (22 Slides)",
  meta: "7 Topics · 22 Slides",
  slideCount: "22 Slides",
  html: String.raw`
      <!-- SECTION 1 -->
      <section class="topic-section" id="topic-1" data-topic="1" data-short="Mechanical Separation Overview">
      <h2 class="section-title">
        1. Mechanical Separation, Processes &amp; Techniques
      </h2>

      <div class="grid-2">
        <div class="card">
          <h4>
            ChE 311 — Special Topics in Unit Operations
            <span class="slide-tag">Slide 1</span>
          </h4>
          <p style="margin: 0">
            <strong>Md Kamrul Hasan</strong><br />
            Lecturer<br />
            Department of Chemical Engineering (ChE)<br />
            BUET
          </p>
        </div>

        <div class="card">
          <h4>
            Mechanical Separation (Lecture-1)
            <span class="slide-tag">Slide 2</span>
          </h4>
          <p style="margin: 0">
            <strong>Mechanical Separation</strong><br />
            Applied Process Design<br />
            E.E. Ludwig<br />
            Volume 1 (3<sup>rd</sup> Edition)<br />
            Chapter 4<br />
            (Lecture-1)
          </p>
        </div>
      </div>

      <h3 class="sub-title">
        1.1 Mechanical separation
        <span class="slide-tag">Slide 3</span>
      </h3>
      <p>
        A group of laboratory and production operations whereby the components
        of a poly-phase mixture are separated by <strong>mechanical methods</strong>
        into two or more fractions of different mechanical characteristics. The
        separated fractions may be homogeneous or heterogeneous, particulate or
        non-particulate.
      </p>
      <p>
        Mechanical separation is applicable only to the separation of phases in
        a heterogeneous mixture. They may be applied to all kinds of mixtures
        containing two or more phases, whether they <strong>are liquid-liquid,
        liquid-gas, liquid-solid, gas-solid, solid-solid, or gas-liquid-solid.</strong>
      </p>

      <h3 class="sub-title">
        1.2 Mechanical Separation Processes may involve
        <span class="slide-tag">Slide 4</span>
      </h3>
      <ul>
        <li>
          <strong>Separation of liquid particles from vapor or gas</strong>
          <ul>
            <li><strong>(Operation involved: Mist/vapor entrainment separator)</strong></li>
          </ul>
        </li>
        <li>
          <strong>Separation of liquid particles/droplets from immiscible liquids</strong>
          <ul>
            <li><strong>(Operation involved: Decantation, Settling)</strong></li>
          </ul>
        </li>
        <li>
          <strong>Separation of dust or solid particles from vapor or gas</strong>
          <ul>
            <li><strong>(Operation involved: Dust collection, Scrubbing, Centrifugation)</strong></li>
          </ul>
        </li>
        <li>
          <strong>Separation of solid particles from liquid</strong>
          <ul>
            <li><strong>(Operation involved: Filtration, Centrifugation, Sedimentation)</strong></li>
          </ul>
        </li>
        <li>
          <strong>Separation of solid particles from other solids</strong>
          <ul>
            <li><strong>(Operation involved: Screening, Classification)</strong></li>
          </ul>
        </li>
      </ul>

      <h3 class="sub-title">
        1.3 Mechanical separation techniques
        <span class="slide-tag">Slide 5</span>
      </h3>
      <p>Various techniques based on differences in:</p>
      <ul>
        <li>densities</li>
        <li>sizes</li>
        <li>surface properties</li>
        <li>fluidities</li>
        <li>electrostatic charging</li>
        <li>magnetic properties</li>
      </ul>
      </section>

      <!-- SECTION 2 -->
      <section class="topic-section" id="topic-2" data-topic="2" data-short="Based on Density Differences">
      <h2 class="section-title">
        2. Mechanical separation techniques based on density differences
      </h2>

      <h3 class="sub-title">
        2.1 Settling/Sedimentation/Decantation
        <span class="slide-tag">Slide 6</span>
      </h3>
      <ul>
        <li><strong>Feed :</strong> Liquid + solid or another immiscible liquid</li>
        <li><strong>Separating agent:</strong> Gravity</li>
        <li><strong>Product:</strong> Liquid + solid or another immiscible liquid</li>
        <li><strong>Principle of separation :</strong> density difference</li>
      </ul>
      <div class="card">
        <ul style="margin-bottom: 0">
          <li><strong>Inlet Zone:</strong> All particles enter settling zone at homogenous concentration</li>
          <li><strong>Outlet Zone:</strong> Any particle hitting outlet zone goes out effluent</li>
          <li><strong>Sludge Zone:</strong> Any particle hitting sludge zone is removed</li>
          <li><strong>Settling Zone:</strong> Horizontal velocity from water flow, downward velocity from particle settling velocities</li>
        </ul>
      </div>
      <div class="fig-box">
        <strong>Slide 6: Settling/Sedimentation/Decantation — Settling Tank Zones &amp; Horizontal Decanter</strong><br />
        <img src="{{SLIDES}}/slide_06.png" alt="Slide 6 - Settling Tank and Decanter" style="width:94%; margin:6px auto 0 auto;" />
      </div>

      <h3 class="sub-title">
        2.2 Settling Tank
        <span class="slide-tag">Slide 7</span>
      </h3>
      <div class="eq-box">
        <div class="eq-row">
          <span class="katex-eq">V_c = \text{critical velocity} = \frac{\text{tank depth}}{\text{detention time}} = \frac{\text{depth}}{\text{tank volume} / \text{flowrate}}</span>
        </div>
        <div class="eq-row">
          <span class="katex-eq">= \frac{\text{depth}}{(\text{depth} \cdot \text{area}) / \text{flowrate}}</span>
        </div>
        <div class="eq-row">
          <span class="katex-eq">= \frac{\text{flowrate}}{\text{area}} = \frac{Q}{A}</span>
        </div>
      </div>
      <p>(Settling velocity of the <strong>slowest-settling particles</strong> that are 100% removed)</p>

      <h3 class="sub-title">
        2.3 Workout Example &amp; Answer
        <span class="slide-tag">Slides 8, 9</span>
      </h3>
      <div class="example-box">
        <h4>Workout Example <span class="slide-tag">Slide 8</span></h4>
        <p style="margin: 0 0 8px 0">
          A water treatment plant has a flow rate of 0.6 m<sup>3</sup>/sec. The
          settling basin at the plant has an effective settling volume that is
          20 m long, 3 m tall and 6 m wide.
        </p>
        <ol type="a" style="margin-bottom: 12px">
          <li>Will particles that have a settling velocity of 0.004 m/sec be completely removed?</li>
          <li>If not, what percent of the particles will be removed?</li>
        </ol>

        <h4>Answer <span class="slide-tag">Slide 9</span></h4>
        <div class="eq-box" style="background: #fff">
          <div class="eq-row">
            <span class="katex-eq">V_c = \frac{Q}{A} = \frac{0.6\text{ m/sec}}{20\text{ m} \times 6\text{ m}} = 0.005\text{ m/sec}</span>
          </div>
        </div>
        <p style="margin: 0 0 6px 0">
          Since Vc is greater than the settling velocity of the particle of
          interest, they will not be completely removed.
        </p>
        <p style="margin: 0 0 6px 0">
          The percent of particles which will be removed may be found using the
          following formula:
        </p>
        <div class="eq-box" style="background: #fff">
          <div class="eq-row">
            <span class="katex-eq">\text{Percent removed} = (v_p / v_c) \times 100</span>
          </div>
          <div class="eq-row">
            <span class="katex-eq">= (0.004 / 0.005) \times 100 = 80\%</span>
          </div>
        </div>

        <h4 style="margin-top: 12px">DO YOURSELF <span class="slide-tag">Slide 9</span></h4>
        <p style="margin: 0">
          How big would the basin need to be to remove 100% of the particles
          that have a settling velocity of 0.004 m/sec?
        </p>
      </div>

      <h3 class="sub-title">
        2.4 Centrifuge
        <span class="slide-tag">Slides 10, 11</span>
      </h3>
      <ul>
        <li><strong>Feed :</strong> Liquid + solid or another immiscible liquid</li>
        <li><strong>Separating agent:</strong> Centrifugal force</li>
        <li><strong>Product:</strong> Liquid + solid or another immiscible liquid</li>
        <li><strong>Principle of separation :</strong> density difference</li>
      </ul>
      <div class="grid-2">
        <div class="card">
          <h4>Liquid+Liquid separation</h4>
          <p style="margin: 0">
            <a href="https://www.youtube.com/watch?v=dHagLoZPewE" target="_blank" rel="noreferrer">https://www.youtube.com/watch?v=dHagLoZPewE</a>
          </p>
        </div>
        <div class="card">
          <h4>Solid+Liquid separation</h4>
          <ol style="margin-bottom: 0">
            <li>Feed</li>
            <li>Separated solids</li>
            <li>Clear liquid</li>
          </ol>
        </div>
      </div>
      <div class="example-box">
        <p style="margin: 0">
          Can you suggest a name of <strong>centrifuge</strong> that you used in daily life?
        </p>
      </div>
      <div class="grid-2">
        <div class="fig-box" style="margin: 0">
          <strong>Slide 10: Centrifuge — Liquid+Liquid separation &amp; Solid+Liquid separation</strong><br />
          <img src="{{SLIDES}}/slide_10.png" alt="Slide 10 - Centrifuge" style="width:100%; margin-top:6px;" />
        </div>
        <div class="fig-box" style="margin: 0">
          <strong>Slide 11: Flottweg Separation Technology — Solid-Liquid Separation (with overflow by gravity)</strong><br />
          <img src="{{SLIDES}}/slide_11.png" alt="Slide 11 - Flottweg Decanter Centrifuge" style="width:100%; margin-top:6px;" />
        </div>
      </div>

      <h3 class="sub-title">
        2.5 Cyclone separation
        <span class="slide-tag">Slide 12</span>
      </h3>
      <ul>
        <li><strong>Feed :</strong> Gas + solid or liquid</li>
        <li><strong>Separating agent:</strong> Flow (inertia)</li>
        <li><strong>Product:</strong> Gas + solid or liquid</li>
        <li><strong>Principle of separation :</strong> density difference</li>
      </ul>
      <div class="fig-box">
        <strong>Slide 12: Cyclone separation — Dust Cleaning from Gas</strong><br />
        <img src="{{SLIDES}}/slide_12.png" alt="Slide 12 - Cyclone separation" style="width:92%; margin:6px auto 0 auto;" />
      </div>
      </section>

      <!-- SECTION 3 -->
      <section class="topic-section" id="topic-3" data-topic="3" data-short="Impingement &amp; Fabric Filtration">
      <h2 class="section-title">
        3. Impingement Separation &amp; Fabric Filtration
      </h2>

      <h3 class="sub-title">
        3.1 Impingement Separation (Mesh demister)
        <span class="slide-tag">Slide 13</span>
      </h3>
      <ul>
        <li><strong>Feed :</strong> Gas + liquid</li>
        <li><strong>Separating agent:</strong> Pressure reduction (energy) + wire mesh</li>
        <li><strong>Products:</strong> Gas + liquid</li>
        <li><strong>Principle of separation :</strong> size of liquid droplets larger than pore size of filter medium, wetting of filter medium</li>
      </ul>
      <div class="fig-box">
        <strong>Slide 13: Impingement Separation (Mesh demister)</strong><br />
        <img src="{{SLIDES}}/slide_13.png" alt="Slide 13 - Impingement Separation Mesh demister" style="width:92%; margin:6px auto 0 auto;" />
      </div>

      <h3 class="sub-title">
        3.2 Fabric Filtration (Cloth/Bag Filter)
        <span class="slide-tag">Slide 14</span>
      </h3>
      <ul>
        <li><strong>Feed :</strong> Gas/vapor + dust (solid)</li>
        <li><strong>Separating agent:</strong> Pressure reduction (energy) + cloth/fabric bag separator or cartridge filters</li>
        <li><strong>Products:</strong> Gas + Solids</li>
        <li><strong>Principle of separation :</strong> size of dust particles larger than pore size of filter medium</li>
      </ul>
      <p>
        <a href="https://www.youtube.com/watch?v=Xl8Y2S7MW28" target="_blank" rel="noreferrer">https://www.youtube.com/watch?v=Xl8Y2S7MW28</a>
      </p>
      <div class="example-box">
        <p style="margin: 0 0 4px 0"><strong>Types of Fabric Filter ?</strong></p>
        <p style="margin: 0"><strong>Bag Filter</strong> &nbsp;|&nbsp; <strong>Cartridge Filter — When we will use it?</strong></p>
      </div>
      <div class="fig-box">
        <strong>Slide 14: Fabric Filtration (Cloth/Bag Filter) — Bag Filter &amp; Cartridge Filter</strong><br />
        <img src="{{SLIDES}}/slide_14.png" alt="Slide 14 - Fabric Filtration Bag Filter and Cartridge Filter" style="width:94%; margin:6px auto 0 auto;" />
      </div>
      </section>

      <!-- SECTION 4 -->
      <section class="topic-section" id="topic-4" data-topic="4" data-short="Based on Size Differences">
      <h2 class="section-title">
        4. Mechanical separation techniques based on size differences
      </h2>

      <h3 class="sub-title">
        4.1 Filtration
        <span class="slide-tag">Slide 15</span>
      </h3>
      <ul>
        <li><strong>Feed :</strong> Liquid + solid or gas + Solid or Vapor/gas + Liquid</li>
        <li><strong>Separating agent:</strong> <strong>Pressure reduction (energy)</strong> + filter medium</li>
        <li><strong>Product:</strong> Liquid + solid or Gas + Solid or Vapor/gas + Liquid</li>
        <li><strong>Principle of separation :</strong> size of solid larger than pore size of filter medium</li>
      </ul>
      <div class="fig-box">
        <strong>Slide 15: Filtration — Cake Filtration Sequence (Filtration, Cake Washing, Pressure Drying, Cake Discharge)</strong><br />
        <img src="{{SLIDES}}/slide_15.png" alt="Slide 15 - Filtration and Cake Filtration Sequence" style="width:94%; margin:6px auto 0 auto;" />
      </div>

      <h3 class="sub-title">
        4.2 Centrifugal Filtration
        <span class="slide-tag">Slides 16, 17</span>
      </h3>
      <ul>
        <li><strong>Feed :</strong> Liquid + solid</li>
        <li><strong>Separating agent:</strong> Centrifugal force (energy) +filter medium</li>
        <li><strong>Products:</strong> Liquid + solid</li>
        <li><strong>Principle of separation:</strong> size of solid larger than pore size of filter medium</li>
      </ul>
      <div class="grid-2">
        <div class="fig-box" style="margin: 0">
          <strong>Slide 16: CENTRIFUGAL FILTRATION &amp; Fig. 10. Filter cake formation in peeler centrifuges.</strong><br />
          <img src="{{SLIDES}}/slide_16.png" alt="Slide 16 - Centrifugal Filtration and Fig 10" style="width:100%; margin-top:6px;" />
        </div>
        <div class="fig-box" style="margin: 0">
          <strong>Slide 17: Centrifugal Filtration</strong><br />
          <img src="{{SLIDES}}/slide_17.png" alt="Slide 17 - Centrifugal Filtration 3D view" style="width:100%; margin-top:6px;" />
        </div>
      </div>
      </section>

      <!-- SECTION 5 -->
      <section class="topic-section" id="topic-5" data-topic="5" data-short="Based on Surface Properties">
      <h2 class="section-title">
        5. Mechanical separation technique based on differences in surface properties
      </h2>

      <h3 class="sub-title">
        5.1 Flotation
        <span class="slide-tag">Slide 18</span>
      </h3>
      <ul>
        <li><strong>Feed :</strong> Mixed, powdered suspended solids in liquid</li>
        <li><strong>Separating agent:</strong> Added surfactants, rising air bubbles</li>
        <li><strong>Products:</strong> Two solids, clear liquid</li>
        <li><strong>Principle of separation :</strong> tendency of surfactants/rising air bubbles to adsorb preferentially on one of the solid species</li>
      </ul>
      <p>
        <a href="https://www.youtube.com/watch?v=K2j-lRAx3L0" target="_blank" rel="noreferrer">https://www.youtube.com/watch?v=K2j-lRAx3L0</a>
      </p>
      <div class="fig-box">
        <strong>Slide 18: Flotation</strong><br />
        <img src="{{SLIDES}}/slide_18.png" alt="Slide 18 - Flotation" style="width:92%; margin:6px auto 0 auto;" />
      </div>

      <h3 class="sub-title">
        5.2 Scrubbing &amp; Industrial Scrubber
        <span class="slide-tag">Slides 19, 20</span>
      </h3>
      <ul>
        <li><strong>Feed :</strong> suspended solids in gases.</li>
        <li><strong>Separating agent:</strong> Water/Oil</li>
        <li><strong>Products:</strong> Clean gases + Liquid with solids</li>
        <li>
          <strong>Principle of separation :</strong> Wettability (The ability of
          any solid surface to be wetted when in contact with a liquid; that is,
          the surface tension of the liquid is reduced so that the liquid
          spreads over the surface)
        </li>
      </ul>
      <div class="grid-2">
        <div class="fig-box" style="margin: 0">
          <strong>Slide 19: Scrubbing — Ejector Venturi Scrubber, Baffle Spray Scrubber, Counter Current Spray Scrubber</strong><br />
          <img src="{{SLIDES}}/slide_19.png" alt="Slide 19 - Scrubbing types" style="width:100%; margin-top:6px;" />
        </div>
        <div class="fig-box" style="margin: 0">
          <strong>Slide 20: Industrial Scrubber</strong><br />
          <img src="{{SLIDES}}/slide_20.png" alt="Slide 20 - Industrial Scrubber" style="width:100%; margin-top:6px;" />
        </div>
      </div>
      </section>

      <!-- SECTION 6 -->
      <section class="topic-section" id="topic-6" data-topic="6" data-short="Based on Electrical Charging">
      <h2 class="section-title">
        6. Mechanical separation technique based on differences in electrical charging
      </h2>

      <h3 class="sub-title">
        6.1 Electrostatic precipitation
        <span class="slide-tag">Slide 21</span>
      </h3>
      <ul>
        <li><strong>Feed :</strong> Gas + fine solids</li>
        <li><strong>Separating agent:</strong> Electric field (induced electrostatic force)</li>
        <li><strong>Products:</strong> Gas + fine solids</li>
        <li><strong>Principle of separation :</strong> charge on fine solid particles</li>
      </ul>
      <div class="fig-box">
        <strong>Slide 21: Electrostatic precipitation</strong><br />
        <img src="{{SLIDES}}/slide_21.png" alt="Slide 21 - Electrostatic precipitation" style="width:88%; margin:6px auto 0 auto;" />
      </div>
      </section>

      <!-- SECTION 7 -->
      <section class="topic-section" id="topic-7" data-topic="7" data-short="Based on Magnetic Properties">
      <h2 class="section-title">
        7. Mechanical separation technique based on differences in magnetic properties.
      </h2>

      <h3 class="sub-title">
        7.1 Magnetic separation
        <span class="slide-tag">Slide 22</span>
      </h3>
      <ul>
        <li><strong>Feed :</strong> Mixed powdered solids</li>
        <li><strong>Separating agent:</strong> Magnetic field</li>
        <li><strong>Products:</strong> Two solids</li>
        <li><strong>Principle of separation :</strong> Attraction of material in magnetic field</li>
      </ul>
      <div class="fig-box">
        <strong>Slide 22: Magnetic separation</strong><br />
        <img src="{{SLIDES}}/slide_22.png" alt="Slide 22 - Magnetic separation" style="width:88%; margin:6px auto 0 auto;" />
      </div>
      </section>
  `,
};
