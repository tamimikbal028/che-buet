window.NOTES_REGISTRY = window.NOTES_REGISTRY || [];
window.NOTES_REGISTRY.push({
  id: "evaporator",
  title: "Evaporators",
  shortTitle: "Evaporators",
  subtitle: "Dr. Md Tanvir Sowgath &nbsp;|&nbsp; CHE 311 &nbsp;|&nbsp; 101 Slides",
  meta: "11 Topics · 101 Slides",
  slideCount: "101 Slides",
  defaultSlidesPath: "slides",
  html: String.raw`
      <!-- SECTION 1 -->
      <section class="topic-section" id="topic-1" data-topic="1" data-short="Unit Operation, Evaporator &amp; Liquid Characteristics">
      <h2 class="section-title">
        1. Unit Operation, Evaporator &amp; Liquid Characteristics
      </h2>

      <h3 class="sub-title">
        1.1 Unit Operation
        <span class="slide-tag">Slides 1, 2</span>
      </h3>
      <ul>
        <li>
          Chemical <strong>Process</strong> &rarr; <strong>sequence</strong> of
          &ldquo;unit operations&rdquo; (<strong>physical changes</strong>) +
          chemical reactors.
        </li>
        <li>A unit operation is the one of the sequence of operation</li>
      </ul>
      <div class="card">
        <h4>EXAMPLES</h4>
        <ul style="margin-bottom: 0; columns: 2; column-gap: 20px">
          <li>Heat Exchange</li>
          <li>Fluid flow</li>
          <li><strong>Distillation</strong></li>
          <li>Evaporation</li>
          <li>Humidification</li>
          <li>Sedimentation</li>
          <li>Classification</li>
        </ul>
      </div>

      <h3 class="sub-title">
        1.2 Evaporator
        <span class="slide-tag">Slides 3, 4</span>
      </h3>
      <div class="grid-2">
        <div class="card">
          <h4>Evaporation</h4>
          <ul style="margin-bottom: 0">
            <li>
              Concentrate a solution consisting of <strong>nonvolatile solute</strong>
              and a <strong>volatile solvent</strong>
            </li>
            <li>
              Evaporation is conducted by <strong>vaporizing a portion of the solvent</strong>
              to produce a concentrated solution of <strong>thick liquor</strong>.
            </li>
            <li>Majority of evaporations the solvent is <strong>water</strong>.</li>
            <li>Example: Fresh water from Seawater by evaporation (MSF &amp; MEE)</li>
          </ul>
        </div>
        <div class="card">
          <h4>Application in Bangladesh industries</h4>
          <ul style="margin-bottom: 0">
            <li>Concentration of <strong>cane sugar</strong> in the sugar industries</li>
            <li>Concentration of <strong>Black liquor</strong> in a pulp and paper industry</li>
            <li><strong>Urea solution</strong> concentration</li>
          </ul>
        </div>
      </div>

      <div class="card">
        <h4>EVAPORATION V/S DRYING, DISTILLATION &amp; CRYSTALLIZATION <span class="slide-tag">Slide 4</span></h4>
        <ul style="margin-bottom: 0">
          <li>
            Evaporation differs from <strong>drying</strong> in that the
            <strong>residue is a liquid</strong> &mdash; sometimes a
            <strong>highly viscous one</strong> &mdash; <strong>rather than a solid</strong>;
          </li>
          <li>
            Evaporation differs from <strong>distillation</strong> in that the
            <strong>vapor usually is a single component</strong>, and even when
            the vapor is a <strong>mixture</strong>, no attempt is made in the
            evaporation step to <strong>separate the vapor</strong> into fractions;
          </li>
          <li>
            Evaporation differs from <strong>crystallization</strong> in that
            emphasis is placed on <strong>concentrating a solution rather than forming and building crystals</strong>.
          </li>
        </ul>
      </div>

      <h3 class="sub-title">
        1.3 Characteristics Feature of Evaporator &amp; Factors to Be Considered
        <span class="slide-tag">Slides 5, 6</span>
      </h3>
      <div class="grid-2">
        <div class="card">
          <h4>Classification &amp; Number of Effects</h4>
          <ul style="margin-bottom: 0">
            <li>
              <strong>Based on the flow of fluids:</strong> Natural circulation;
              Forced circulation
            </li>
            <li>
              <strong>Based on the flow of fluids:</strong> Forward Feed; Mixed
              Feed; And Parallel Feed
            </li>
            <li><strong>Number of Effects:</strong> Single; Multiple Effect</li>
          </ul>
        </div>
        <div class="card">
          <h4>Application &amp; Design Calculations</h4>
          <ul style="margin-bottom: 0">
            <li><strong>Application:</strong> Solution Characteristics; Required Capacity</li>
            <li>
              <strong>Design Calculations:</strong> Material and Energy balance,
              Steam Economy and Required Heat transfer; Sizing of heat exchanger
              transfer area, Evaporator and auxiliary equipment
            </li>
          </ul>
        </div>
      </div>
      <p>
        The selection of the appropriate evaporator is ultimately
        <strong>matter of economics</strong>, but the properties of the liquid
        may limit the choice.
      </p>

      <div class="card">
        <h4>Factors to be considered <span class="slide-tag">Slide 6</span></h4>
        <ul style="margin-bottom: 0; columns: 2; column-gap: 20px">
          <li>Arrangement of <strong>vapor body</strong> and <strong>heat exchange</strong> device</li>
          <li>Tube sizes (<strong>Diameter</strong> [D] &amp; <strong>Length</strong> [L])</li>
          <li><strong>Flow arrangement</strong> of solution and steam (<strong>Inside</strong> &amp; <strong>outside</strong>)</li>
          <li><strong>Types of solution</strong> to be evaporated (<strong>concentration</strong> [C] &amp; <strong>viscosity</strong> [&mu;])</li>
          <li>Foam breaker</li>
          <li>Problem of <strong>cleaning deposits</strong></li>
          <li><strong>Overall heat transfer coefficient</strong> (h&#772;)</li>
          <li>Applications</li>
        </ul>
      </div>

      <h3 class="sub-title">
        1.4 Liquid Characteristics
        <span class="slide-tag">Slides 7, 8, 9</span>
      </h3>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Liquid Characteristic</th>
            <th>Evaporator</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Highly <strong>viscous</strong> liquid</td>
            <td><strong>Forced Circulation</strong> and turbulent film evaporator</td>
          </tr>
          <tr>
            <td>2</td>
            <td><strong>Foamy</strong> liquids (detergent solution)</td>
            <td><strong>Forced Circulation</strong> evaporator</td>
          </tr>
          <tr>
            <td>3</td>
            <td><strong>Heat Sensitive</strong> materials (Fruit juice)</td>
            <td><strong>Falling Film</strong> Evaporator</td>
          </tr>
          <tr>
            <td>4</td>
            <td><strong>Corrosive</strong> liquor (Spent pickle liquor)</td>
            <td><strong>Submerged</strong> combustion evaporator</td>
          </tr>
        </tbody>
      </table>

      <p>
        Solution of an evaporation problem is profoundly affected by wide
        variation in <strong>liquor characteristics</strong>:
      </p>
      <div class="grid-2">
        <div class="card">
          <h4>Concentration &amp; Viscosity, BPE &amp; Foaming <span class="slide-tag">Slide 8</span></h4>
          <ul style="margin-bottom: 0">
            <li>
              <strong>Concentration &amp; Viscosity</strong>
              <ul>
                <li><strong>Dilute liquor</strong> fed to an evaporator properties <strong>close</strong> to water</li>
                <li>As the increase in solid content, solution properties changes</li>
                <li><strong>Viscosity</strong> (&mu;) and <strong>density</strong> (&rho;) increase with the solid content</li>
              </ul>
            </li>
            <li>
              <strong>Boiling Point Elevation:</strong> the boiling temperature
              of a <strong>concentrated solution</strong> may be
              <strong>much higher</strong> than that of <strong>water</strong>
              at the <strong>same pressure</strong>.
            </li>
            <li>
              <strong>Foaming:</strong> organic substances foam during
              vaporization. It causes heavy <strong>entrainment</strong>.
            </li>
          </ul>
        </div>
        <div class="card">
          <h4>Temperature Sensitivity, Scale &amp; Other Characteristics <span class="slide-tag">Slide 9</span></h4>
          <ul style="margin-bottom: 0">
            <li>
              <strong>Temperature sensitivity:</strong> Many fine chemicals,
              pharmaceutical products, and foods are <strong>damaged</strong>
              when heated to <strong>moderate temperatures</strong> for
              relatively <strong>short times</strong>.
            </li>
            <li>
              <strong>Scale formation tendency:</strong> Some solutions
              <strong>deposit scale</strong> on the heating surface.
            </li>
            <li>
              <strong>Other liquid characteristics:</strong>
              specific heat (c<sub>p</sub>), heat of <strong>concentration</strong>,
              freezing point, gas liberation on boiling, Toxicity, explosion
              hazards, Radioactivity, and necessity for sterile operation.
            </li>
          </ul>
        </div>
      </div>
      </section>

      <!-- SECTION 2 -->
      <section class="topic-section" id="topic-2" data-topic="2" data-short="Single-Effect, Multiple-Effect &amp; Performance">
      <h2 class="section-title">
        2. Single-Effect &amp; Multiple-Effect Evaporators, Performance &amp; Capacity
      </h2>

      <h3 class="sub-title">
        2.1 Single Effect Evaporator
        <span class="slide-tag">Slides 10, 11</span>
      </h3>
      <div class="grid-2">
        <div class="card">
          <h4>Operation</h4>
          <p style="margin: 0 0 8px 0">
            In this type, evaporator the <strong>vapor</strong> from the
            <strong>boiling liquid</strong> is <strong>condensed</strong> and
            <strong>discarded</strong>.
          </p>
          <p style="margin: 0 0 4px 0"><strong>Single effects units can be operated in:</strong></p>
          <ul style="margin-bottom: 0">
            <li>Batch mode</li>
            <li>Semi batch mode</li>
            <li><strong>Continuous batch</strong> mode</li>
            <li>Continuous mode</li>
          </ul>
        </div>
        <div class="card">
          <h4>Capacity &amp; Steam Economy</h4>
          <div class="eq-box" style="background: #fff; margin: 0">
            <div class="eq-row">
              <span class="katex-eq">\text{Capacity, } Q = U A \Delta T \qquad \Delta T = T_s - T_b</span>
            </div>
            <div class="eq-row">
              <span class="katex-eq">\text{Steam economy (for single effect)} = \frac{1\text{ kg of vapor produced}}{1\text{ kg of steam}} \Rightarrow 1</span>
            </div>
          </div>
          <p style="margin: 8px 0 0 0; font-size: 13.5px">
            U = Overall heat transfer coefficient; A = Heat Transfer Area
          </p>
        </div>
      </div>

      <div class="fig-box">
        <strong>Slide 10: Single Effect Evaporator (Vapor Separator, Heat Exchanger, Condenser Unit)</strong><br />
        <img src="{{SLIDES}}/slide_10.png" alt="Slide 10 - Single Effect Evaporator schematic" style="width:82%; margin:6px auto 0 auto;" />
      </div>

      <h3 class="sub-title">
        2.2 Multiple Effect Evaporator (Double &amp; Triple Effect)
        <span class="slide-tag">Slides 14, 16</span>
      </h3>
      <ul>
        <li>
          Series of Evaporator is connected between <strong>steam supply</strong>
          and <strong>condenser</strong> in <strong>Multiple effect Evaporator</strong>.
        </li>
        <li>
          The <strong>vapor</strong> from <strong>preceding effect</strong>
          serve as <strong>heating medium</strong> of next.
        </li>
        <li>
          <strong>Temperature</strong> and <strong>pressure</strong> are
          gradually <strong>decreases</strong> (P<sub>1</sub> &gt; P<sub>2</sub> &gt; P<sub>3</sub>;
          T<sub>1</sub> &gt; T<sub>2</sub> &gt; T<sub>3</sub>).
        </li>
        <li>
          For each effect the <strong>vapor product becomes the source of heat</strong>
          for the subsequent effect.
        </li>
        <li>
          Multiple effect evaporator <strong>increases the steam economy</strong>
          by evaporation of water (solvent) per kg of steam using a
          <strong>series</strong> of evaporators between the steam supply and the condenser.
        </li>
        <li><strong>Steam pressure used &le; 3 atm. abs.</strong> (process steam)</li>
        <li>
          <strong>Operating pressure</strong> of boiling (vapor) space in each
          effect is <strong>lower</strong> than <strong>previous effect</strong>
          (P<sub>1</sub> &gt; P<sub>2</sub>).
        </li>
      </ul>
      <div class="eq-box">
        <div class="eq-row">
          <span class="katex-eq">\text{Steam economy} \cong \frac{3\text{ kg of vapour produced}}{1\text{ kg of steam supply}} \cong 3</span>
        </div>
      </div>

      <div class="grid-2">
        <div class="fig-box" style="margin: 0">
          <strong>Slide 14: Figure — Double Effect Evaporator</strong><br />
          <img src="{{SLIDES}}/slide_14.png" alt="Slide 14 - Double Effect Evaporator" style="width:100%; margin-top:6px;" />
        </div>
        <div class="fig-box" style="margin: 0">
          <strong>Slide 16: Figure 16.9 — Triple-Effect Evaporator (P<sub>1</sub> &gt; P<sub>2</sub> &gt; P<sub>3</sub>, T<sub>1</sub> &gt; T<sub>2</sub> &gt; T<sub>3</sub>)</strong><br />
          <img src="{{SLIDES}}/slide_16.png" alt="Slide 16 - Figure 16.9 Triple Effect Evaporator" style="width:100%; margin-top:6px;" />
        </div>
      </div>

      <h3 class="sub-title">
        2.3 Performance of Evaporator &amp; Evaporator Capacity
        <span class="slide-tag">Slides 15, 17</span>
      </h3>
      <p>
        The principal measures of the <strong>performance of a steam-heated tubular evaporator</strong>
        are: <strong>the capacity</strong> and <strong>the economy</strong>.
      </p>
      <div class="grid-2">
        <div class="card">
          <h4>Capacity</h4>
          <ul style="margin-bottom: 0">
            <li>
              <strong>Capacity</strong> is defined as the number of kilograms of
              water <strong>vaporized</strong> per hour (kg vaporized / hr).
            </li>
            <li>
              It is also defined as the <strong>rate of heat transfer</strong>
              through the heating surface of an evaporator (q&#775; = Q&#775; / A).
            </li>
          </ul>
        </div>
        <div class="card">
          <h4>Steam Economy</h4>
          <ul style="margin-bottom: 0">
            <li>
              <strong>Economy</strong> is the number of kilograms
              <strong>vaporized per kilogram of steam fed</strong> to the unit
              (kg vaporized / kg H<sub>2</sub>O).
            </li>
            <li>
              In a <strong>single-effect evaporator</strong> the
              <strong>economy is nearly always less than 1</strong>, but in
              multiple-effect equipment it may be considerably greater.
            </li>
            <li>
              <strong>Factors affecting evaporator economy are:</strong> No. of
              effects (major factor) &amp; <strong>Temperature of the Feed</strong>.
            </li>
          </ul>
        </div>
      </div>

      <p>
        The rate of heat transfer q through the heating surface of an evaporator
        is the product of three factors: (i) <strong>the area of the heat-transfer surface A</strong>,
        (ii) <strong>the overall heat-transfer coefficient U</strong>, and (iii)
        <strong>the overall temperature drop &Delta;T</strong>:
      </p>
      <div class="eq-box">
        <div class="eq-row">
          <span class="katex-eq">q = U A \Delta T</span>
          <span class="katex-eq">\Delta T = \phi\left[(P_s - P_v),\, T,\, T_b,\, z,\, v\right]</span>
        </div>
      </div>
      <div class="grid-2">
        <div class="card">
          <h4>&Delta;T depends on &rarr;</h4>
          <ul style="margin-bottom: 0">
            <li>steam pressure (P<sub>s</sub>) and pressure in vapor space (P<sub>v</sub>)</li>
            <li>boiling point of liquid, T<sub>b</sub> (<strong>BPE</strong>)</li>
            <li>hydrostatic head (z)</li>
          </ul>
        </div>
        <div class="card">
          <h4>U strongly depends on &rarr;</h4>
          <ul style="margin-bottom: 0">
            <li>concentration</li>
            <li>mode of operation of the evaporator</li>
          </ul>
          <p style="margin: 8px 0 0 0; font-size: 13px">
            P<sub>v</sub> = Vapor space pressure; P<sub>s</sub> = pressure of
            saturated steam; z = Hydrostatic head; T<sub>b</sub> = Boiling point
            of Solution; v = velocity of liquid in tube.
          </p>
        </div>
      </div>

      <div class="fig-box">
        <strong>Slide 17: Evaporator Capacity &amp; Hydrostatic Head (P<sub>v</sub>, z, P<sub>s</sub>, T<sub>s</sub>)</strong><br />
        <img src="{{SLIDES}}/slide_17.png" alt="Slide 17 - Evaporator Capacity and Hydrostatic Head" style="width:86%; margin:6px auto 0 auto;" />
      </div>
      </section>

      <!-- SECTION 3 -->
      <section class="topic-section" id="topic-3" data-topic="3" data-short="BPE, Dühring's Rule, U, Steam Pressure &amp; Vacuum">
      <h2 class="section-title">
        3. Boiling-Point Elevation, D&uuml;hring&rsquo;s Rule, U, Steam Pressure &amp; Vacuum
      </h2>

      <h3 class="sub-title">
        3.1 Boiling-Point Elevation (BPE) &amp; D&uuml;hring&rsquo;s Rule
        <span class="slide-tag">Slides 18, 19, 20</span>
      </h3>
      <ul>
        <li>
          The <strong>vapor pressure</strong> of <strong>aqueous solutions</strong>
          is <strong>less</strong> than that of <strong>water</strong> at the
          same temperature.
        </li>
        <li>
          Consequently, for a given pressure the <strong>boiling point of the solutions</strong>
          is <strong>higher</strong> than that of <strong>pure water</strong>,
          e.g., NaOH solution.
        </li>
        <li>
          The increase in boiling point over that of water is known as the
          <strong>boiling-point elevation (BPE)</strong> of the solution.
        </li>
        <li>
          For strong solutions the BPE is best found from an empirical rule known
          as <strong>D&uuml;hring&rsquo;s rule</strong>.
        </li>
        <li>
          <strong>D&uuml;hring&rsquo;s rule</strong> states that the
          <strong>boiling point</strong> of a given solution is a
          <strong>linear function of the boiling point of pure water at the same pressure</strong>.
        </li>
        <li>
          The boiling point of the solution is plotted against that of water at
          the same pressure; a <strong>straight line results</strong>. Different
          lines are obtained for different concentrations.
        </li>
      </ul>

      <div class="example-box">
        <h4>Example (D&uuml;hring&rsquo;s Rule at P = 1 atm) <span class="slide-tag">Slide 20</span></h4>
        <div class="eq-box" style="background: #fff; margin: 0">
          <div class="eq-row">
            <span class="katex-eq">P = 1\text{ atm}: \quad 50\%\text{ NaOH Sol}^n\text{ B.P.} = 293^\circ\text{F}, \quad \text{B.P. of Pure water} = 212^\circ\text{F}</span>
          </div>
          <div class="eq-row">
            <span class="katex-eq">\text{BPE} = 293^\circ\text{F} - 212^\circ\text{F} = \mathbf{81^\circ\text{F}}</span>
          </div>
        </div>
      </div>

      <p>
        <strong>Effect of BPR/BPE on different evaporators (conc. &uarr; BPE &uarr;):</strong>
        Consider the <strong>single-effect evaporator</strong>. Of the total
        temperature drop of 181 degrees the <strong>shaded part represents the loss in temperature drop due to boiling point elevation</strong>.
        The remaining temperature drop, 105 degrees, the <strong>actual driving force</strong>
        for heat transfer, is represented by the unshaded part. The diagram for
        the double-effect evaporator shows two shaded portions because there is a
        <strong>boiling point elevation in each of the two effects</strong>, and
        the residual unshaded part, <strong>totaling 85 degrees</strong>, is
        smaller than in the diagram for the single effect. In the triple-effect
        evaporator there are three shaded portions since <strong>there is a loss of temperature drop in each of three effects</strong>,
        and the total net available temperature drop, <strong>79 degrees</strong>,
        is correspondingly smaller.
      </p>

      <div class="grid-2">
        <div class="fig-box" style="margin: 0">
          <strong>Slide 19: Figure 16.11 — Effect of boiling-point elevation on capacity of evaporators</strong><br />
          <img src="{{SLIDES}}/slide_19.png" alt="Slide 19 - Figure 16.11 Effect of BPE on capacity" style="width:100%; margin-top:6px;" />
        </div>
        <div class="fig-box" style="margin: 0">
          <strong>Slide 20: Figure 16.4 — D&uuml;hring lines, system sodium hydroxide&mdash;water (After McCabe)</strong><br />
          <img src="{{SLIDES}}/slide_20.png" alt="Slide 20 - Figure 16.4 Duhring lines" style="width:100%; margin-top:6px;" />
        </div>
      </div>

      <h3 class="sub-title">
        3.2 Overall Heat Transfer Coefficient (U)
        <span class="slide-tag">Slides 21, 22, 23</span>
      </h3>
      <ul>
        <li>
          A coefficient which indicates the amount of heat flow that is exchanged
          across a <strong>unit area</strong> of a medium or system in a
          <strong>unit amount of time</strong> with a <strong>unit of temperature difference</strong>
          between the boundary of the system.
        </li>
        <li>
          Because of the difficulty of measuring the <strong>high individual film coefficients</strong>
          in an evaporator, experimental results are usually expressed in terms
          of <strong>overall coefficients</strong>. These are based on the
          <strong>net temperature drop</strong> corrected for boiling-point elevation.
        </li>
        <li>
          &lsquo;U&rsquo; is based on the <strong>net temperature drop</strong>
          corrected BPR. The effect for <strong>hydrostatic head (z)</strong> is
          <strong>neglected</strong>.
        </li>
        <li>
          A <strong>small accumulation of scale reduces the coefficients</strong>
          to a small fraction of the clean-tube values.
        </li>
        <li>
          The overall coefficient is influenced by the same factors influencing
          individual coefficients; but if <strong>one resistance</strong> (say,
          that of the <strong>liquid film</strong>) is <strong>controlling</strong>,
          large changes in the other <strong>resistances</strong> have almost
          <strong>no effect on the overall coefficient</strong>.
        </li>
      </ul>

      <div class="fig-box">
        <strong>Slide 21: Figure 19.15 — Distribution of total temperature difference in (a) single- and (b) double-effect forward-feed evaporation</strong><br />
        <img src="{{SLIDES}}/slide_21.png" alt="Slide 21 - Figure 19.15 Distribution of total temperature difference" style="width:78%; margin:6px auto 0 auto;" />
      </div>

      <h3 class="sub-title">
        3.3 Choice of Steam Pressure &amp; Why Use Vacuum
        <span class="slide-tag">Slides 24, 25, 26</span>
      </h3>
      <div class="grid-2">
        <div class="card">
          <h4>Choice of Steam Pressure <span class="slide-tag">Slides 24, 25</span></h4>
          <ul>
            <li>
              Process steam at <strong>0&ndash;50 psig</strong> is usually used
              in evaporators, <strong>20 psig</strong> is commonly used.
            </li>
            <li>
              <strong>High pressure</strong> steam usually <strong>superheated</strong>
              is used as a source for <strong>electricity generation</strong>.
            </li>
            <li>
              Moreover, <strong>low</strong> pressure steam has a
              <strong>higher latent heat</strong> of evaporation than
              <strong>high</strong> pressure steam.
            </li>
          </ul>
          <div class="eq-box" style="background: #fff">
            <div class="eq-row">
              <span class="katex-eq">\text{Steam at } 435\text{ psig} \Rightarrow T_s = 456^\circ\text{F},\; H = 1205\text{ Btu/lb},\; \mathbf{\lambda = 767\text{ Btu/lb}}</span>
            </div>
            <div class="eq-row">
              <span class="katex-eq">\text{Steam at } 5\text{ psig} \Rightarrow T_s = 227^\circ\text{F},\; H = 1156\text{ Btu/lb},\; \mathbf{\lambda = 960\text{ Btu/lb}}</span>
            </div>
          </div>
          <p style="margin: 0">
            Hence, in an evaporator the steam at <strong>5 psig</strong> would
            deliver <strong>more</strong> heat as <strong>latent heat</strong>
            than the <strong>high</strong> pressure steam. Furthermore, the
            construction of the evaporator to hold <strong>435 psig steam</strong>
            would be <strong>much more expensive</strong> than the construction
            to hold 5 psig steam.
          </p>
        </div>

        <div class="card">
          <h4>Why Use Vacuum <span class="slide-tag">Slide 26</span></h4>
          <ol type="a" style="margin-bottom: 8px">
            <li>
              Vacuum <strong>reduces</strong> the <strong>b.p.</strong> of a
              solution, thus <strong>increases</strong> the <strong>overall &Delta;T</strong>
              and increases the evaporator <strong>capacity (q = U A &Delta;T)</strong>.
              <div class="eq-box" style="background: #fff; margin: 8px 0">
                <div class="eq-row">
                  <span class="katex-eq">5\text{ psig steam } (T_s = 227^\circ\text{F}),\; 1\text{ atm (abs) water } (T_b = 212^\circ\text{F}) \Rightarrow \Delta T = 15^\circ\text{F}</span>
                </div>
                <div class="eq-row">
                  <span class="katex-eq">\text{Vacuum } 26\text{ in. Hg (w.r.t. } 30\text{ in. Hg)}: T_b = 125^\circ\text{F} \Rightarrow \Delta T = 227 - 125 = \mathbf{102^\circ\text{F}}</span>
                </div>
              </div>
            </li>
            <li>
              Vacuum is also used for <strong>evaporating heat sensitive materials</strong>
              at a lower temperature.
            </li>
            <li>
              Vacuum makes it possible to concentrate solutions with
              <strong>appreciable</strong> elevation in b.p. using
              <strong>low</strong> pressure steam.
            </li>
          </ol>
        </div>
      </div>
      </section>

      <!-- SECTION 4 -->
      <section class="topic-section" id="topic-4" data-topic="4" data-short="Types of Evaporators">
      <h2 class="section-title">
        4. Types of Evaporators
      </h2>

      <h3 class="sub-title">
        4.1 Classification &amp; Typical Overall Heat Transfer Coefficients
        <span class="slide-tag">Slides 28, 29</span>
      </h3>
      <table>
        <thead>
          <tr>
            <th>Type of Evaporator</th>
            <th>Overall Heat Transfer Coefficient (U), Btu/h&middot;ft<sup>2</sup>&middot;&deg;F</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="2" style="background: #f1f5f9"><strong>A. Natural Circulation Evaporator</strong></td>
          </tr>
          <tr>
            <td>a) <strong>Horizontal</strong> Tube</td>
            <td>200&ndash;400</td>
          </tr>
          <tr>
            <td>b) <strong>Vertical</strong> Tube (Standard Vertical Tube &amp; Basket evaporator)</td>
            <td>200&ndash;500</td>
          </tr>
          <tr>
            <td>c) <strong>Long Tube Vertical</strong> Evaporator (Climbing Film)</td>
            <td>200&ndash;800</td>
          </tr>
          <tr>
            <td>
              <strong>B. Forced Circulation Evaporator</strong><br />
              a) Evaporator with <strong>internal</strong> heat exchanger<br />
              b) Evaporator with <strong>external</strong> heat exchanger
            </td>
            <td>200&ndash;1200</td>
          </tr>
          <tr>
            <td>
              <strong>Special Types</strong><br />
              a) <strong>Falling film</strong> evaporator<br />
              b) <strong>Agitated film</strong> evaporator<br />
              c) <strong>Submerged combustion</strong> evaporator (for corrosive)
            </td>
            <td>800&ndash;1500</td>
          </tr>
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <th>TABLE 16.1: Typical overall coefficients in evaporators — Type</th>
            <th>U (W/m<sup>2</sup>&middot;&deg;C)</th>
            <th>U (Btu/ft<sup>2</sup>&middot;h&middot;&deg;F)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="3" style="background: #f1f5f9"><strong>Long-tube vertical evaporators</strong></td>
          </tr>
          <tr>
            <td>Natural circulation</td>
            <td>1000&ndash;2500</td>
            <td>200&ndash;500</td>
          </tr>
          <tr>
            <td>Forced circulation</td>
            <td>2000&ndash;5000</td>
            <td>400&ndash;1000</td>
          </tr>
          <tr>
            <td colspan="3" style="background: #f1f5f9"><strong>Agitated-film evaporator, newtonian liquid, viscosity</strong></td>
          </tr>
          <tr>
            <td>1 cP</td>
            <td>2000</td>
            <td>400</td>
          </tr>
          <tr>
            <td>1 P</td>
            <td>1500</td>
            <td>300</td>
          </tr>
          <tr>
            <td>100 P</td>
            <td>600</td>
            <td>120</td>
          </tr>
        </tbody>
      </table>

      <h3 class="sub-title">
        4.2 Natural Circulation: Horizontal Tube (1.1)
        <span class="slide-tag">Slide 30</span>
      </h3>
      <ul>
        <li>
          Solution <strong>boils on the outside of the horizontal tubes</strong>
          and <strong>steam condenses inside</strong> the tubes.
        </li>
        <li>
          Overall heat transfer coefficient (<strong>U</strong>) is
          <strong>lower</strong> than other types of evaporators, especially if
          the solution is <strong>viscous</strong>.
        </li>
        <li>U = 200&ndash;400 Btu/h&middot;ft<sup>2</sup>&middot;&deg;F</li>
        <li><strong>Fouling</strong> on the outside tube is difficult to clean.</li>
        <li>Uses: Solution must be <strong>dilute</strong>, <strong>no foaming</strong> and <strong>no scaling</strong>.</li>
      </ul>
      <div class="fig-box">
        <strong>Slide 30: Natural Circulation Horizontal Tube Evaporator</strong><br />
        <img src="{{SLIDES}}/slide_30.png" alt="Slide 30 - Natural Circulation Horizontal Tube Evaporator" style="width:82%; margin:6px auto 0 auto;" />
      </div>

      <h3 class="sub-title">
        4.3 Natural Circulation: Vertical Tube (1.2)
        <span class="slide-tag">Slides 31, 32, 33, 34</span>
      </h3>
      <div class="grid-2">
        <div class="card">
          <h4>Types &amp; Design</h4>
          <ul style="margin-bottom: 0">
            <li>Types: <strong>Basket</strong> Evaporator &amp; <strong>Standard vertical</strong></li>
            <li>These evaporators are improved types than the horizontal tube evaporator.</li>
            <li><strong>Solution boils inside</strong> the tubes and <strong>steam condenses (outside of tubes)</strong>.</li>
            <li>Tubes: 1&ndash;4 in diameter, 2&ndash;6 ft long.</li>
            <li>
              <strong>Basket type:</strong> The downtake is <strong>annular</strong>.
              Advantage of basket type: A <strong>deflector or baffle</strong>
              easily reduces <strong>entrainment losses</strong> in vapor.
            </li>
            <li>
              <strong>Standard Vertical Tube:</strong> Upward flow through the
              tubes and downward flow through the <strong>central hole or downtake</strong>.
            </li>
          </ul>
        </div>
        <div class="card">
          <h4>Performance &amp; Uses</h4>
          <ul style="margin-bottom: 0">
            <li>Natural <strong>circulation Velocity = 1&ndash;3 ft/s</strong> in the tubes</li>
            <li>U = 200&ndash;500 Btu/h&middot;ft<sup>2</sup>&middot;&deg;F</li>
            <li>Depending upon the solution properties, overall &Delta;T and boiling temperature</li>
            <li><strong>Scale deposits</strong> inside the <strong>tubes</strong> and <strong>easily cleaned</strong></li>
            <li>Foam Breaking is <strong>not easily effective</strong></li>
            <li><strong>Viscous</strong> liquid can be handled but circulation is slow and U is low</li>
            <li>
              Uses: satisfactory for most evaporation demands but <strong>not suitable</strong>
              for <strong>very viscous</strong> or <strong>foamy</strong> liquid.
            </li>
          </ul>
        </div>
      </div>

      <div class="grid-2">
        <div class="fig-box" style="margin: 0">
          <strong>Slide 32: Natural Circulation Vertical Tube (Basket Type)</strong><br />
          <img src="{{SLIDES}}/slide_32.png" alt="Slide 32 - Basket type vertical tube evaporator" style="width:100%; margin-top:6px;" />
        </div>
        <div class="fig-box" style="margin: 0">
          <strong>Slide 33: Figure 19.4 — Cross-sectional diagram of standard vertical-tube evaporator with natural circulation</strong><br />
          <img src="{{SLIDES}}/slide_33.png" alt="Slide 33 - Figure 19.4 Standard vertical tube evaporator" style="width:100%; margin-top:6px;" />
        </div>
      </div>

      <h3 class="sub-title">
        4.4 Natural Circulation: Long Tube Vertical Evaporator (1.3)
        <span class="slide-tag">Slides 35, 36, 37</span>
      </h3>
      <ul>
        <li>
          <strong>Vapor-liquid mixture</strong> emerges from the <strong>top</strong>
          of the tubes and <strong>impinges on a baffle</strong>. The
          <strong>liquid velocity is high enough</strong> the impingement baffle
          <strong>acts as an effective foam breaker</strong>.
        </li>
        <li>U: 200&ndash;800 Btu/h&middot;ft<sup>2</sup>&middot;&deg;F</li>
        <li>Competes favorably with forced circulation evaporator.</li>
        <li><strong>Viscous liquid cannot be handled.</strong></li>
        <li><strong>Heat exchanger location:</strong> If desired <strong>outside</strong> the evaporator body.</li>
        <li><strong>Advantages:</strong> <strong>No pumps</strong> are required for liquid circulation.</li>
        <li>Uses: <strong>compete</strong> most favorably with <strong>forced circulation evaporator</strong>.</li>
        <li>LTVE are especially effective in concentrating liquid that <strong>tends to foam</strong>.</li>
        <li>Tubes: 1&ndash;2 in diameter, 10&ndash;30 ft long.</li>
      </ul>
      <div class="card">
        <h4>The essential parts are: <span class="slide-tag">Slide 37</span></h4>
        <ol style="margin-bottom: 0">
          <li>a <strong>tubular exchanger with steam</strong> in the shell and <strong>liquid</strong> to be concentrated in the <strong>tubes</strong>,</li>
          <li>a <strong>separator or vapor space</strong> for <strong>removing entrained liquid from the vapor</strong>, and</li>
          <li>
            when operated as a <strong>circulation unit</strong>, a <strong>return leg</strong>
            for the liquid from the separator to the bottom of the exchanger.
            <strong>Inlets</strong> are provided for <strong>feed liquid</strong>
            and steam, and <strong>outlets</strong> are provided for
            <strong>vapor</strong>, thick liquor, steam condensate, and
            noncondensable gases from the steam.
          </li>
        </ol>
      </div>

      <div class="grid-2">
        <div class="fig-box" style="margin: 0">
          <strong>Slide 35: Figure 19.3 (Basket evaporator) &amp; Figure 19.7 (Long tube vertical evaporator)</strong><br />
          <img src="{{SLIDES}}/slide_35.png" alt="Slide 35 - Figure 19.3 and Figure 19.7" style="width:100%; margin-top:6px;" />
        </div>
        <div class="fig-box" style="margin: 0">
          <strong>Slide 37: Long Tube Vertical Evaporator (Circulation Unit)</strong><br />
          <img src="{{SLIDES}}/slide_37.png" alt="Slide 37 - Long tube vertical evaporator schematic" style="width:100%; margin-top:6px;" />
        </div>
      </div>

      <h3 class="sub-title">
        4.5 Forced Circulation Evaporator (2)
        <span class="slide-tag">Slides 38, 39, 40</span>
      </h3>
      <ul>
        <li>With <strong>internal HE</strong> or <strong>external HE</strong>; Tubes: 1&ndash;2 in diameter, 10&ndash;30 ft long.</li>
        <li>
          Forced circulation evaporator is used to <strong>minimize fouling</strong>
          by <strong>preventing boiling inside the tubes</strong>.
        </li>
        <li>
          <strong>USES:</strong> <strong>Viscous liquid</strong> and solution
          that must <strong>not be allowed to boil</strong> inside the tubes (to
          reduce the solid deposition).
        </li>
        <li>
          U = 200&ndash;1200 Btu/h&middot;ft<sup>2</sup>&middot;&deg;F; The value
          depends on circulation rate, Overall &Delta;T and boiling temperature
          and system Properties.
        </li>
        <li>
          <strong>Heat exchanger location:</strong> generally <strong>outside</strong>
          evaporator body; <strong>Maintenance is easier</strong> if heat
          exchanger is <strong>outside</strong>.
        </li>
      </ul>

      <div class="grid-2">
        <div class="fig-box" style="margin: 0">
          <strong>Slide 38: Figure 19.5 (Vertical tube forced circulation) &amp; Figure 19.6 (External horizontal heater)</strong><br />
          <img src="{{SLIDES}}/slide_38.png" alt="Slide 38 - Figure 19.5 and Figure 19.6 Forced circulation evaporators" style="width:100%; margin-top:6px;" />
        </div>
        <div class="fig-box" style="margin: 0">
          <strong>Slide 39: Forced Circulation Evaporator with External Heat Exchanger</strong><br />
          <img src="{{SLIDES}}/slide_39.png" alt="Slide 39 - Forced circulation external heater schematic" style="width:100%; margin-top:6px;" />
        </div>
      </div>

      <h3 class="sub-title">
        4.6 Special Types Evaporator (3)
        <span class="slide-tag">Slides 41, 42, 43, 44</span>
      </h3>
      <div class="grid-2">
        <div class="card">
          <h4>3.1 Falling/Rising Film Evaporator <span class="slide-tag">Slide 42</span></h4>
          <ul style="margin-bottom: 0">
            <li>
              <strong>Heat sensitive materials</strong> such as fruit juices are
              evaporated in a <strong>single pass</strong> in a
              <strong>falling film</strong> evaporator because holdup time is
              very small.
            </li>
            <li>
              Due to <strong>smaller holdup time</strong>, the solution is
              <strong>not overheated</strong> during passage through the
              evaporator.
            </li>
          </ul>
        </div>
        <div class="card">
          <h4>3.2 Agitated Film / Turbulent Film Evaporator <span class="slide-tag">Slide 43</span></h4>
          <ul style="margin-bottom: 0">
            <li>This type of evaporator used for <strong>viscous liquid</strong>.</li>
            <li>
              The unit can be adopted to the evaporation of <strong>high viscous solution</strong>
              or <strong>slurry</strong> to dryness.
            </li>
            <li><strong>Feed</strong> enters at the <strong>top</strong> of the evaporator.</li>
            <li>In the evaporator <strong>feed</strong> is thrown to the <strong>heated wall</strong> by rotating blades.</li>
            <li>The <strong>blades</strong> helps heated surface free of <strong>solid deposit</strong>.</li>
          </ul>
        </div>
      </div>

      <div class="card">
        <h4>3.3 Submerged Combustion Evaporator <span class="slide-tag">Slide 44</span></h4>
        <ul style="margin-bottom: 0">
          <li><strong>Combustion gases</strong> passes through the <strong>solution</strong>.</li>
          <li>Thus evaporation takes place by <strong>direct contact</strong>.</li>
          <li><strong>No metal surface</strong> is required.</li>
          <li>Uses: Both <strong>viscous</strong> and <strong>corrosive</strong> liquids.</li>
        </ul>
      </div>

      <div class="grid-2">
        <div class="fig-box" style="margin: 0">
          <strong>Slide 42: Falling/Rising Film Evaporator</strong><br />
          <img src="{{SLIDES}}/slide_42.png" alt="Slide 42 - Falling film evaporator" style="width:100%; margin-top:6px;" />
        </div>
        <div class="fig-box" style="margin: 0">
          <strong>Slide 43: Agitated Film / Turbulent Film Evaporator</strong><br />
          <img src="{{SLIDES}}/slide_43.png" alt="Slide 43 - Agitated film evaporator" style="width:100%; margin-top:6px;" />
        </div>
      </div>

      <div class="fig-box">
        <strong>Slide 44: Figure 19.9 — Submerged combustion evaporator</strong><br />
        <img src="{{SLIDES}}/slide_44.png" alt="Slide 44 - Figure 19.9 Submerged combustion evaporator" style="width:76%; margin:6px auto 0 auto;" />
      </div>
      </section>

      <!-- SECTION 5 -->
      <section class="topic-section" id="topic-5" data-topic="5" data-short="Patterns of Liquor Flow (Feed Methods)">
      <h2 class="section-title">
        5. Patterns of Liquor Flow in Multiple Effect Evaporators
      </h2>

      <div class="fig-box">
        <strong>Slide 45: Patterns of liquor flow in multiple effect evaporators — (a) forward feed; (b) backward feed; (c) Mixed feed; (d) parallel feed. Heavy line: Liquor stream; Light line: Steam and vapor condensate streams.</strong><br />
        <img src="{{SLIDES}}/slide_45.png" alt="Slide 45 - Patterns of liquor flow in MEE" style="width:94%; margin:6px auto 0 auto;" />
      </div>

      <h3 class="sub-title">
        5.1 Forward Feed
        <span class="slide-tag">Slides 46, 47</span>
      </h3>
      <ul>
        <li>
          The usual method of feeding a <strong>multiple-effect evaporator</strong>
          is to pump the <strong>thin liquid</strong> into the <strong>first effect</strong>
          and send it in turn through the other effects. This is called
          <strong>forward feed</strong>.
        </li>
        <li>
          In a forward feed system, the <strong>process fluid</strong> flows
          <strong>parallel</strong> to the <strong>steam</strong> system.
        </li>
        <li>
          The <strong>concentration</strong> of the liquid <strong>increases</strong>
          from the first effect to the last. This pattern of liquid flow is the
          simplest. It <strong>requires a pump</strong> for feeding dilute
          solution to the first effect, since this effect is often at about
          <strong>atmospheric pressure</strong>, and a pump to remove thick
          liquor from the last effect.
        </li>
        <li>
          The <strong>transfer from effect</strong> to effect, however, can be
          done <strong>without pumps</strong>, since the <strong>flow</strong>
          is in the <strong>direction of decreasing pressure</strong>, and
          control valves in the transfer line are all that is required.
        </li>
      </ul>
      <div class="grid-2">
        <div class="card">
          <h4>Advantage</h4>
          <ul style="margin-bottom: 0">
            <li>
              <strong>No pumps</strong> are required to move the solution from
              effect (<strong>liquid flows</strong> from a <strong>higher</strong>
              to a <strong>lower pressure</strong>).
            </li>
            <li>
              This method is suitable for <strong>low to moderately viscous liquid</strong>.
            </li>
          </ul>
        </div>
        <div class="card">
          <h4>Disadvantage</h4>
          <ul style="margin-bottom: 0">
            <li>Steam <strong>economy is low</strong> with a <strong>cold feed</strong>.</li>
            <li>
              <strong>High viscosity</strong> sharply <strong>reduces heat transfer coefficient</strong>
              in the last effect.
            </li>
            <li>Control valves in the transfer line are all that is required.</li>
          </ul>
        </div>
      </div>

      <h3 class="sub-title">
        5.2 Backward Feed
        <span class="slide-tag">Slides 48, 49</span>
      </h3>
      <ul>
        <li>
          In backward feed, <strong>dilute liquid</strong> is fed to the
          <strong>last effect</strong> and then <strong>pumped</strong> through
          the <strong>successive effects</strong> to the first.
        </li>
        <li>
          In a backward feed system, the process fluid flows counter to the steam
          flow.
        </li>
        <li>
          This method <strong>requires</strong> a <strong>pump between each pair</strong>
          of effects in addition to the thick-liquor pump, since the
          <strong>flow</strong> is from <strong>low pressure</strong> to
          <strong>high pressure</strong>.
        </li>
        <li>
          Backward feed often gives a <strong>higher capacity</strong> (kg vapor
          produced / hr) than forward feed when the <strong>thick liquor is viscous</strong>,
          but it may give a <strong>lower economy</strong> (kg vapor produced /
          kg steam) than forward feed when the <strong>feed liquor is cold</strong>.
        </li>
      </ul>
      <div class="grid-2">
        <div class="card">
          <h4>Advantage</h4>
          <ul style="margin-bottom: 0">
            <li>
              The <strong>concentrated solution</strong> evaporates at the
              <strong>highest temperature</strong>.
            </li>
            <li>
              Backward feed is the most practical way to <strong>introduce thick viscous liquor</strong>
              in a multiple effect evaporator.
            </li>
          </ul>
        </div>
        <div class="card">
          <h4>Disadvantage</h4>
          <ul style="margin-bottom: 0">
            <li><strong>Organic</strong> may tend to char and <strong>decompose</strong>.</li>
            <li><strong>Pumps are required</strong> between effects.</li>
          </ul>
        </div>
      </div>

      <h3 class="sub-title">
        5.3 Mixed Feed &amp; Parallel Feed
        <span class="slide-tag">Slides 50, 51</span>
      </h3>
      <div class="grid-2">
        <div class="card">
          <h4>Mixed Feed <span class="slide-tag">Slide 51</span></h4>
          <ul style="margin-bottom: 0">
            <li>
              In mixed feed the <strong>dilute liquid enters an intermediate effect</strong>,
              flows in <strong>forward</strong> feed to the end of the series,
              and is then <strong>pumped back</strong> to the <strong>first effects</strong>
              for final concentration.
            </li>
            <li>
              This <strong>eliminates some of the pumps</strong> needed in
              backward feed and yet permits the <strong>final evaporation</strong>
              to be done at the <strong>highest temperature</strong>.
            </li>
          </ul>
        </div>
        <div class="card">
          <h4>Parallel Feed <span class="slide-tag">Slide 50</span></h4>
          <ul style="margin-bottom: 0">
            <li>
              In <strong>crystallizing</strong> evaporators, where a
              <strong>slurry of crystals</strong> and mother liquor is withdrawn,
              <strong>feed</strong> may be admitted directly to <strong>each effect</strong>
              to give what is called parallel feed.
            </li>
            <li>
              In parallel feed there is <strong>no transfer of liquid</strong>
              from one effect to another.
            </li>
          </ul>
        </div>
      </div>
      </section>

      <!-- SECTION 6 -->
      <section class="topic-section" id="topic-6" data-topic="6" data-short="Enthalpy Balances &amp; Single-Effect Examples">
      <h2 class="section-title">
        6. Enthalpy Balances &amp; Single-Effect Evaporator Examples
      </h2>

      <h3 class="sub-title">
        6.1 Enthalpy Balances for Single-Effect Evaporator
        <span class="slide-tag">Slide 52</span>
      </h3>
      <ul>
        <li>
          There is <strong>no leakage</strong> or <strong>entrainment</strong>,
          the <strong>flow of noncondensables</strong> is <strong>negligible</strong>,
          and <strong>heat losses</strong> from the evaporator need
          <strong>not</strong> be <strong>considered</strong>.
        </li>
        <li>
          The steam entering the <strong>steam chest</strong> may be
          <strong>superheated</strong>, and the condensate usually leaves the
          steam chest <strong>somewhat subcooled</strong> below its boiling point.
        </li>
        <li>
          Both the <strong>superheat</strong> and the <strong>subcooling</strong>
          of the condensate are small, however, and it is acceptable to neglect
          them in making an enthalpy balance.
        </li>
        <li>
          The small errors made in neglecting them are approximately
          <strong>compensated</strong> by neglecting heat losses from the steam
          chest.
        </li>
      </ul>

      <div class="eq-box">
        <div class="eq-row">
          <span class="katex-eq">\text{Steam side: } q_s = \dot{m}_s(H_s - H_c) = \dot{m}_s \lambda_s</span>
        </div>
        <div class="eq-row">
          <span class="katex-eq">\text{Liquor side: } q = (\dot{m}_f - \dot{m}) H_v - \dot{m}_f H_f + \dot{m} H</span>
        </div>
        <div class="eq-row">
          <span class="katex-eq">\text{By combining: } q = \dot{m}_s \lambda_s = \underbrace{(\dot{m}_f - \dot{m})}_{\dot{m}_v\text{ (vapor produced)}} H_v - \underbrace{\dot{m}_f}_{\text{thin liquor}} H_f + \underbrace{\dot{m}}_{\text{thick liquor}} H</span>
          <span class="eq-ref">(Eq. 16.4)</span>
        </div>
      </div>
      <p style="font-size: 13.5px">
        where q<sub>s</sub> = rate of heat transfer through heating surface from
        steam; H<sub>s</sub> = specific enthalpy of steam; H<sub>c</sub> =
        specific enthalpy of condensate; &lambda;<sub>s</sub> = latent heat of
        condensation of steam; m&#775;<sub>s</sub> = rate of flow of steam; q =
        rate of heat transfer from heating surface to liquid; H<sub>v</sub> =
        specific enthalpy of vapor; H<sub>f</sub> = specific enthalpy of thin
        liquor; H = specific enthalpy of thick liquor.
      </p>

      <h3 class="sub-title">
        6.2 Example 16.1 (McCabe) — Single-Effect NaOH Evaporator
        <span class="slide-tag">Slides 53&ndash;62</span>
      </h3>
      <div class="example-box">
        <h4>Example 16.1</h4>
        <p style="margin: 0 0 8px 0">
          A single-effect evaporator is to concentrate <strong>20,000 lb/h (9070 kg/h)</strong>
          of a <strong>20 percent</strong> solution of sodium hydroxide to
          <strong>50 percent solids</strong>. The gauge pressure of the steam is
          to be <strong>20 lb<sub>f</sub>/in.<sup>2</sup></strong> (20 psig,
          1.37 atm); the absolute pressure in the vapor space is to be
          <strong>100 mm Hg (1.93 lb<sub>f</sub>/in.<sup>2</sup>)</strong>. The
          overall coefficient is estimated to be <strong>250 Btu/ft<sup>2</sup>&middot;h&middot;&deg;F (1400 W/m<sup>2</sup>&middot;&deg;C)</strong>.
          The feed temperature is <strong>100&deg;F (37.8&deg;C)</strong>.
          Calculate the amount of steam consumed, the economy, and the heating
          surface required.
        </p>

        <p style="margin: 8px 0 4px 0"><strong>Solution — Material Balance:</strong></p>
        <div class="eq-box" style="background: #fff">
          <div class="eq-row">
            <span class="katex-eq">\text{Feed: } \frac{80\text{ lb of water}}{20\text{ lb of solid}} = 4\text{ lb of water/lb of solid}; \qquad \text{Thick liquor: } \frac{50\text{ lb of water}}{50\text{ lb of solid}} = 1\text{ lb of water/lb of solid}</span>
          </div>
          <div class="eq-row">
            <span class="katex-eq">\text{Water evaporated} = 4 - 1 = 3\text{ lb of water/lb of solid} \Rightarrow \dot{m}_v = 3 \times 20{,}000 \times 0.20 = \mathbf{12{,}000\text{ lb/h}}</span>
          </div>
          <div class="eq-row">
            <span class="katex-eq">\text{Flow rate of thick liquor } \dot{m} = 20{,}000 - 12{,}000 = \mathbf{8{,}000\text{ lb/h (3630 kg/h)}}</span>
          </div>
        </div>

        <p style="margin: 8px 0 4px 0">
          <strong>Steam Consumption &amp; BPE:</strong> Since with strong
          solutions of sodium hydroxide the <strong>heat of dilution is not negligible</strong>,
          the rate of heat transfer is found from Eq. (16.4) and Fig. 16.8.
          Interpolating the saturated steam table (Appendix 7) at 1.93 psia
          (between 120&deg;F at 1.6945 psia and 130&deg;F at 2.225 psia gives
          124.4392&deg;F &approx; 124&deg;F):
        </p>
        <div class="eq-box" style="background: #fff">
          <div class="eq-row">
            <span class="katex-eq">\text{Boiling point of water at } 100\text{ mm Hg } (1.93\text{ psia}) = 124^\circ\text{F} \quad (\text{Appendix 7})</span>
          </div>
          <div class="eq-row">
            <span class="katex-eq">\text{Boiling point of } 50\%\text{ NaOH solution} = 197^\circ\text{F} \quad (\text{Fig. 16.4, D\"{u}hring})</span>
          </div>
          <div class="eq-row">
            <span class="katex-eq">\text{Boiling-point elevation (BPE)} = 197 - 124 = \mathbf{73^\circ\text{F}}</span>
          </div>
        </div>

        <p style="margin: 8px 0 4px 0"><strong>Enthalpies from Fig. 16.8 &amp; Steam Tables (Slides 56, 57, 59, 60, 62):</strong></p>
        <table style="background: #fff">
          <thead>
            <tr>
              <th>Stream / Property</th>
              <th>Condition</th>
              <th>Source</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Feed enthalpy, H<sub>f</sub></td>
              <td>20% solids, 100&deg;F</td>
              <td>Fig. 16.8 (Enthalpy-Concentration)</td>
              <td><strong>55 Btu/lb</strong></td>
            </tr>
            <tr>
              <td>Thick liquor enthalpy, H</td>
              <td>50% solids, 197&deg;F</td>
              <td>Fig. 16.8 (Enthalpy-Concentration)</td>
              <td><strong>221 Btu/lb</strong></td>
            </tr>
            <tr>
              <td>Superheated vapor enthalpy, H<sub>v</sub></td>
              <td>197&deg;F (91.67&deg;C) &amp; 1.93 psia (0.1331 atm)</td>
              <td>Table B.7 Superheated Steam (2672.5 kJ/kg)</td>
              <td><strong>1149 Btu/lb</strong></td>
            </tr>
            <tr>
              <td>Steam condensation temp., T<sub>s</sub> &amp; &lambda;<sub>s</sub></td>
              <td>20 psig = 34.7 psia (34.696 psia)</td>
              <td>Appendix 7 Saturated Steam Table</td>
              <td><strong>T<sub>s</sub> = 259&deg;F; &lambda;<sub>s</sub> = 939 Btu/lb</strong></td>
            </tr>
          </tbody>
        </table>

        <div class="eq-box" style="background: #fff; margin-bottom: 0">
          <div class="eq-row">
            <span class="katex-eq">q = (20{,}000 - 8000)(1149) + 8000 \times 221 - 20{,}000 \times 55 = \mathbf{14{,}456{,}000\text{ Btu/h}}</span>
          </div>
          <div class="eq-row">
            <span class="katex-eq">\dot{m}_s = \frac{q}{\lambda_s} = \frac{14{,}456{,}000}{939} = \mathbf{15{,}400\text{ lb/h (6990 kg/h)}}</span>
          </div>
          <div class="eq-row">
            <span class="katex-eq">\text{Economy} = \frac{\dot{m}_v}{\dot{m}_s} = \frac{12{,}000}{15{,}400} = \mathbf{0.78}</span>
          </div>
          <div class="eq-row">
            <span class="katex-eq">\text{Heating surface: } A = \frac{q}{U \Delta T} = \frac{14{,}456{,}000}{250(259 - 197)} = \mathbf{930\text{ ft}^2\text{ (86.4 m}^2\text{)}}</span>
          </div>
        </div>
      </div>

      <div class="grid-2">
        <div class="fig-box" style="margin: 0">
          <strong>Slide 58: Figure 16.4 — D&uuml;hring lines for Example 16.1 (P = 100 mm Hg: 124&deg;F &rarr; 197&deg;F)</strong><br />
          <img src="{{SLIDES}}/slide_58.png" alt="Slide 58 - Figure 16.4 Duhring lines Example 16.1" style="width:100%; margin-top:6px;" />
        </div>
        <div class="fig-box" style="margin: 0">
          <strong>Slide 59: Figure 16.8 — Enthalpy-concentration diagram, NaOH&mdash;water (H<sub>f</sub> = 55, H = 221 Btu/lb)</strong><br />
          <img src="{{SLIDES}}/slide_59.png" alt="Slide 59 - Figure 16.8 Enthalpy-concentration diagram" style="width:100%; margin-top:6px;" />
        </div>
      </div>

      <h3 class="sub-title">
        6.3 Example 19.1 (Foust, p. 359) — Single-Body Standard Evaporator
        <span class="slide-tag">Slides 63&ndash;68</span>
      </h3>
      <div class="example-box">
        <h4>Example 19.1</h4>
        <p style="margin: 0 0 8px 0">
          Determine the heating area required for the production of
          <strong>10,000 lb/hr</strong> of <strong>50 percent NaOH</strong>
          solution from a <strong>10 percent NaOH</strong> feed entering at
          <strong>100&deg;F</strong>. Evaporation is to be carried out in a
          single-body standard evaporator for which an overall coefficient of
          <strong>500 Btu/hr&middot;ft<sup>2</sup>&middot;&deg;F</strong> is
          expected (if U isn&rsquo;t given, assumption may be considered). Steam
          is available saturated at <strong>50 psig</strong> (64.7 psia), and the
          evaporator can be operated at <strong>10 psi vacuum</strong> relative
          to a barometric pressure of <strong>14.7 psia</strong> (4.7 psia).
        </p>

        <p style="margin: 6px 0 4px 0"><strong>Assumptions &amp; Property Lookups (Slides 64, 65, 67):</strong></p>
        <ul>
          <li>
            <strong>(a)</strong> The solution in the evaporator body is violently
            mixed and therefore homogeneous in composition (uniformly 50% NaOH).
          </li>
          <li>
            <strong>(b)</strong> The boiling point of the solution is that of
            50% NaOH at 4.7 psia.
          </li>
          <li>
            Determine b.p. of water (T<sub>water</sub>) at vapor space pressure
            4.7 psia: <strong>T<sub>water</sub> = 160&deg;F</strong>.
          </li>
          <li>
            Read b.p. of 50% NaOH solution (T<sub>soln</sub>) from D&uuml;hring
            plot: <strong>T<sub>soln</sub> = 233&deg;F</strong> (class reading:
            237&deg;F) &rarr; <strong>BPR = 233 &minus; 160 = 73&deg;F</strong>.
          </li>
          <li>
            Read enthalpies from Enthalpy&ndash;Concentration diagram:
            <strong>h<sub>F</sub> = 60 Btu/lb</strong> (100&deg;F, 10%);
            <strong>h<sub>1</sub> = h<sub>L</sub> = 245 Btu/lb</strong> (233&deg;F,
            50%; class reading: 240 Btu/lb).
          </li>
          <li>
            Read temperature (T<sub>0</sub>) and latent heat (&lambda;<sub>V0</sub>)
            of saturated steam at 50 psig (64.7 psia):
            <strong>T<sub>0</sub> = 297&deg;F</strong>,
            <strong>&lambda;<sub>V0</sub> = 920.0 Btu/lb</strong> (class reading:
            912 Btu/lb).
          </li>
          <li>
            Vapor produced is superheated at 4.7 psia and 233&deg;F; from
            superheated steam table: <strong>H<sub>1</sub> = 1160 Btu/lb</strong>
            (class reading: 1167 Btu/lb).
          </li>
        </ul>

        <p style="margin: 8px 0 4px 0"><strong>Material &amp; Energy Balances (Slides 66, 68):</strong></p>
        <div class="eq-box" style="background: #fff; margin-bottom: 0">
          <div class="eq-row">
            <span class="katex-eq">\text{Overall material balance: } F + V_0 = V_1 + L_1 + D \quad (D = V_0)</span>
            <span class="eq-ref">(a)</span>
          </div>
          <div class="eq-row">
            <span class="katex-eq">\text{NaOH balance: } F x_F' = L_1 x_1' \Rightarrow F(0.1) = 10{,}000(0.5) \Rightarrow \mathbf{F = 50{,}000\text{ lb/hr}}</span>
            <span class="eq-ref">(b)</span>
          </div>
          <div class="eq-row">
            <span class="katex-eq">\text{From Eq. (a): } V_1 = F - L_1 = 50{,}000 - 10{,}000 = \mathbf{40{,}000\text{ lb/hr}}</span>
          </div>
          <div class="eq-row">
            <span class="katex-eq">\text{Overall heat balance: } V_0 \lambda_{V0} + F h_F = V_1 H_1 + L_1 h_1</span>
            <span class="eq-ref">(c)</span>
          </div>
          <div class="eq-row">
            <span class="katex-eq">V_0 \times 920.0 + 50{,}000 \times 60 = 40{,}000 \times 1160 + 10{,}000 \times 245 \Rightarrow V_0 = \frac{45{,}850{,}000}{920} = \mathbf{49{,}800\text{ lb/hr}}\; (49{,}837\text{ lb/hr})</span>
          </div>
          <div class="eq-row">
            <span class="katex-eq">\text{Heat transfer-rate equation: } V_0 \lambda_{V0} = U A (-\Delta T), \qquad \Delta T = T_{\text{steam}} - T_{\text{soln, 50\%}} = 297 - 233 = 64^\circ\text{F}</span>
            <span class="eq-ref">(d)</span>
          </div>
          <div class="eq-row">
            <span class="katex-eq">A = \frac{45{,}850{,}000}{500 \times 64} = \mathbf{1433\text{ ft}^2} \quad (\text{Foust rounded: } \mathbf{1400\text{ ft}^2})</span>
          </div>
        </div>
      </div>
      </section>

      <!-- SECTION 7 -->
      <section class="topic-section" id="topic-7" data-topic="7" data-short="Maintenance &amp; Scaling">
      <h2 class="section-title">
        7. Maintenance &amp; Scaling
      </h2>

      <h3 class="sub-title">
        7.1 Scaling
        <span class="slide-tag">Slides 69, 70</span>
      </h3>
      <p>
        (<strong>Additional resistance</strong> to heat transfer due to
        <strong>scale formation</strong>) &prop; Total Amount of
        <strong>evaporation</strong> since the <strong>start of scale formation</strong>.
      </p>
      <div class="eq-box">
        <div class="eq-row">
          <span class="katex-eq">\underbrace{\frac{1}{U^2}}_{y} = \underbrace{\frac{1}{U_0^2}}_{c} + \underbrace{\beta}_{m} \underbrace{\theta}_{x}</span>
        </div>
      </div>
      <ul>
        <li>&theta; = time since start of scale formation</li>
        <li>U<sub>0</sub> = overall heat transfer coefficient for <strong>clean condition</strong></li>
        <li>U = overall heat transfer coefficient at <strong>time &theta;</strong></li>
        <li>&beta; = <strong>constant</strong> for a given condition</li>
        <li>
          <strong>U vs. &theta;</strong> is <strong>non linear</strong> and
          <strong>1/U<sup>2</sup> vs. &theta;</strong> is <strong>linear</strong>.
        </li>
      </ul>

      <div class="card">
        <h4>Scaling removal method <span class="slide-tag">Slide 69</span></h4>
        <ul style="margin-bottom: 0">
          <li>Boiling out the <strong>evaporator</strong></li>
          <li>Drilling out the <strong>tubes</strong> with a <strong>scale removing tool</strong></li>
          <li>Boiling out <strong>dilute acid or alkali</strong></li>
        </ul>
      </div>

      <div class="fig-box">
        <strong>Slide 70: Fig. 5-30 — Rate of scale formation in evaporator (U vs. &theta; and (1/U<sup>2</sup>)&times;10<sup>5</sup> vs. &theta;)</strong><br />
        <img src="{{SLIDES}}/slide_70.png" alt="Slide 70 - Fig 5-30 Rate of scale formation in evaporator" style="width:82%; margin:6px auto 0 auto;" />
      </div>
      </section>

      <!-- SECTION 8 -->
      <section class="topic-section" id="topic-8" data-topic="8" data-short="Capacity, Economy &amp; MEE Iterative Design">
      <h2 class="section-title">
        8. Capacity, Economy &amp; Multiple-Effect Evaporator Calculations
      </h2>

      <h3 class="sub-title">
        8.1 Capacity and Economy of MEE
        <span class="slide-tag">Slides 71, 72</span>
      </h3>
      <p>
        Capacity (kg vapor produced / hr) and Economy (kg vapor produced / kg
        steam) for a triple effect evaporator:
      </p>
      <div class="eq-box">
        <div class="eq-row">
          <span class="katex-eq">q_1 = U_1 A_1 \Delta T_1 \qquad q_2 = U_2 A_2 \Delta T_2 \qquad q_3 = U_3 A_3 \Delta T_3</span>
        </div>
        <div class="eq-row">
          <span class="katex-eq">q_T = q_1 + q_2 + q_3 = U_1 A_1 \Delta T_1 + U_2 A_2 \Delta T_2 + U_3 A_3 \Delta T_3</span>
        </div>
        <div class="eq-row">
          <span class="katex-eq">q_T = U A (\Delta T_1 + \Delta T_2 + \Delta T_3) = U A \Delta T \qquad (A = A_1 + A_2 + A_3)</span>
        </div>
      </div>

      <ul>
        <li>In Practice for Economy: <strong>A<sub>1</sub> = A<sub>2</sub> = A<sub>3</sub></strong></li>
        <li><strong>Assume q<sub>1</sub> = q<sub>2</sub> = q<sub>3</sub></strong></li>
      </ul>
      <div class="eq-box">
        <div class="eq-row">
          <span class="katex-eq">A_1 U_1 \Delta T_1 = A_2 U_2 \Delta T_2 = A_3 U_3 \Delta T_3 \implies U_1 \Delta T_1 = U_2 \Delta T_2 = U_3 \Delta T_3 = \frac{q}{A}</span>
        </div>
        <div class="eq-row">
          <span class="katex-eq">\Delta T_1 : \Delta T_2 : \Delta T_3 :: \frac{1}{U_1} : \frac{1}{U_2} : \frac{1}{U_3}</span>
        </div>
        <div class="eq-row">
          <span class="katex-eq">\left(\text{Temperature drop in a multiple effect evaporator}\right) \propto \left(\frac{1}{\text{Overall heat transfer coeff.}}\right)</span>
        </div>
      </div>

      <h3 class="sub-title">
        8.2 Optimum Number of Effects
        <span class="slide-tag">Slide 73</span>
      </h3>
      <p>
        The <strong>cost</strong> of each effect of an evaporator <strong>per square meter</strong>
        or <strong>square foot</strong> of surface is a function of its total
        area and decreases with area, approaching an <strong>asymptote</strong>
        for very large installations. Thus the investment required for an
        <strong>N-effect evaporator</strong> is about <strong>N times</strong>
        that for a single-effect evaporator of the <strong>same capacity</strong>.
        The <strong>optimum number</strong> of effects must be found from an
        <strong>economic balance</strong> between the savings in steam obtained
        by multiple-effect operation and the added investment required.
      </p>

      <h3 class="sub-title">
        8.3 Multiple Effect Calculation (Equations, Unknowns &amp; Iterative Procedure)
        <span class="slide-tag">Slides 74, 75, 76, 77, 78</span>
      </h3>
      <div class="grid-2">
        <div class="card">
          <h4>Seven Equations (Triple-Effect) <span class="slide-tag">Slide 74</span></h4>
          <ul style="margin-bottom: 0">
            <li>an <strong>enthalpy balance</strong> for each effect (3)</li>
            <li>a <strong>capacity</strong> equation for each effect (3), and</li>
            <li>
              the <strong>known total evaporation</strong>, or the difference
              between the <strong>thin- and thick-liquor rates</strong> (1).
            </li>
          </ul>
        </div>
        <div class="card">
          <h4>Seven Unknowns (Equal Heating Surface) <span class="slide-tag">Slide 75</span></h4>
          <ul style="margin-bottom: 0">
            <li>the <strong>rate of steam</strong> flow to the <strong>first</strong> effect (1)</li>
            <li>the <strong>rate of flow</strong> from each effect (3)</li>
            <li>the <strong>boiling temperature</strong> in the <strong>first</strong> effect (1)</li>
            <li>the <strong>boiling temperature</strong> in the <strong>second</strong> effect (1), and</li>
            <li>the <strong>heating surface per effect</strong> (1).</li>
          </ul>
        </div>
      </div>

      <div class="card">
        <h4>Multiple Effect Calculation (4-Step Trial-and-Error) <span class="slide-tag">Slide 76</span></h4>
        <ol style="margin-bottom: 0">
          <li>
            <strong>Assume</strong> values for the <strong>boiling temperatures</strong>
            in the <strong>first</strong> (T<sub>1</sub>) and <strong>second</strong>
            (T<sub>2</sub>) effects.
          </li>
          <li>
            From enthalpy balances find the <strong>rates of steam flow</strong>
            and of <strong>liquor</strong> from effect to effect.
          </li>
          <li>
            Calculate the <strong>heating surface</strong> needed in <strong>each</strong>
            effect from the <strong>capacity</strong> equations.
          </li>
          <li>
            If the heating areas so found are not nearly equal,
            <strong>estimate new values for the boiling temperatures</strong>
            and repeat items 2 and 3 until the heating surfaces are equal.
          </li>
        </ol>
      </div>

      <div class="card">
        <h4>7-Step Iterative Procedure (Foust) <span class="slide-tag">Slide 78</span></h4>
        <ol style="margin-bottom: 0">
          <li>
            From the given product concentration and condenser pressure,
            determine the temperature, BPR, and enthalpies in the last effect.
            They may be directly determined if <strong>forward</strong> feed is
            used.
          </li>
          <li>
            From an overall material balance, determine the total amount of
            evaporation and apportion it among the effects by assuming equal
            evaporation in each effect. If the feed is very cold or is very
            superheated, the portions may be modified appropriately. The assumed
            vapor quantities will give an estimate of the concentration in each
            effect and consequently of the BPR. Only the crudest guess as to the
            pressure in each effect need be made, for BPR is virtually
            independent of pressure.
          </li>
          <li>
            Find the &minus;&Delta;T available for heat transfer by subtracting
            the sum of all BPR&rsquo;s from the total &minus;&Delta;T. The
            available &minus;&Delta;T can be apportioned among the various
            effects by assuming that <strong>q<sub>1</sub> = q<sub>2</sub> = q<sub>3</sub></strong>
            so that (&minus;&Delta;T<sub>1</sub>) &times; U<sub>1</sub>A<sub>1</sub>
            = (&minus;&Delta;T<sub>2</sub>) &times; U<sub>2</sub>A<sub>2</sub>
            = (&minus;&Delta;T<sub>3</sub>) &times; U<sub>3</sub>A<sub>3</sub> = &hellip;.
          </li>
          <li>
            Calculate the amount of evaporation in each effect through energy
            and material balances. If the amounts differ significantly from the
            values assumed in step 2, steps 2 and 4 must be repeated with the
            amounts of evaporation just calculated. Usually, this recalculation
            will represent a very slight revision in the BPR and enthalpy values
            previously used.
          </li>
          <li>
            By means of the rate equations for each effect, calculate the
            surface required for each effect.
          </li>
          <li>
            If the surfaces calculated do not fit the required area
            distributions (usually A<sub>1</sub> = A<sub>2</sub> = A<sub>3</sub>
            = &hellip;), revise the temperature-difference distributions of step
            3. Unless BPR&rsquo;s are very large, the revision will not affect
            the values assumed in step 2.
          </li>
          <li>
            Continue adjusting the temperature differences and recalculating
            surface areas until the areas are distributed satisfactorily.
          </li>
        </ol>
      </div>

      <div class="fig-box">
        <strong>Slide 77: Figure 19.11 — D&uuml;hring lines for the NaOH&mdash;H<sub>2</sub>O system (Foust)</strong><br />
        <img src="{{SLIDES}}/slide_77.png" alt="Slide 77 - Figure 19.11 Duhring lines for NaOH-H2O system" style="width:76%; margin:6px auto 0 auto;" />
      </div>
      </section>

      <!-- SECTION 9 -->
      <section class="topic-section" id="topic-9" data-topic="9" data-short="Example 19.3 (Triple-Effect Evaporator)">
      <h2 class="section-title">
        9. Triple-Effect Evaporator Worked Example (Example 19.3, Foust)
      </h2>

      <div class="example-box">
        <h4>Example 19.3 (Foust, p. 367) <span class="slide-tag">Slides 79&ndash;86</span></h4>
        <p style="margin: 0 0 8px 0">
          A <strong>triple-effect</strong> evaporator system is to be used to
          concentrate <strong>5 percent NaOH</strong> to <strong>50 percent NaOH</strong>.
          <strong>Forward feed</strong> is to be used with the feed entering at
          <strong>60&deg;F</strong> (T<sub>f</sub>). Overall coefficients of
          <strong>800</strong> (U<sub>1</sub>), <strong>500</strong> (U<sub>2</sub>),
          and <strong>300</strong> (U<sub>3</sub>) Btu/hr&middot;ft<sup>2</sup>&middot;&deg;F
          are expected for the three effects in the given order. <strong>Steam</strong>
          is available at <strong>125 psia</strong> (P<sub>0</sub>; T<sub>0</sub>
          = 344.3&deg;F from satd. steam table), and <strong>ejectors</strong>
          capable of maintaining a pressure of <strong>1 psia</strong>
          (T<sub>c</sub> = 101.7&deg;F) will be used. The heating areas of
          <strong>each effect</strong> are to be <strong>equal</strong> and
          large enough to produce <strong>10 tons/hr</strong> (20,000 lb/hr) of
          concentrate. What heating area is needed for <strong>each effect</strong>?
          What will be the <strong>steam consumption</strong> and the
          <strong>economy</strong>?
        </p>
      </div>

      <div class="fig-box">
        <strong>Slide 80: Figure 19.18 — Flow sheet of triple-effect evaporator with forward feed with conditions for Example 19.3</strong><br />
        <img src="{{SLIDES}}/slide_80.png" alt="Slide 80 - Figure 19.18 Triple effect evaporator flow sheet" style="width:90%; margin:6px auto 0 auto;" />
      </div>

      <h3 class="sub-title">
        9.1 Step 1 &ndash; 3: Overall Material Balance, BPR &amp; First-Trial &Delta;T Apportionment
        <span class="slide-tag">Slides 81, 82</span>
      </h3>
      <p>
        From Figure 19.11, the solution and the vapor in the third effect are
        found to be at <strong>171.7&deg;F</strong>, as is the product
        (L<sub>3</sub>). Thus, the <strong>BPR in the third effect is 70&deg;F</strong>.
      </p>
      <div class="eq-box">
        <div class="eq-row">
          <span class="katex-eq">0.05 F = 0.5 \times 20{,}000 \implies F = 200{,}000\text{ lb/hr}</span>
        </div>
        <div class="eq-row">
          <span class="katex-eq">V_1 + V_2 + V_3 = 180{,}000\text{ lb/hr}</span>
          <span class="eq-ref">(a)</span>
        </div>
      </div>
      <p>
        Assuming equal evaporation, V<sub>1</sub> = V<sub>2</sub> = V<sub>3</sub>
        = 60,000 lb/hr. From this, the solution in the first effect is
        10,000/140,000 = <strong>7.1 percent NaOH</strong>, and the solution in
        the second effect is 10,000/80,000 = <strong>12.5 percent NaOH</strong>.
        If 280&deg;F and 220&deg;F are used as rough guesses for the boiling
        point of water in the first and second effect, the solutions boil at
        285&deg;F and 230&deg;F, respectively, which gives <strong>BPR&rsquo;s of 5&deg;F and 10&deg;F</strong>
        for these effects.
      </p>
      <div class="eq-box">
        <div class="eq-row">
          <span class="katex-eq">(-\Delta T)_{\text{eff}} = (344.3 - 101.7) - (70 + 10 + 5) = \mathbf{157.6^\circ\text{F}}</span>
        </div>
        <div class="eq-row">
          <span class="katex-eq">U_1 A_1 (-\Delta T_1) = U_2 A_2 (-\Delta T_2) = U_3 A_3 (-\Delta T_3) \implies \frac{800}{500} = \frac{-\Delta T_2}{-\Delta T_1}; \quad \frac{500}{300} = \frac{-\Delta T_3}{-\Delta T_2}</span>
        </div>
        <div class="eq-row">
          <span class="katex-eq">(-\Delta T_1) + (-\Delta T_2) + (-\Delta T_3) = 157.6 \implies -\Delta T_1 = 30.0^\circ\text{F},\; -\Delta T_2 = 47.9^\circ\text{F},\; -\Delta T_3 = 79.7^\circ\text{F}</span>
        </div>
        <div class="eq-row">
          <span class="katex-eq">T_{3s} = 171.7 + 79.7 = 251.4^\circ\text{F}; \quad T_2 = 261.4^\circ\text{F}; \quad T_{2s} = 309.3^\circ\text{F}; \quad T_1 = 314.3^\circ\text{F}; \quad T_{1s} = 344.3^\circ\text{F}</span>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>First Trial Temperatures</th>
            <th>Effect 1</th>
            <th>Effect 2</th>
            <th>Effect 3</th>
            <th>Condenser</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Steam / Vapor Saturation Temp.</td>
            <td>T<sub>1s</sub> = 344.3&deg;F</td>
            <td>T<sub>2s</sub> = 309.3&deg;F</td>
            <td>T<sub>3s</sub> = 251.4&deg;F</td>
            <td>T<sub>c</sub> = 101.7&deg;F</td>
          </tr>
          <tr>
            <td>Boiling Liquor Temp.</td>
            <td>T<sub>1</sub> = 314.3&deg;F</td>
            <td>T<sub>2</sub> = 261.4&deg;F</td>
            <td>T<sub>3</sub> = 171.7&deg;F</td>
            <td>&mdash;</td>
          </tr>
        </tbody>
      </table>

      <h3 class="sub-title">
        9.2 Step 4 &ndash; 5: First-Trial Heat &amp; Material Balances and Areas
        <span class="slide-tag">Slide 83</span>
      </h3>
      <div class="eq-box">
        <div class="eq-row">
          <span class="katex-eq">V_0 \lambda_{V0} + F h_F = V_1 H_1 + (F - V_1) h_1</span>
          <span class="eq-ref">(b)</span>
        </div>
        <div class="eq-row">
          <span class="katex-eq">V_1 H_1 + (F - V_1) h_1 = V_2 H_2 + V_1 h_{D2} + (F - V_1 - V_2) h_2</span>
          <span class="eq-ref">(c)</span>
        </div>
        <div class="eq-row">
          <span class="katex-eq">(F - V_1 - V_2) h_2 + V_2 H_2 = V_2 h_{D3} + (180{,}000 - V_1 - V_2) H_3 + L_3 h_3</span>
          <span class="eq-ref">(d)</span>
        </div>
      </div>
      <p>Inserting numerical values from the steam tables and from Figure 19.13:</p>
      <div class="eq-box">
        <div class="eq-row">
          <span class="katex-eq">875.4 V_0 + 200{,}000 \times 26 = 1185.1 V_1 + (200{,}000 - V_1) 260 \implies 875.4 V_0 - 925.1 V_1 = 200{,}000 \times 234</span>
          <span class="eq-ref">(b)</span>
        </div>
        <div class="eq-row">
          <span class="katex-eq">1185.1 V_1 + (200{,}000 - V_1) 260 = 1169.9 V_2 + 279.3 V_1 + (200{,}000 - V_1 - V_2) 208 \implies 843.8 V_1 - 961.9 V_2 = -200{,}000 \times 52</span>
          <span class="eq-ref">(c)</span>
        </div>
        <div class="eq-row">
          <span class="katex-eq">(200{,}000 - V_1 - V_2) 208 + 1169.9 V_2 = 220.0 V_2 + (180{,}000 - V_1 - V_2) 1137.4 + 20{,}000 \times 200 \implies 1879 V_2 + 929.4 V_1 = 167{,}200{,}000</span>
          <span class="eq-ref">(d)</span>
        </div>
        <div class="eq-row">
          <span class="katex-eq">\text{Solving simultaneously: } V_1 = 57{,}000\text{ lb},\; V_2 = 60{,}800\text{ lb},\; V_3 = 62{,}200\text{ lb},\; V_0 = 110{,}800\text{ lb}</span>
        </div>
      </div>

      <p>Solving the rate equations for the first-trial areas:</p>
      <div class="eq-box">
        <div class="eq-row">
          <span class="katex-eq">A_1 = \frac{q_1}{U_1(-\Delta T_1)} = \frac{V_0 \lambda_{V0}}{U_1(-\Delta T_1)} = \frac{110{,}800 \times 875.4}{800 \times 30} = \mathbf{4040\text{ ft}^2}</span>
        </div>
        <div class="eq-row">
          <span class="katex-eq">A_2 = \frac{V_1(H_1 - h_{D2})}{U_2(-\Delta T_2)} = \mathbf{2160\text{ ft}^2} \qquad A_3 = \frac{V_2(H_2 - h_{D3})}{U_3(-\Delta T_3)} = \mathbf{2410\text{ ft}^2}</span>
        </div>
      </div>

      <h3 class="sub-title">
        9.3 Step 6 &ndash; 7: Area-Weighted &Delta;T Adjustment &amp; Second Trial
        <span class="slide-tag">Slides 84, 85, 86</span>
      </h3>
      <p>
        These unequal areas indicate that the original apportionment of the total
        available &minus;&Delta;T among the various effects was improper. In
        adjusting the &minus;&Delta;T&rsquo;s, it is common practice to choose
        them so that:
      </p>
      <div class="eq-box">
        <div class="eq-row">
          <span class="katex-eq">-\Delta T_1' = -\Delta T_1 \frac{A_1}{A_m} \quad\text{(e)}, \qquad -\Delta T_2' = -\Delta T_2 \frac{A_2}{A_m} \quad\text{(f)}, \qquad -\Delta T_3' = -\Delta T_3 \frac{A_3}{A_m} \quad\text{(g)}</span>
        </div>
        <div class="eq-row">
          <span class="katex-eq">(-\Delta T_1') + (-\Delta T_2') + (-\Delta T_3') = \Sigma(-\Delta T_{\text{eff}}) = (-\Delta T_1) + (-\Delta T_2) + (-\Delta T_3)</span>
          <span class="eq-ref">(h)</span>
        </div>
        <div class="eq-row">
          <span class="katex-eq">(-\Delta T_1)\frac{A_1}{A_m} + (-\Delta T_2)\frac{A_2}{A_m} + (-\Delta T_3)\frac{A_3}{A_m} = (-\Delta T_1) + (-\Delta T_2) + (-\Delta T_3)</span>
          <span class="eq-ref">(i)</span>
        </div>
        <div class="eq-row">
          <span class="katex-eq">A_m = \frac{(-\Delta T_1)A_1 + (-\Delta T_2)A_2 + (-\Delta T_3)A_3}{(-\Delta T_1) + (-\Delta T_2) + (-\Delta T_3)}</span>
          <span class="eq-ref">(j)</span>
        </div>
      </div>

      <p>Determining A<sub>m</sub> from Equation (j) (gives &Sigma;(&minus;&Delta;T&prime;) = &Sigma;(&minus;&Delta;T<sub>eff</sub>) without adjustment unless BPR values change):</p>
      <div class="eq-box">
        <div class="eq-row">
          <span class="katex-eq">A_m = \frac{30.0 \times 4040 + 47.9 \times 2160 + 79.7 \times 2410}{157.6} = \mathbf{2645\text{ ft}^2}</span>
        </div>
        <div class="eq-row">
          <span class="katex-eq">-\Delta T_1' = 30.0 \times \frac{4040}{2645} = 45.8^\circ\text{F}, \qquad -\Delta T_2' = 47.9 \times \frac{2160}{2645} = 39.2^\circ\text{F}, \qquad -\Delta T_3' = 79.7 \times \frac{2410}{2645} = 72.6^\circ\text{F}</span>
        </div>
        <div class="eq-row">
          <span class="katex-eq">\Sigma(-\Delta T') = 157.6^\circ\text{F}</span>
        </div>
      </div>
      <p style="font-size: 13.5px">
        If A<sub>m</sub> had been calculated by averaging A<sub>1</sub>, A<sub>2</sub>,
        and A<sub>3</sub>, a value of 2870 ft<sup>2</sup> would have been
        obtained, from which &minus;&Delta;T<sub>1</sub>&prime; = 42&deg;F,
        &minus;&Delta;T<sub>2</sub>&prime; = 35.9&deg;F,
        &minus;&Delta;T<sub>3</sub>&prime; = 66.7&deg;F, and
        &Sigma;(&minus;&Delta;T&prime;) = 144.6&deg;F. Considerable adjustment
        would have been required to make &Sigma;(&minus;&Delta;T&prime;) = 157.6.
      </p>

      <table>
        <thead>
          <tr>
            <th>Revised Temperatures</th>
            <th>Effect 1</th>
            <th>Effect 2</th>
            <th>Effect 3</th>
            <th>Condenser</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Steam / Vapor Saturation Temp.</td>
            <td>T<sub>1s</sub> = 344.3&deg;F</td>
            <td>T<sub>2s</sub> = 293.5&deg;F</td>
            <td>T<sub>3s</sub> = 244.3&deg;F</td>
            <td>T<sub>c</sub> = 101.7&deg;F</td>
          </tr>
          <tr>
            <td>Boiling Liquor Temp.</td>
            <td>T<sub>1</sub> = 298.5&deg;F</td>
            <td>T<sub>2</sub> = 254.3&deg;F</td>
            <td>T<sub>3</sub> = 171.7&deg;F</td>
            <td>&mdash;</td>
          </tr>
        </tbody>
      </table>

      <p>Equations (b), (c), and (d) rewritten using enthalpy values at the revised temperatures:</p>
      <div class="eq-box">
        <div class="eq-row">
          <span class="katex-eq">875.4 V_0 + 200{,}000 \times 26 = 1180.3 V_1 + (200{,}000 - V_1) 245</span>
        </div>
        <div class="eq-row">
          <span class="katex-eq">1180.3 V_1 + (200{,}000 - V_1) 245 = 1167 V_2 + 263 V_1 + (200{,}000 - V_1 - V_2) 198</span>
        </div>
        <div class="eq-row">
          <span class="katex-eq">198(200{,}000 - V_1 - V_2) + 1167 V_2 = 212 V_2 + (180{,}000 - V_1 - V_2) 1137.4 + 20{,}000 \times 200</span>
        </div>
        <div class="eq-row">
          <span class="katex-eq">\text{Solving gives: } V_1 = 57{,}300,\; V_2 = 61{,}100,\; V_3 = 61{,}600,\; V_0 = \mathbf{111{,}000\text{ lb/hr}}</span>
        </div>
        <div class="eq-row">
          <span class="katex-eq">\text{BPR check: } x_1' = 0.07,\; x_2' = 0.123 \text{ (no change in BPR from Fig. 19.11)}</span>
        </div>
        <div class="eq-row">
          <span class="katex-eq">\text{Revised Areas: } A_1 = 2640\text{ ft}^2,\; A_2 = 2640\text{ ft}^2,\; A_3 = 2720\text{ ft}^2</span>
        </div>
        <div class="eq-row">
          <span class="katex-eq">\textbf{Final Answers: } A = \mathbf{2700\text{ ft}^2\text{/body}}, \quad \text{Steam required} = \mathbf{111{,}000\text{ lb/hr}}, \quad \text{Steam economy} = \mathbf{1.62}</span>
        </div>
      </div>

      <p>
        Large-scale evaporation operations are frequently done in as many as six
        effects and require units large enough to represent a small plant all by
        themselves. Typical applications would include concentration of black
        liquor from a paper-pulping operation, sugar concentration, caustic soda
        evaporation, and ammonium sulfate concentration.
      </p>
      </section>

      <!-- SECTION 10 -->
      <section class="topic-section" id="topic-10" data-topic="10" data-short="Design of Evaporator &amp; Specification Sheet">
      <h2 class="section-title">
        10. Design of Evaporator &amp; Specification Sheet
      </h2>

      <h3 class="sub-title">
        10.1 Design of Evaporator
        <span class="slide-tag">Slide 87</span>
      </h3>
      <div class="grid-2">
        <div class="card">
          <h4>Process &amp; Balance Calculations</h4>
          <ul style="margin-bottom: 0">
            <li>Evaporator Capacity (kg of vapor/hr)</li>
            <li>
              Selection of Evaporator System: Single effect, Multiple effect,
              Rising film, Falling film, Others
            </li>
            <li>Method of Feeding</li>
            <li>
              Material and Energy Balances: Quantity of steam required, Quantity
              of Vapor to condenser, Heat transfer area
            </li>
          </ul>
        </div>
        <div class="card">
          <h4>Sizing, Materials &amp; Specification</h4>
          <ul style="margin-bottom: 0">
            <li>
              Sizing of Equipment: Heat exchanger, Pumps, Vacuum system (steam
              ejector), Condenser, Entrainment Separators
            </li>
            <li>Materials of construction</li>
            <li>Instrumentation and control</li>
            <li>Specification Sheet</li>
          </ul>
        </div>
      </div>

      <h3 class="sub-title">
        10.2 Specification Sheet &amp; Design Questionnaire
        <span class="slide-tag">Slides 88, 89, 90, 91, 92</span>
      </h3>
      <div class="grid-2">
        <div class="card">
          <h4>Process Liquor &amp; Evaporation Duty <span class="slide-tag">Slide 88</span></h4>
          <ul style="margin-bottom: 0">
            <li>
              <strong>PROCESS LIQUOR:</strong> Solution type; Scaling tendency;
              Crystallization tendency; Corrosive nature; Physical properties
              (Concentration, sp. gr., sp. heat and BPE)
            </li>
            <li>
              <strong>EVAPORATION DUTY:</strong> Feed rate; Operating time;
              Shutdown ability; Cooling of product required?; Maximum processing
              temperature
            </li>
          </ul>
        </div>
        <div class="card">
          <h4>Services, Pumps, Control &amp; Site <span class="slide-tag">Slide 89</span></h4>
          <ul style="margin-bottom: 0">
            <li><strong>SERVICES (UTILITIES):</strong> Steam, Cooling water, Electricity</li>
            <li><strong>PUMPS:</strong> Feed, Product and Condensate</li>
            <li><strong>INSTRUMENTATION AND CONTROL EQUIPMENT</strong></li>
            <li>
              <strong>SITE:</strong> Location, altitude above sea level, and
              restriction of headroom (barometric condenser)
            </li>
          </ul>
        </div>
      </div>

      <div class="grid-2">
        <div class="fig-box" style="margin: 0">
          <strong>Slides 90, 91: APV Evaporator Design Questionnaire (Part 1 — Company &amp; Process Liquor)</strong><br />
          <img src="{{SLIDES}}/slide_91.png" alt="Slide 91 - APV Evaporator Design Questionnaire Part 1" style="width:100%; margin-top:6px;" />
        </div>
        <div class="fig-box" style="margin: 0">
          <strong>Slides 90, 92: APV Evaporator Design Questionnaire (Part 2 — Physical Properties &amp; Evaporator Duty)</strong><br />
          <img src="{{SLIDES}}/slide_92.png" alt="Slide 92 - APV Evaporator Design Questionnaire Part 2" style="width:100%; margin-top:6px;" />
        </div>
      </div>

      <h3 class="sub-title">
        10.3 Data-Sheet for Evaporator
        <span class="slide-tag">Slides 93, 94, 95, 96</span>
      </h3>
      <table>
        <thead>
          <tr>
            <th>Section</th>
            <th>Required Data Fields</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>1] Customer Details</strong></td>
            <td>Customer Name; Official Address; Contact Number; Contact Person; Email</td>
          </tr>
          <tr>
            <td><strong>2] A] Type based on Construction</strong></td>
            <td>Natural Circulation; Falling Film; Forced Circulation; ATFE; Other</td>
          </tr>
          <tr>
            <td><strong>B] Type based on No. of Stages</strong></td>
            <td>Single Effect; Multiple Effect</td>
          </tr>
          <tr>
            <td><strong>C] &amp; D] Inlet Feed Data</strong></td>
            <td>
              Feed rate (kg/hr); Water evaporation capacity (kg/hr); Product rate (kg/hr);
              Type of feed (1. Homogeneous Solution, 2. Slurry); Feed Composition (Component-1 to 4, %w/w);
              Total Solid content (%w/w); Dissolved Solids (%w/w); Suspended Solids (%w/w);
              Density of feed (gm/cc); Temperature (&deg;C); Viscosity (cP / Centipoise); pH
            </td>
          </tr>
          <tr>
            <td><strong>E] Outlet Product Data</strong></td>
            <td>Desired Total Solid Content (%w/w); Density (gm/cc); Viscosity (cP); pH; Required Temperature (&deg;C)</td>
          </tr>
          <tr>
            <td><strong>F] MOC Requirements</strong></td>
            <td>Contact/Wetted Parts; Non-Contact/Non-Wetted Parts</td>
          </tr>
          <tr>
            <td><strong>G] Special Considerations for Design</strong></td>
            <td>
              Foaming Tendency (Yes/No); Scaling/Fouling tendency (Yes/No);
              Crystallizing Tendency (Yes/No); Caking tendency (Yes/No);
              Is Product Heat Sensitive (Specify Allowable Operating Temperatures);
              CIP System required (Yes/No); Equipment Surface Finish (Food Grade / Sanitary / Normal)
            </td>
          </tr>
          <tr>
            <td><strong>H]&ndash;J] Utilities &amp; Existing Mode</strong></td>
            <td>
              H] Steam Available (Yes; pressure and quantity);
              I] Compressed Air Available (6 bar max);
              J] Power Availability (3 phase grid power; Voltage in Volts &amp; Frequency in Hz);
              Existing mode of evaporation if ANY (None)
            </td>
          </tr>
        </tbody>
      </table>
      </section>

      <!-- SECTION 11 -->
      <section class="topic-section" id="topic-11" data-topic="11" data-short="Auxiliary Equipment">
      <h2 class="section-title">
        11. Auxiliary Equipment
      </h2>

      <h3 class="sub-title">
        11.1 Steam Traps
        <span class="slide-tag">Slide 97</span>
      </h3>
      <div class="fig-box">
        <strong>Slide 97: Figure 19.36 (Cross section of a compound-lever, ball-float trap — Armstrong Machine Works, Foust) &amp; Figure 19.38 (Balanced-pressure thermostatic trap — Foust)</strong><br />
        <img src="{{SLIDES}}/slide_97.png" alt="Slide 97 - Steam traps Fig 19.36 and Fig 19.38" style="width:88%; margin:6px auto 0 auto;" />
      </div>

      <h3 class="sub-title">
        11.2 Condenser (Barometric Condenser)
        <span class="slide-tag">Slides 98, 99</span>
      </h3>
      <p>
        Condensate level in the barometric leg is high enough so that the
        hydrostatic head balances the pressure difference between the vacuum
        space and the atmospheric pressure on the liquid surface in the hot well.
      </p>
      <ul>
        <li>
          The water requirement in a barometric condenser may be estimated from
          a simple heat balance. Water discharged to the hot well is usually
          <strong>100&ndash;120&deg;F</strong>.
        </li>
        <li>Barometric condenser is much smaller than the surface condenser for the same duty.</li>
        <li>
          Barometric condenser requires about a <strong>40 ft headroom</strong>
          (barometric leg: 34 ft minimum) and may use more water than a surface
          condenser.
        </li>
        <li>Operating convenience and reduced first cost.</li>
        <li>
          Applications in cases where vapors are neither valuable, corrosive,
          <strong>nor</strong> hazardous to health.
        </li>
      </ul>
      <div class="fig-box">
        <strong>Slide 99: Figure 19.41 (A two-stage countercurrent barometric condenser) &amp; Schematic of barometric condenser</strong><br />
        <img src="{{SLIDES}}/slide_99.png" alt="Slide 99 - Barometric condenser Fig 19.41 and schematic" style="width:94%; margin:6px auto 0 auto;" />
      </div>

      <h3 class="sub-title">
        11.3 Entrainment Separators
        <span class="slide-tag">Slides 100, 101</span>
      </h3>
      <p>
        The entrainment of liquid droplets in the vapor can become a serious
        problem in evaporators. In standard, vertical tube evaporators, the
        large vapor space in the evaporator body is usually sufficient to allow
        all except the very small droplets fall out of the vapor phase.
        <strong>In forced-circulation and long-tube vertical evaporators</strong>,
        the vapor space is usually not sufficient to separate effectively these
        liquid droplets from the high-velocity vapor-liquid streams. In these
        cases, auxiliary entrainment separators are necessary.
      </p>
      <div class="card">
        <h4>Working principles <span class="slide-tag">Slide 100</span></h4>
        <ul style="margin-bottom: 0">
          <li>
            They operate as <strong>cyclone separators</strong> involving
            <strong>centrifugal-force mechanism</strong> (covered in Particle
            Technology course).
          </li>
          <li>
            The droplets coalesce by <strong>impingement</strong> with
            <strong>baffles</strong> or with <strong>metal mesh</strong>.
          </li>
        </ul>
      </div>
      <p>
        <strong>Figure 19.42 (Foust)</strong> shows an entrainment separator
        that operates on a combination of these two mechanisms. The feed enters
        tangentially so that some liquid droplets are thrown to the wall by
        centrifugal force. It then passes through a set of baffles that cause
        further separation by impingement. <strong>Figure 5-20 (Badger Banchero)</strong>
        shows the cross-sectional diagram of a centrifugal entrainment separator
        (A &ndash; vapor exit from evaporator body; B &ndash; spiral vanes;
        C &ndash; impact baffle; D &ndash; return of entrained liquor from
        inside baffle; E &ndash; return of entrained liquor from outside baffle).
      </p>

      <div class="fig-box">
        <strong>Slide 101: Figure 19.42 (Entrainment separator using both centrifugal and impingement mechanisms — Foust) &amp; Fig. 5-20 (Centrifugal entrainment separator — Badger and Banchero)</strong><br />
        <img src="{{SLIDES}}/slide_101.png" alt="Slide 101 - Entrainment separators Fig 19.42 and Fig 5-20" style="width:94%; margin:6px auto 0 auto;" />
      </div>
      </section>
  `,
});
