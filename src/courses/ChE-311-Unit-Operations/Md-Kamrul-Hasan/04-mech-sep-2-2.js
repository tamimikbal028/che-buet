export default {
  order: 4,
  id: "04-mech-sep-2-2",
  title: "Gravity Settlers, Impingement Separators & Cyclones",
  shortTitle: "Gravity Settlers, Impingement Separators & Cyclones",
  subtitle:
    "04 - Mech.sep_2_2_January 2025 (1).pdf (48 Slides) &nbsp;+&nbsp; 04 - Vertical_Gravity_Settler_Problem [Repaired].pdf (4 Slides)",
  meta: "9 Topics · 52 Pages",
  slideCount: "48 + 4 Slides",
  html: String.raw`
    <!-- SECTION 1 -->
    <section
      class="topic-section"
      id="topic-1"
      data-topic="1"
      data-short="Gas/Liquid Separators &amp; Gravity Settlers"
    >
      <h2 class="section-title">
        1. Separation of Liquid/Solid Particles from Gas &amp; Gravity Settlers
      </h2>

      <div class="card" style="margin-bottom: 14px">
        <h4>
          ChE 311 — Special Topics in Unit Operations: Mechanical Separation (Lecture 2_2)
          <span class="slide-tag">Slides 1, 2</span>
        </h4>
        <ul style="margin-bottom: 0">
          <li><strong>Instructor:</strong> Md Kamrul Hasan, Department of Chemical Engineering (DChE), BUET</li>
          <li><strong>Reference:</strong> Applied Process Design, E.E. Ludwig, 3<sup>rd</sup> Edition, Chapter 4 (Lecture 2_2)</li>
        </ul>
      </div>

      <div class="fig-box">
        <strong>Slide 2: Mechanical Separation — Applied Process Design, E.E. Ludwig, 3rd Edition, Chapter 4 (Lecture 2_2)</strong><br />
        <img
          src="{{SLIDES}}/slide_02.png"
          alt="Slide 2 - Mechanical Separation Lecture 2_2"
          style="width:76%; margin:6px auto 0 auto;"
        />
      </div>

      <h3 class="sub-title">
        1.1 Conventional Gas/Liquid Separators
        <span class="slide-tag">Slides 3, 4</span>
      </h3>
      <p>
        Conventional gas/liquid separators are usually characterized as vertical,
        horizontal, or spherical. Horizontal separators can be single or double barrel.
      </p>
      <ul>
        <li>
          Reference Video (Slide 3):
          <a href="https://www.youtube.com/watch?v=GGKCqasyf20&ab_channel=KarwanKamal" target="_blank" rel="noreferrer">https://www.youtube.com/watch?v=GGKCqasyf20&amp;ab_channel=KarwanKamal</a>
        </li>
        <li>
          Reference Video (Slide 4):
          <a href="https://www.youtube.com/watch?v=VBzqQvlxucU&ab_channel=eeeWallYournewWorl" target="_blank" rel="noreferrer">https://www.youtube.com/watch?v=VBzqQvlxucU&amp;ab_channel=eeeWallYournewWorl</a>
        </li>
      </ul>

      <div class="grid-2">
        <div class="fig-box" style="margin: 0">
          <strong>Slide 3: Conventional Gas/Liquid Separator Schematic (Inlet Diverter, Gas Space, Mist Eliminator, NLL, Liquid Pool, Vortex Breaker, L/D = 4:1)</strong><br />
          <img
            src="{{SLIDES}}/slide_03.png"
            alt="Slide 3 - Conventional Gas Liquid Separator"
            style="width:100%; margin-top:6px;"
          />
        </div>
        <div class="fig-box" style="margin: 0">
          <strong>Slide 4: Three-Phase Horizontal Separator, Vertical vs. Horizontal Comparison, and Figure 4-3. Spherical separator schematic</strong><br />
          <img
            src="{{SLIDES}}/slide_04.png"
            alt="Slide 4 - Horizontal Vertical and Spherical Separators"
            style="width:100%; margin-top:6px;"
          />
        </div>
      </div>

      <h3 class="sub-title">
        1.2 Design of Gravity Settlers (IPS Design)
        <span class="slide-tag">Slide 5</span>
      </h3>
      <p>
        <strong>Action of removal: Terminal Velocity or Drop-Out Velocity:</strong>
        The downward <u>force of gravity (F<sub>g</sub>)</u> equals the restraining
        <u>force of drag (F<sub>d</sub>)</u> plus the buoyancy. The net force on the
        object then, is zero, and the result is that the velocity of the object remains constant.
      </p>
      <div class="grid-2">
        <div class="card">
          <h4>When?</h4>
          <p style="margin-bottom: 0">
            the components of the mixture have different <strong>specific weight</strong>.
            e.g. oil and gas processing/production industry
          </p>
        </div>
        <div class="card">
          <h4>Why?</h4>
          <p style="margin-bottom: 0">
            the most notable advantages of the gravitational methods are their cost
            effectiveness and in some cases excellent reduction. Gravity separation
            is an attractive unit operation as it generally has low capital and operating cost
          </p>
        </div>
      </div>
      <div class="fig-box">
        <strong>Slide 5: Force Balance on Settling Particle (F<sub>d</sub> vs. F<sub>g</sub>)</strong><br />
        <img
          src="{{SLIDES}}/slide_05.png"
          alt="Slide 5 - Design of Gravity Settlers Force Balance"
          style="width:78%; margin:6px auto 0 auto;"
        />
      </div>

      <h3 class="sub-title">
        1.3 Stokes's law
        <span class="slide-tag">Slide 6</span>
      </h3>
      <p>
        mathematical equation that expresses <strong>the settling velocities</strong> of
        small spherical particles in a fluid medium. The law, first set forth by the British
        scientist Sir George G. Stokes in 1851, is derived by consideration of the forces
        acting on a particular particle as it sinks through a liquid column under the
        influence of gravity.
      </p>
      <p>
        The force acting in resistance to the fall is equal to <strong>6&pi;r&eta;v</strong>,
        in which r is the radius of the sphere, &eta; is the viscosity of the liquid, and
        v is the velocity of fall.
      </p>
      <p>
        The force acting downward is equal to <strong>(4/3)&pi;r<sup>3</sup>(&rho;<sub>1</sub> &minus; &rho;<sub>2</sub>)g</strong>,
        in which &rho;<sub>1</sub> is the density of the sphere, &rho;<sub>2</sub> is the
        density of the liquid, and g is the gravitational constant.
      </p>
      <p>
        At a constant velocity of fall the upward and downward forces are in balance.
        Equating the two expressions given above and solving for v therefore yields the
        required velocity, expressed by,
      </p>
      <div class="eq-box">
        <div class="eq-row">
          <span class="katex-eq">\text{Stokes's law as } v = \frac{2}{9}\frac{(\rho_1 - \rho_2) g r^2}{\eta}</span>
        </div>
      </div>
      <p style="font-size: 13.5px; color: #4a5568">
        Source: <a href="https://www.britannica.com/science/Stokess-law" target="_blank" rel="noreferrer">https://www.britannica.com/science/Stokess-law</a>
      </p>
    </section>

    <!-- SECTION 2 -->
    <section
      class="topic-section"
      id="topic-2"
      data-topic="2"
      data-short="Vertical Gravity Settler"
    >
      <h2 class="section-title">2. Vertical Gravity Settler</h2>

      <h3 class="sub-title">
        2.1 Design Criteria &amp; Design Flow Rates
        <span class="slide-tag">Slide 7</span>
      </h3>
      <div class="grid-2">
        <div class="card">
          <h4>Design Criteria</h4>
          <ul style="margin-bottom: 0">
            <li>
              Separators <strong>without mist extractors</strong> may be designed for
              gravity settling using <strong>Stokes law equations</strong>.
            </li>
            <li>
              Typically the sizing is based upon <strong>removal of 150 to 2000 micrometer droplets</strong>.
            </li>
          </ul>
        </div>
        <div class="card">
          <h4>Design flow rates</h4>
          <p style="margin-bottom: 0">
            Separator design shall be based upon the <strong>operation mode with the severest conditions</strong>.
            For the gas/liquid separation in a knock-out drum, the severest condition is
            that with the <strong>highest value of Q</strong>, where this is defined by:
          </p>
        </div>
      </div>
      <div class="eq-box">
        <div class="eq-row">
          <span class="katex-eq">Q = Q_g \left(\frac{\rho_g}{\rho_1 - \rho_g}\right)^{1/2}\ \text{m}^3/\text{s}</span>
        </div>
        <div class="eq-row">
          <span class="katex-eq">Q_{\max} = Q + (15\text{–}25\%)Q</span>
          <span class="eq-note">for over design in gas processing. (50% extra for in gas production)</span>
        </div>
      </div>
      <div class="fig-box">
        <strong>Slide 7: Vertical settling tank (A: Primary separation, B: Gravity settling, C: Vortex breaker, D: Liquid collecting)</strong><br />
        <img
          src="{{SLIDES}}/slide_07.png"
          alt="Slide 7 - Vertical Gravity Settler Tank Schematic"
          style="width:78%; margin:6px auto 0 auto;"
        />
      </div>

      <h3 class="sub-title">
        2.2 Design Flow Rate &mdash; Derivation (Vertical gravity settler — knock-out drum, no mist extractor)
        <span class="slide-tag">Slide 8</span>
      </h3>
      <ol>
        <li>
          <strong>Force balance on a settling droplet</strong> (gravity = buoyancy + drag at terminal velocity):
          <div class="eq-box">
            <div class="eq-row">
              <span class="katex-eq">F_{\text{grav}} = F_{\text{buoy}} + F_{\text{drag}}</span>
            </div>
            <div class="eq-row">
              <span class="katex-eq">(\rho_l - \rho_g)\frac{\pi}{6} d^3 g = C_D \frac{1}{2} \rho_g v_t^2 \frac{\pi}{4} d^2</span>
            </div>
          </div>
        </li>
        <li>
          <strong>Solve for the terminal (settling) velocity:</strong>
          <div class="eq-box">
            <div class="eq-row">
              <span class="katex-eq">v_t = \sqrt{\frac{4 g d}{3 C_D} \cdot \frac{\rho_l - \rho_g}{\rho_g}}</span>
            </div>
            <div class="eq-row">
              <span class="katex-eq">v_t = K \sqrt{\frac{\rho_l - \rho_g}{\rho_g}}, \qquad K = \sqrt{\frac{4 g d}{3 C_D}}</span>
              <span class="eq-note">group size &amp; drag terms into the Souders&ndash;Brown coefficient K</span>
            </div>
          </div>
        </li>
        <li>
          <strong>Maximum gas capacity of the vessel</strong> (gas velocity must not exceed v<sub>t</sub> over settling area A):
          <div class="eq-box">
            <div class="eq-row">
              <span class="katex-eq">Q_g = v_t A = K A \sqrt{\frac{\rho_l - \rho_g}{\rho_g}}</span>
            </div>
          </div>
        </li>
        <li>
          <strong>Isolate the vessel term &rarr; density-corrected flow:</strong>
          <div class="eq-box">
            <div class="eq-row">
              <span class="katex-eq">Q_g \sqrt{\frac{\rho_g}{\rho_l - \rho_g}} = K A \quad \Longrightarrow \quad Q = Q_g \left(\frac{\rho_g}{\rho_l - \rho_g}\right)^{1/2} = K A</span>
            </div>
          </div>
        </li>
      </ol>
      <p>
        <strong>Physical meaning:</strong> Q = K&middot;A depends only on vessel geometry
        &amp; separation duty &mdash; not on the operating &rho;<sub>g</sub>. Convert every
        case to Q, then size for the case with the highest Q (severest condition).
      </p>
      <div class="fig-box">
        <strong>Slide 8: Design Flow Rate &mdash; Derivation &amp; Force Balance on a Settling Droplet</strong><br />
        <img
          src="{{SLIDES}}/slide_08.png"
          alt="Slide 8 - Design Flow Rate Derivation"
          style="width:82%; margin:6px auto 0 auto;"
        />
      </div>

      <h3 class="sub-title">
        2.3 Degassing &amp; Vessel Diameter
        <span class="slide-tag">Slide 9</span>
      </h3>
      <p>
        <strong>Degassing:</strong> In order to prevent <strong>carry through of the gas bubbles</strong>
        into the liquid outlet stream in vertical vessels, the <strong>liquid velocity</strong>
        should satisfy the following requirement:
      </p>
      <div class="eq-box">
        <div class="eq-row">
          <span class="katex-eq">\underbrace{\frac{Q_l}{(\pi/4) D_v^2}}_{\text{Liquid downward velocity } (= Q/A)} \lt \underbrace{\frac{2.18 \times 10^{-2}}{\gamma_l} \times \frac{\rho_l - \rho_g}{\rho_l}}_{\text{Bubble rise velocity (Stokes' law)}}</span>
        </div>
      </div>
      <p>Where &gamma;<sub>l</sub>, the liquid kinematic viscosity is in mm<sup>2</sup>/s or cSt.</p>

      <p>
        <strong>Vessel Diameter:</strong> The vessel diameter, D<sub>v</sub>, can be estimated from:
      </p>
      <div class="eq-box">
        <div class="eq-row">
          <span class="katex-eq">\frac{Q_{\max}}{(\pi/4) D_v^2} \le 0.07</span>
          <span class="eq-note">Where: Q<sub>max</sub> is the process design value of Q plus margin</span>
        </div>
      </div>
      <div class="fig-box">
        <strong>Slide 9: Degassing (Liquid Down vs. Bubble Up) &amp; Vessel Diameter</strong><br />
        <img
          src="{{SLIDES}}/slide_09.png"
          alt="Slide 9 - Degassing and Vessel Diameter"
          style="width:78%; margin:6px auto 0 auto;"
        />
      </div>

      <h3 class="sub-title">
        2.4 Total vessel height
        <span class="slide-tag">Slide 10</span>
      </h3>
      <div class="eq-box">
        <div class="eq-row">
          <span class="katex-eq">H = h + d_n + X + Y \quad \text{(tangent to tangent)}</span>
        </div>
      </div>
      <ul>
        <li><strong>h:</strong> Liquid hold-up height</li>
        <li><strong>d<sub>n</sub>:</strong> Inlet nozzle diameter (m)</li>
        <li>
          <strong>X = 0.3 D<sub>v</sub> (min 0.3 m):</strong> Clearance between max liquid
          level and the inlet &mdash; stops the incoming jet from splashing into the liquid
          and re-entraining gas.
        </li>
        <li>
          <strong>Y = 0.9 D<sub>v</sub> (min 0.9 m):</strong> Gas disengagement space above
          the inlet &mdash; room for droplets to fall back before gas leaves the top.
        </li>
      </ul>
      <div class="fig-box">
        <strong>Slide 10: Total Vessel Height Schematic (H = h + d<sub>n</sub> + X + Y)</strong><br />
        <img
          src="{{SLIDES}}/slide_10.png"
          alt="Slide 10 - Total Vessel Height"
          style="width:84%; margin:6px auto 0 auto;"
        />
      </div>

      <h3 class="sub-title">
        2.5 Nozzle sizing
        <span class="slide-tag">Slide 11</span>
      </h3>
      <ol>
        <li>
          <strong>Feed nozzle (two-phase inlet):</strong>
          <div class="eq-box">
            <div class="eq-row">
              <span class="katex-eq">\rho_m \cdot V_m^2 \le 1500\ \text{kg/m}\cdot\text{s}^2</span>
            </div>
            <div class="eq-row">
              <span class="katex-eq">V_m = \frac{Q_g + Q_l}{(\pi/4) d_n^2}, \qquad \rho_m = \frac{M_g + M_l}{Q_g + Q_l}</span>
            </div>
          </div>
          <p style="margin-top: 4px">
            Fit a half-open pipe or flow-diverting box; take d<sub>n</sub> equal to the feed pipe.
            Strictest limit &mdash; a two-phase jet erodes the internals and shatters liquid into fine, hard-to-settle droplets.
          </p>
        </li>
        <li>
          <strong>Gas outlet nozzle:</strong>
          <div class="eq-box">
            <div class="eq-row">
              <span class="katex-eq">\rho_g \cdot V_g^2 \le 3750\ \text{kg/m}\cdot\text{s}^2</span>
            </div>
          </div>
          <p style="margin-top: 4px">
            Diameter normally equal to the outlet pipe. The limit is 2.5&times; looser than the feed &mdash; dry gas carries far less erosive momentum than a two-phase jet.
          </p>
        </li>
        <li>
          <strong>Liquid outlet nozzle:</strong>
          <div class="eq-box">
            <div class="eq-row">
              <span class="katex-eq">V \le 1\ \text{m/s} \quad \text{(preferably lower)}</span>
            </div>
          </div>
          <p style="margin-top: 4px">
            A plain velocity cap, plus a mandatory vortex breaker.
          </p>
        </li>
      </ol>
      <div class="fig-box">
        <strong>Slide 11: Nozzle Sizing Schematic (1. Feed nozzle, 2. Gas outlet nozzle, 3. Liquid outlet nozzle)</strong><br />
        <img
          src="{{SLIDES}}/slide_11.png"
          alt="Slide 11 - Nozzle Sizing"
          style="width:82%; margin:6px auto 0 auto;"
        />
      </div>

      <h3 class="sub-title">
        2.6 Pressure Drop (negligible)
        <span class="slide-tag">Slide 12</span>
      </h3>
      <p>The pressure differential between inlet and gas outlet is:</p>
      <div class="eq-box">
        <div class="eq-row">
          <span class="katex-eq">P_{\text{in}} - P_{\text{out}} = 8 \times 10^{-4} \times \rho_g \times V_{g,\text{out}}^2\ \text{kPa}</span>
        </div>
      </div>
    </section>

    <!-- SECTION 3 -->
    <section
      class="topic-section"
      id="topic-3"
      data-topic="3"
      data-short="Vertical Gravity Settler — Worked Problem"
    >
      <h2 class="section-title">3. Vertical Gravity Settler &mdash; Worked Problem</h2>

      <div class="example-box">
        <h4>
          Vertical Gravity Settler &mdash; Worked Problem: Sizing a gas / liquid knock-out drum (no mist extractor)
          <span class="slide-tag">VGS Problem pp. 1–4</span>
        </h4>

        <div class="grid-2">
          <div class="card" style="background: #fff">
            <h4>GIVEN <span class="slide-tag">VGS Problem p. 1</span></h4>
            <table style="margin: 0">
              <tbody>
                <tr><td>Gas throughput</td><td><strong>Q<sub>std</sub> = 1.2 &times; 10<sup>6</sup> Sm<sup>3</sup>/day</strong></td></tr>
                <tr><td>Molecular weight</td><td><strong>M = 20 kg/kmol</strong></td></tr>
                <tr><td>Operating pressure</td><td><strong>P = 2000 kPa (abs)</strong></td></tr>
                <tr><td>Operating temperature</td><td><strong>T = 40 &deg;C (313.15 K)</strong></td></tr>
                <tr><td>Compressibility</td><td><strong>Z = 0.90</strong></td></tr>
                <tr><td>Liquid rel. density</td><td><strong>0.60 &rarr; &rho;<sub>l</sub> = 600 kg/m<sup>3</sup></strong></td></tr>
                <tr><td>Souders&ndash;Brown coeff.</td><td><strong>K = 0.10 m/s</strong></td></tr>
                <tr><td>Over-design margin</td><td><strong>f = 20 %</strong></td></tr>
                <tr><td>Liquid load / hold-up</td><td><strong>Q<sub>l</sub> = 6.0 &times; 10<sup>&minus;3</sup> m<sup>3</sup>/s, 3 min</strong></td></tr>
                <tr><td>Inlet nozzle</td><td><strong>d<sub>n</sub> = 0.15 m</strong></td></tr>
              </tbody>
            </table>
          </div>

          <div class="card" style="background: #fff">
            <h4>REQUIRED <span class="slide-tag">VGS Problem p. 1</span></h4>
            <ol type="a" style="margin-bottom: 12px">
              <li><strong>Operating gas density, &rho;<sub>g</sub></strong></li>
              <li>Actual gas flow at operating conditions</li>
              <li>Design (maximum) gas flow, Q<sub>max</sub></li>
              <li><strong>Droplet drop-out velocity, v<sub>t</sub></strong></li>
              <li>Required settling area, A</li>
              <li><strong>Vessel diameter D<sub>v</sub> and total height H</strong></li>
            </ol>
            <h4>GOVERNING RELATIONS</h4>
            <div class="eq-box" style="margin-bottom: 0; background: #f7fafc">
              <div class="eq-row">
                <span class="katex-eq">v_t = K \sqrt{\frac{\rho_l - \rho_g}{\rho_g}}</span>
              </div>
            </div>
          </div>
        </div>

        <h3 class="sub-title" style="margin-top: 14px">
          Solution &middot; Steps 1 &ndash; 3: Flow conditions &amp; design rate
          <span class="slide-tag">VGS Problem p. 2</span>
        </h3>
        <div class="eq-box" style="background: #fff">
          <div class="eq-row eq-stack">
            <div class="eq-label">Step 1 &mdash; Operating gas density (real-gas law):</div>
            <span class="katex-eq">\begin{aligned}\rho_g &= \frac{P M}{Z R T} = \frac{2000 \times 10^3 \times 0.020}{0.90 \times 8.314 \times 313.15} \\ &\approx \mathbf{17.07\ \text{kg/m}^3}\end{aligned}</span>
          </div>
          <div class="eq-row eq-stack">
            <div class="eq-label">Step 2 &mdash; Actual volumetric flow at operating conditions:</div>
            <span class="katex-eq">\begin{aligned}Q &= Q_{\text{std}} \frac{P_{\text{std}}}{P} \frac{T}{T_{\text{std}}} Z \\ &= \left(\frac{1.2 \times 10^6}{86400}\right) \times \left(\frac{101.325}{2000}\right) \times \left(\frac{313.15}{288.15}\right) \times 0.90 \\ &\approx \mathbf{0.688\ \text{m}^3/\text{s}}\end{aligned}</span>
          </div>
          <div class="eq-row eq-stack">
            <div class="eq-label">Step 3 &mdash; Design (maximum) gas flow (+20% margin):</div>
            <span class="katex-eq">Q_{\max} = (1 + f) Q = 1.20 \times 0.688 \approx \mathbf{0.826\ \text{m}^3/\text{s}}</span>
          </div>
        </div>

        <h3 class="sub-title">
          Solution &middot; Steps 4 &ndash; 5: Drop-out velocity &amp; settling area
          <span class="slide-tag">VGS Problem p. 3</span>
        </h3>
        <div class="eq-box" style="background: #fff">
          <div class="eq-row eq-stack">
            <div class="eq-label">Step 4 &mdash; Droplet drop-out velocity (Souders&ndash;Brown, Slide 8):</div>
            <span class="katex-eq">\begin{aligned}v_t &= K \sqrt{\frac{\rho_l - \rho_g}{\rho_g}} = 0.10 \times \sqrt{\frac{600 - 17.07}{17.07}} \\ &= 0.10 \times \sqrt{34.15} \approx \mathbf{0.584\ \text{m/s}}\end{aligned}</span>
          </div>
          <div class="eq-row eq-stack">
            <div class="eq-label">Step 5 &mdash; Required settling area (gas velocity = v<sub>t</sub>):</div>
            <span class="katex-eq">A = \frac{Q_{\max}}{v_t} = \frac{0.826}{0.584} \approx \mathbf{1.41\ \text{m}^2}</span>
            <span class="eq-note">full circle &rarr; A = &pi;D<sub>v</sub><sup>2</sup>/4</span>
          </div>
        </div>

        <h3 class="sub-title">
          Solution &middot; Steps 6 &ndash; 7: Vessel diameter &amp; total height
          <span class="slide-tag">VGS Problem p. 4</span>
        </h3>
        <div class="eq-box" style="background: #fff">
          <div class="eq-row eq-stack">
            <div class="eq-label">Step 6 &mdash; Vessel diameter:</div>
            <span class="katex-eq">\begin{aligned}A &= \frac{\pi D_v^2}{4} \implies D_v = \sqrt{\frac{4 A}{\pi}} \\ &= \sqrt{\frac{4 \times 1.413}{\pi}} = \sqrt{1.799} \approx \mathbf{1.34\ \text{m}}\end{aligned}</span>
          </div>
          <div class="eq-row eq-stack">
            <div class="eq-label">Step 7 &mdash; Total height, tangent-to-tangent:</div>
            <span class="katex-eq">\begin{aligned}H &= h + d_n + X + Y \\ &= 0.76 + 0.15 + 0.40 + 1.21 = \mathbf{2.52\ \text{m}}\end{aligned}</span>
          </div>
        </div>

        <table style="background: #fff; margin-bottom: 10px">
          <thead>
            <tr>
              <th>Y = 0.9 D<sub>v</sub></th>
              <th>d<sub>n</sub> (given)</th>
              <th>X = 0.3 D<sub>v</sub></th>
              <th>h (hold-up)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1.21 m</strong></td>
              <td><strong>0.15 m</strong></td>
              <td><strong>0.40 m</strong></td>
              <td><strong>0.76 m</strong></td>
            </tr>
          </tbody>
        </table>

        <table style="background: #fff; margin-bottom: 10px">
          <thead>
            <tr>
              <th>ANSWER: D<sub>v</sub> &mdash; diameter</th>
              <th>H &mdash; total height</th>
              <th>v<sub>t</sub> &mdash; drop-out</th>
              <th>A &mdash; settling area</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>1.34 m</strong></td>
              <td><strong>2.52 m</strong></td>
              <td><strong>0.584 m/s</strong></td>
              <td><strong>1.41 m<sup>2</sup></strong></td>
            </tr>
          </tbody>
        </table>

        <div class="fig-box" style="margin-bottom: 0; background: #fff">
          <strong>VGS Problem p. 4: Vessel Diameter, Total Height &amp; Height Build-Up Diagram (bottom &rarr; top: h &middot; X &middot; d<sub>n</sub> &middot; Y)</strong><br />
          <img
            src="{{SLIDES}}/vgs_04.png"
            alt="VGS Problem p. 4 - Vessel Diameter and Height Build-up"
            style="width:84%; margin:6px auto 0 auto;"
          />
        </div>
      </div>
    </section>

    <!-- SECTION 4 -->
    <section
      class="topic-section"
      id="topic-4"
      data-topic="4"
      data-short="Horizontal Gravity Settler &amp; Problems"
    >
      <h2 class="section-title">4. Horizontal Gravity Settler &amp; Problems</h2>

      <h3 class="sub-title">
        4.1 Degassing, Size &amp; Nozzles
        <span class="slide-tag">Slides 13, 14</span>
      </h3>
      <p><strong>Degassing:</strong> Liquid velocity should satisfy following relationship:</p>
      <div class="eq-box">
        <div class="eq-row">
          <span class="katex-eq">\frac{Q_g}{\frac{\pi}{4} D_v^2} \lt \frac{2.18 \times 10^{-2}}{\gamma_1} \times \frac{\rho_1 - \rho_g}{\rho_1}</span>
          <span class="eq-note">Where &gamma;<sub>l</sub>, the liquid kinematic viscosity is in mm<sup>2</sup>/s or cSt.</span>
        </div>
      </div>
      <p>
        In a horizontal vessel which is approximately half full, the above limit should
        be applied to the liquid velocity: Q<sub>l</sub>/(D<sub>v</sub>.L<sub>v</sub>),
        where L<sub>v</sub> is the vessel length.
      </p>

      <p><strong>Size:</strong> The cross-sectional area for gas flow, A, follows from:</p>
      <div class="eq-box">
        <div class="eq-row">
          <span class="katex-eq">\frac{Q_{\max}}{A} \le 0.1\ \text{m/s}</span>
        </div>
      </div>
      <p>
        Where <strong>A is taken above the liquid level</strong> and <strong>Q<sub>max</sub>
        is the process design value of Q plus a margin</strong>. Horizontal vessels are
        usually designed to be between about <strong>one third and one half-full of liquid</strong>.
      </p>

      <div class="grid-2">
        <div class="card">
          <h4>Note <span class="slide-tag">Slide 14</span></h4>
          <p style="margin-bottom: 0">
            The design method involves trial and error. A starting value for the ratio
            <strong>L<sub>v</sub>/D<sub>v</sub> of 3.0 is suggested; values of 2.5 to 6.0
            for this ratio are normal; values of 6.0 or higher are recommended for
            high-pressure applications.</strong> It is then necessary to check that
            <strong>Q<sub>max</sub>/A</strong> does not exceed <strong>0.1 m/s</strong>.
          </p>
        </div>

        <div class="card">
          <h4>Nozzles <span class="slide-tag">Slide 14</span></h4>
          <ul style="margin-bottom: 0">
            <li>
              <strong>Feed Nozzle:</strong> The nozzle diameter, <strong>d<sub>n</sub></strong>,
              may be taken equal to that of the feed pipe, but the product
              <strong>&rho;<sub>m</sub> &times; V<sub>m</sub><sup>2</sup></strong>
              shall not exceed <strong>1000 kg/m.s<sup>2</sup></strong>.
            </li>
            <li>
              <strong>Gas Outlet Nozzle:</strong> For gas outlet nozzle, the same method can be applied as for a vertical vessel.
            </li>
            <li>
              <strong>Liquid Outlet Nozzle:</strong> For Liquid outlet nozzle, the same method can be applied as for a vertical vessel.
            </li>
          </ul>
        </div>
      </div>

      <h3 class="sub-title">
        4.2 Horizontal Gravity Settler &mdash; Worked Solution
        <span class="slide-tag">Slides 15, 16</span>
      </h3>
      <div class="example-box">
        <h4>Problem &amp; Worked Solution <span class="slide-tag">Slides 15, 16</span></h4>
        <p style="margin: 0 0 8px 0">
          A horizontal gravity separator (without mist extractor) is required to handle
          2 Mm<sup>3</sup>/day of 0.75 relative density gas (MW = 21.72) at a pressure of
          3500 kPa(ga) and a temperature of 40&deg;C. Compressibility is 0.9, viscosity is
          0.012 mPa&bull;s, and liquid relative density is 0.50. It is desired to remove
          all entrainment greater than 150 &mu;m in diameter. No liquid surge is required.
          Calculate the required area.
        </p>
        <div class="eq-box" style="background: #fff">
          <div class="eq-row">
            <span class="katex-eq">V_t = \sqrt{\frac{4 g D_p (\rho_1 - \rho_g)}{3 \rho_g C_D}}</span>
          </div>
          <div class="eq-row">
            <span class="katex-eq">C_D (\text{Re})^2 = \frac{(1.31)(10^7)\,\rho_g D_p^3 (\rho_1 - \rho_g)}{\mu^2}</span>
          </div>
        </div>

        <div class="fig-box" style="background: #fff">
          <strong>Slide 15: Drag Coefficient C<sub>D</sub> vs. C<sub>D</sub>(Re)<sup>2</sup> Chart</strong><br />
          <img
            src="{{SLIDES}}/slide_15.png"
            alt="Slide 15 - Horizontal Gravity Settler Drag Coefficient Chart"
            style="width:82%; margin:6px auto 0 auto;"
          />
        </div>

        <div class="grid-2" style="margin-bottom: 0">
          <div class="card" style="background: #fff">
            <h4>Step 1 &ndash; Terminal (drop-out) velocity <span class="slide-tag">Slide 16</span></h4>
            <div class="eq-box" style="margin-bottom: 0; background: #f7fafc">
              <div class="eq-row">
                <span class="katex-eq">\rho_g = \frac{P M}{Z R T} = \frac{(3601.3)(21.72)}{(0.9)(8.314)(313.15)} \approx 33.4\ \text{kg/m}^3</span>
              </div>
              <div class="eq-row">
                <span class="katex-eq">C_D(\text{Re})^2 = \frac{(1.31 \times 10^7)\,\rho_g D_p^3 (\rho_l - \rho_g)}{\mu^2} \approx 4.8 \times 10^3</span>
              </div>
              <div class="eq-row">
                <span class="katex-eq">V_t = \sqrt{\frac{4 g D_p (\rho_l - \rho_g)}{3 \rho_g C_D}} \approx 0.14\ \text{m/s} \quad (C_D \approx 1.4)</span>
              </div>
            </div>
          </div>

          <div class="card" style="background: #fff">
            <h4>Step 2 &mdash; Vessel sizing <span class="slide-tag">Slide 16</span></h4>
            <div class="eq-box" style="margin-bottom: 0; background: #f7fafc">
              <div class="eq-row">
                <span class="katex-eq">Q_{\text{op}} = Q_{\text{std}} \frac{P_{\text{std}}}{P_{\text{op}}} \frac{T_{\text{op}}}{T_{\text{std}}} Z \approx 0.637\ \text{m}^3/\text{s}</span>
              </div>
              <div class="eq-row">
                <span class="katex-eq">Q_{\max} = 1.2\,Q_{\text{op}} \approx 0.764\ \text{m}^3/\text{s}</span>
              </div>
              <div class="eq-row">
                <span class="katex-eq">A = \frac{Q_{\max}}{0.1} = \frac{0.764}{0.1} = 7.64\ \text{m}^2</span>
              </div>
              <div class="eq-row">
                <span class="katex-eq">A = \frac{\pi D_v^2}{8} \implies D_v = \sqrt{\frac{8 A}{\pi}} \approx 4.4\ \text{m}</span>
              </div>
              <div class="eq-row">
                <span class="katex-eq">L_v = 3.0 \times D_v \approx 13.2\ \text{m}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3 class="sub-title">
        4.3 Problem: Steam and Water Separator Preliminary Design
        <span class="slide-tag">Slides 17, 18</span>
      </h3>
      <div class="example-box">
        <h4>Problem &amp; Solution Steps <span class="slide-tag">Slides 17, 18</span></h4>
        <p style="margin: 0 0 8px 0">
          Make a preliminary design of a separator to separator a mixture of steam and water ;
        </p>
        <ul>
          <li>Water: 1000 kg/h</li>
          <li>steam: 2000 kg/h</li>
          <li>Operating Pressure: 4 bar, From steam tables: density of steam: 2.16 kg/m<sup>3</sup></li>
          <li>Water density: 926.4 kg/m<sup>3</sup></li>
        </ul>
        <div class="eq-box" style="background: #fff">
          <div class="eq-row">
            <span class="katex-eq">u_v = 0.035 \times \sqrt{\frac{\rho_l}{\rho_v}}</span>
          </div>
        </div>
        <p style="margin: 8px 0 4px 0"><strong>Solution <span class="slide-tag">Slide 18</span></strong></p>
        <ul style="margin-bottom: 0">
          <li>Calculate velocity:</li>
          <li>Calculate vapor volumetric flowrate:</li>
          <li>Vessel area:</li>
          <li>Vessel Diameter:</li>
          <li>Calculate Liquid volumetric flow-rate</li>
          <li>Volume for hold up time</li>
          <li>Liquid Depth:</li>
        </ul>
      </div>
    </section>

    <!-- SECTION 5 -->
    <section
      class="topic-section"
      id="topic-5"
      data-topic="5"
      data-short="Impingement Separator: Knitted Wire Mesh"
    >
      <h2 class="section-title">5. Impingement Separator &amp; Knitted Wire Mesh</h2>

      <h3 class="sub-title">
        5.1 Impingement Separator Overview
        <span class="slide-tag">Slide 19</span>
      </h3>
      <ul>
        <li>
          <strong>Particle removal mechanism:</strong> The impingement separator allows the
          particles to be removed to strike some type of surface.
        </li>
        <li>Effective for <strong>high pressure system</strong> and turbulent flow</li>
        <li>Not effective for streamline flow system</li>
        <li>
          Wire mesh pads are frequently used as entrainment separators for the removal of
          very small liquid droplets and, therefore, a higher over-all percentage removal
          of liquid. Removal of droplets down to <strong>10 micrometers or smaller may be
          possible with these pads.</strong>
        </li>
        <li>
          <strong>Target efficiency:</strong> Fraction of particles moving in a fluid
          stream that impinge on the object
        </li>
      </ul>
      <p><strong>Construction types of impingement separators:</strong></p>
      <ol>
        <li>Wire mesh</li>
        <li>Packed impingement Beds</li>
        <li>Plates (curved, flat or special shaped)</li>
      </ol>

      <h3 class="sub-title">
        5.2 Knitted Wire Mesh &amp; Action in Liquid-Vapor Separation
        <span class="slide-tag">Slides 20, 21, 22</span>
      </h3>
      <p><strong>1. Knitted wire mesh <span class="slide-tag">Slide 20</span></strong></p>
      <ul>
        <li><strong>Material:</strong> wire/plastic of dia 0.003 &ndash; 0.016 inch.</li>
        <li><strong>Pad thickness:</strong> 4/6/12 inch</li>
        <li>
          Solid/liquid can be separated (for solid particle separation, pad should be
          flushed frequently to prevent plugging) from gases
        </li>
      </ul>
      <div class="fig-box">
        <strong>Slide 20: Figure: Typical eliminator pad</strong><br />
        <img
          src="{{SLIDES}}/slide_20.png"
          alt="Slide 20 - Typical eliminator pad photos"
          style="width:78%; margin:6px auto 0 auto;"
        />
      </div>

      <p><strong>Action of Wire Mesh in Liquid-Vapor Separation <span class="slide-tag">Slide 21</span></strong></p>
      <div class="grid-2">
        <div class="card">
          <h4>Mesh Types</h4>
          <ul style="margin-bottom: 0">
            <li>High efficiency</li>
            <li>Standard efficiency</li>
            <li>Wound type (Very High/Optimum efficiency)</li>
            <li>Herringbone (high flow rate or low density)</li>
          </ul>
        </div>
        <div class="card">
          <h4>Type of mesh depends on</h4>
          <ul style="margin-bottom: 0">
            <li>mesh thickness</li>
            <li>mesh density</li>
            <li>wire diameter</li>
            <li>weaving pattern</li>
          </ul>
        </div>
      </div>
      <p>
        <strong>Materials of construction:</strong> Any material that can be formed into
        necessary weaves- ss, monel, nickel, copper, aluminum, carbon steel, tantalum,
        hastelloy, polyethylene, fluropolymer, glass multi-filament etc.
      </p>
      <div class="fig-box">
        <strong>Slide 21: Action of Wire Mesh in Liquid-Vapor Separation (1. pure gas, 2. demister, 3. liquid drops, 4. droplet, 5. rising gas stream, 6. liquid)</strong><br />
        <img
          src="{{SLIDES}}/slide_21.png"
          alt="Slide 21 - Action of Wire Mesh in Liquid-Vapor Separation"
          style="width:78%; margin:6px auto 0 auto;"
        />
      </div>

      <p><strong>Identifying the types of wire mesh <span class="slide-tag">Slide 22</span></strong></p>
      <table>
        <thead>
          <tr>
            <th>General Type</th>
            <th>Density, (lb/ft<sup>3</sup>)*</th>
            <th>Surface Area (ft<sup>2</sup>/ft<sup>3</sup>)</th>
            <th>Thickness (in.)**</th>
            <th>Min Efficiency (wt. %)</th>
            <th>Application</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>High Efficiency</td>
            <td>12</td>
            <td>115</td>
            <td>4+</td>
            <td>99.9+</td>
            <td>Relatively clean, moderate velocity</td>
          </tr>
          <tr>
            <td>Standard Efficiency</td>
            <td>9</td>
            <td>85</td>
            <td>4+</td>
            <td>99.5+</td>
            <td>General purpose</td>
          </tr>
          <tr>
            <td>Optimum Efficiency or VH Efficiency, and Wound type</td>
            <td>13&ndash;14</td>
            <td>120</td>
            <td>4+</td>
            <td>99.9+</td>
            <td>For very high efficiency</td>
          </tr>
          <tr>
            <td>Herringbone, High Through-put or Low Density</td>
            <td>5&ndash;7</td>
            <td>65&plusmn;</td>
            <td>4&ndash;6+</td>
            <td>99.0+</td>
            <td>For services containing solids, or &ldquo;dirty&rdquo; materials</td>
          </tr>
        </tbody>
      </table>
      <p style="font-size: 13.5px; color: #4a5568; margin-top: -8px">
        *If the mesh is made of nickel, monel, or copper, multiply the density values by 1.13, referenced to stainless steel.<br />
        **4&Prime; is minimum recommended thickness; 6&Prime; is very popular thickness; 10&Prime; and 12&Prime; recommended for special applications such as fine mists, oil vapor mist.
      </p>

      <h3 class="sub-title">
        5.3 Design Criteria (Mesh Capacity Determination) &amp; Correlation Factor (k)
        <span class="slide-tag">Slides 23, 24, 25, 26</span>
      </h3>
      <p>
        For <strong>new separator</strong>, Determine <strong>Max. Allowable vapor velocity</strong>
        through mesh and then find the <strong>vessel diameter (Assumption: flow rates of gas and liquid are known)</strong>.
      </p>
      <p><strong>Steps involved:</strong></p>
      <ol>
        <li>
          Determine max allowable vapor velocity (mesh is horizontal) &mdash; <strong>Souders&ndash;Brown Equation</strong>:
          <div class="eq-box">
            <div class="eq-row">
              <span class="katex-eq">V_a = k \sqrt{\frac{\rho_L - \rho_v}{\rho_v}}</span>
              <span class="eq-ref">Souders&ndash;Brown Equation</span>
            </div>
          </div>
          <ul>
            <li>V<sub>a</sub> = maximum allowable superficial vapor velocity across inlet face of mesh, ft/sec</li>
            <li>k = constant based on application, (average for free flowing system = 0.35 for 9-12 lb/cu ft mesh)</li>
            <li>&rho;<sub>L</sub> = liquid density, lb/cu ft</li>
            <li>&rho;<sub>v</sub> = vapor density, lb/cu ft</li>
          </ul>
        </li>
        <li>Cross sectional area of the drum, A = Vapor flow rate/Vapor velocity</li>
        <li>Find diameter of the drum, D, from &lsquo;A&rsquo;</li>
      </ol>

      <p>
        <strong>For other mesh densities, <span class="slide-tag">Slide 24</span></strong>
        use k = 0.4 for 5 lb/cu ft mesh (high capacity), and 0.3 for plastic mesh such as Teflon and polypropylene.
      </p>
      <table>
        <thead>
          <tr>
            <th colspan="3" style="text-align: center">Table 4-10 &ldquo;k&rdquo; Values for Knitted Mesh (Bottom of mesh at least 12 inches above liquid surface)</th>
          </tr>
          <tr>
            <th>Service Conditions</th>
            <th>&ldquo;k&rdquo;</th>
            <th>General Type Mesh</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowspan="3">Clean fluids, moderate liquid load, fits 90% of process situations</td>
            <td>0.35 to 0.36</td>
            <td>Standard</td>
          </tr>
          <tr>
            <td>0.35</td>
            <td>High Efficiency</td>
          </tr>
          <tr>
            <td>0.25</td>
            <td>Very High Efficiency</td>
          </tr>
          <tr>
            <td>High viscosity, dirty suspended solids</td>
            <td>0.40</td>
            <td>Low density or Herringbone, high through-put</td>
          </tr>
          <tr>
            <td>Vacuum operations: 2&Prime; Hg. abs.</td>
            <td>0.20</td>
            <td>Standard or</td>
          </tr>
          <tr>
            <td>16&Prime; Hg. abs.</td>
            <td>0.27</td>
            <td>High Efficiency</td>
          </tr>
          <tr>
            <td>Corrosive Chemical</td>
            <td>0.21</td>
            <td>Plastic coated wire, or plastic strand</td>
          </tr>
        </tbody>
      </table>
      <p style="font-size: 13.5px; color: #4a5568; margin-top: -8px">
        Compiled from various manufacturer&rsquo;s published data. Note: k values for estimating purposes, not final design unless verified by manufacturer. Unless stated, all values based on stainless steel wire.
      </p>

      <div class="card" style="margin: 12px 0">
        <h4>Correlation factor (K) depends on <span class="slide-tag">Slide 25</span></h4>
        <ul>
          <li>liquid drop size</li>
          <li>liquid viscosity</li>
          <li>liquid load</li>
          <li>disengaging space</li>
          <li>type of mesh weave and system pressure</li>
        </ul>
        <p>
          <strong>Lower k values</strong> are used for system <strong>with- high vacuum</strong>,
          low viscosity liquids, low surface tension liquids and system with very bad fouling conditions
        </p>
        <p>
          <strong>For very fine particle-</strong> use high velocity and two mesh pads in
          series and operate second pad at relatively low velocity to remove large droplets
          re-entrained from first pad
        </p>
        <p style="margin-bottom: 0">
          <strong>k</strong> varies somewhat with <strong>system pressure</strong>; as pressure
          increases the <strong>k</strong> value decreases. For pressures below 30 psig,
          <strong>k</strong> = 0.35 avg; above 30 psig, <strong>k</strong> value decreases
          with pressure with an approximate value of 0.30 at 250 psig and 0.275 at 800 psig.
        </p>
      </div>

      <p>
        <strong>k</strong> varies with disengaging height. <strong>k</strong> value increases
        as disengaging height increases. <span class="slide-tag">Slide 26</span>
      </p>
      <table style="max-width: 480px">
        <thead>
          <tr>
            <th colspan="2" style="text-align: center">TABLE 6-11 Variation of k with Disengaging Height</th>
          </tr>
          <tr>
            <th>Disengaging Height Above Mesh (in.)</th>
            <th>Allowable k Value</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>3</td><td>0.12</td></tr>
          <tr><td>4</td><td>0.15</td></tr>
          <tr><td>5</td><td>0.19</td></tr>
          <tr><td>6</td><td>0.22</td></tr>
          <tr><td>7</td><td>0.25</td></tr>
          <tr><td>8</td><td>0.29</td></tr>
          <tr><td>9</td><td>0.32</td></tr>
          <tr><td>10</td><td>0.35</td></tr>
          <tr><td>11</td><td>0.38</td></tr>
          <tr><td>12</td><td>0.40</td></tr>
          <tr><td>13</td><td>0.42</td></tr>
          <tr><td>14</td><td>0.43</td></tr>
        </tbody>
      </table>
      <p style="font-size: 13.5px; color: #4a5568; margin-top: -8px">
        (Source: By permission from York [28].) Note: Values based on 12 lb/ft<sup>3</sup> wire mesh. Design practice normally does not exceed k of 0.4 even for higher disengaging height.
      </p>

      <h3 class="sub-title">
        5.4 Velocity Limitations, Design Vapor Velocity, Efficiency &amp; Pressure Drop
        <span class="slide-tag">Slides 27, 28</span>
      </h3>
      <div class="grid-2">
        <div class="card">
          <h4>Velocity Limitations &amp; Design Vapor Velocity <span class="slide-tag">Slide 27</span></h4>
          <ul>
            <li>Very low velocity will permit passage of particles through the mesh and be carried away with the leaving vapor</li>
            <li>High velocity will lead to flooding conditions</li>
            <li>For good performance expected velocities would be <strong>30-100% of maximum allowable vapor velocity (V<sub>a</sub>)</strong></li>
            <li>Minimum allowable velocity for such design is <strong>10% of V<sub>a</sub></strong></li>
            <li>Flooding velocity of the mesh is <strong>120-140% of V<sub>a</sub></strong></li>
            <li>For vertical or inclined mesh, max<sup>m</sup> allowable velocity is <strong>0.67 V<sub>a</sub></strong> for Horizontal position</li>
          </ul>
          <p style="margin-bottom: 6px">
            <strong>Design vapor Velocity:</strong> To allow for surges, variations in liquid load, variations in particle size and physical properties:
          </p>
          <div class="eq-box" style="background: #fff; margin-bottom: 8px">
            <div class="eq-row">
              <span class="katex-eq">V_D = 0.75\,V_a \quad \text{(for the design of new separator)}</span>
            </div>
          </div>
          <ol start="2" style="margin-bottom: 0; font-size: 13.5px">
            <li>Cross sectional area of the drum, A = Vapor flow rate/Vapor velocity</li>
            <li>Find diameter of the drum, D, from &lsquo;A&rsquo;</li>
          </ol>
        </div>

        <div class="card">
          <h4>Efficiency &amp; Pressure Drop <span class="slide-tag">Slide 28</span></h4>
          <ul>
            <li>Over the range of recommended operating velocity, <strong>efficiency for most applications over 98-99%</strong></li>
            <li>For the average liquid entrainment the mesh will remove particles down to <strong>4 to 6 microns at 95%<sup>+</sup> recovery efficiencies</strong></li>
            <li>Particles <strong>smaller than these range require 2 mesh pads</strong> or fiber pack style pad</li>
          </ul>
          <p style="margin-bottom: 4px"><strong>Pressure Drop:</strong> Pressure drop through wire mesh unit is usually very low</p>
          <ul>
            <li>1 inch water for 4-6 inch thick pad</li>
            <li>3 inch water for 12 inch thick pad</li>
          </ul>
          <div class="eq-box" style="background: #fff; margin-bottom: 0">
            <div class="eq-row">
              <span class="katex-eq">\Delta P = 0.2\,V_D^2\,\rho_v\ \text{inch water}</span>
              <span class="eq-note">For standard weave of 4 inch thick wire mesh pad</span>
            </div>
            <div class="eq-row">
              <span class="katex-eq">\Delta P = 0.12\,V_D^2\,\rho_v\ \text{inch water}</span>
              <span class="eq-note">For low density weave (high through-put) 6 inch thick wire mesh pad</span>
            </div>
          </div>
        </div>
      </div>

      <div class="fig-box">
        <strong>Slide 28: Wire Mesh Pad Roll</strong><br />
        <img
          src="{{SLIDES}}/slide_28.png"
          alt="Slide 28 - Wire Mesh Pad Efficiency and Pressure Drop"
          style="width:76%; margin:6px auto 0 auto;"
        />
      </div>

      <h3 class="sub-title">
        5.5 Installation, Servicing &amp; Specifications, and Placing of Wire Mesh
        <span class="slide-tag">Slides 29, 30, 31</span>
      </h3>
      <div class="grid-2">
        <div class="card">
          <h4>Installation <span class="slide-tag">Slide 29</span></h4>
          <p>Mesh pad must be in <strong>horizontal plane for better drainage</strong>.</p>
          <p style="margin-bottom: 4px"><strong>Pad should not be self supporting over 12 inch dia.</strong> It requires:</p>
          <ol type="a">
            <li>Support bars</li>
            <li>Hold-down bars</li>
          </ol>
          <p style="margin-bottom: 4px">Calculate area of mesh deducting support ring and provide:</p>
          <ol type="a" style="margin-bottom: 0">
            <li>6-12 inch minimum (18 inch minimum preferred) for disengaging at the mesh inlet</li>
            <li>12 inch minimum disengaging space above the mesh</li>
          </ol>
        </div>

        <div class="card">
          <h4>Servicing &amp; Specifications <span class="slide-tag">Slide 30</span></h4>
          <ul style="margin-bottom: 0">
            <li>
              For services where fouling or solid crust formation is a possibility,
              use spray at the top and bottom of the pad to wash them out.
            </li>
            <li>&Delta;P across the pad is a measure of fouling</li>
          </ul>
        </div>
      </div>

      <div class="grid-2">
        <div class="fig-box" style="margin: 0">
          <strong>Slide 29: Figure 4-23 (Wound mesh pads in vertical vessel) &amp; Figure 4-22 (Mesh strips in vertical vessel)</strong><br />
          <img
            src="{{SLIDES}}/slide_29.png"
            alt="Slide 29 - Installation Figures 4-23 and 4-22"
            style="width:100%; margin-top:6px;"
          />
        </div>
        <div class="fig-box" style="margin: 0">
          <strong>Slide 30: Wire entrainment Mesh Specifications Form</strong><br />
          <img
            src="{{SLIDES}}/slide_30.png"
            alt="Slide 30 - Wire entrainment Mesh Specifications"
            style="width:100%; margin-top:6px;"
          />
        </div>
      </div>

      <div class="fig-box">
        <strong>Slide 31: Placing of wire mesh in separators &mdash; Figure 4-24. Typical mesh installations in process equipment. Courtesy of Metal Textile Corp., Bulletin ME-7.</strong><br />
        <img
          src="{{SLIDES}}/slide_31.png"
          alt="Slide 31 - Figure 4-24 Typical mesh installations in process equipment"
          style="width:82%; margin:6px auto 0 auto;"
        />
      </div>
    </section>

    <!-- SECTION 6 -->
    <section
      class="topic-section"
      id="topic-6"
      data-topic="6"
      data-short="Fiber Beds &amp; Dry-Packed Impingement Beds"
    >
      <h2 class="section-title">6. Fiber Beds/Pads &amp; Dry-Packed Impingement Beds</h2>

      <h3 class="sub-title">
        6.1 Fiber Beds/Pads Impingement Eliminators (Packed Beds)
        <span class="slide-tag">Slide 32</span>
      </h3>
      <ul>
        <li>Fiber packing held between wire mesh screen; Best applied for <strong>0.1 to 3 microns</strong></li>
        <li><strong>Separating efficiency:</strong> Entrained liquid up to: 99.97% (by weight)</li>
        <li><strong>Fiber bed packing materials:</strong> Fibers made of fine <strong>glass, Polypropylene, fluoropolymers, ceramic</strong></li>
        <li>Used for separation of entrained particles from influent of <strong>corrosive plant operation- sulfuric acid, chlorine, nitric acid</strong> etc.</li>
        <li><strong>Removal of entrained particles:</strong> Direct <strong>interception</strong>, Inertial <strong>impaction</strong> and <strong>brownian capture</strong></li>
        <li><strong>Pressure drop:</strong> 2-20 inches of water</li>
        <li>
          <strong>Separation performance:</strong> properties of <strong>liquid particles, entraining gas, T, P, liquid viscosity, particle size distribution of liquid particles, quantity of total entrainment &amp; desired separation level</strong>
        </li>
      </ul>
      <div class="fig-box">
        <strong>Slide 32: Fiber Beds/Pads Impingement Eliminator Schematic</strong><br />
        <img
          src="{{SLIDES}}/slide_32.png"
          alt="Slide 32 - Fiber Beds Impingement Eliminators"
          style="width:78%; margin:6px auto 0 auto;"
        />
      </div>

      <h3 class="sub-title">
        6.2 Fiber Bed Particle Separation Mechanism
        <span class="slide-tag">Slides 33, 34</span>
      </h3>
      <div class="grid-2">
        <div class="card">
          <h4>Interception <span class="slide-tag">Slide 33</span></h4>
          <p style="margin-bottom: 0">
            Interception occurs when a particle which is following a gas streamline comes
            within one particle radius of a filter fiber. The particle touches the fiber
            and is captured, thus being removed from the gas flow. For a given particle
            size, there are certain streamlines which will move close enough to a filter
            fiber so that the particle will be captured. Streamlines further than one
            particle radius away from a filter fiber will not contribute to the
            interception mechanism.
          </p>
        </div>

        <div class="card">
          <h4>Inertial Impaction <span class="slide-tag">Slide 33</span></h4>
          <p style="margin-bottom: 0">
            Inertial impaction occurs when a particle is so large that it is unable to
            quickly adjust to the abrupt changes in streamline direction near a filter
            fiber. The particle, due to its inertia, will continue along its original
            path and hit the filter fiber. This type of filtration mechanism is most
            predominant when high gas velocities and dense fiber packing of the filter
            media is present.
          </p>
        </div>
      </div>

      <div class="fig-box">
        <strong>Slide 33: Fig. 2. Mechanisms for particle removal by a filter</strong><br />
        <img
          src="{{SLIDES}}/slide_33.png"
          alt="Slide 33 - Fig 2 Mechanisms for particle removal by a filter"
          style="width:78%; margin:6px auto 0 auto;"
        />
      </div>

      <div class="card" style="margin-bottom: 14px">
        <h4>Diffusion <span class="slide-tag">Slide 34</span></h4>
        <p>
          The kinetic theory of gases explains that a gas is composed of a large number
          of molecules which are small in size when compared to the distances between
          them. These molecules behave like spheres which travel in straight lines when
          they're not bumping into each other. In actuality, these molecules collide with
          each other so much that they move in random, zigzagging path. This random
          motion is referred to as <strong>Brownian motion.</strong>
        </p>
        <p>
          The diffusion mechanism of particle retention is the result of the Brownian
          motion of gas molecules. Small particles, with diameters in the range of
          0.1 &mu;m and below, tend to make random motions due to their interaction with
          the zigzagging gas molecules. As these small particles are bumped by the gas
          molecules they too begin moving randomly about, bumping into other particles as well.
        </p>
        <p style="margin-bottom: 0">
          Diffusion is predominant with low gas velocities and smaller particles. The
          smaller a particle is and the slower the flow, the more time it will have to
          zigzag around, thereby giving it much better chance of hitting and sticking to
          a filter fiber.
        </p>
      </div>

      <h3 class="sub-title">
        6.3 Overall Filter Efficiency Versus Particle Size
        <span class="slide-tag">Slides 35, 36</span>
      </h3>
      <p>
        A fiber filter's ability to remove particles from a gas stream is directly
        related to the size of the particles in the stream.
      </p>
      <ul>
        <li>
          <strong>Particle Dia &lt; 0.1 &mu;:</strong> The primary filtration mechanism
          is diffusion and the filter is very efficient.
        </li>
        <li>
          <strong>0.1 &mu; &le; Particle Dia &le; 0.4 &mu;:</strong> The filter is less
          efficient as the particles are too large for a great diffusion effect and too
          small for a large interception effect.
        </li>
        <li>
          <strong>Particle Dia &gt; 0.4 &mu;:</strong> Interception along with inertial
          impaction are predominant and the filter is very efficient again.
        </li>
      </ul>
      <div class="grid-2">
        <div class="fig-box" style="margin: 0">
          <strong>Slide 35: Percent Efficiency vs. Particle Diameter (micrometers)</strong><br />
          <img
            src="{{SLIDES}}/slide_35.png"
            alt="Slide 35 - Overall Filter Efficiency vs Particle Size"
            style="width:100%; margin-top:6px;"
          />
        </div>
        <div class="fig-box" style="margin: 0">
          <strong>Slide 36: Figure 8.21. Examples of large cylindrical mist eliminators. Reproduced with permission of the American Filtration and Separation Society, Richfield, Minnesota, USA.</strong><br />
          <img
            src="{{SLIDES}}/slide_36.png"
            alt="Slide 36 - Figure 8.21 Large cylindrical mist eliminators"
            style="width:100%; margin-top:6px;"
          />
        </div>
      </div>

      <h3 class="sub-title">
        6.4 Dry-packed Impingement Beds
        <span class="slide-tag">Slide 37</span>
      </h3>
      <ul>
        <li>Not used frequently</li>
        <li>Have some specific use applications <strong>in sulfuric acid mist removal</strong></li>
        <li>Bed made of <strong>graded granular materials or ceramic packing</strong></li>
        <li>Bed height &gt; <strong>2 feet</strong></li>
        <li><strong>Pressure drop:</strong> large</li>
        <li><strong>Efficiency:</strong> 99% for 0.5 to 5 micron for a good design</li>
        <li><strong>Maintenance:</strong> Units plug on dust service and must be back washed to regain operability at reasonable pressure drop</li>
      </ul>
      <div class="fig-box">
        <strong>Slide 37: Dry-packed Impingement Bed Schematic</strong><br />
        <img
          src="{{SLIDES}}/slide_37.png"
          alt="Slide 37 - Dry-packed Impingement Beds"
          style="width:74%; margin:6px auto 0 auto;"
        />
      </div>
    </section>

    <!-- SECTION 7 -->
    <section
      class="topic-section"
      id="topic-7"
      data-topic="7"
      data-short="Plate Type Impingement Separator"
    >
      <h2 class="section-title">7. Plate Type Impingement Separator</h2>

      <h3 class="sub-title">
        7.1 Plate Type Impingement Separator &amp; Zig-zag Plate Separation Action (Impact)
        <span class="slide-tag">Slides 38, 39</span>
      </h3>
      <p>
        &lsquo;Zig-zag&rsquo; plate with baffle is used as a separating medium of
        entrained liquid particles form gases. <span class="slide-tag">Slide 38</span>
      </p>
      <div class="fig-box">
        <strong>Slide 38: Figure 4-17A. Separation/Impingement action of Chevron-style mist eliminators (Koch Engineering Co.) &amp; Stripping Vanes Vessel</strong><br />
        <img
          src="{{SLIDES}}/slide_38.png"
          alt="Slide 38 - Plate type impingement separator Figure 4-17A"
          style="width:82%; margin:6px auto 0 auto;"
        />
      </div>

      <div class="card">
        <h4>Zig-zag Plate Separation action (Impact) <span class="slide-tag">Slide 39</span></h4>
        <p>
          Gases with entrained liquid droplets flow between the zig-zag baffles. The gas
          can easily make the turns while the liquid droplets impinge upon the walls of
          the baffles and coalesce to a size such that they drop downward, being too
          heavy to be carried in the gas.
        </p>
        <ul style="margin-bottom: 0">
          <li>Effective separation for <strong>12-15 micron particles</strong></li>
          <li>
            Removal efficiency: <strong>97-99%+ for 15 micron particles</strong>;
            efficiency depends on- <strong>physical properties of liquid and gas phase,
            T, P, amount of entrained liquids/solids, expected particle size and its distribution</strong>
          </li>
          <li>
            This type separator can <strong>handle higher gas velocities, high liquid
            loading, viscous liquids, reasonable solids, relatively low pressure drop</strong> (0.1-3 psi)
          </li>
        </ul>
      </div>
    </section>

    <!-- SECTION 8 -->
    <section
      class="topic-section"
      id="topic-8"
      data-topic="8"
      data-short="Gas Solid Separation &amp; Cyclone Separator"
    >
      <h2 class="section-title">8. Gas Solid Separation &amp; Cyclone Separator</h2>

      <h3 class="sub-title">
        8.1 Gas Solid Separation
        <span class="slide-tag">Slide 40</span>
      </h3>
      <p>
        Dust collection is the process of removal and collection of solids in a gas
        phase. Its purpose is to:
      </p>
      <ol>
        <li>Control <strong>air pollution</strong> from various industrial plants</li>
        <li>Eliminate <strong>safety and health hazards</strong> from the workplace in which <strong>grinding, milling, and packaging</strong> operations take place</li>
        <li>Recover valuable products from <strong>dryers, conveyors, bagging equipment, and so on, for recycling back</strong> into a process</li>
        <li>Reduce <strong>equipment maintenance on rotating equipment</strong> caused by dusts</li>
      </ol>
      <p>
        There are <strong>four broad groups</strong> of gas-solid separation equipment
        (upward arrow &uarr; from 4 to 1 toward larger particle size):
      </p>
      <ol>
        <li><strong>Cyclone and inertial separators</strong> (centrifugal separator) for removal of large solid particles</li>
        <li><strong>Bag house collectors</strong> for removal of intermediate-fine sized particle</li>
        <li><strong>Wet scrubbers</strong> employing liquid sprays to entrap solid particles.</li>
        <li><strong>Electrostatic precipitators</strong> to collect fine particles</li>
      </ol>

      <h3 class="sub-title">
        8.2 Cyclone and Inertial Separator (Centrifugal separator) &mdash; Cyclone Separator
        <span class="slide-tag">Slides 41, 42, 43</span>
      </h3>
      <div class="grid-2">
        <div class="card">
          <h4>Principle &amp; Flow Pattern <span class="slide-tag">Slide 41</span></h4>
          <ul style="margin-bottom: 0">
            <li>The most commonly used equipment for the separation of dust particles from an air/gas stream is the <strong>cyclone separator</strong>.</li>
            <li>Simple in construction and operation. Carrier gases enter near the top of the cylindrical body section <strong>tangentially and then spiral down</strong>.</li>
            <li><strong>Entrained solid particles</strong> are pushed to the wall since <strong>centrifugal force on the solid particles is higher</strong> than that on gases. Solids would slide down the wall</li>
            <li><strong>Reversal of spiral takes place when it comes close to the bottom of the cyclone.</strong> At this point the <strong>relative velocity difference</strong> between the particle and its carrier gas is the largest for any point in the unit.</li>
            <li><strong>Tangential velocity</strong> component <strong>predominates throughout the cyclone</strong>, the <strong>axial velocity prevails</strong> in the <strong>turbulent core</strong></li>
          </ul>
        </div>

        <div class="card">
          <h4>Sizing, Efficiency &amp; Primary Collectors <span class="slide-tag">Slide 43</span></h4>
          <ul style="margin-bottom: 0">
            <li>A <strong>small-diameter cyclone</strong> generates a <strong>greater centrifugal force</strong> than a <strong>large diameter</strong> unit.</li>
            <li>To obtain the <strong>same performance</strong>, a design engineer has the choice of either <strong>a smaller diameter and a short chamber</strong> or a <strong>larger diameter with a longer barrel chamber</strong>.</li>
            <li>Because the <strong>tapered section of the cone is smaller than the main chamber, higher velocities are encountered</strong>, which may <strong>re-entrain the finer dust particles</strong> and these then may be swept to the outlet of the cyclone.</li>
            <li>Properly designed cyclones can remove nearly every particle in the <strong>20&ndash;30 micron range.</strong> Typically, cyclone separators have efficiencies in the range of <strong>70&ndash;90%</strong>.</li>
            <li>Because of the <strong>low efficiency</strong> of these units, they are often used as a first stage of dust collection, or are referred to as <strong>primary collectors</strong></li>
          </ul>
        </div>
      </div>

      <div class="fig-box">
        <strong>Slide 42: Vortex Pattern in a Cyclone Separator (Main Vortex, Vortex Core, Eddy)</strong><br />
        <img
          src="{{SLIDES}}/slide_42.png"
          alt="Slide 42 - Vortex Pattern in a Cyclone Separator"
          style="width:80%; margin:6px auto 0 auto;"
        />
      </div>

      <h3 class="sub-title">
        8.3 Inlet Velocity &amp; Pressure Drop
        <span class="slide-tag">Slide 44</span>
      </h3>
      <p>
        To limit &Delta;P, <strong>V<sub>Gi</sub></strong> should be in the range of of
        <strong>1000&ndash;4000 ft/min, 3000 ft/min is average</strong>.
        The pressure drop is estimated in terms of velocity heads:
      </p>
      <div class="eq-box">
        <div class="eq-row">
          <span class="katex-eq">\Delta P = \frac{4 \rho V^2}{2 g}</span>
        </div>
      </div>
      <p><strong>Pressure drop</strong> consists of five components:</p>
      <ol>
        <li>Inlet contraction</li>
        <li>Solids acceleration</li>
        <li>Barrel friction</li>
        <li>Flow reversal</li>
        <li>Exit contraction</li>
      </ol>
      <p>
        <strong>**The size of the inlet is selected at a specific inlet velocity and required volumetric rate;</strong>
        the other dimensions then are fixed.
      </p>

      <h3 class="sub-title">
        8.4 Rectangular Inlet &amp; Typical Dimension Ratios
        <span class="slide-tag">Slide 45</span>
      </h3>
      <ul>
        <li><strong>Width:</strong> D/4 (D: Barrel Dia)</li>
        <li><strong>Height:</strong> 2-3 times the Width</li>
        <li><strong>Inlet volumetric flow rate:</strong> A(inlet area) &times; V<sub>Gi</sub> = 2.5 D<sup>2</sup>V<sub>Gi</sub>/16</li>
      </ul>
      <div class="eq-box">
        <div class="eq-row">
          <span class="katex-eq">W = \frac{D_B}{4}, \qquad D_O = \frac{D_B}{2}, \qquad A = \frac{D_B}{2}, \qquad H_C = 2 D_B</span>
        </div>
        <div class="eq-row">
          <span class="katex-eq">S = 2 D_B + \left(\frac{D_B}{8}\right), \qquad H = 2 D_B + 2 D_B = 4 D_B, \qquad B = \text{usually } \frac{D_B}{4}</span>
        </div>
      </div>
      <div class="fig-box">
        <strong>Slide 45: Typical dimension ratios of a cyclone separator</strong><br />
        <img
          src="{{SLIDES}}/slide_45.png"
          alt="Slide 45 - Typical dimension ratios of a cyclone separator"
          style="width:76%; margin:6px auto 0 auto;"
        />
      </div>

      <h3 class="sub-title">
        8.5 Critical Particle Diameter
        <span class="slide-tag">Slide 46</span>
      </h3>
      <p>
        <strong>Critical particle diameter:</strong> A key concept is the critical
        particle diameter which is one that is removed to the extent of 50%.
      </p>
      <div class="eq-box">
        <div class="eq-row">
          <span class="katex-eq">(D_p)_{\text{crit}} = \left[\frac{9 \mu D}{4 \pi N_t V (\rho - \rho_g)}\right]^{0.5}</span>
        </div>
        <div class="eq-row">
          <span class="katex-eq">N_t = \left[0.1079 - 0.00077\,V + 1.924(10^{-6}) V^2\right] V</span>
        </div>
      </div>
      <ul>
        <li>where <strong>D</strong> = diameter of the vessel, ft</li>
        <li><strong>V</strong> = inlet linear velocity, ft/sec</li>
        <li><strong>N<sub>t</sub></strong> = number of turns made by the gas in the vessel</li>
        <li>Normally, <strong>N<sub>t</sub> = 5</strong></li>
        <li>If <strong>N<sub>t</sub> = 1 to 2</strong>, re-entrainment takes place</li>
      </ul>
      <div class="fig-box">
        <strong>Slide 46: Figure &mdash; Percent removal of particles in a cyclone as a function of their diameters relative to the critical diameter</strong><br />
        <img
          src="{{SLIDES}}/slide_46.png"
          alt="Slide 46 - Percent removal vs critical particle diameter"
          style="width:78%; margin:6px auto 0 auto;"
        />
      </div>
    </section>

    <!-- SECTION 9 -->
    <section
      class="topic-section"
      id="topic-9"
      data-topic="9"
      data-short="Inertial Separator"
    >
      <h2 class="section-title">9. Inertial Separator</h2>

      <h3 class="sub-title">
        9.1 Principle, Operation &amp; Performance
        <span class="slide-tag">Slides 47, 48</span>
      </h3>
      <p>
        Inertial separator designs consist of a louver or baffle device mounted in a
        plenum chamber. Unit is compact. <strong>External power exerts centrifugal force
        on the carrier gas stream.</strong>
      </p>
      <p>
        Dust-laden air enters beneath the louvers and the flow is diverted, changing
        direction, therefore slowing the air velocity so that the air stream cannot
        support the particles. The dust impinges on the louvers, falls into the lower
        chamber, and is discharged at the bottom of the collector.
      </p>
      <p>The &ldquo;clean&rdquo; gas leaves at the top of the unit.</p>
      <p>
        These collectors are used in applications where the <strong>inlet dust loads are
        small, usually less than 0.5 grain per cubic foot. Heavier loads quickly plug
        the equipment. Avoid use with sticky or tacky materials.</strong>
      </p>
      <p><strong>Efficiency: 90-99%</strong></p>

      <div class="fig-box">
        <strong>Slide 48: Inertial Separator Schematic &amp; Fresh air louver</strong><br />
        <img
          src="{{SLIDES}}/slide_48.png"
          alt="Slide 48 - Inertial Separator and Fresh air louver"
          style="width:78%; margin:6px auto 0 auto;"
        />
      </div>
    </section>
  `,
};
