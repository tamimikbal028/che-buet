export default {
  order: 6,
  id: "06-crystallization",
  title: "Crystallization",
  shortTitle: "Crystallization",
  subtitle: "Md Kamrul Hasan (MKH, 22 Slides) &amp; Crystallizer Deck (53 Slides)",
  meta: "8 Topics · 22 + 53 Slides",
  slideCount: "22 + 53 Slides",
  html: String.raw`
    <!-- SECTION 1 -->
    <section
      class="topic-section"
      id="topic-1"
      data-topic="1"
      data-short="Introduction, Industries &amp; Advantages"
    >
      <h2 class="section-title">1. Introduction, Terminology, Industries &amp; Advantages</h2>

      <h3 class="sub-title">
        1.1 Crystallization &amp; Industries in Bangladesh
        <span class="slide-tag">MKH Slide 1; Cryst Slides 1, 2</span>
      </h3>
      <p>
        <strong>Crystallization:</strong> It refers to a solid liquid separation process in which solid particles are formed within a homogeneous phase.
      </p>
      <p>
        Crystallization is an important industrial process because of the number of materials that are and can be marketed in the form of crystals.
      </p>
      <div class="grid-2">
        <div class="card">
          <h4>Industries in Bangladesh using crystallization <span class="slide-tag">Cryst Slide 2</span></h4>
          <ul style="margin-bottom: 0">
            <li>Sugar industry</li>
            <li>Common salt (cottage) industry</li>
            <li>Fertilizer production: Zinc sulfate, Magnesium sulfate</li>
            <li>Alum production</li>
            <li>Ferrous sulfate (from iron turnings, pilot-plant at BCSIR)</li>
          </ul>
        </div>
        <div class="card">
          <h4>Advantages of Crystallization <span class="slide-tag">Cryst Slide 3</span></h4>
          <ol style="margin-bottom: 0">
            <li>It is capable of producing very <strong>high purity products from impure solutions</strong> with very <strong>low energy input</strong>.</li>
            <li>Often these separations can be performed in <strong>one-step</strong>, yielding a product of not only <strong>high purity</strong> but of <strong>good appearance</strong> with <strong>high bulk density</strong> and <strong>good handling characteristics</strong>.</li>
            <li>Crystalline product can be <strong>dewatered easily</strong> on <strong>filter or centrifuges</strong>, and the drying requirements are minimal due to the low moisture content of the cake leaving the filter or centrifuge.</li>
          </ol>
        </div>
      </div>

      <h3 class="sub-title">
        1.2 Terminology, Purity, CSD &amp; Polymorphism
        <span class="slide-tag">MKH Slide 2; Cryst Slides 4, 5, 8</span>
      </h3>
      <div class="grid-2">
        <div class="card">
          <h4>Terminology &amp; Product Characteristics <span class="slide-tag">MKH Slide 2; Cryst Slide 8</span></h4>
          <ul style="margin-bottom: 0">
            <li><strong>Magma:</strong> Mother liquid plus crystals (Magma = mother liquor + crystals of all sizes).</li>
            <li><strong>Mother liquor:</strong> The remaining liquid is called the <strong>mother liquor</strong>.</li>
            <li><strong>CSD:</strong> Crystal size distribution.</li>
            <li><strong>Characteristics of Crystalline Products:</strong> Particle size, shape, purity and moisture content.</li>
          </ul>
        </div>
        <div class="card">
          <h4>Magma, Purity, CSD &amp; Crystal Classes <span class="slide-tag">Cryst Slides 4, 5</span></h4>
          <ul style="margin-bottom: 0">
            <li>In industrial crystallization from solution, the two-phase mixture of mother liquor and crystals of all sizes, which occupies the crystallizer and is withdrawn as Product, is called a <strong>magma</strong>.</li>
            <li>A sound, well-formed crystal itself is nearly pure, but it retains mother liquor when removed from the final magma, and if the crop contains crystalline aggregates, considerable amounts of mother liquor may pass with the solid mass. When retained mother liquor of low purity is dried on the product, contamination results.</li>
            <li>If the crystals are to be marketed as a final product, acceptance requires individual crystals to be strong, non aggregated, uniform in size, noncaking in the package. For these reasons, <strong>Crystal Size Distribution (CSD)</strong> must be under control.</li>
            <li>A given material may crystallize in two or more different classes. Calcium carbonate, for example, occurs most commonly in nature in <strong>hexagonal form (as calcite)</strong> but also occurs in the <strong>orthorhombic form</strong>.</li>
          </ul>
        </div>
      </div>

      <h3 class="sub-title">
        1.3 Precipitation vs. Crystallization
        <span class="slide-tag">MKH Slides 3, 4</span>
      </h3>
      <div class="grid-2">
        <div class="card">
          <h4>Precipitation <span class="slide-tag">MKH Slide 3</span></h4>
          <div class="flow-wrap" style="margin-bottom: 0">
            <div class="flow-node">Protein</div>
            <div class="flow-arrow">&darr;</div>
            <div class="flow-node"><strong>Very high</strong> supersaturation</div>
            <div class="flow-arrow">&darr;</div>
            <div class="flow-node"><strong>Many</strong> nuclei simultaneously</div>
            <div class="flow-arrow">&darr;</div>
            <div class="flow-node">Tiny particles / amorphous precipitate</div>
          </div>
        </div>
        <div class="card">
          <h4>Crystallization <span class="slide-tag">MKH Slide 4</span></h4>
          <div class="flow-wrap" style="margin-bottom: 0">
            <div class="flow-node">Protein</div>
            <div class="flow-arrow">&darr;</div>
            <div class="flow-node"><strong>Controlled</strong> supersaturation</div>
            <div class="flow-arrow">&darr;</div>
            <div class="flow-node"><strong>A limited number</strong> of nuclei</div>
            <div class="flow-arrow">&darr;</div>
            <div class="flow-node">Crystal growth</div>
            <div class="flow-arrow">&darr;</div>
            <div class="flow-node">Large, well-formed crystals</div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 2 -->
    <section
      class="topic-section"
      id="topic-2"
      data-topic="2"
      data-short="Yield &amp; Solubility Curves"
    >
      <h2 class="section-title">2. Yield, Solubility Curves &amp; Methods of Supersaturation</h2>

      <h3 class="sub-title">
        2.1 Yield Formula &amp; Theoretical Yield
        <span class="slide-tag">MKH Slide 5; Cryst Slide 7</span>
      </h3>
      <ul>
        <li>In crystallization processes, it is often needed to calculate the theoretical yield so that actual yield can be compared with it.</li>
        <li>Crystals are allowed to grow for sufficient period to reach targeted growth.</li>
        <li>Finally, mother liquor sheds its super saturation and attains equilibrium at final temperature.</li>
        <li>Now, solid crystals are separated from mother liquor and further processed.</li>
        <li>Computation of yield of crystal involves a material balance.</li>
        <li>The yield can be predicted from the difference of concentration of feed solution and solubility of mother liquor (saturated).</li>
      </ul>
      <div class="eq-box">
        <div class="eq-row">
          <span class="katex-eq">\text{Yield} = \frac{(x_1 - x_2)}{100} \times W_s</span>
          <span class="eq-note">where W<sub>s</sub> = total amount of solvent (kg)</span>
        </div>
      </div>
      <ul>
        <li><strong>x<sub>1</sub></strong> = concentration of anhydrous crystallizing material in the feed solution (kg per 100 kg solvent)</li>
        <li><strong>x<sub>2</sub></strong> = solubility of the solute in the final mother liquor (kg per 100 kg solvent)</li>
        <li><strong>W<sub>s</sub></strong> = total amount of solvent (kg)</li>
      </ul>
      <div class="grid-2">
        <div class="card">
          <h4>Key points <span class="slide-tag">MKH Slide 5</span></h4>
          <ul style="margin-bottom: 0">
            <li>x<sub>1</sub> and x<sub>2</sub> are expressed per 100 kg of solvent.</li>
            <li>The difference (x<sub>1</sub> &minus; x<sub>2</sub>) represents the amount of solute that crystallizes.</li>
            <li>The formula gives the <strong>theoretical</strong> amount of crystals.</li>
            <li><strong>Takeaway:</strong> The yield formula helps estimate how much crystalline product can be obtained from a solution, based on the initial concentration, final solubility, and the amount of solvent.</li>
          </ul>
        </div>
        <div class="card">
          <h4>Note <span class="slide-tag">MKH Slide 5</span></h4>
          <p style="margin-top: 0"><strong>Actual yield</strong> may be lower than the theoretical yield due to:</p>
          <ul style="margin-bottom: 0">
            <li>solute remaining in the mother liquor</li>
            <li>filtration and handling losses</li>
            <li>incomplete crystallization, etc.</li>
          </ul>
        </div>
      </div>

      <div class="example-box">
        <h4>Yield Calculation Example <span class="slide-tag">MKH Slide 5</span></h4>
        <p style="margin: 0 0 6px 0"><strong>Given:</strong></p>
        <ul style="margin-top: 0">
          <li>Initial concentration, x<sub>1</sub> = 40 kg solute/100 kg water</li>
          <li>Final solubility, x<sub>2</sub> = 10 kg solute/100 kg water</li>
          <li>Total solvent, W<sub>s</sub> = 1,000 kg water</li>
        </ul>
        <p style="margin: 6px 0"><strong>Calculation:</strong></p>
        <div class="eq-box" style="background: #fff">
          <div class="eq-row">
            <span class="katex-eq">\text{Yield} = \frac{40 - 10}{100} \times 1{,}000 = \frac{30}{100} \times 1{,}000 = \mathbf{300\text{ kg crystals}}</span>
          </div>
        </div>
        <p style="margin-bottom: 0"><strong>Result:</strong> So, 300 kg of solute can crystallize from 1,000 kg of solvent under ideal conditions.</p>
      </div>

      <h3 class="sub-title">
        2.2 Solubility Curves &amp; Supersaturation Methods
        <span class="slide-tag">Cryst Slides 9, 10, 11</span>
      </h3>
      <p>
        <strong>Key concepts (Cryst Slide 10):</strong> Solubility, Saturation point, Super saturated, unsaturated.
      </p>
      <p>
        Supersaturation is the first step for Crystallization. Supersaturation is the driving force of nucleation. The next step is nucleation due to birth of new crystal and growth on new particle. Subsequent growth happens until equilibrium is reached.
      </p>
      <div class="card">
        <h4>Three Methods of Creating Supersaturation <span class="slide-tag">Cryst Slide 11</span></h4>
        <ol style="margin-bottom: 0">
          <li><strong>Super saturation by cooling alone</strong> &ndash; Tank crystallizer, Agitated batch crystallizer. These two are used in batch process, though tank crystallizer is obsolete one. Swenson Walker crystallizer falls under this category and it is used in continuous process.</li>
          <li><strong>Super saturation by evaporation:</strong> Krystal evaporator and salting evaporator are two examples under this type of super saturation.</li>
          <li><strong>Super saturation by adiabatic cooling:</strong> Different kinds of vacuum crystallizers are used to make crystals by this method.</li>
        </ol>
      </div>

      <div class="grid-2">
        <div class="fig-box" style="margin: 0">
          <strong>Cryst Slide 9: Fig. 11-7 Typical Solubility Curves (Badger &amp; Banchero) &mdash; Curve-2: NaCl; Curve-4: Na<sub>2</sub>CO<sub>3</sub> (different hydrates: Na<sub>2</sub>CO<sub>3</sub>&middot;10H<sub>2</sub>O, Na<sub>2</sub>CO<sub>3</sub>&middot;7H<sub>2</sub>O, Na<sub>2</sub>CO<sub>3</sub>&middot;H<sub>2</sub>O)</strong><br />
          <img src="{{SLIDES}}/cryst_09.png" alt="Cryst Slide 9 - Fig 11-7 Typical Solubility Curves" style="width:100%; margin-top:6px;" />
        </div>
        <div class="fig-box" style="margin: 0">
          <strong>Cryst Slide 10: Fig 1. Normal and supersolubilities of two salts (KNO<sub>3</sub> &amp; KClO<sub>3</sub>)</strong><br />
          <img src="{{SLIDES}}/cryst_10.png" alt="Cryst Slide 10 - Fig 1 Normal and supersolubilities" style="width:100%; margin-top:6px;" />
        </div>
      </div>

      <div class="fig-box">
        <strong>Cryst Slide 11: Figure 27.2 Solubility curves for (1) KNO<sub>3</sub>, (2) NaCl, and (3) MnSO<sub>4</sub>&middot;H<sub>2</sub>O in aqueous solution &amp; Liquid &rarr; nucleation &rarr; Crystal &rarr; growth</strong><br />
        <img src="{{SLIDES}}/cryst_11.png" alt="Cryst Slide 11 - Figure 27.2 Solubility curves" style="width:86%; margin:6px auto 0 auto;" />
      </div>
    </section>

    <!-- SECTION 3 -->
    <section
      class="topic-section"
      id="topic-3"
      data-topic="3"
      data-short="Steps, Phase Diagrams &amp; Nucleation"
    >
      <h2 class="section-title">3. Crystallization Steps, Phase Diagrams &amp; Nucleation Kinetics</h2>

      <h3 class="sub-title">
        3.1 Nucleation Rate (B), Growth Rate (G) &amp; Crystallization Stages
        <span class="slide-tag">Cryst Slides 6, 12</span>
      </h3>
      <div class="grid-2">
        <div class="card">
          <h4>Nucleation &amp; Growth Rates <span class="slide-tag">Cryst Slide 6</span></h4>
          <ul style="margin-bottom: 0">
            <li><strong>Nucleation:</strong> the nucleation rate <strong>B [#/(m<sup>3</sup>s)]</strong>; the number of new crystals formed per unit time and volume of suspension.</li>
            <li><strong>The growth rate G [m/s]:</strong> the rate at which the size of the crystals increase.</li>
          </ul>
        </div>
        <div class="card">
          <h4>Crystallization steps <span class="slide-tag">Cryst Slide 12</span></h4>
          <ul style="margin-bottom: 0">
            <li>The process has two stages:
              <ul>
                <li>First stage: formation of Nuclei (<strong>Primary Nucleation</strong>)</li>
                <li>Second stage: Growth of Nuclei (<strong>Secondary Nucleation</strong>)</li>
              </ul>
            </li>
            <li><strong>Primary Nucleation:</strong> First steps or growth of new crystals.</li>
            <li><strong>Secondary Nucleation:</strong> Requires seeds or existing crystals. Crystals growth initiated with contact. Contact may be with:
              <ul>
                <li>Another crystal</li>
                <li>Mixing blade</li>
                <li>A pipe</li>
                <li>Vessel wall, etc.</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <h3 class="sub-title">
        3.2 Protein Crystallization Phase Diagram &amp; Solubility Regions
        <span class="slide-tag">MKH Slides 6, 7; Cryst Slides 13, 14, 15</span>
      </h3>
      <div class="fig-box">
        <strong>MKH Slide 6 (also Cryst Slide 13): Protein Crystallization Phase Diagram</strong><br />
        <img src="{{SLIDES}}/mkh_06.png" alt="MKH Slide 6 - Protein Crystallization Phase Diagram" style="width:92%; margin:6px auto 0 auto;" />
      </div>
      <div class="grid-2">
        <div class="card">
          <h4>Phase Diagram Stages (1&ndash;5) <span class="slide-tag">MKH Slide 6</span></h4>
          <ol style="margin-bottom: 0">
            <li><strong>Initial stage (undersaturated):</strong> Point is in the blue region. Protein is fully dissolved. No crystals form.</li>
            <li><strong>Move to metastable region:</strong> Increase precipitant (and/or protein) concentration &rarr; point moves up/right. Solution becomes supersaturated. No spontaneous nucleation (but existing crystals can grow).</li>
            <li><strong>Enter nucleation region:</strong> Further increase in precipitant/protein. Supersaturation is high enough for new nuclei to form.</li>
            <li><strong>Approach precipitation:</strong> Point moves further up/right. Very high supersaturation. Many nuclei form &rarr; risk of fine particles or amorphous solid.</li>
            <li><strong>Precipitation:</strong> Point is in the red region. Excessive supersaturation. Bulk precipitation (not good for crystals).</li>
          </ol>
        </div>
        <div class="card">
          <h4>Metastable Region <span class="slide-tag">MKH Slide 7</span></h4>
          <ul>
            <li><strong>What is interesting here?</strong></li>
            <li>Although the solution is supersaturated, <strong>new crystals may not immediately form</strong>.</li>
            <li>But if crystals are already present, they can <strong>grow</strong>.</li>
            <li>&ldquo;In the metastable region, nucleation is caused by mechanical shock or friction.&rdquo;</li>
          </ul>
          <h4>Different Regions on Solubility Plots <span class="slide-tag">Cryst Slide 14</span></h4>
          <ul style="margin-bottom: 0">
            <li>In <strong>unstable region</strong> nucleation and growth are <strong>spontaneous</strong>.</li>
            <li>In the <strong>metastable region</strong> growth can occur on externally introduced particles.</li>
            <li>Along <strong>a&ndash;d</strong> to the left or along <strong>a&ndash;d&prime;</strong> upwards, nucleation and growth can start at <strong>c</strong> or <strong>c&prime;</strong>, but a substantial nuclei growth rate will not be achieved until <strong>d</strong> or <strong>d&prime;</strong> are reached.</li>
          </ul>
        </div>
      </div>

      <div class="grid-2">
        <div class="fig-box" style="margin: 0">
          <strong>Cryst Slide 14: Fig 2. Different regions on solubility plots (Unstable, Metastable, Unsaturated)</strong><br />
          <img src="{{SLIDES}}/cryst_14.png" alt="Cryst Slide 14 - Fig 2 Different regions on solubility plots" style="width:100%; margin-top:6px;" />
        </div>
        <div class="fig-box" style="margin: 0">
          <strong>Cryst Slide 15: Crystallization steps &mdash; Progression of Crystallization (Steps 1&ndash;7)</strong><br />
          <img src="{{SLIDES}}/cryst_15.png" alt="Cryst Slide 15 - Progression of Crystallization" style="width:100%; margin-top:6px;" />
        </div>
      </div>

      <div class="card">
        <h4>Progression of Crystallization (Steps 1&ndash;7) <span class="slide-tag">Cryst Slide 15</span></h4>
        <ol style="margin-bottom: 0">
          <li>Feed location unsaturated</li>
          <li>Solution cools to saturation</li>
          <li>Enter &ldquo;metastable zone&rdquo; nucleation begins</li>
          <li>Rapid nucleation</li>
          <li>Concentration of mother liquor decreases with the growth of crystals</li>
          <li>Crystal growth during main cooling cycle</li>
          <li>Exit of crystals</li>
        </ol>
      </div>

      <h3 class="sub-title">
        3.3 Crystallization from Solution &mdash; Nucleation Rate Equation
        <span class="slide-tag">MKH Slide 8; Cryst Slide 16</span>
      </h3>
      <ul>
        <li>Nuclei formation from supersaturated solution and gradual growth of the nuclei: when the solution becomes supersaturated, solute molecules come together to form small clusters; if a cluster reaches a <strong>critical size</strong>, it becomes a stable nucleus; the nuclei grow by addition of more molecules.</li>
        <li><strong>Spontaneous and rapid nucleation above d&prime;:</strong> Nucleation is spontaneous &amp; rapid at point above d&prime; (metastable limit in the solubility diagram).</li>
        <li><strong>In the metastable region:</strong> Nucleation is not spontaneous; it is caused by mechanical shock, agitation, friction, or contact with a surface.</li>
        <li><strong>Secondary nucleation:</strong> Can result from the breakup of already formed crystals, producing small fragments that act as new nuclei.</li>
        <li><strong>Nucleation rate</strong> depends on the extent of supersaturation and can be modeled as follows:</li>
      </ul>
      <div class="eq-box">
        <div class="eq-row">
          <span class="katex-eq">\frac{dC_N}{d\theta} = k\left(C - C_0\right)^m</span>
        </div>
      </div>
      <ul>
        <li><strong>C<sub>N</sub></strong> = number of crystals (nuclei) formed</li>
        <li><strong>dC<sub>N</sub>/d&theta;</strong> = nucleation rate (per unit time); measured by counting the number of crystals formed over periods of time</li>
        <li><strong>C</strong> = actual concentration of solute in solution</li>
        <li><strong>C<sub>0</sub></strong> = equilibrium saturation concentration (solubility at given temperature)</li>
        <li><strong>k</strong> = nucleation-rate constant (depends on system and conditions)</li>
        <li><strong>m</strong> = supersaturation exponent (value is from <strong>2 to 9</strong>). Because m is relatively large, even a small increase in supersaturation (C &minus; C<sub>0</sub>) can cause a large increase in the nucleation rate.</li>
      </ul>
      <div class="grid-2">
        <div class="card">
          <h4>Example Analogy &ndash; Making Ice <span class="slide-tag">MKH Slide 8</span></h4>
          <ul style="margin-bottom: 0">
            <li>If you cool water slightly below 0&deg;C, it may stay liquid for a while (<strong>metastable region</strong>).</li>
            <li>If you shake the glass or add a tiny ice crystal, freezing starts (nucleation).</li>
            <li>After that, ice grows (crystal growth).</li>
            <li><strong>Stages:</strong> (1) Undersaturated (no crystals) &rarr; (2) Metastable region (still no nucleation; small disturbance can trigger it) &rarr; (3) Nucleation (new crystals form) &rarr; (4) Crystal growth (existing crystals grow as solute leaves solution).</li>
          </ul>
        </div>
        <div class="card">
          <h4>Key Takeaways <span class="slide-tag">MKH Slide 8</span></h4>
          <ul style="margin-bottom: 0">
            <li>Nucleation creates new crystals; growth makes them larger.</li>
            <li>Supersaturation provides the driving force.</li>
            <li>Nucleation rate increases sharply with supersaturation (m = 2&ndash;9).</li>
            <li>Too much supersaturation &rarr; excessive nucleation &rarr; many fine crystals or precipitation.</li>
            <li>Control supersaturation to get a manageable number of nuclei and well-formed crystals.</li>
          </ul>
        </div>
      </div>
      <div class="fig-box">
        <strong>MKH Slide 8: Crystallization from Solution &ndash; Nucleation (Phase Curve &amp; Ice-Making Analogy)</strong><br />
        <img src="{{SLIDES}}/mkh_08.png" alt="MKH Slide 8 - Crystallization from Solution Nucleation" style="width:92%; margin:6px auto 0 auto;" />
      </div>
    </section>

    <!-- SECTION 4 -->
    <section
      class="topic-section"
      id="topic-4"
      data-topic="4"
      data-short="CSD, Sieve Analysis &amp; RRS"
    >
      <h2 class="section-title">4. Crystal Size Distribution (CSD), Sieve Analysis &amp; RRS Equation</h2>

      <h3 class="sub-title">
        4.1 Sieve Trays &amp; Screen Analysis Data
        <span class="slide-tag">Cryst Slide 17</span>
      </h3>
      <ul>
        <li><strong>Sieve (different mesh size):</strong> Sieve trays are put on a stack (shaker), with the <strong>Pan</strong> at the bottom where the finest particles are retained.</li>
      </ul>
      <div class="fig-box">
        <strong>Cryst Slide 17: Sieve Trays (Sieve stack, Pan, Shaker) &amp; Sieve Analysis Table</strong><br />
        <img src="{{SLIDES}}/cryst_17.png" alt="Cryst Slide 17 - Sieve Trays and Table" style="width:92%; margin:6px auto 0 auto;" />
      </div>
      <table>
        <thead>
          <tr>
            <th>Mesh</th>
            <th>Screen opening D<sub>pi</sub>, mm</th>
            <th>Mass fraction retained, x<sub>i</sub></th>
            <th>Average particle diameter in increment, D&#772;<sub>pi</sub>, mm</th>
            <th>Cumulative fraction smaller than D<sub>pi</sub></th>
          </tr>
        </thead>
        <tbody>
          <tr><td>4</td><td>4.699</td><td>0.0000</td><td>&mdash;</td><td>1.0000</td></tr>
          <tr><td>6</td><td>3.327</td><td>0.0251</td><td>4.013</td><td>0.9749</td></tr>
          <tr><td>8</td><td>2.362</td><td>0.1250</td><td>2.845</td><td>0.8499</td></tr>
          <tr><td>10</td><td>1.651</td><td>0.3207</td><td>2.007</td><td>0.5292</td></tr>
          <tr><td>14</td><td>1.168</td><td>0.2570</td><td>1.409</td><td>0.2722</td></tr>
          <tr><td>20</td><td>0.833</td><td>0.1590</td><td>1.001</td><td>0.1132</td></tr>
          <tr><td>28</td><td>0.589</td><td>0.0538</td><td>0.711</td><td>0.0594</td></tr>
          <tr><td>35</td><td>0.417</td><td>0.0210</td><td>0.503</td><td>0.0384</td></tr>
          <tr><td>48</td><td>0.295</td><td>0.0102</td><td>0.356</td><td>0.0282</td></tr>
          <tr><td>65</td><td>0.208</td><td>0.0077</td><td>0.252</td><td>0.0205</td></tr>
          <tr><td>100</td><td>0.147</td><td>0.0058</td><td>0.178</td><td>0.0147</td></tr>
          <tr><td>150</td><td>0.104</td><td>0.0041</td><td>0.126</td><td>0.0106</td></tr>
          <tr><td>200</td><td>0.074</td><td>0.0031</td><td>0.089</td><td>0.0075</td></tr>
          <tr><td>Pan</td><td>&mdash;</td><td>0.0075</td><td>0.037</td><td>0.0000</td></tr>
        </tbody>
      </table>

      <h3 class="sub-title">
        4.2 Rosin&ndash;Rammler&ndash;Sperling (RRS) Equation
        <span class="slide-tag">MKH Slide 9; Cryst Slide 18</span>
      </h3>
      <p>
        Cumulative data often are represented closely by the <strong>Rosin&ndash;Rammler&ndash;Sperling (RRS) equation</strong>:
      </p>
      <div class="eq-box">
        <div class="eq-row">
          <span class="katex-eq">y = 100 \exp\left[-\left(\frac{d}{d_m}\right)^n\right]</span>
        </div>
      </div>
      <ul>
        <li><strong>y</strong> = cumulative oversize percentage</li>
        <li><strong>d</strong> = crystal diameter being considered</li>
        <li><strong>d<sub>m</sub></strong> = mean characteristic diameter (mean diameter)</li>
        <li><strong>n</strong> = uniformity factor &mdash; <strong>The greater &lsquo;n&rsquo; the more nearly uniform the distribution.</strong></li>
        <li><strong>Example (MKH Slide 9):</strong> If y = 80%, this means approximately <strong>80% of the crystal mass is larger than d</strong>.</li>
      </ul>
      <div class="fig-box">
        <strong>Cryst Slide 18: CSD &mdash; Cumulative Weight (%) vs. BS Mesh Number (Oversize &amp; Undersize curves)</strong><br />
        <img src="{{SLIDES}}/cryst_18.png" alt="Cryst Slide 18 - CSD RRS plot" style="width:84%; margin:6px auto 0 auto;" />
      </div>
    </section>

    <!-- SECTION 5 -->
    <section
      class="topic-section"
      id="topic-5"
      data-topic="5"
      data-short="Crystallizer Equipment"
    >
      <h2 class="section-title">5. Industrial Crystallization Equipment</h2>

      <h3 class="sub-title">
        5.1 Pan &amp; Agitated Tank (Batch) Crystallizer
        <span class="slide-tag">MKH Slide 10; Cryst Slides 19&ndash;23</span>
      </h3>
      <ul>
        <li>A hot solution is allowed to cool and crystallize in <strong>pan crystallizers</strong>.</li>
        <li><strong>Agitated tank</strong>, usually cone bottomed, containing cooling coils, small-scale or batch processing.</li>
        <li>The upper part of the vessel is cylindrical and closed at the top.</li>
        <li>The lower part of the vessel is conical and its bottom most part is used to drain out final magma.</li>
        <li><strong>Hot concentrated solution</strong> of a substance is induced in the crystallizer and it <strong>is agitated with the impeller</strong>.</li>
        <li>Cold water flows through the cooling coils to transfer heat from the hot solution.</li>
        <li>As temperature drops, super saturation is achieved that initiates crystallization.</li>
        <li>Agitator facilitates heat transfer operation throughout the solution and maintains uniformity of temperature in the solution and keeps the growing crystals in suspension so that these can grow uniformly.</li>
        <li>Thus agitator prevents formation of aggregates.</li>
      </ul>
      <div class="grid-2">
        <div class="card">
          <h4>Advantages <span class="slide-tag">Cryst Slide 23</span></h4>
          <ol style="margin-bottom: 0">
            <li>Production of uniform crystals.</li>
            <li>The product of this operation is not only more uniform but it is also very much finer than that from the older tanks.</li>
          </ol>
        </div>
        <div class="card">
          <h4>Disadvantages <span class="slide-tag">Cryst Slide 23</span></h4>
          <ol style="margin-bottom: 0">
            <li>It is a batch or discontinuous apparatus.</li>
            <li>The solubility is the least at the surface of the cooling coils. Therefore, crystal growth is most rapid at this point and the coils rapidly build up with a mass of crystals that decreases the rate of heat transfer.</li>
          </ol>
        </div>
      </div>

      <div class="grid-2">
        <div class="fig-box" style="margin: 0">
          <strong>MKH Slide 10: Agitated Batch Crystallizer (Labeled Cutaway &amp; Parts)</strong><br />
          <img src="{{SLIDES}}/mkh_10.png" alt="MKH Slide 10 - Agitated Batch Crystallizer" style="width:100%; margin-top:6px;" />
        </div>
        <div class="fig-box" style="margin: 0">
          <strong>Cryst Slide 20: Fig 11-1 Agitated batch Crystallizer (Badger &amp; Banchero)</strong><br />
          <img src="{{SLIDES}}/cryst_20.png" alt="Cryst Slide 20 - Fig 11-1 Agitated batch Crystallizer" style="width:100%; margin-top:6px;" />
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Part (MKH Slide 10)</th>
            <th>Function</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>1</td><td>Feed inlet (hot/concentrated solution)</td><td>Introduces the solution to be crystallized.</td></tr>
          <tr><td>2</td><td>Vessel body</td><td>Holds the solution, crystals and mother liquor.</td></tr>
          <tr><td>3</td><td>Cooling coils</td><td>Remove heat from the solution using cold water.</td></tr>
          <tr><td>4</td><td>Cooling water inlet</td><td>Supplies cold water to the coils.</td></tr>
          <tr><td>5</td><td>Cooling water outlet</td><td>Discharges warmed cooling water.</td></tr>
          <tr><td>6</td><td>Central agitator shaft</td><td>Transfers rotational motion from the motor to the impellers.</td></tr>
          <tr><td>7</td><td>Impeller (agitator blades)</td><td>Mixes the solution, keeps crystals suspended and improves heat transfer.</td></tr>
          <tr><td>8</td><td>Agitator drive (motor/gearbox)</td><td>Provides mechanical power for agitation.</td></tr>
          <tr><td>9</td><td>Shaft bearing/seal</td><td>Supports the shaft and prevents leakage.</td></tr>
          <tr><td>10</td><td>Conical bottom</td><td>Collects the crystal&ndash;mother liquor slurry (magma) and directs it to the outlet.</td></tr>
          <tr><td>11</td><td>Discharge outlet</td><td>Removes the magma (crystals + mother liquor).</td></tr>
        </tbody>
      </table>

      <h3 class="sub-title">
        5.2 Swenson&ndash;Walker Crystallizer
        <span class="slide-tag">MKH Slide 11; Cryst Slides 24&ndash;27</span>
      </h3>
      <ul>
        <li><strong>Swenson&ndash;Walker crystallizer:</strong> continuously cooling crystallizer, open round-bottomed trough 24 in. wide by 10 ft long, jacketed for cooling water; agitators driven from a single shaft; hot, concentrated solution is fed continuously at one end of the crystallizer and flows slowly forward.</li>
        <li>Agitator scrapes the crystals from the cold walls and picks up the crystals and cascades them down through the solution.</li>
        <li>If more units are required, these can be arranged one above another and solution falls from the upper row to the next lower one.</li>
        <li>The hot concentrated solution is fed at one end of the trough and flows to the other end slowly.</li>
        <li>When solution is cooled to desired degree of super saturation, crystals start forming.</li>
        <li>At the end of the crystallizer, crystals along with mother liquor overflow to a draining table that separates mother liquor from crystals.</li>
        <li>Mother liquor is returned to the process and wet crystals are conveyed to a centrifuge.</li>
      </ul>
      <div class="grid-2">
        <div class="card">
          <h4>Functions of the Spiral Stirrer <span class="slide-tag">Cryst Slide 24</span></h4>
          <ol style="margin-bottom: 0">
            <li>It prevents the accumulation of crystals on the cooling surface.</li>
            <li>It lifts the crystals that have already been formed and showers them down through the solution.</li>
          </ol>
        </div>
        <div class="card">
          <h4>Advantages <span class="slide-tag">Cryst Slide 27</span></h4>
          <ul style="margin-bottom: 0">
            <li>Large saving in floor space.</li>
            <li>Large saving in material in process.</li>
            <li>Saving in labor.</li>
            <li>Fairly perfect individuals.</li>
            <li>Uniform size crystals.</li>
            <li>Free from inclusions and aggregations.</li>
          </ul>
        </div>
      </div>

      <div class="grid-2">
        <div class="fig-box" style="margin: 0">
          <strong>MKH Slide 11: Working of Swenson Walker Crystallizer</strong><br />
          <img src="{{SLIDES}}/mkh_11.png" alt="MKH Slide 11 - Working of Swenson Walker Crystallizer" style="width:100%; margin-top:6px;" />
        </div>
        <div class="fig-box" style="margin: 0">
          <strong>Cryst Slide 24: Figure 19.23 Swenson-Walker crystallizer (Courtesy Swenson Division of Whiting Corporation, Foust)</strong><br />
          <img src="{{SLIDES}}/cryst_24.png" alt="Cryst Slide 24 - Figure 19.23 Swenson-Walker crystallizer" style="width:100%; margin-top:6px;" />
        </div>
      </div>

      <h3 class="sub-title">
        5.3 Oslo Crystallizer / &ldquo;Krystal&rdquo; Crystallizer
        <span class="slide-tag">MKH Slide 12; Cryst Slides 28&ndash;31</span>
      </h3>
      <ul>
        <li>Also called a <strong>growth-type crystallizer</strong>.</li>
        <li>Its main purpose is to produce relatively <strong>large, well-grown crystals</strong> rather than many small crystals.</li>
        <li><strong>Process flow:</strong> Feed &rarr; Heating &rarr; Flash evaporation &rarr; Supersaturation &rarr; Crystal growth &rarr; Mother liquor circulation &rarr; Heating again.</li>
        <li><strong>Mechanism:</strong> Supersaturated solution &rarr; solute deposition on crystals &rarr; larger crystals.</li>
        <li>Salting evaporator consisted of an evaporator below which were settling chambers into which the salt settled.</li>
        <li>Settling chambers directly connecting to the body is replaced by classifying settler, through which a stream of the liquor from the evaporator body is pumped continuously.</li>
        <li>The thick slurry from the bottom of the settler is pumped continuously to filters or centrifuges or other appropriate processing equipment. Mother liquor may be returned to the evaporator or discarded in whole or in part to eliminate impurities from the system.</li>
      </ul>
      <div class="grid-2">
        <div class="fig-box" style="margin: 0">
          <strong>Cryst Slide 28: Oslo / Krystal Crystallizer Schematic (Vaporizer, Recirculation pipe, Heat exchanger, Circulating pump, Suspension chamber, Product outlet)</strong><br />
          <img src="{{SLIDES}}/cryst_28.png" alt="Cryst Slide 28 - Oslo Krystal Crystallizer Schematic" style="width:100%; margin-top:6px;" />
        </div>
        <div class="fig-box" style="margin: 0">
          <strong>Cryst Slide 29: Figure 19.24 &ldquo;Krystal&rdquo; crystallizer for production of ammonium sulfate (Courtesy Struthers-Wells Corp., Foust)</strong><br />
          <img src="{{SLIDES}}/cryst_29.png" alt="Cryst Slide 29 - Figure 19.24 Krystal crystallizer photo" style="width:100%; margin-top:6px;" />
        </div>
      </div>

      <h3 class="sub-title">
        5.4 Draft Tube Baffle (DTB) Crystallizer
        <span class="slide-tag">Cryst Slides 32&ndash;34</span>
      </h3>
      <ul>
        <li>Draft tube baffle crystallizers are used to control crystal size and characteristics. Draft Tube Baffle (DTB) crystallizers are used in applications in which excessive nucleation occurs. <strong>Small, unwanted crystals, called fines, are removed from larger particles using gravitational settling and recycled through the crystallizer again, resulting in maximum crystal recovery and larger crystals.</strong></li>
        <li>DTB crystallizers have two distinct volumes. In the baffled region gravitational settling separates larger crystals from fines. The larger crystals settle between the baffle and draft tube and are removed in the product slurry, while <strong>the fines are recirculated after being redissolved in a heat exchanger</strong>.</li>
        <li>The evaporated solvent is then condensed, cooled, and returned to the region of active crystallization.</li>
        <li>DTB crystallizers typically have <strong>circulation rates of 1 to 4 times/min</strong> and a <strong>total residence time of 4 to 6 hours</strong>.</li>
        <li><strong>Usage Examples:</strong> DTB crystallizers are used to produce ammonium sulfate, purification of organic compounds as well as the production of salts.</li>
      </ul>
      <div class="fig-box">
        <strong>Cryst Slide 32: Figure 19.26 A draft-tube-baffle vacuum crystallizer (internal fines separation and crystal elutriation)</strong><br />
        <img src="{{SLIDES}}/cryst_32.png" alt="Cryst Slide 32 - Figure 19.26 DTB crystallizer" style="width:76%; margin:6px auto 0 auto;" />
      </div>

      <h3 class="sub-title">
        5.5 Forced-Circulation (Evaporative) Crystallizer
        <span class="slide-tag">Cryst Slides 35, 36</span>
      </h3>
      <ul>
        <li>Also shown as <strong>Fig. 28-10 Continuous Crystallizer (McCabe-Smith) / Forced Circulation (Evaporative) Crystallizer (Perry / McKetta)</strong> (Cryst Slide 35) with barometric condenser, body, downpipe, steam heater, magma withdrawal to centrifuge, product outlet, and mother liquor recycle.</li>
        <li><strong>Fig. 19-43 Forced-circulation (evaporative) crystallizer (Perry&rsquo;s Handbook; Swenson Division, Whiting Corporation)</strong> &mdash; Note on slide: <em>See GHOSAL schematic diagrams</em> (Cryst Slide 36).</li>
      </ul>
      <div class="fig-box">
        <strong>Cryst Slide 36: Fig. 19-43 Forced-circulation (evaporative) crystallizer (Perry&rsquo;s Handbook; Swenson Division, Whiting Corporation)</strong><br />
        <img src="{{SLIDES}}/cryst_36.png" alt="Cryst Slide 36 - Fig 19-43 Forced-circulation crystallizer" style="width:80%; margin:6px auto 0 auto;" />
      </div>

      <h3 class="sub-title">
        5.6 Vacuum Crystallizer
        <span class="slide-tag">Cryst Slides 37, 38</span>
      </h3>
      <ul>
        <li>Vacuum crystallizer consists of a cone-bottomed vessel, which is fitted with a barometric condenser at the top and propellers in the conical part, elutriation leg at the bottom of the vessel.</li>
        <li>Hot saturated solution (feed) well above the boiling point at the pressure in the crystallizer is introduced into the main crystallizer body via a slow speed low head circulating pump and a heater, through a tangentially cut inlet pipe that causes a swirling motion within solution.</li>
        <li>Liquid level in the crystallizer body is maintained up to certain mark. At the top of liquid, vacuum is maintained that corresponds to a boiling point of the solution lower than the feed temperature. The solution so introduced into a vessel in which a vacuum is maintained flashes and solvent evaporates due to <strong>adiabatic evaporation</strong>.</li>
        <li>As a result solution gets cooled spontaneously to equilibrium temperature; since it is adiabatically cooled i.e. both the enthalpy of cooling and the enthalpy of crystallization provide enthalpy of vaporization. Super saturation is generated due to both cooling and evaporation.</li>
      </ul>
      <div class="fig-box">
        <strong>Cryst Slide 37: Vacuum Crystallizer &mdash; (a) Batch vacuum crystallizer without booster; (b) Single-stage continuous vacuum crystallizer with booster</strong><br />
        <img src="{{SLIDES}}/cryst_37.png" alt="Cryst Slide 37 - Vacuum Crystallizer" style="width:88%; margin:6px auto 0 auto;" />
      </div>
    </section>

    <!-- SECTION 6 -->
    <section
      class="topic-section"
      id="topic-6"
      data-topic="6"
      data-short="Design Factors"
    >
      <h2 class="section-title">6. Design of Crystallizer</h2>

      <h3 class="sub-title">
        6.1 Factors to be Considered in Designing Crystallizer
        <span class="slide-tag">Cryst Slides 50&ndash;53</span>
      </h3>
      <p><strong>Main factors (Cryst Slide 50):</strong> Raw Materials; Equipment and Operation; Product; Detailed design of crystallizer and auxiliary Equipment.</p>
      <div class="grid-2">
        <div class="card">
          <h4>Raw Materials <span class="slide-tag">Cryst Slide 51</span></h4>
          <ul style="margin-bottom: 0">
            <li>Chemical and Physical properties</li>
            <li>Solubility and Phase diagram &rarr; Supersaturation</li>
            <li>Concentration and</li>
            <li>Impurities</li>
          </ul>
        </div>
        <div class="card">
          <h4>Equipment and Operation <span class="slide-tag">Cryst Slide 52</span></h4>
          <ul style="margin-bottom: 0">
            <li>Method of operation: batch or continuous</li>
            <li>Selection of type of crystallizer</li>
            <li>Design of crystallizer</li>
          </ul>
        </div>
      </div>
      <div class="card">
        <h4>Product <span class="slide-tag">Cryst Slide 53</span></h4>
        <ul style="margin-bottom: 0">
          <li>Production rate</li>
          <li>Product crystal size and size distribution</li>
          <li>Purity</li>
        </ul>
      </div>
    </section>

    <!-- SECTION 7 -->
    <section
      class="topic-section"
      id="topic-7"
      data-topic="7"
      data-short="Ex. 1: Swenson–Walker"
    >
      <h2 class="section-title">7. Worked Example 1: Swenson&ndash;Walker Crystallizer (Example 11-2)</h2>

      <div class="example-box">
        <h4>Problem Statement <span class="slide-tag">MKH Slide 13; Cryst Slide 46</span></h4>
        <p style="margin: 0 0 8px 0">
          A Swenson&ndash;Walker crystallizer is to be used to produce <strong>1 ton/h</strong> (2000 lb/h) of copperas (<strong>FeSO<sub>4</sub>&middot;7H<sub>2</sub>O</strong>) crystals by cooling a saturated solution. The saturated solution enters the crystallizer at <strong>120&deg;F</strong>, and the slurry leaving the crystallizer is at <strong>80&deg;F</strong>. The solubility data are given in <strong>Fig. 11-9</strong>. Cooling water enters the crystallizer jacket at <strong>60&deg;F</strong> and leaves at <strong>70&deg;F</strong>. The overall heat-transfer coefficient is <strong>35 Btu/(h&middot;ft<sup>2</sup>&middot;&deg;F)</strong>, and there are <strong>3.5 ft<sup>2</sup></strong> of cooling surface per foot of crystallizer length.
        </p>
        <ol type="a" style="margin-bottom: 0">
          <li>Estimate the cooling water required in gpm.</li>
          <li>Determine the number of crystallizer sections to be used.</li>
        </ol>
      </div>

      <div class="fig-box">
        <strong>MKH Slide 14 (also Cryst Slide 48): Fig. 11-9 Solubility of ferrous sulfate (Curves A, B, and C as usually plotted; Curve D plotted as parts hydrate per 100 parts excess water, with YIELD marked between 120&deg;F and 80&deg;F)</strong><br />
        <img src="{{SLIDES}}/mkh_14.png" alt="MKH Slide 14 - Fig 11-9 Solubility of ferrous sulfate" style="width:82%; margin:6px auto 0 auto;" />
      </div>

      <div class="grid-2">
        <div class="card">
          <h4>Process Data <span class="slide-tag">MKH Slide 15; Cryst Slide 47</span></h4>
          <ul style="margin-bottom: 0">
            <li>Crystal production = 2000 lb/h FeSO<sub>4</sub>&middot;7H<sub>2</sub>O</li>
            <li>Feed saturated solution = 120&deg;F &rarr; Leaving slurry = 80&deg;F</li>
            <li>Cooling water: 60&deg;F &rarr; 70&deg;F (countercurrent)</li>
            <li>Overall U = 35 Btu/(h&middot;ft<sup>2</sup>&middot;&deg;F)</li>
            <li>Cooling surface = 3.5 ft<sup>2</sup> per ft of crystallizer length</li>
          </ul>
        </div>
        <div class="card">
          <h4>From Solubility Curve D &amp; Property Data <span class="slide-tag">MKH Slide 15; Cryst Slides 46, 47</span></h4>
          <ul style="margin-bottom: 0">
            <li>At 120&deg;F: <strong>140 lb</strong> FeSO<sub>4</sub>&middot;7H<sub>2</sub>O per 100 lb excess H<sub>2</sub>O</li>
            <li>At 80&deg;F: <strong>74 lb</strong> FeSO<sub>4</sub>&middot;7H<sub>2</sub>O per 100 lb excess H<sub>2</sub>O</li>
            <li>Average specific heat of initial solution, C<sub>p</sub> = <strong>0.70 Btu/(lb&middot;&deg;F)</strong></li>
            <li>Heat of solution of FeSO<sub>4</sub>&middot;7H<sub>2</sub>O at 18&deg;C = <strong>&minus;4400 cal/g formula weight</strong> (Perry, p. 247; also refs: Perry, p. 1052; Perry, pp. 246&ndash;248)</li>
            <li>Molecular weight of FeSO<sub>4</sub>&middot;7H<sub>2</sub>O &approx; <strong>278 g/mol</strong></li>
          </ul>
        </div>
      </div>

      <div class="example-box">
        <h4>Stepwise Solution <span class="slide-tag">MKH Slides 16&ndash;22; Cryst Slides 46, 47, 49</span></h4>

        <p style="margin: 6px 0 4px 0"><strong>Step 1 &ndash; Determine the crystal yield (MKH Slide 16):</strong></p>
        <div class="eq-box" style="background: #fff">
          <div class="eq-row">
            <span class="katex-eq">\text{Crystal yield} = 140 - 74 = 66\text{ lb }\text{FeSO}_4\cdot 7\text{H}_2\text{O per 100 lb excess H}_2\text{O}</span>
          </div>
        </div>
        <p style="margin: 4px 0 8px 0">
          When the saturated solution is cooled from 120&deg;F to 80&deg;F, the solution retains 74 lb per 100 lb excess water; the remaining 66 lb leaves the liquid phase as FeSO<sub>4</sub>&middot;7H<sub>2</sub>O crystals (i.e., 66 parts per 240 parts of initial solution, where 240 = 140 + 100).
        </p>

        <p style="margin: 6px 0 4px 0"><strong>Step 2 &ndash; Material balance and feed rate (MKH Slide 17; Cryst Slide 46):</strong></p>
        <div class="eq-box" style="background: #fff">
          <div class="eq-row">
            <span class="katex-eq">\text{Excess H}_2\text{O in feed} = 2000 \times \frac{100}{66} = 3030\text{ lb/h}</span>
          </div>
          <div class="eq-row">
            <span class="katex-eq">\text{FeSO}_4\cdot 7\text{H}_2\text{O in feed} = 3030 \times \frac{140}{100} = 4240\text{ lb/h}</span>
          </div>
          <div class="eq-row">
            <span class="katex-eq">\text{Total feed} = 3030 + 4240 = (2000)\left(\frac{240}{66}\right) \approx \mathbf{7270\text{ lb/h}}</span>
          </div>
        </div>

        <p style="margin: 6px 0 4px 0"><strong>Step 3 &ndash; Sensible heat removal (MKH Slide 18):</strong></p>
        <div class="eq-box" style="background: #fff">
          <div class="eq-row">
            <span class="katex-eq">Q_s = m C_p \Delta T = (7270)(0.70)(120 - 80) = (7270)(0.70)(40) \approx \mathbf{203{,}500\text{ Btu/h}}</span>
          </div>
        </div>

        <p style="margin: 6px 0 4px 0"><strong>Step 4 &ndash; Heat released by crystallization (MKH Slide 19; Cryst Slide 47):</strong></p>
        <div class="eq-box" style="background: #fff">
          <div class="eq-row">
            <span class="katex-eq">\text{Heat per gram of crystal} = \frac{4400}{278} = 15.83\text{ cal/g}</span>
          </div>
          <div class="eq-row">
            <span class="katex-eq">\Delta H_{\text{cryst}} = -(-4400)\left(\frac{1.8}{278}\right) = 28.5\text{ Btu/lb}</span>
            <span class="eq-note">(using 1 cal/g &approx; 1.8 Btu/lb; assumed valid at 80&deg;F)</span>
          </div>
          <div class="eq-row">
            <span class="katex-eq">Q_{\text{cryst}} = (2000\text{ lb/h})(28.5\text{ Btu/lb}) = \mathbf{57{,}000\text{ Btu/h}}</span>
          </div>
        </div>

        <p style="margin: 6px 0 4px 0"><strong>Step 5 &ndash; Total cooling duty and cooling-water flow (a) (MKH Slide 20; Cryst Slide 47):</strong></p>
        <div class="eq-box" style="background: #fff">
          <div class="eq-row">
            <span class="katex-eq">Q_{\text{total}} = Q_s + Q_{\text{cryst}} = 203{,}500 + 57{,}000 = \mathbf{260{,}500\text{ Btu/h}}</span>
          </div>
          <div class="eq-row">
            <span class="katex-eq">\Delta T_w = 70 - 60 = 10^\circ\text{F}, \quad \rho \approx 8.34\text{ lb/gal}, \quad C_p \approx 1\text{ Btu/(lb}\cdot{}^\circ\text{F)}</span>
          </div>
          <div class="eq-row">
            <span class="katex-eq">V = \frac{260{,}500}{(8.34)(60)(10)} = \mathbf{52.0\text{ gpm}}</span>
          </div>
        </div>

        <p style="margin: 6px 0 4px 0"><strong>Step 6 &ndash; Calculate the heat-transfer area (MKH Slide 21; Cryst Slide 49):</strong></p>
        <p style="margin: 0 0 6px 0">Hot-side temperatures: 120&deg;F &rarr; 80&deg;F; Cooling-water temperatures: 60&deg;F &rarr; 70&deg;F (countercurrent).</p>
        <div class="eq-box" style="background: #fff">
          <div class="eq-row">
            <span class="katex-eq">\Delta T_1 = 120 - 70 = 50^\circ\text{F}, \qquad \Delta T_2 = 80 - 60 = 20^\circ\text{F}</span>
          </div>
          <div class="eq-row">
            <span class="katex-eq">\Delta T_{lm} = \frac{50 - 20}{\ln(50/20)} = \frac{30}{0.916} = 32.7^\circ\text{F}</span>
            <span class="eq-note">(Cryst Slide 49 / Eq. 4-41 rounds to 32.8&deg;F)</span>
          </div>
          <div class="eq-row">
            <span class="katex-eq">Q = U A \Delta T_{lm} \implies A = \frac{260{,}500}{(35)(32.7)} \approx \mathbf{227.5\text{ ft}^2}</span>
            <span class="eq-note">(227 sq ft using 32.8&deg;F)</span>
          </div>
        </div>

        <p style="margin: 6px 0 4px 0"><strong>Step 7 &ndash; Determine crystallizer length and sections (b) (MKH Slide 22; Cryst Slide 49):</strong></p>
        <div class="eq-box" style="background: #fff; margin-bottom: 0">
          <div class="eq-row">
            <span class="katex-eq">L = \frac{A}{\text{surface per unit length}} = \frac{227.5}{3.5} \approx 65\text{ ft}</span>
          </div>
          <div class="eq-row">
            <span class="katex-eq">N = \frac{65}{10} = 6.5 \longrightarrow \mathbf{7\text{ sections}}</span>
            <span class="eq-note">(each standard 10-ft section has 35 sq ft of surface)</span>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 8 -->
    <section
      class="topic-section"
      id="topic-8"
      data-topic="8"
      data-short="Ex. 2: Seeded CSD (Illus. 19.5)"
    >
      <h2 class="section-title">8. Worked Example 2: Seeded Crystallizer CSD (Illustration 19.5)</h2>

      <div class="example-box">
        <h4>Illustration 19.5 &mdash; Seeded Crystallizer Product Size Distribution <span class="slide-tag">Cryst Slides 39&ndash;45</span></h4>
        <p style="margin: 0 0 8px 0">
          A solute forming cubic crystals is precipitated from solution at <strong>10,000 lb of solid (dry basis) per hour</strong> using <strong>1,000 lb/hr of seed crystals</strong>. Assuming no nucleation occurs and given the seed crystal size distribution below, determine the product size distribution.
        </p>

        <p style="margin: 6px 0 4px 0"><strong>Seed Crystal Data &amp; Governing Equation (Cryst Slides 39, 40):</strong></p>
        <table style="background: #fff; max-width: 560px">
          <thead>
            <tr>
              <th>Tyler Sieve Mesh</th>
              <th>Weight Fraction Retained (&Delta;m<sub>s</sub>)</th>
              <th>Average Dimension (D<sub>s</sub>), in.</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>&minus;48 + 65</td><td>0.10</td><td>0.0099</td></tr>
            <tr><td>&minus;65 + 100</td><td>0.30</td><td>0.0070</td></tr>
            <tr><td>&minus;100 + 150</td><td>0.50</td><td>0.0050</td></tr>
            <tr><td>&minus;150 + 200</td><td>0.05</td><td>0.0035</td></tr>
            <tr><td>&minus;200 + 270</td><td>0.05</td><td>0.0025</td></tr>
          </tbody>
        </table>

        <div class="eq-box" style="background: #fff">
          <div class="eq-row">
            <span class="katex-eq">m_p = m_s \left(1 + \frac{\Delta D}{D_s}\right)^3</span>
            <span class="eq-note">where m<sub>p</sub>/m<sub>s</sub> is specified as 10.0</span>
          </div>
        </div>

        <p style="margin: 8px 0 4px 0"><strong>First attempt: &Delta;D = 0.005 in. (Cryst Slide 41):</strong></p>
        <table style="background: #fff; max-width: 520px">
          <thead>
            <tr>
              <th>&Delta;m<sub>s</sub></th>
              <th>(1 + &Delta;D / D<sub>s</sub>)<sup>3</sup></th>
              <th>&Delta;m<sub>p</sub></th>
            </tr>
          </thead>
          <tbody>
            <tr><td>0.10</td><td>3.37</td><td>0.337</td></tr>
            <tr><td>0.30</td><td>4.94</td><td>1.480</td></tr>
            <tr><td>0.50</td><td>8.00</td><td>4.00</td></tr>
            <tr><td>0.05</td><td>14.45</td><td>0.723</td></tr>
            <tr><td>0.05</td><td>27.0</td><td>1.35</td></tr>
            <tr><td><strong>&Sigma; = 1.00</strong></td><td></td><td><strong>&Sigma; = 7.89</strong></td></tr>
          </tbody>
        </table>

        <p style="margin: 8px 0 4px 0"><strong>Final trial: &Delta;D = 0.0058 in., with D<sub>p</sub> = D<sub>s</sub> + &Delta;D (Cryst Slide 42):</strong></p>
        <table style="background: #fff; max-width: 600px">
          <thead>
            <tr>
              <th>&Delta;m<sub>s</sub></th>
              <th>(1 + &Delta;D / D<sub>s</sub>)<sup>3</sup></th>
              <th>&Delta;m<sub>p</sub></th>
              <th>D<sub>p</sub> (in.)</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>0.10</td><td>3.95</td><td>0.39</td><td>0.0157</td></tr>
            <tr><td>0.30</td><td>6.00</td><td>1.80</td><td>0.0128</td></tr>
            <tr><td>0.50</td><td>10.10</td><td>5.05</td><td>0.0108</td></tr>
            <tr><td>0.05</td><td>18.70</td><td>0.94</td><td>0.0093</td></tr>
            <tr><td>0.05</td><td>36.60</td><td>1.83</td><td>0.0083</td></tr>
            <tr><td><strong>&Sigma; = 1.00</strong></td><td></td><td><strong>&Sigma; = 10.01</strong></td><td></td></tr>
          </tbody>
        </table>

        <p style="margin: 8px 0 4px 0"><strong>Product Mass Fraction &amp; Cumulative Distribution (Cryst Slide 43):</strong></p>
        <table style="background: #fff; max-width: 600px">
          <thead>
            <tr>
              <th>Mass Fraction Product (m<sub>p</sub> / &Sigma;&Delta;m<sub>p</sub>)</th>
              <th>D<sub>p</sub> = D<sub>s</sub> + &Delta;D (in.)</th>
              <th>Product Cumulative Fraction Smaller than D<sub>p</sub></th>
            </tr>
          </thead>
          <tbody>
            <tr><td>0.039</td><td>0.0157</td><td>0.961</td></tr>
            <tr><td>0.180</td><td>0.0128</td><td>0.781</td></tr>
            <tr><td>0.504</td><td>0.0108</td><td>0.277</td></tr>
            <tr><td>0.094</td><td>0.0093</td><td>0.183</td></tr>
            <tr><td>0.183</td><td>0.0083</td><td>0.000</td></tr>
            <tr><td><strong>1.000</strong></td><td></td><td></td></tr>
          </tbody>
        </table>

        <p style="margin: 8px 0 4px 0"><strong>Final Product Screen Analysis (Read from Figure 19.31) (Cryst Slide 44):</strong></p>
        <div class="grid-2" style="margin-bottom: 0">
          <table style="background: #fff; margin: 0">
            <thead>
              <tr>
                <th>Tyler Sieve Mesh</th>
                <th>Screen Opening, in.</th>
                <th>Weight Fraction of Product Smaller than Opening</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>100</td><td>0.0058</td><td>0.0</td></tr>
              <tr><td>65</td><td>0.0082</td><td>0.10</td></tr>
              <tr><td>48</td><td>0.0116</td><td>0.80</td></tr>
              <tr><td>35</td><td>0.0164</td><td>0.99</td></tr>
              <tr><td>28</td><td>0.0232</td><td>1.00</td></tr>
            </tbody>
          </table>
          <table style="background: #fff; margin: 0">
            <thead>
              <tr>
                <th>Tyler Sieve Mesh</th>
                <th>Screen Analysis Weight Fraction</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>&minus;28 + 35</td><td>0.01</td></tr>
              <tr><td>&minus;35 + 48</td><td>0.19</td></tr>
              <tr><td>&minus;48 + 65</td><td>0.70</td></tr>
              <tr><td>&minus;65 + 100</td><td>0.10</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="fig-box">
        <strong>Cryst Slide 45: Figure 19.31 Crystallizer-seed and product particle-size distribution, Illustration 19.5</strong><br />
        <img src="{{SLIDES}}/cryst_45.png" alt="Cryst Slide 45 - Figure 19.31 Seed and product CSD" style="width:76%; margin:6px auto 0 auto;" />
      </div>
    </section>
  `,
};
