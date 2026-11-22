window.NOTES_REGISTRY = window.NOTES_REGISTRY || [];
window.NOTES_REGISTRY.push({
  id: "relief-sizing",
  title: "Relief System Sizing",
  shortTitle: "Relief System Sizing (Ch. 9)",
  subtitle: "Chapter 9 &nbsp;|&nbsp; Slides 2–41",
  meta: "8 Topics · 41 Slides",
  slideCount: "41 Slides",
  defaultSlidesPath: "slides",
  html: String.raw`
      <!-- SECTION 1 -->
      <section class="topic-section" id="topic-1" data-topic="1" data-short="Relief Sizing Calculations &amp; Area">
      <h2 class="section-title">
        1. Relief Sizing Calculations &amp; Area Requirements
      </h2>

      <h3 class="sub-title">
        1.1 Relief Sizing Calculations
        <span class="slide-tag">Slides 2, 3</span>
      </h3>
      <ul>
        <li>
          Use appropriate <strong>source model</strong> to determine the
          <strong>rate of material release</strong> (<em>m&#775;</em>)
        </li>
        <li>
          Use appropriate <strong>equation</strong> based on
          <strong>hydrodynamic principles</strong> to determine the
          <strong>relief device vent area</strong> (<em>A</em>)
        </li>
        <li>
          Vent area calculation depends on the <strong>type of flow</strong>
          (liquid, vapor, or 2-phase) and the
          <strong>type of relief device</strong> (<strong>spring or rupture</strong>
          disc, vent area / wall of structure)
        </li>
        <li>
          Vent <strong>area</strong> is substantially <strong>reduced</strong>
          by allowing the <strong>pressure to rise past the set pressure</strong>
          (<em>P<sub>s</sub></em>; <em>P</em> &uarr; &rarr; <em>A</em> &darr;)
        </li>
      </ul>

      <div class="grid-2">
        <div class="card">
          <h4>
            1.2 Relief Area Requirements
            <span class="slide-tag">Slide 4</span>
          </h4>
          <ul style="margin-bottom: 0">
            <li>
              Flow to hold spring relief valve <strong>seat</strong> in
              <strong>open position</strong>: <strong>25-30 %</strong> of
              <strong>maximum</strong> flow (<em>m&#775;</em> = (0.25 to 0.3)
              <em>m<sub>max</sub></em>)
            </li>
            <li>
              <strong>Low flow</strong> can lead to
              <strong>rapid opening and closing (<em>chattering</em>)</strong>
              with valve <strong>damage</strong>
            </li>
            <li>
              Overpressures, <strong>OP</strong>, are designed to be
              <strong>10 to 25 % above set pressures</strong> to avoid
              <strong>excessive vent sizes</strong> (<em>P</em> = (1.1 to 1.25)
              <em>P<sub>s</sub></em>)
            </li>
            <li>
              To <strong>hold pressures</strong> near the
              <strong>set pressures</strong> would require
              <strong>much larger vent sizes</strong>
            </li>
          </ul>
        </div>
        <div class="card">
          <h4>
            1.3 Address Relief Sizing for Following Cases
            <span class="slide-tag">Slide 6</span>
          </h4>
          <ol style="margin-bottom: 0">
            <li>
              Conventional spring operated relief in liquid or gas service
            </li>
            <li>Rupture discs in liquid or gas service</li>
            <li>
              <strong>Two phase</strong> flow during
              <strong>runaway reactor relief</strong>
            </li>
            <li>
              Reliefs for dust and vapor <strong>explosion</strong>
            </li>
            <li>
              Reliefs for fires external to <strong>process vessels</strong>
            </li>
            <li>
              Reliefs for thermal expansion of <strong>process fluids</strong>
            </li>
          </ol>
        </div>
      </div>

      <div class="fig-box">
        <strong>Slide 5: Required Vent Area, 2-&phi; Flow</strong><br />
        <img src="{{SLIDES}}/slide_05.png" alt="Slide 5 - Required Vent Area, 2-phase Flow" style="width:82%; margin:6px auto 0 auto;" />
      </div>
      </section>

      <!-- SECTION 2 -->
      <section class="topic-section" id="topic-2" data-topic="2" data-short="Spring Relief Area for Liquids (1a)">
      <h2 class="section-title">
        2. Spring Relief Area for Liquids (1a)
      </h2>

      <h3 class="sub-title">
        1a - Spring Relief Area for Liquids
        <span class="slide-tag">Slide 7</span>
      </h3>
      <ul>
        <li>Assume <strong>orifice flow</strong> through the valve port:</li>
      </ul>
      <div class="eq-box">
        <div class="eq-row">
          <span class="katex-eq">Q_V = A\bar{u} = A C_o \sqrt{\frac{2 g_c \Delta P}{\rho}}</span>
          <span class="eq-ref">Eq. 4-6, pg. 114</span>
        </div>
      </div>
      <ul>
        <li>
          <strong>Fixed unit equation: replace density with specific gravity:</strong>
        </li>
      </ul>
      <div class="eq-box">
        <div class="eq-row">
          <div class="eq-expr">
            <span class="katex-eq">A \propto \frac{Q_v}{C_o}\sqrt{\frac{\rho / \rho_{\text{ref}}}{\Delta P}}</span>
            <span class="eq-note">(&Delta;<em>P</em>, pressure drop)</span>
          </div>
        </div>
      </div>
      <ul>
        <li>
          <strong>API correction factors</strong> included for wide applications:
        </li>
      </ul>
      <div class="eq-box">
        <div class="eq-row">
          <span class="katex-eq">A = \left[\frac{\text{in}^2\,\text{psi}^{1/2}}{38\,\text{gpm}}\right]\frac{Q_v}{C_o K_v K_p K_b}\sqrt{\frac{\rho / \rho_{\text{ref}}}{1.25 P_s - P_b}}</span>
        </div>
      </div>

      <h3 class="sub-title">
        2.2 Computed Area for Liquids
        <span class="slide-tag">Slide 8</span>
      </h3>
      <ul>
        <li>
          <strong><em>A</em></strong> is <strong>computed area</strong> required
          for <strong>device sizing</strong> as <strong>contrasted</strong> to
          <strong>vent area</strong> during use where flow is at times
          <strong>restricted</strong> and <strong>not like orifice</strong>
        </li>
        <li>
          <strong>Maximum pressure</strong> in the <strong>API</strong> equation
          is <strong>25 % above</strong> the <strong>set pressure</strong>,
          <em>K<sub>b</sub></em> corrects for other <em>P</em>
        </li>
        <li>
          For <strong><em>C<sub>o</sub></em></strong> use the conservative value
          of <strong>0.61</strong> unless more information is available
        </li>
        <li>
          <strong><em>K<sub>v</sub></em>, <em>K<sub>p</sub></em>, <em>K<sub>b</sub></em></strong>
          are <strong>correction factors</strong> for use of the API equation
          with various liquid viscosities, set or maximum pressures, and
          backpressures.
        </li>
      </ul>

      <h3 class="sub-title">
        2.3 Correct Area for Viscosity: <em>K<sub>v</sub></em>
        <span class="slide-tag">Slides 9, 10</span>
      </h3>
      <ul>
        <li>
          <strong>Higher</strong> the <strong>viscosity</strong>, the
          <strong>higher</strong> the <strong>frictional losses</strong> through
          the valve.
        </li>
        <li>
          <strong>Higher</strong> the viscosity, the <strong>smaller</strong>
          the <strong>Reynolds</strong> number, <em>R<sub>e</sub></em>, and
          <strong>smaller</strong> the <strong><em>K<sub>v</sub></em></strong>,
          and therefore the <strong>larger</strong> the required
          <strong><em>A</em></strong>.
        </li>
        <li>
          <em>R<sub>e</sub></em> often is <strong>&gt; 5,000</strong>, where
          <strong><em>K<sub>v</sub></em> is ~ 1</strong>.
        </li>
        <li>
          For low <em>R<sub>e</sub></em>,
          <strong><em>K<sub>v</sub></em> is a strong function of <em>R<sub>e</sub></em></strong>.
        </li>
        <li>
          Changes in relief area due to changes in <em>K<sub>v</sub></em> or in
          any of the other correction factors can be easily calculated from
          <strong>ratios</strong>.
        </li>
      </ul>
      <div class="fig-box">
        <strong>Slide 10: Viscosity Correction Factor: <em>K<sub>v</sub></em> — Spring relief, Liquids (Fig. 9-2, p. 387)</strong><br />
        <img src="{{SLIDES}}/slide_10.png" alt="Slide 10 - Viscosity Correction Factor Kv" style="width:82%; margin:6px auto 0 auto;" />
      </div>

      <h3 class="sub-title">
        2.4 Correct <em>A</em> for Overpressure: <em>K<sub>p</sub></em>
        <span class="slide-tag">Slides 11, 12</span>
      </h3>
      <ul>
        <li>
          <strong>Required area</strong>, <em>A</em>, vs.
          <strong>effective valve vent area</strong>: As <strong>OP increases</strong>,
          <strong>effective area increases</strong> as valve opens, so
          calculated <strong>required area</strong>, <em>A</em>,
          <strong>decreases</strong>
        </li>
        <li>
          1.25 <em>P<sub>s</sub></em> &minus; <em>P<sub>b</sub></em> = &Delta;<em>P</em>
          for 25 % OP. Use a correction factor, <strong><em>K<sub>p</sub></em></strong>,
          for <strong>OP</strong> within OP range of <strong>10 - 50 %</strong>
        </li>
        <li>
          OP correction factor: <strong><em>K<sub>p</sub></em> = 1</strong> for
          <strong>25 % OP</strong>
        </li>
        <li>
          <strong>Above 25 %</strong>, the <strong>vent area</strong> is
          <strong>fixed</strong> &amp; behaves as <strong>true orifice</strong>,
          so flow rate changes <strong>only</strong> with
          <strong>pressure drop</strong>, &Delta;<em>P</em>;
          <em>K<sub>p</sub></em> is a <strong>weak</strong> function of OP in
          this range.
        </li>
        <li>
          <strong>Below 25 %</strong>, the <strong>vent area</strong> changes
          with OP, as <strong>discharge</strong> area changes as valve opens, so
          <strong>flow rate changes</strong> with pressure drop and with area;
          <em>K<sub>p</sub></em> is a strong function of OP in this range.
        </li>
      </ul>
      <div class="fig-box">
        <strong>Slide 12: Overpressure Correction: <em>K<sub>p</sub></em> — Spring relief for liquids (Fig 9-3, p. 387)</strong><br />
        <img src="{{SLIDES}}/slide_12.png" alt="Slide 12 - Overpressure Correction Kp" style="width:82%; margin:6px auto 0 auto;" />
      </div>

      <h3 class="sub-title">
        2.5 Correct Area for Backpressure: <em>K<sub>b</sub></em>
        <span class="slide-tag">Slides 13, 14</span>
      </h3>
      <ul>
        <li>
          <em>P<sub>b</sub></em> in the basic API equation
          <strong>corrects</strong> for effect of <strong>backpressure</strong>,
          <em>P<sub>b</sub></em>, in conventional valves: The
          <strong>higher</strong> the <em>P<sub>b</sub></em>, the
          <strong>higher</strong> the <em>P<sub>s</sub></em>
        </li>
        <li>
          For <strong>balanced bellows</strong> valves, a correction factor,
          <strong><em>K<sub>b</sub></em></strong>, must be included, because the
          <em>P<sub>s</sub></em> does <strong>not increase</strong> as the
          <em>P<sub>b</sub></em> <strong>increases</strong> due to
          <strong>absence of backpressure</strong> on <strong>back</strong> of
          relief disc
        </li>
        <li>
          For the balanced bellows, the <strong>higher</strong> the
          <strong>backpressure</strong>, the <strong>smaller</strong> the
          <strong><em>K<sub>b</sub></em></strong> and the
          <strong>larger</strong> the <strong>required <em>A</em></strong> for a
          given <em>Q<sub>v</sub></em>
        </li>
      </ul>
      <div class="fig-box">
        <strong>Slide 14: <em>K<sub>b</sub></em> for Balanced-Bellows Relief — Liquids, Overpressure = 25 % (Fig 9-4, p. 388)</strong><br />
        <img src="{{SLIDES}}/slide_14.png" alt="Slide 14 - Kb for Balanced-Bellows Relief" style="width:82%; margin:6px auto 0 auto;" />
      </div>
      </section>

      <!-- SECTION 3 -->
      <section class="topic-section" id="topic-3" data-topic="3" data-short="Spring Relief Valves for Gases (1b)">
      <h2 class="section-title">
        3. Spring Relief Valves for Gases (1b)
      </h2>

      <h3 class="sub-title">
        1b - Spring Relief Valves for Gases
        <span class="slide-tag">Slide 15</span>
      </h3>
      <ul>
        <li>
          In general, flow is <strong>critical</strong> with
          <strong><em>P<sub>ch</sub></em> &gt; <em>P<sub>ext</sub></em></strong>:
        </li>
      </ul>
      <div class="eq-box">
        <div class="eq-row">
          <span class="katex-eq">(Q_m)_{\text{ch}} = C_o A P \sqrt{\frac{\gamma g_c M}{R_g T}\left(\frac{2}{\gamma + 1}\right)^{(\gamma + 1)/(\gamma - 1)}}</span>
          <span class="eq-ref">Eq. 4-50, pg. 133</span>
        </div>
      </div>
      <div class="eq-box">
        <div class="eq-row">
          <div class="eq-expr">
            <span class="katex-eq">A = \frac{Q_m}{C_o \chi K_b P}\sqrt{\frac{T z}{M}}</span>
            <span class="katex-eq">\chi = \sqrt{\frac{\gamma g_c}{R_g}\left(\frac{2}{\gamma + 1}\right)^{(\gamma + 1)/(\gamma - 1)}}</span>
          </div>
        </div>
      </div>
      <p style="font-size: 13.5px; margin-top: -6px">
        <em>z</em> = compressibility factor; &nbsp;
        <em>P</em> = max absolute discharge pressure; &nbsp;
        <em>K<sub>b</sub></em> = backpressure correction
      </p>

      <h3 class="sub-title">
        3.2 Vent Area Equation for Gases
        <span class="slide-tag">Slide 16</span>
      </h3>
      <ul>
        <li>
          Separate <em>K<sub>b</sub></em> correction for each valve type:
          <strong>standard valves</strong>, Fig 9-5, p. 391;
          <strong>balanced bellows</strong>, Fig 9-6, p. 392. For larger
          backpressure, <em>K<sub>b</sub></em> is smaller and <em>A</em> larger
        </li>
        <li>
          <strong><em>C<sub>o</sub></em></strong>: if not known use
          <strong>0.975</strong>; <em>M</em> is avg. molecular weight
        </li>
        <li>
          <em>P</em> is the <strong>maximum absolute relieving pressure</strong>:
          <div style="margin-top: 4px; font-weight: 600">
            <em>P</em> = <em>P<sub>max</sub></em> + 14.7
          </div>
        </li>
        <li>
          ASME safety guidelines, <em>P<sub>s</sub></em> =
          <strong>gauge set pressure</strong>:
          <ul>
            <li>
              <em>P<sub>max</sub></em> = 1.1 <em>P<sub>s</sub></em>,
              <strong>unfired</strong> vessels
            </li>
            <li>
              <em>P<sub>max</sub></em> = 1.2 <em>P<sub>s</sub></em>, vessels
              <strong>exposed to fire</strong>
            </li>
            <li>
              <em>P<sub>max</sub></em> = 1.33 <em>P<sub>s</sub></em>,
              <strong>piping</strong>
            </li>
          </ul>
        </li>
      </ul>
      <p style="font-size: 13.5px; color: var(--muted)">
        *If flow isn&rsquo;t choked use more general equation 4-48
      </p>

      <div class="fig-box">
        <strong>Slide 17: Backpressure Correction, <em>K<sub>b</sub></em>, for Balanced-Bellows Relief in Vapor Service; Fig 9-6, p 392</strong><br />
        <img src="{{SLIDES}}/slide_17.png" alt="Slide 17 - Fig 9-6 Backpressure Correction Kb in Vapor Service" style="width:88%; margin:6px auto 0 auto;" />
      </div>
      </section>

      <!-- SECTION 4 -->
      <section class="topic-section" id="topic-4" data-topic="4" data-short="Rupture Discs (2a, 2b)">
      <h2 class="section-title">
        4. Rupture Discs for Liquids and Gases (2a, 2b)
      </h2>

      <div class="grid-2">
        <div class="card">
          <h4>
            2a - Rupture Discs for Liquids
            <span class="slide-tag">Slide 18</span>
          </h4>
          <ul>
            <li>Use expression for <strong>spring relief</strong> valves for <strong>liquids</strong></li>
            <li>
              Discharge directly to atmosphere or short piping through an
              <strong>orifice</strong> with fixed area:
            </li>
          </ul>
          <div class="eq-box" style="background: #fff">
            <div class="eq-row">
              <span class="katex-eq">A = \left[\frac{\text{in}^2\,\text{psi}^{1/2}}{38\,\text{gpm}}\right]\frac{Q_v}{C_o}\sqrt{\frac{\rho / \rho_{\text{ref}}}{\Delta P}}</span>
              <span class="eq-ref">Eq. 9-3, pg. 385</span>
            </div>
          </div>
          <ul style="margin-bottom: 0">
            <li>
              Discharge to a relief system: Flow through a
              <strong>system</strong> of <strong>pipes</strong> and other
              components with <strong>significant <em>P<sub>b</sub></em></strong>
              must be analyzed as discussed in earlier discussion of source
              terms.
            </li>
          </ul>
        </div>

        <div class="card">
          <h4>
            2b - Rupture Discs for Gases
            <span class="slide-tag">Slide 19</span>
          </h4>
          <ul>
            <li>Use expression for <strong>spring relief</strong> valves for <strong>gases</strong></li>
            <li>
              For <strong>low backpressure</strong> levels with
              <strong>no <em>K<sub>b</sub></em></strong> factor:
            </li>
          </ul>
          <div class="eq-box" style="background: #fff">
            <div class="eq-row">
              <span class="katex-eq">A = \frac{Q_m}{C_o \chi P}\sqrt{\frac{T z}{M}}</span>
              <span class="eq-ref">Eq. 9-13, pg. 394</span>
            </div>
            <div style="font-size: 13px; margin-top: 6px; font-family: 'IBM Plex Sans', sans-serif">
              Assumes <strong><em>C<sub>o</sub></em> = 1</strong>
            </div>
          </div>
          <ul style="margin-bottom: 0">
            <li>
              For <strong>significant backpressure</strong> levels, as into a
              <strong>containment system</strong>: analyze discharge and flow
              through the entire containment system.
            </li>
          </ul>
        </div>
      </div>
      </section>

      <!-- SECTION 5 -->
      <section class="topic-section" id="topic-5" data-topic="5" data-short="Two-Phase Relief Behavior (3)">
      <h2 class="section-title">
        5. Two-Phase Relief Behavior &amp; Thermal Reaction (3)
      </h2>

      <h3 class="sub-title">
        3 - Two-Phase Relief Behavior
        <span class="slide-tag">Slide 20</span>
      </h3>
      <ul>
        <li>
          <strong>Choked</strong>, two-phase flow through relief orifice
        </li>
        <li>Two-phase flow through containment system</li>
        <li>
          <strong>Runaway reaction</strong> generally includes
          <strong>flashing</strong> during relief;
          <strong>&Delta;<em>H<sub>v</sub></em> removed</strong>
          (<em>&lsquo;<strong>tempers</strong>&rsquo; the
          <strong>temperature rise</strong> due to <strong>exo</strong>thermic
          reaction</em>)
        </li>
        <li>
          Reactor system, with <strong>large vol/area</strong> over
          <strong>short time</strong>, relief conditions ~
          <strong><em>adiabatic</em></strong>
        </li>
        <li>
          Energy balance: <strong>accumulation</strong> due to
          <strong>heating of reactor fluid</strong>, and
          <strong>removal</strong> mainly by vaporization and discharge
        </li>
      </ul>

      <div class="fig-box">
        <strong>Slide 21: &lsquo;Tempered&rsquo; Reaction System (Fig. 9-7, pg. 396)</strong><br />
        <img src="{{SLIDES}}/slide_21.png" alt="Slide 21 - Tempered Reaction System Fig 9-7" style="width:82%; margin:6px auto 0 auto;" />
      </div>

      <h3 class="sub-title">
        5.2 Two-Phase Mass Discharge
        <span class="slide-tag">Slides 22, 23, 24</span>
      </h3>
      <ul>
        <li>
          Liquids at their <strong>saturation pressure</strong>,
          <strong>saturation temperature</strong>, <em>T<sub>s</sub></em>. The
          <strong>two-phase mass flow</strong> rate:
        </li>
      </ul>
      <div class="eq-box">
        <div class="eq-row">
          <div class="eq-expr">
            <span class="katex-eq">Q_m = \frac{\Delta H_v A}{v_{fg}}\sqrt{\frac{g_c}{T_s C_p}}</span>
            <span class="katex-eq">v_{fg} = \Delta \bar{V}^{fg}</span>
          </div>
          <span class="eq-ref">Eq. 4-104, pg. 156</span>
        </div>
      </div>
      <ul>
        <li>
          <strong>Mass flux</strong> with
          <strong>L/D correction factor</strong>, <strong>&Psi;</strong>, for
          flow through pipes vs. holes, Fig 9-8, p. 397:
        </li>
      </ul>
      <div class="eq-box">
        <div class="eq-row">
          <span class="katex-eq">G_T = 0.9\,\psi\frac{\Delta H_v}{v_{fg}}\sqrt{\frac{g_c}{C_p T_s}}</span>
          <span class="eq-ref">Empirical 0.9 factor to match data</span>
        </div>
      </div>

      <div class="fig-box">
        <strong>Slide 23: Correction for 2-&phi; Flashing Flow in Pipes (Fig 9-8, pg. 397)</strong><br />
        <img src="{{SLIDES}}/slide_23.png" alt="Slide 23 - Correction for 2-phase Flashing Flow in Pipes" style="width:82%; margin:6px auto 0 auto;" />
      </div>

      <ul>
        <li><strong>Clausius Clapyron</strong> equation:</li>
      </ul>
      <div class="eq-box">
        <div class="eq-row">
          <div class="eq-expr">
            <span class="katex-eq">\frac{dP}{dT} = \frac{\Delta H_v}{T v_{fg}}</span>
            <span class="katex-eq">G_T = 0.9\,\psi\frac{\Delta P}{\Delta T}\sqrt{\frac{g_c T_s}{C_p}}</span>
          </div>
          <span class="eq-ref">Eq. 9-17 &nbsp;|&nbsp; &Psi; = 1 for an orifice</span>
        </div>
      </div>
      <div class="eq-box">
        <div class="eq-row">
          <span class="katex-eq">A = \frac{m_0 q}{G_T\left(\sqrt{\frac{V}{m_0}\frac{\Delta H_v}{v_{fg}}} + \sqrt{C_v \Delta T}\right)^2}</span>
        </div>
      </div>
      <ul>
        <li><strong>With CC equation:</strong></li>
      </ul>
      <div class="eq-box">
        <div class="eq-row">
          <span class="katex-eq">A = \frac{m_0 q}{G_T\left(\sqrt{\frac{V}{m_0} T_s \frac{dP}{dT}} + \sqrt{C_V \Delta T}\right)^2}</span>
        </div>
      </div>
      <p style="font-size: 13.5px; margin-top: -6px">
        <em>m<sub>o</sub></em> = mass before release; &nbsp;
        Heat terms: generated by process, removed by discharge, absorbed by evaporation. &nbsp;
        &Delta;<em>T</em> associated with &Delta;<em>P</em> (OP)
      </p>

      <div class="grid-2">
        <div class="card">
          <h4>
            5.3 Two-Phase Model Assumptions
            <span class="slide-tag">Slide 25</span>
          </h4>
          <ul style="margin-bottom: 0">
            <li>
              <strong>Reactor</strong> system is <strong><em>tempered</em></strong>
              with <strong>vaporization</strong>, <strong>flashing</strong>
              during relief
            </li>
            <li>
              <strong>Homogeneous venting</strong>, <strong>uniform froth</strong>
            </li>
            <li><strong>Mass flux</strong> nearly <strong>constant</strong> during relief</li>
            <li>Nearly <strong>constant reaction energy</strong>/mass</li>
            <li>
              <em>C<sub>v</sub></em>, &Delta;<em>H<sub>v</sub></em> and
              <em>v<sub>fg</sub></em> are <strong>constant</strong>
            </li>
            <li>
              Accurate relief behavior <strong>requires calorimetric measurements</strong>
              of the specific reactor system
            </li>
          </ul>
        </div>

        <div class="card">
          <h4>
            5.4 Thermal Reaction Behavior
            <span class="slide-tag">Slide 26</span>
          </h4>
          <ul>
            <li>
              Measure <strong>heat input</strong> rate using a calorimeter, such
              as <strong>VSP</strong>, Fig 8-8, p. 366
            </li>
          </ul>
          <div class="eq-box" style="background: #fff">
            <div class="eq-row">
              <span class="katex-eq">q = 0.5 C_v \left[\left(\frac{dT}{dt}\right)_s + \left(\frac{dT}{dt}\right)_m\right]</span>
            </div>
          </div>
          <ul>
            <li>
              Measure <strong>heating rate</strong> at the
              <strong>set pressure</strong> (subscript <strong>&lsquo;s&rsquo;</strong>)
              and the <strong>temperature rise</strong> at the
              <strong>maximum pressure</strong> (<strong>&lsquo;m&rsquo;</strong>)
            </li>
            <li>Understand behavior of two-phase releases</li>
            <li>
              Avoid scenarios that can result in two-phase releases, e.g.,
              <strong>overheated polymerization reactor</strong>
            </li>
          </ul>
          <p style="font-size: 12.5px; color: var(--accent); margin: 4px 0 0 0; font-weight: 600">
            *Beware of unit conversions when applying equations
          </p>
        </div>
      </div>
      </section>

      <!-- SECTION 6 -->
      <section class="topic-section" id="topic-6" data-topic="6" data-short="Ex 9-5 &amp; Fauske Nomograph">
      <h2 class="section-title">
        6. Ex 9-5, Two-Phase Relief &amp; Fauske Nomograph Sizing Method
      </h2>

      <div class="example-box">
        <h4>
          Ex 9-5, Two-Phase Relief
          <span class="slide-tag">Slide 27</span>
        </h4>
        <p style="margin: 0 0 8px 0">
          <strong>Styrene monomer</strong> undergoes an
          <strong>adiabatic polymerization</strong> after being inadvertently
          heated to 70 &deg;C in a 3,500-gal reactor with MAWP = 5 bar.
        </p>
        <ul style="margin-bottom: 0; columns: 2; column-gap: 24px">
          <li><em>V</em> = 3,500 gal = 13.16 m<sup>3</sup></li>
          <li><em>m<sub>o</sub></em> = 9,500 kg (reaction mass)</li>
          <li><em>T<sub>s</sub></em> = 482.5 K (<strong>set</strong> temperature)</li>
          <li><em>T<sub>m</sub></em> = 492.7 K (<strong>maximum</strong> temperature)</li>
          <li>&Delta;<em>T</em> = 10.2 K</li>
          <li><em>P<sub>s</sub></em> = 4.5 bar (<strong>set</strong> pressure)</li>
          <li><em>P<sub>o</sub></em> = 5.4 bar (<strong>maximum</strong> pressure)</li>
          <li>(<em>dT</em>/<em>dt</em>)<sub><em>s</em></sub> = 0.493 K/s</li>
          <li>(<em>dT</em>/<em>dt</em>)<sub><em>m</em></sub> = 0.662 K/s</li>
        </ul>
      </div>

      <h3 class="sub-title">
        6.1 Styrene Polymer Release (2-Phase)
        <span class="slide-tag">Slides 28, 29</span>
      </h3>
      <ul>
        <li>From the following property data, use the data at the set point.</li>
      </ul>
      <table style="max-width: 560px">
        <thead>
          <tr>
            <th>Property</th>
            <th>4.5-bar set</th>
            <th>5.4-bar peak</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><em>v</em><sub>f</sub> (m<sup>3</sup>/kg)</td>
            <td>0.001388</td>
            <td>0.001414</td>
          </tr>
          <tr>
            <td><em>v</em><sub>g</sub> (m<sup>3</sup>/kg)</td>
            <td>0.08553</td>
            <td>0.07278</td>
          </tr>
          <tr>
            <td><em>C</em><sub>P</sub> (kJ/kg K)</td>
            <td>2.470</td>
            <td>2.514</td>
          </tr>
          <tr>
            <td>&Delta;<em>H</em><sub>V</sub> (kJ/kg)</td>
            <td>310.6</td>
            <td>302.3</td>
          </tr>
        </tbody>
      </table>
      <div class="eq-box">
        <div class="eq-row">
          <span class="katex-eq">\dot{q} = 0.5 C_V \left[\left(\frac{dT}{dt}\right)_s + \left(\frac{dT}{dt}\right)_m\right]</span>
        </div>
      </div>
      <ul>
        <li>
          <strong>Estimate <em>C<sub>V</sub></em> conservatively using the <em>C<sub>P</sub></em> (larger) value.</strong>
        </li>
        <li>
          Use the expressions for <strong>mass flux</strong>, Eq. 9-15, and
          <strong>vent area</strong>, Eq. 9-19, which are each in terms of the
          given property data.
        </li>
        <li>For this example, use <strong>&psi; = 1</strong> (L/D = 0)</li>
      </ul>
      <div class="eq-box">
        <div class="eq-row">
          <span class="katex-eq">G_T = \frac{Q_m}{A} = 0.9\,\psi\frac{\Delta H_v}{v_{fg}}\sqrt{\frac{g_c}{T_s C_P}}</span>
        </div>
        <div class="eq-row">
          <span class="katex-eq">A = \frac{m_0 \dot{q}}{G_T\left(\sqrt{\frac{V}{m_0}\frac{\Delta H_v}{v_{fg}}} + \sqrt{C_v \Delta T}\right)^2} = \mathbf{0.084\text{ m}^2}</span>
        </div>
      </div>
      <ul>
        <li>
          <strong>2-phase relief diameter:</strong>
          <em>d</em> = &radic;(4<em>A</em>/&pi;) = <strong>0.33 m = 13.0&Prime;</strong>
        </li>
      </ul>

      <h3 class="sub-title">
        6.2 Styrene Polymer Release (All Vapor)
        <span class="slide-tag">Slides 30, 31</span>
      </h3>
      <ul>
        <li>In contrast, assume an <strong>all vapor</strong> release.</li>
        <li>
          Additional data: M = 104, &gamma; = 1.32; <em>C</em><sub>0</sub> = 1
        </li>
        <li>
          The generated <strong>thermal</strong> energy
          <strong>vaporizes</strong> the <strong>liquid prior</strong> to
          <strong>the release</strong>.
        </li>
        <li>At the <em>T<sub>s</sub></em>, the <strong>energy input rate</strong> is</li>
      </ul>
      <div class="eq-box">
        <div class="eq-row">
          <div class="eq-expr">
            <span class="katex-eq">q = C_V\left(\frac{dT}{dt}\right)_s</span>
            <span class="eq-note">cal/g.s, using the set point data.</span>
          </div>
        </div>
      </div>
      <ul>
        <li><strong>Vapor mass flow</strong> rate through the relief is</li>
      </ul>
      <div class="eq-box">
        <div class="eq-row">
          <span class="katex-eq">Q_m = \frac{q m_0}{\Delta H_V}</span>
        </div>
      </div>
      <ul>
        <li>Use expression for <strong>vapor relief</strong> area, Eq. 9-9</li>
      </ul>
      <div class="eq-box">
        <div class="eq-row">
          <div class="eq-expr">
            <span class="katex-eq">A = \frac{Q_m}{C_o \chi K_b P}\sqrt{\frac{T z}{M}}</span>
            <span class="eq-note">Assume ideal gas with <em>z</em> = 1; &nbsp;<em>P</em> = max pressure = 5.4 bar</span>
          </div>
        </div>
      </div>
      <ul>
        <li>Note that because L/D = 0, <em>K<sub>b</sub></em> = 1.</li>
        <li>
          <em>A</em> = <strong>0.020 m<sup>2</sup></strong> for
          <strong><em>P</em> = 5.4 bar</strong>, (0.084 m<sup>2</sup> for
          <strong>2-&phi;</strong>)
        </li>
        <li>
          Relief diameter = 0.16 m or <strong>6.3&Prime;</strong> (vs. 13&Prime;
          for <strong>2-&phi;</strong>)
        </li>
        <li>
          If an <strong>all vapor</strong> release was assumed and a 2-&phi;
          release occurred, this reactor would
          <strong>not be protected</strong> due to a very
          <strong>undersized relief device</strong>.
        </li>
      </ul>

      <h3 class="sub-title">
        6.3 Fauske Nomograph Sizing Method
        <span class="slide-tag">Slides 32, 33, 34, 35</span>
      </h3>
      <ul>
        <li>
          A <strong>graphical method</strong> for quick estimates of
          <strong>two-phase release areas</strong> uses limited information:
          <ol type="a">
            <li>Heating rate at the set temperature, (<em>dT</em>/<em>dt</em>)<sub><em>s</em></sub></li>
            <li>Set pressure (<em>P<sub>s</sub></em>)</li>
            <li>Mass of reactants (<em>m<sub>o</sub></em>)</li>
          </ol>
        </li>
        <li>
          Obtain a vent size area using Fig 9-9, pg. 403, which assumes a
          <strong>discharge piping</strong> of <strong>L/D = 400</strong> (a
          <strong>discharge correction factor</strong> = 0.5), and
          <strong>20 % OP</strong>.
        </li>
        <li>
          <strong>Adjust</strong> area estimates for other L/D ratios and OP
          values.
        </li>
      </ul>

      <div class="fig-box">
        <strong>Slide 33: Nomograph, 2-&phi; Sizing — Based on Crowl and Louvar, Fig 9-9, p. 403</strong><br />
        <img src="{{SLIDES}}/slide_33.png" alt="Slide 33 - Nomograph 2-phase Sizing" style="width:82%; margin:6px auto 0 auto;" />
      </div>

      <div class="example-box">
        <h4>
          Nomograph 2-&phi; Sizing Method — Styrene System &amp; Estimate
          <span class="slide-tag">Slides 34, 35</span>
        </h4>
        <p style="margin: 0 0 6px 0">
          A graphical method by Fauske<sup>^</sup> for quick estimates of
          two-phase release vent areas uses only the following information:
        </p>
        <table style="max-width: 560px; background: #fff">
          <thead>
            <tr>
              <th>Input</th>
              <th>Styrene System</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1. Set point heat rate, (<em>dT</em>/<em>dt</em>)<sub><em>s</em></sub></td>
              <td>29.6 &deg;C/min</td>
            </tr>
            <tr>
              <td>2. Set pressure, <em>P<sub>s</sub></em></td>
              <td>4.5 bar = 65 psia</td>
            </tr>
            <tr>
              <td>3. Mass of reactants</td>
              <td>3,500 gal = 9,500 kg</td>
            </tr>
          </tbody>
        </table>
        <ul>
          <li>
            Nomograph, Fig 9-9, p. 403, assumes a
            <strong>discharge piping</strong> of <strong>L/D = 400</strong>
            (<strong>&psi; = 0.5</strong>), and <strong>20 % OP</strong>.
          </li>
          <li>
            <strong>Adjust</strong> vent area estimates for other L/D ratios and
            OP values.
          </li>
          <li>
            From the nomograph, the styrene <strong>vent area/1,000 kg</strong>
            = <strong>0.013 m<sup>2</sup></strong>.
          </li>
          <li>
            <strong>Total relief area</strong> at <strong>&psi; = 0.5</strong>
            and <strong>OP = 20%</strong> for 9,500 kg = 0.124 m<sup>2</sup>
          </li>
          <li>
            For the styrene system at <strong>&psi; = 1</strong> and
            <strong>OP = 20%</strong>, the vent area and diameter are
          </li>
        </ul>
        <div class="eq-box" style="background: #fff">
          <div class="eq-row">
            <span class="katex-eq">A = 0.124\left(\frac{0.5}{1}\right) = \mathbf{0.062\text{ m}^2};\quad d = \mathbf{11.1''}</span>
          </div>
        </div>
        <ul>
          <li>
            The nomograph method <strong>undersized the vent area</strong> by
            about <strong>26%</strong> compared to the more detailed calculation
            method (0.084 m<sup>2</sup> for 2-&phi;).
          </li>
          <li>
            Primary benefit is for estimates and to check for
            <strong>consistency</strong> with a more detailed method.
          </li>
        </ul>
        <p style="font-size: 11.5px; color: var(--muted); margin: 4px 0 0 0">
          <sup>^</sup>Fauske, H.K., <em>Plant/Operations Progress</em>, Vent Sizing, 3(3) and Sizing Nomogram, 3(4), 1984
        </p>
      </div>

      <h3 class="sub-title">
        6.4 Styrene Example - Conclusions
        <span class="slide-tag">Slide 36</span>
      </h3>
      <ul>
        <li>
          To design and size a relief system properly, know the
          <strong>system</strong> and <strong>energy sources</strong> through
          tests, e.g., calorimetric.
        </li>
        <li>
          A <strong>2-&phi; release</strong> requires a
          <strong>significantly larger vent area</strong> than a
          <strong>1-&phi; release</strong>.
        </li>
        <li>
          Detailed relief calculations for <strong>2-&phi; sizing</strong> can
          be checked for <strong>consistency</strong> using the
          <strong>Fauske nomograph</strong> method, which requires only
          <strong>3 input</strong> values.
        </li>
      </ul>
      </section>

      <!-- SECTION 7 -->
      <section class="topic-section" id="topic-7" data-topic="7" data-short="Dust &amp; Vapor Explosions (4)">
      <h2 class="section-title">
        7. Relief Venting for Dust and Vapor Explosions (4)
      </h2>

      <h3 class="sub-title">
        4 &ndash; Relief Venting for Dust and Vapor Explosions
        <span class="slide-tag">Slide 37</span>
      </h3>
      <p>
        <strong>Deflagration venting</strong> reduces the impact of dust and
        vapor cloud explosions by controlling the
        <strong>release of explosion energy</strong>, usually through the use of
        <strong>blowout panels</strong>.
      </p>
      <div class="fig-box">
        <strong>Slide 37: Fig. 9-10, Pg. 405</strong><br />
        <img src="{{SLIDES}}/slide_37.png" alt="Slide 37 - Relief Venting for Dust and Vapor Explosions Fig 9-10" style="width:88%; margin:6px auto 0 auto;" />
      </div>

      <h3 class="sub-title">
        7.2 Vents for Low-Pressure Structures (withstand pressures &lt; 1.5 psia)
        <span class="slide-tag">Slide 38</span>
      </h3>
      <div class="grid-2">
        <div class="card">
          <h4>Runes equation</h4>
          <div class="eq-box" style="background: #fff; margin-bottom: 0">
            <div class="eq-row">
              <span class="katex-eq">A = \frac{C_{\text{vent}}^* L_1 L_2}{\sqrt{P}}</span>
            </div>
          </div>
        </div>
        <div class="card">
          <h4>Swift and Epstein equation</h4>
          <div class="eq-box" style="background: #fff; margin-bottom: 0">
            <div class="eq-row">
              <span class="katex-eq">A = \frac{C_{\text{vent}} A_s}{\sqrt{P}}</span>
            </div>
          </div>
        </div>
      </div>
      <ul>
        <li><em>A</em> is the <strong>required vent area</strong>,</li>
        <li>
          <em>C<sub>vent</sub><sup>*</sup></em> is a constant that depends on
          the <strong>nature of the combustible material</strong>, (see Table
          9-1),
        </li>
        <li>
          <em>L</em><sub>1</sub> is the <strong>smallest dimension</strong> of
          the rectangular building structure to be vented,
        </li>
        <li>
          <em>L</em><sub>2</sub> is the <strong>2<sup>nd</sup> smallest</strong>
          dimension of the enclosure to be vented, and
        </li>
        <li>
          <em>P</em> is the <strong>maximum internal pressure</strong> that can
          be <strong>withstood</strong> by the
          <strong>weakest member of the enclosure</strong>.
        </li>
        <li>
          <em>A<sub>s</sub></em> is inside <strong>surface area</strong> of the
          <strong>enclosure</strong>
        </li>
      </ul>
      <p style="font-size: 13.5px; color: var(--muted)">
        Vents for high-pressure structures use deflagration indices for gases
        and dusts, See pages 408 - 410
      </p>
      </section>

      <!-- SECTION 8 -->
      <section class="topic-section" id="topic-8" data-topic="8" data-short="Fired Reactors (5) &amp; Thermal Expansion (6)">
      <h2 class="section-title">
        8. Reliefs for Fired Reactors (5) &amp; Thermal Expansion (6)
      </h2>

      <h3 class="sub-title">
        5 - Reliefs for Fired Reactors
        <span class="slide-tag">Slides 39, 40</span>
      </h3>
      <ul>
        <li>
          Reactors exposed to <strong>external fires</strong>: heating and
          boiling of process liquids and <strong>excessive pressures</strong>
        </li>
        <li>
          Usually fire exposure at only a <strong>small part of reactor</strong>
          surface: <strong>smaller amount</strong> of
          <strong>two-phase foam</strong> produced <strong>than</strong> from a
          <strong>runaway</strong> reaction
        </li>
        <li>
          Help <strong>prevent two-phase flow</strong> during
          <strong>external fire relief</strong>: allow a
          <strong>large vapor space</strong> above the liquid.
        </li>
        <li>
          If reactor is <strong>not protected</strong>, fire can lead to reactor
          failure and result in a <strong>BLEVE</strong> (p. 282) and if
          <strong>liquid is flammable</strong>, a <strong>VCE</strong> (p. 281).
        </li>
        <li>Security results most from inherently safer designs.</li>
      </ul>

      <div class="fig-box">
        <strong>Slide 40: External Fire Heating of Vessel, Fig 9-11 (pg. 411)</strong><br />
        <img src="{{SLIDES}}/slide_40.png" alt="Slide 40 - External Fire Heating of Vessel Fig 9-11" style="width:85%; margin:6px auto 0 auto;" />
      </div>

      <h3 class="sub-title">
        6 &ndash; Reliefs for Thermal Expansion of Process Fluids
        <span class="slide-tag">Slide 41</span>
      </h3>
      <ul>
        <li>
          <strong>Heating</strong> will damage <strong>vessels</strong> or
          <strong>piping</strong> that is <strong>completely full</strong>,
          <em>e.g.</em>, heating of <strong>blocked in cooling coils</strong>
        </li>
        <li>Reliefs are installed to prevent damage</li>
        <li>
          <strong>Volumetric flow rate</strong> is determined as basis for vent
          sizing and depends on:
          <ul>
            <li>thermal expansion coefficient of liquid, (&alpha;)</li>
            <li>temperature differential, (&Delta;<em>T</em>)</li>
            <li>heat transfer coefficient, (<em>U</em>/<em>h</em>) and</li>
            <li>heat capacity. (<em>C<sub>p</sub></em>)</li>
          </ul>
        </li>
      </ul>
      <p style="font-size: 13.5px; color: var(--muted)">
        See eq. 9-45, page 417.
      </p>
      </section>
  `,
});
