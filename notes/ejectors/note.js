window.NOTES_REGISTRY = window.NOTES_REGISTRY || [];
window.NOTES_REGISTRY.push({
  id: "ejectors",
  title: "Ejectors and Vacuum Systems",
  shortTitle: "Ejectors & Vacuum Systems (Ch. 6)",
  subtitle: "Dr. Md Tanvir Sowgath &nbsp;|&nbsp; Chap-6, Ludwig &nbsp;|&nbsp; All 34 Slides",
  meta: "7 Topics · 34 Slides",
  slideCount: "34 Slides",
  defaultSlidesPath: "slides",
  html: String.raw`
      <!-- SECTION 1 -->
      <section class="topic-section" id="topic-1" data-topic="1" data-short="Vacuum Pump &amp; Types of Equipment">
      <h2 class="section-title">
        1. Vacuum Pump &amp; Types of Vacuum Equipment
      </h2>

      <div class="fig-box">
        <strong>Slide 2: Ejectors and Vacuum Systems (Chap-6, Ludwig) — Suction, Nozzle, Steam Inlet, Mixing area, Diffuser</strong><br />
        <img src="{{SLIDES}}/slide_02.png" alt="Slide 2 - Ejectors and Vacuum Systems" style="width:82%; margin:6px auto 0 auto;" />
      </div>

      <h3 class="sub-title">
        1.1 Vacuum Pump
        <span class="slide-tag">Slide 3</span>
      </h3>
      <ul>
        <li>
          A compressor that takes a gas at a pressure below atmospheric and
          discharges against atmospheric pressure is called a
          <strong>vacuum pump</strong>.
        </li>
        <li>
          <strong>Oil sealed pump</strong> can produce <strong>0.1 mm Hg</strong>.
        </li>
      </ul>
      <div class="fig-box">
        <strong>Slide 3: Figure 21.36. Liquid ring vacuum pump and compressor (a) Principle of operation, (b) Disassembled view of rotor and casing. (Courtesy of Nash Engineering Co., Foust)</strong><br />
        <img src="{{SLIDES}}/slide_03.png" alt="Slide 3 - Figure 21.36 Liquid ring vacuum pump" style="width:86%; margin:6px auto 0 auto;" />
      </div>

      <h3 class="sub-title">
        1.2 Types of Vacuum Equipment
        <span class="slide-tag">Slide 4</span>
      </h3>
      <table>
        <thead>
          <tr>
            <th colspan="2">Types of Vacuum Equipment</th>
            <th>Lowest Vacuum mm Hg (abs)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="3" style="background: #f1f5f9"><strong>Mechanical Vacuum Pumps</strong></td>
          </tr>
          <tr>
            <td colspan="2">Centrifugal</td>
            <td>250</td>
          </tr>
          <tr>
            <td colspan="2">Reciprocating</td>
            <td>10</td>
          </tr>
          <tr>
            <td rowspan="2">Rotary</td>
            <td>Water Sealed</td>
            <td>100</td>
          </tr>
          <tr>
            <td>Oil Sealed</td>
            <td>0.1</td>
          </tr>
          <tr>
            <td colspan="2">Diffusion Pump</td>
            <td>0.001 (1 micron)</td>
          </tr>
          <tr>
            <td colspan="3" style="background: #f1f5f9"><strong>Ejector</strong></td>
          </tr>
          <tr>
            <td colspan="2">Liquid Jet</td>
            <td>Modest vacuum</td>
          </tr>
          <tr>
            <td colspan="2">Steam Jet Ejector</td>
            <td>0.05 mm Hg</td>
          </tr>
        </tbody>
      </table>
      </section>

      <!-- SECTION 2 -->
      <section class="topic-section" id="topic-2" data-topic="2" data-short="Ejector Components, Operation &amp; Features">
      <h2 class="section-title">
        2. Ejector Components, Operation, Performance &amp; Features
      </h2>

      <h3 class="sub-title">
        2.1 Ejector Overview &amp; Operation
        <span class="slide-tag">Slides 1, 5, 6, 7, 8, 26</span>
      </h3>
      <ul>
        <li>Operated by steam and liquid.</li>
        <li><strong>Liquid ejector</strong> produce modest vacuum and mix liquids.</li>
        <li><strong>Steam ejector</strong> produce vacuum and maintain vacuum.</li>
        <li>
          <strong>Ejector are widely used for continuous producing vacuum in industrial production</strong>.
        </li>
      </ul>
      <p>
        As shown in figure steam is admitted to a <strong>converging-diverging nozzle</strong>,
        from which jet issues at <strong>supersonic velocity</strong> into a
        <strong>diffuser cone</strong>. The air and other gas to be moved is
        mixed with the steam in the first part of diffuser, lowering the
        velocity. In <strong>diverging section</strong> the
        <strong>kinetic energy is converted into pressure energy</strong>, so
        that mixture is discharged at atmospheric pressure.
      </p>

      <div class="fig-box">
        <strong>Slide 1: Figure 6-1. Basic ejector components and diagram of energy conversion in nozzle and diffuser. (Ingersoll-Rand Co.)</strong><br />
        <img src="{{SLIDES}}/slide_01.png" alt="Slide 1 - Figure 6-1 Basic ejector components" style="width:92%; margin:6px auto 0 auto;" />
      </div>

      <div class="grid-2">
        <div class="fig-box" style="margin: 0">
          <strong>Slides 5, 26: Steam Ejector Operation</strong><br />
          <img src="{{SLIDES}}/slide_05.png" alt="Slide 5 - Steam Ejector Operation" style="width:100%; margin-top:6px;" />
        </div>
        <div class="fig-box" style="margin: 0">
          <strong>Slide 6: Fig. 3. Ejector components and pressure profile</strong><br />
          <img src="{{SLIDES}}/slide_06.png" alt="Slide 6 - Fig 3 Ejector components and pressure profile" style="width:100%; margin-top:6px;" />
        </div>
      </div>

      <div class="grid-2">
        <div class="fig-box" style="margin: 0">
          <strong>Slide 7: Figure 6-1. Basic ejector components and diagram of energy conversion (Elliot Co. / Graham Mfg. Co.)</strong><br />
          <img src="{{SLIDES}}/slide_07.png" alt="Slide 7 - Figure 6-1 Energy conversion" style="width:100%; margin-top:6px;" />
        </div>
        <div class="fig-box" style="margin: 0">
          <strong>Slide 9: Suction Pressure vs. Capacity (1 to 7 Stages)</strong><br />
          <img src="{{SLIDES}}/slide_09.png" alt="Slide 9 - Suction Pressure vs Capacity" style="width:100%; margin-top:6px;" />
        </div>
      </div>

      <h3 class="sub-title">
        2.2 Ejector
        <span class="slide-tag">Slides 10, 11</span>
      </h3>
      <div class="grid-2">
        <div class="card">
          <ul style="margin-bottom: 0">
            <li>Handle wet, dry or corrosive vapor mixture</li>
            <li>Produce vacuum suitable for industrial operation</li>
            <li>Available in all sizes to meet small or large capacity requirement</li>
            <li>Efficiencies reasonable to good; Noiseless in operation</li>
          </ul>
        </div>
        <div class="card">
          <ul style="margin-bottom: 0">
            <li>Stable operation within design range</li>
            <li>Capital cost low as against Vacuum Pump</li>
            <li>Small space required for installation</li>
            <li>Simple operation</li>
            <li>Operation Cost Competitive</li>
          </ul>
        </div>
      </div>

      <div class="fig-box">
        <strong>Slide 11: Figure 6-2. Steam, air, gas, and liquid ejectors. (Courtesy Schutte &amp; Koerting Co.)</strong><br />
        <img src="{{SLIDES}}/slide_11.png" alt="Slide 11 - Figure 6-2 Steam air gas and liquid ejectors" style="width:86%; margin:6px auto 0 auto;" />
      </div>
      </section>

      <!-- SECTION 3 -->
      <section class="topic-section" id="topic-3" data-topic="3" data-short="Steam Ejector Application &amp; Materials">
      <h2 class="section-title">
        3. Steam Ejector Application &amp; Materials of Construction
      </h2>

      <div class="grid-2">
        <div class="card">
          <h4>
            3.1 Steam Ejector Application
            <span class="slide-tag">Slide 12</span>
          </h4>
          <ul style="margin-bottom: 0; columns: 2; column-gap: 16px">
            <li>Vacuum distillation</li>
            <li>Vacuum deaeration</li>
            <li>Evaporation</li>
            <li>Crystallizer</li>
            <li>Oil deodorizer</li>
            <li>Steam Vac. Refrigeration</li>
            <li>Vacuum pan dryers</li>
            <li>Dehydrators</li>
            <li>Vacuum impregnators</li>
            <li>Freeze dryer</li>
            <li>Vacuum filter</li>
          </ul>
        </div>

        <div class="card">
          <h4>
            3.2 Materials of Construction
            <span class="slide-tag">Slide 12</span>
          </h4>
          <ul style="margin-bottom: 0">
            <li>Variety of materials used including those which can handle corrosive vapors</li>
            <li><strong>Cast iron, cast steel, bronze</strong> for body and diffuser</li>
            <li><strong>SS and monel</strong> for the nozzle</li>
            <li>
              Other materials include porcelain, carbon, graphite, impregnated
              graphite, resins, glass and special alloys
            </li>
            <li>After Condenser and intercondenser are made of similar materials</li>
          </ul>
        </div>
      </div>
      </section>

      <!-- SECTION 4 -->
      <section class="topic-section" id="topic-4" data-topic="4" data-short="Capacity, Arrangement, Condensers &amp; Booster">
      <h2 class="section-title">
        4. Capacity, Arrangement of Ejector, Condensers &amp; Booster Ejector
      </h2>

      <div class="grid-2">
        <div class="card">
          <h4>
            4.1 Capacity of Ejector
            <span class="slide-tag">Slide 13</span>
          </h4>
          <ul style="margin-bottom: 0">
            <li>Air Leakage</li>
            <li>Noncondensable from the process</li>
            <li>Noncondensables from direct condenser</li>
            <li>Condensate vapour saturating the non condensables</li>
            <li>Condensables vapour from the process</li>
          </ul>
        </div>

        <div class="card">
          <h4>
            4.2 Arrangement of Ejector
            <span class="slide-tag">Slide 13</span>
          </h4>
          <ul style="margin-bottom: 0">
            <li>Single stage or multi stage</li>
            <li>Extra stages may have inter-stage condenser to condense steam</li>
            <li>Extra stage produce more vacuum than single stage</li>
            <li>The condensers are: <strong>Barometric</strong> or <strong>Surface</strong> types</li>
            <li>Variety of Combinations are possible</li>
          </ul>
        </div>
      </div>

      <h3 class="sub-title">
        4.3 Arrangement of Condenser
        <span class="slide-tag">Slides 14, 15, 16, 17, 18</span>
      </h3>
      <ul>
        <li>
          <strong>Precondenser</strong> used to condense vapour prior to the
          entry to the ejector.
        </li>
        <li>
          <strong>Intercondenser</strong> condense steam from the preceding stage.
        </li>
        <li>
          <strong>Aftercondenser</strong> operate at atmospheric pressure. They
          act as silencer or remove odours.
        </li>
        <li>
          <strong>Surface condenser:</strong> To provide for sufficient total
          capacity, the temperature at the air outlet of a well designed surface
          condenser is generally assumed to be about <strong>7.5&deg;F below</strong>
          the temperature of saturated steam at the absolute pressure in the
          condenser.
        </li>
        <li>
          <strong>Barometric condenser:</strong> Barometric condensers are
          <strong>direct contact coolers and condensers</strong>. They may be
          <strong>counter flow</strong> or <strong>parallel flow</strong>. The
          temperature at the air outlet of this type condenser is generally
          assumed to be <strong>5&deg;F above</strong> the inlet temperature of
          the cooling water.
        </li>
      </ul>

      <div class="fig-box">
        <strong>Slide 15: Arrangement of Condenser — Fig 6-8: Steam ejector arrangement with inter- and after condenser (4 stages with 2 I.C.)</strong><br />
        <img src="{{SLIDES}}/slide_15.png" alt="Slide 15 - Arrangement of Condenser Fig 6-8" style="width:84%; margin:6px auto 0 auto;" />
      </div>

      <div class="grid-2">
        <div class="fig-box" style="margin: 0">
          <strong>Slide 16: Fig 6-5 (Barometric intercondenser) &amp; Fig 6-6 (Surface inter- and aftercondensers)</strong><br />
          <img src="{{SLIDES}}/slide_16.png" alt="Slide 16 - Fig 6-5 and Fig 6-6 Two-stage ejectors" style="width:100%; margin-top:6px;" />
        </div>
        <div class="fig-box" style="margin: 0">
          <strong>Slide 17: Figure 19.41. Barometric condensers (Foust)</strong><br />
          <img src="{{SLIDES}}/slide_17.png" alt="Slide 17 - Figure 19.41 Barometric condensers" style="width:100%; margin-top:6px;" />
        </div>
      </div>

      <div class="fig-box">
        <strong>Slide 18: Three-Stage Ejector with Booster, Booster Condenser, Intercondenser &amp; Tail Pipes (34 ft. Min., 30 ft. Min.)</strong><br />
        <img src="{{SLIDES}}/slide_18.png" alt="Slide 18 - Three-Stage Ejector with Booster Condenser" style="width:88%; margin:6px auto 0 auto;" />
      </div>

      <h3 class="sub-title">
        4.4 Booster Ejector
        <span class="slide-tag">Slide 19</span>
      </h3>
      <p>
        The booster picks up vapors from the process system at high vacuum (low
        absolute pressure, around <strong>0.5 in. Hg abs</strong>) and discharges
        them together with its own motivating steam to a lower vacuum condition
        (compresses the mixture) where the condensable vapors can be removed at
        the temperature of the condenser water. The non-condensable vapors leave
        the condenser, passing to the two-stage ejector system.
      </p>
      <div class="fig-box">
        <strong>Slide 19: Booster Ejector — Drying: Special three stage assembly serving two high vacuum dryers</strong><br />
        <img src="{{SLIDES}}/slide_19.png" alt="Slide 19 - Booster Ejector" style="width:86%; margin:6px auto 0 auto;" />
      </div>
      </section>

      <!-- SECTION 5 -->
      <section class="topic-section" id="topic-5" data-topic="5" data-short="Terminology, Load &amp; Total Capacity">
      <h2 class="section-title">
        5. Terminology, Types of Load &amp; Total Capacity
      </h2>

      <h3 class="sub-title">
        5.1 Terminology
        <span class="slide-tag">Slides 20, 21, 22, 23</span>
      </h3>
      <ul>
        <li>
          <strong>Motive Steam Pressure:</strong> Motive steam pressure is the
          pressure of the motivating steam expressed normally in pounds per
          square inch gauge. Care should be taken to distinguish between the
          nominal header pressure and the actual pressure available at the steam
          ejector steam chest.
        </li>
        <li>
          <strong>Suction Pressure:</strong> Suction pressure is the pressure at
          the inlet flange of the suction chamber expressed in absolute terms,
          normally millimeters of mercury absolute. It is usually thought of as
          the process pressure required. Care should be taken so that any
          pressure drop between the process vessel and the ejector inlet is
          allowed for when specifying the ejector suction pressure. Further, in
          a multistage ejector each individual ejector stage has its own
          respective suction pressure, normally determined by the ejector
          manufacturer.
        </li>
        <li>
          <strong>Pickup Pressure:</strong> Pickup pressure is that pressure of
          either the motive steam or the discharge pressure at which the ejector
          recovers to a stable operation.
        </li>
        <li>
          <strong>Break Pressure:</strong> Break pressure is that pressure of
          either the motive steam or the discharge pressure which causes the
          ejector to become unstable. Referring to motive steam pressure and
          discussing break pressure along with the previously mentioned pickup
          pressure, for a nominal 100 lb/in.<sup>2</sup> gauge motive steam
          pressure, typical pickup pressure would be 95 lb/in.<sup>2</sup> gauge
          with a typical break pressure being 89 lb/in.<sup>2</sup> gauge. These
          are the fine tuned pressures under which the ejector manufacturer
          performance tests the unit, and are not normally used in actual
          operation. It is common practice to maintain the motive steam pressure
          a few pounds higher than the pickup pressure to allow for any steam
          pressure fluctuation.
        </li>
        <li>
          <strong>Suction Temperature:</strong> Suction temperature is the
          temperature of the gas to be compressed at the suction inlet of the
          ejector. Since this temperature has an effect on the ejector capacity,
          care should be taken when specifying this temperature.
        </li>
        <li>
          <strong>Discharge Pressure:</strong> Discharge pressure is the
          pressure at the exhaust flange of the ejector diffuser expressed in
          absolute terms, normally millimeters of mercury absolute. In a
          multistage ejector each individual ejector stage has its own
          respective discharge pressure, normally determined by the ejector
          manufacturer with the exception of the final or atmospheric stage.
          Again, care should be taken when specifying the discharge pressure of
          the steam jet ejector system. Any pressure drop resulting from
          discharge piping, flame arresters, pipe submergence, etc. should be
          considered.
        </li>
        <li>
          <strong>Capacity:</strong> Capacity is the flow rate of the gas to be
          handled by the steam jet ejector. Normally expressed in pounds per
          hour, it is extremely important to distinguish between
          <strong>condensable</strong> and <strong>noncondensable vapor</strong>.
          In a multistage steam jet ejector utilizing intercondensers, only
          noncondensable gases with their associated water vapor are handled by
          downstream stages, the condensable vapors being removed in the
          condensers. This has a significant impact on the motive steam
          consumption of a multistage condensing ejector, so care should be
          taken when specifying the load to be handled by the ejector.
        </li>
      </ul>

      <div class="grid-2">
        <div class="card">
          <h4>
            5.2 Types of Load &amp; Steam Effects
            <span class="slide-tag">Slide 24</span>
          </h4>
          <ul style="margin-bottom: 0">
            <li><strong>Types of Load:</strong> Air and Water mixture</li>
            <li>
              <strong>Air Leakage in the system:</strong> Vacuum systems are not
              100% airtight.<br />
              Ideal system: Non condensable + Condensable<br />
              True system: Ideal system + Air leakage
            </li>
            <li>
              <strong>Evacuation of Ejector:</strong> The evacuation of ejector
              is used to evacuate the system at startup.
            </li>
            <li>
              <strong>Effect of wet steam:</strong> Causes erosion and reduces
              performance due to formation of water droplet
            </li>
            <li>
              <strong>Effect of superheated steam:</strong> Increase the
              available energy
            </li>
            <li>
              <strong>Increase of steam pressure:</strong> Do not increase the
              capacity for fixed capacity ejector
            </li>
          </ul>
        </div>

        <div class="card">
          <h4>
            5.3 Total Capacity
            <span class="slide-tag">Slide 25</span>
          </h4>
          <ul style="margin-bottom: 0">
            <li>Air leakage</li>
            <li>Noncondensable from the process</li>
            <li>Noncondensable from condenser</li>
            <li>Condensable vapor from condenser</li>
            <li>Condensable vapor from the process</li>
          </ul>
        </div>
      </div>
      </section>

      <!-- SECTION 6 -->
      <section class="topic-section" id="topic-6" data-topic="6" data-short="Example 6-2 &amp; Example 6-4">
      <h2 class="section-title">
        6. Example 6-2 &amp; Example 6-4 (Air Equivalent &amp; Actual Capacity)
      </h2>

      <div class="example-box">
        <h4>
          Example 6-2: 70&deg; F. Air Equivalent for Air-Water Vapor Mixture
          <span class="slide-tag">Slides 27, 28, 29, 30</span>
        </h4>
        <p style="margin: 0 0 8px 0">
          What is the 70&deg; F. air equivalent for 500 pounds per hour of a
          mixture containing 150 pounds per hour of air and 350 pounds per hour
          of water vapor if it is at 350&deg; F.
        </p>
        <p style="margin: 0 0 6px 0">
          From Figure 6-17, the entrainment ratio for air is <strong>0.93</strong>
          lbs. air at 70&deg; F. / lbs. air at 350&deg; F.
        </p>
        <div class="eq-box" style="background: #fff">
          <div class="eq-row">
            <span class="katex-eq">\text{For air: } 70^\circ\text{F air equivalent} = \frac{150}{0.93} = 161.3\text{ lbs./hr.}</span>
          </div>
          <div class="eq-row">
            <span class="katex-eq">\text{For steam (Fig. 6-17, ratio = 0.908): } 70^\circ\text{F steam equivalent} = \frac{350}{0.908} = 385\text{ lbs./hr.}</span>
          </div>
          <div class="eq-row">
            <span class="katex-eq">\text{From Fig. 6-18 (MW = 18, ratio = 0.81): } 70^\circ\text{F air equivalent of steam} = \frac{385}{0.81} = 476\text{ lbs./hr.}</span>
          </div>
          <div class="eq-row">
            <span class="katex-eq">\text{Mixture } 70^\circ\text{F air equivalent} = 161.3 + 476 = \mathbf{637.3\text{ lbs./hr.}}</span>
          </div>
        </div>
      </div>

      <div class="grid-2">
        <div class="fig-box" style="margin: 0">
          <strong>Slide 28: Figure 6-17. Entrainment Ratio vs. Gas Temperature (&deg;F)</strong><br />
          <img src="{{SLIDES}}/slide_28.png" alt="Slide 28 - Figure 6-17 Temperature Entrainment Ratio" style="width:100%; margin-top:6px;" />
        </div>
        <div class="fig-box" style="margin: 0">
          <strong>Slides 29, 30: Figure 6-18. Molecular weight entrainment ratio curve</strong><br />
          <img src="{{SLIDES}}/slide_30.png" alt="Slide 30 - Figure 6-18 Molecular weight entrainment ratio curve" style="width:100%; margin-top:6px;" />
        </div>
      </div>

      <div class="fig-box">
        <strong>Slide 31: Figure 6-19. Vacuum system for distillation</strong><br />
        <img src="{{SLIDES}}/slide_31.png" alt="Slide 31 - Figure 6-19 Vacuum system for distillation" style="width:82%; margin:6px auto 0 auto;" />
      </div>

      <div class="example-box">
        <h4>
          Example 6-4: Actual Capacity For Process Vapor Plus Non-Condensable
          <span class="slide-tag">Slides 31, 32, 33</span>
        </h4>
        <p style="margin: 0 0 8px 0">
          A distillation system is to operate with a horizontal overhead
          condenser, Figure 6-19, and pressures are as marked. The estimated air
          leakage into the system is <strong>7 lbs./hr</strong>. The molecular
          weight of the product vapor going out the condenser into the ejector
          (at <strong>80&deg; F.</strong>) is <strong>53</strong>. The vapor
          pressure of the condensing vapors is <strong>3 mm Hg. abs.</strong> at
          80&deg; F.
        </p>
        <p style="margin: 0 0 6px 0">
          Partial pressure air = 5 &minus; 3 = <strong>2 mm Hg.</strong><br />
          Vapor required to saturate at 80&deg; F. and 5 mm abs. total pressure:
        </p>
        <div class="eq-box" style="background: #fff">
          <div class="eq-row">
            <span class="katex-eq">W_v = \frac{W_n M_v P_v}{M_n P_n} = \frac{7(53)(3)}{(29)(2)} = 19.2\text{ Lbs./hr.}</span>
            <span class="eq-ref">(6-1)</span>
          </div>
        </div>
        <p style="margin: 8px 0 6px 0"><strong>Average molecular weight of mixture:</strong></p>
        <table style="max-width: 520px; background: #fff">
          <thead>
            <tr>
              <th>Component</th>
              <th>Mass Flow (lbs./hr.)</th>
              <th>Molar Flow (mols/hr.)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Air</td>
              <td>7</td>
              <td>0.241</td>
            </tr>
            <tr>
              <td>Process Vapor</td>
              <td>19.2 (19.2 / 53)</td>
              <td>0.362</td>
            </tr>
            <tr>
              <td><strong>Total</strong></td>
              <td><strong>26.2 lbs./hr.</strong></td>
              <td><strong>0.603 mols/hr.</strong></td>
            </tr>
          </tbody>
        </table>
        <div class="eq-box" style="background: #fff; margin-bottom: 0">
          <div class="eq-row">
            <span class="katex-eq">\text{Mixture Avg. Mol. Wt.} = \frac{26.2}{0.603} = 43.4</span>
          </div>
          <div class="eq-row">
            <span class="katex-eq">\text{Air Equivalent (uncorrected for temp.)} = \frac{\text{lbs/hr of mixture}}{\text{Ratio, from Fig. 6-18}}</span>
          </div>
          <div class="eq-row">
            <span class="katex-eq">\text{Molecular weight correction (From Figure 6-18)} = 1.18</span>
          </div>
          <div class="eq-row">
            <span class="katex-eq">\text{Air Equivalent (at } 80^\circ\text{F)} = \frac{26.2}{1.18} = 22.2\text{ lbs./hr.}</span>
          </div>
          <div class="eq-row">
            <span class="katex-eq">\text{Temperature correction (Figure 6-17, using air curve)} = 0.999</span>
          </div>
          <div class="eq-row">
            <span class="katex-eq">70^\circ\text{F Air equivalent for mixture} = \frac{22.2}{0.999} = \mathbf{22.2\text{ lbs./hr.}}</span>
          </div>
        </div>
      </div>
      </section>

      <!-- SECTION 7 -->
      <section class="topic-section" id="topic-7" data-topic="7" data-short="Steam Ejector Specifications">
      <h2 class="section-title">
        7. Steam Ejector Specifications
      </h2>

      <div class="fig-box">
        <strong>Slide 34: Steam Ejector Specifications (Performance, Design, Materials of Construction, Remarks)</strong><br />
        <img src="{{SLIDES}}/slide_34.png" alt="Slide 34 - Steam Ejector Specifications" style="width:100%; margin-top:6px;" />
      </div>
      </section>
  `,
});
