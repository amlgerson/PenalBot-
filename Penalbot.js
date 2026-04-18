/* ================================================================
   PENALBOT — interactions
================================================================ */

/* ---------- i18n ---------- */
const I18N = {
  en: {
    nav_about:"About", nav_engine:"Engine", nav_results:"Results", nav_pricing:"Pricing", nav_cta:"Get access", nav_tg:"Contact",
    hero_eyebrow:"Season 25/26 · live signals · 1 842 referees tracked",
    hero_h1_1:"One market.", hero_h1_2:"One edge.", hero_h1_3:"Zero noise.",
    hero_sub:"PENALBOT is a quant engine built for a single, overlooked market: the penalty. We cross referee data, pressure dynamics and live odds — and push only the signals that survive every filter.",
    hero_cta1:"Join the room", hero_cta2:"How it works",
    hero_note:"Stripe checkout · instant Telegram access · cancel anytime",
    radar_title:"penalty-scanner · live", radar_fixtures:"fixtures",
    radar_rejected:"below threshold · rejected",
    radar_threshold:"threshold", radar_leagues:"leagues", radar_latency:"latency",
    m_matches:"matches analysed", m_win:"signal win rate", m_roi:"projected ROI", m_leagues:"referee profiles tracked",

    about_kicker:"The thesis",
    about_h2:"Everyone chases every market. <em>We chose one.</em>",
    about_lead:"Generalists lose. Specialists compound. PENALBOT refuses to forecast every outcome — it owns the penalty, end to end, and ignores the rest.",
    about_c1_h:"Own a niche",
    about_c1_p:"One vertical, ignored by mass tipsters. An information asymmetry that compounds every week.",
    about_c2_h:"Ship on Telegram",
    about_c2_p:"Signals land in a private room — formatted, actionable, zero friction between discovery and action.",
    about_c3_h:"Refuse noise",
    about_c3_p:"Fewer pushes, higher conviction. The engine rejects ambiguous setups before they reach you.",

    eng_kicker:"The engine",
    eng_h2:"Four layers. <em>One verdict.</em>",
    eng_lead:"A quantitative pipeline stacked to isolate penalty probability — not team form, not total goals. Penalties only.",
    eng_l1_n:"Referee intelligence",
    eng_l1_p:"1,842 referee profiles. Penalty frequency, strictness variance, home/away bias — weighted into an arbitral factor.",
    eng_l2_n:"Pressure & Vulnerability",
    eng_l2_p:"PPI measures offensive pressure on the box. DVS measures defensive fragility. Combined, they map the setup.",
    eng_l3_n:"Market synthesis",
    eng_l3_p:"Internal fair-odds vs live bookmaker pricing. We push only when edge survives the spread.",
    eng_l4_n:"Stake staging",
    eng_l4_p:"Conviction-weighted units, bankroll-aware. The size of the bet scales with the quality of the signal.",

    res_kicker:"The curve",
    res_h2:"Compounding beats chasing. <em>Every time.</em>",
    res_lead:"A cumulative-ROI backtest across 12 months of curated signals. Disciplined stakes, transparent drawdowns, no hindsight bias.",
    res_leg_bot:"PENALBOT", res_leg_mkt:"Market baseline",
    res_r1:"3M", res_r2:"6M", res_r3:"12M",
    res_s1:"Cumulative ROI", res_s2:"Max drawdown", res_s3:"Sharpe-like", res_s4:"Avg signals / week",
    res_disclaim:"Projected backtest · stakes normalised to 1u · past performance does not guarantee future returns.",

    pr_kicker:"Access", pr_h2:"Three doors. <em>One room.</em>",
    pr_lead:"Pick the depth. Stripe checkout sends you straight to the Telegram room — no forms, no waiting.",
    pr_mo:"/mo", pr_best:"Most popular",
    pr_1_p:"Get in. See the engine at work.",
    pr_1_f1:"Essential signal feed", pr_1_f2:"Top-3 leagues coverage", pr_1_f3:"Private Telegram channel", pr_1_f4:"Standard support", pr_1_cta:"Choose Starter",
    pr_2_p:"The full feed. For serious users.",
    pr_2_f1:"All premium signals, every league", pr_2_f2:"Stake staging & bankroll notes", pr_2_f3:"Priority dispatch", pr_2_f4:"Dedicated Telegram room", pr_2_cta:"Choose Pro",
    pr_3_p:"White-glove. Syndicates and partners.",
    pr_3_f1:"Priority onboarding", pr_3_f2:"Direct support line", pr_3_f3:"Custom workflow access", pr_3_f4:"Roadmap touchpoints", pr_3_cta:"Contact sales",

    close_kicker:"Inside the room",
    close_h_1:"This is what lands",
    close_h_2:"in your Telegram.",
    close_lead:"Every signal ships with the full verdict — score, probability, suggested stake, key factors. No charts to read. No strategy to build. Act on it or skip it.",
    close_cta:"Start receiving signals",
    close_note:"Cancel anytime · First signal within 24h",
    close_tg:"premium room · just now",
    close_conf:"HIGH CONVICTION",
    close_sig_label:"Signal dispatched",
    close_k1:"Penalty proba", close_k2:"Fair odds", close_k3:"Book edge", close_k4:"Stake",
    close_f1:"Referee bias", close_f2:"PPI · offensive", close_f3:"DVS · defensive",
    close_verdict:"All filters passed · dispatched to premium",

    tg_kicker:"Questions? DM us.",
    tg_cta:"Open in Telegram",

    foot_tag:"Penalty signal intelligence · 2026",
    foot_legal:"Legal notice", foot_terms:"Terms of use", foot_tg:"Telegram", foot_contact:"Contact",
    foot_warn:"⚠ 18+ · Gambling involves risk of addiction and financial loss. Please gamble responsibly.",

    ml_h1:"Legal Notice",
    ml_h2_pub:"Publisher", ml_p_pub:"This website is published by <strong>PENALBOT</strong>, a digital service operated from Malta.",
    ml_trade:"Trade name:", ml_form:"Legal form:", ml_form_v:"Private Limited Company (Ltd)", ml_office:"Registered office:",
    ml_h2_host:"Hosting", ml_p_host:"This website is hosted by <strong>Vercel Inc.</strong>",
    ml_h2_ip:"Intellectual Property", ml_p_ip:"All content on the PENALBOT website (texts, algorithms, design, brand, logo, etc.) is protected by applicable intellectual property laws. Any reproduction, distribution, or exploitation without prior written authorisation is strictly prohibited.",
    ml_h2_liab:"Liability Disclaimer", ml_p_liab:"PENALBOT provides information, analysis and content for informational purposes only. No warranty is given as to the accuracy, reliability or profitability of the information provided. The user uses the information at their own risk.",

    cgu_h1:"Terms of Use",
    cgu_h2_1:"1. Purpose", cgu_p_1:"These Terms of Use govern access to and use of the PENALBOT service.",
    cgu_h2_2:"2. Service Description", cgu_p_2:"PENALBOT provides analysis, recommendations and information related to sports betting. All information is provided strictly for informational and educational purposes.",
    cgu_h2_3:"3. Acceptance", cgu_p_3:"By using the website, you fully and unconditionally accept these Terms of Use.",
    cgu_h2_4:"4. User Responsibilities", cgu_p_4:"You acknowledge that you are of legal age in your country of residence, are solely responsible for your decisions, and use the service at your own risk.",
    cgu_h2_5:"5. No Warranty", cgu_p_5:"PENALBOT does not guarantee winnings, analysis performance, or absence of errors. Information provided does not constitute financial advice.",
    cgu_h2_6:"6. Responsible Gambling", cgu_warn:"Gambling involves a risk of addiction and significant financial loss. Please gamble responsibly.",
    cgu_h2_7:"7. Governing Law", cgu_p_7:"These Terms of Use are governed by the laws of Malta.",
  },
  fr: {
    nav_about:"Le projet", nav_engine:"Le moteur", nav_results:"Résultats", nav_pricing:"Tarifs", nav_cta:"Accéder", nav_tg:"Contact",
    hero_eyebrow:"Saison 25/26 · signaux live · 1 842 arbitres suivis",
    hero_h1_1:"Un marché.", hero_h1_2:"Un edge.", hero_h1_3:"Zéro bruit.",
    hero_sub:"PENALBOT est un moteur quantitatif dédié à un seul marché sous-estimé : le penalty. On croise données d'arbitrage, dynamiques offensives et cotes en direct — et on ne pousse que les signaux qui passent tous les filtres.",
    hero_cta1:"Rejoindre le room", hero_cta2:"Voir le moteur",
    hero_note:"Paiement Stripe · accès Telegram instantané · sans engagement",
    radar_title:"scanner-penalty · live", radar_fixtures:"matchs",
    radar_rejected:"sous seuil · rejeté",
    radar_threshold:"seuil", radar_leagues:"ligues", radar_latency:"latence",
    m_matches:"matchs analysés", m_win:"taux de réussite", m_roi:"ROI projeté", m_leagues:"profils d'arbitres suivis",

    about_kicker:"La thèse",
    about_h2:"Tout le monde chasse tous les marchés. <em>Nous en avons choisi un.</em>",
    about_lead:"Les généralistes perdent. Les spécialistes capitalisent. PENALBOT refuse de prédire tout et n'importe quoi — on possède le penalty, de bout en bout, on ignore le reste.",
    about_c1_h:"Une seule niche",
    about_c1_p:"Un vertical ignoré par les tipsters grand public. Une asymétrie d'information qui capitalise chaque semaine.",
    about_c2_h:"Livré sur Telegram",
    about_c2_p:"Les signaux arrivent dans un salon privé — formatés, actionnables, zéro friction entre détection et action.",
    about_c3_h:"Refuser le bruit",
    about_c3_p:"Moins de notifications, plus de conviction. Le moteur rejette les configurations ambiguës avant qu'elles ne t'atteignent.",

    eng_kicker:"Le moteur",
    eng_h2:"Quatre couches. <em>Un seul verdict.</em>",
    eng_lead:"Un pipeline quantitatif conçu pour isoler la probabilité du penalty — pas la forme, pas le total de buts. Le penalty, uniquement.",
    eng_l1_n:"Renseignement arbitral",
    eng_l1_p:"1 842 profils d'arbitres. Fréquence de penalty, variance de sévérité, biais domicile/extérieur — pondérés en un facteur arbitral.",
    eng_l2_n:"Pression & Vulnérabilité",
    eng_l2_p:"Le PPI mesure la pression offensive dans la surface. Le DVS mesure la fragilité défensive. Ensemble, ils cartographient le setup.",
    eng_l3_n:"Synthèse marché",
    eng_l3_p:"Cote interne vs prix bookmakers en live. On ne pousse que si l'edge survit au spread.",
    eng_l4_n:"Gestion de mise",
    eng_l4_p:"Unités pondérées à la conviction, calibrées à la bankroll. La taille de la mise suit la qualité du signal.",

    res_kicker:"La courbe",
    res_h2:"Capitaliser bat courir après. <em>À chaque fois.</em>",
    res_lead:"Backtest de ROI cumulé sur 12 mois de signaux sélectionnés. Mises disciplinées, drawdowns transparents, zéro biais rétrospectif.",
    res_leg_bot:"PENALBOT", res_leg_mkt:"Référence marché",
    res_r1:"3M", res_r2:"6M", res_r3:"12M",
    res_s1:"ROI cumulé", res_s2:"Drawdown max", res_s3:"Indice de Sharpe", res_s4:"Signaux / semaine",
    res_disclaim:"Backtest projeté · mises normalisées à 1u · les performances passées ne garantissent pas les résultats futurs.",

    pr_kicker:"Accès", pr_h2:"Trois portes. <em>Un seul room.</em>",
    pr_lead:"Choisis la profondeur. Le paiement Stripe t'envoie direct dans le room Telegram — aucun formulaire, aucune attente.",
    pr_mo:"/mois", pr_best:"Le plus choisi",
    pr_1_p:"Entre. Observe le moteur en action.",
    pr_1_f1:"Flux de signaux essentiels", pr_1_f2:"3 ligues principales", pr_1_f3:"Canal Telegram privé", pr_1_f4:"Support standard", pr_1_cta:"Choisir Starter",
    pr_2_p:"Le flux complet. Pour les utilisateurs sérieux.",
    pr_2_f1:"Tous les signaux, toutes les ligues", pr_2_f2:"Gestion de mise & bankroll", pr_2_f3:"Dispatch prioritaire", pr_2_f4:"Room Telegram dédié", pr_2_cta:"Choisir Pro",
    pr_3_p:"Sur mesure. Syndicats et partenaires.",
    pr_3_f1:"Onboarding prioritaire", pr_3_f2:"Ligne de support directe", pr_3_f3:"Workflow personnalisé", pr_3_f4:"Accès roadmap", pr_3_cta:"Contacter l'équipe",

    close_kicker:"Dans la room",
    close_h_1:"Voilà ce qui tombe",
    close_h_2:"dans ton Telegram.",
    close_lead:"Chaque signal arrive avec le verdict complet — score, probabilité, mise suggérée, facteurs clés. Pas de graphique à lire. Pas de stratégie à construire. Tu prends ou tu passes.",
    close_cta:"Recevoir les signaux",
    close_note:"Annulable à tout moment · Premier signal sous 24h",
    close_tg:"room premium · à l'instant",
    close_conf:"CONVICTION FORTE",
    close_sig_label:"Signal envoyé",
    close_k1:"Proba pénalty", close_k2:"Cote juste", close_k3:"Edge book", close_k4:"Mise",
    close_f1:"Biais arbitre", close_f2:"PPI · offensif", close_f3:"DVS · défensif",
    close_verdict:"Tous les filtres validés · envoyé au premium",

    tg_kicker:"Une question ? Écris-nous.",
    tg_cta:"Ouvrir dans Telegram",

    foot_tag:"Intelligence de signal penalty · 2026",
    foot_legal:"Mentions légales", foot_terms:"CGU", foot_tg:"Telegram", foot_contact:"Contact",
    foot_warn:"⚠ 18+ · Les paris comportent un risque d'addiction et de perte financière. Jouez responsable.",

    ml_h1:"Mentions légales",
    ml_h2_pub:"Éditeur", ml_p_pub:"Ce site est édité par <strong>PENALBOT</strong>, service numérique opéré depuis Malte.",
    ml_trade:"Nom commercial :", ml_form:"Forme juridique :", ml_form_v:"Private Limited Company (Ltd)", ml_office:"Siège social :",
    ml_h2_host:"Hébergement", ml_p_host:"Ce site est hébergé par <strong>Vercel Inc.</strong>",
    ml_h2_ip:"Propriété intellectuelle", ml_p_ip:"L'ensemble des contenus du site PENALBOT (textes, algorithmes, design, marque, logo, etc.) est protégé par les lois applicables en matière de propriété intellectuelle. Toute reproduction, distribution ou exploitation sans autorisation écrite préalable est strictement interdite.",
    ml_h2_liab:"Limitation de responsabilité", ml_p_liab:"PENALBOT fournit des informations, analyses et contenus à titre informatif uniquement. Aucune garantie n'est donnée quant à l'exactitude, la fiabilité ou la rentabilité des informations. L'utilisateur utilise les informations à ses risques.",

    cgu_h1:"Conditions générales d'utilisation",
    cgu_h2_1:"1. Objet", cgu_p_1:"Les présentes CGU régissent l'accès et l'utilisation du service PENALBOT.",
    cgu_h2_2:"2. Description", cgu_p_2:"PENALBOT fournit des analyses, recommandations et informations liées aux paris sportifs. Toutes les informations sont fournies à titre strictement informatif et éducatif.",
    cgu_h2_3:"3. Acceptation", cgu_p_3:"En utilisant ce site, vous acceptez pleinement et sans réserve les présentes CGU.",
    cgu_h2_4:"4. Responsabilités", cgu_p_4:"Vous reconnaissez être majeur dans votre pays de résidence, être seul responsable de vos décisions et utiliser le service à vos risques.",
    cgu_h2_5:"5. Aucune garantie", cgu_p_5:"PENALBOT ne garantit aucun gain, aucune performance ni absence d'erreurs. Les informations ne constituent pas un conseil financier.",
    cgu_h2_6:"6. Jeu responsable", cgu_warn:"Les paris comportent un risque d'addiction et de perte financière importante. Jouez responsable.",
    cgu_h2_7:"7. Droit applicable", cgu_p_7:"Les présentes CGU sont régies par les lois de Malte.",
  }
};

let currentLang = localStorage.getItem('pb_lang') || 'en';

function applyLang(lang){
  currentLang = lang;
  localStorage.setItem('pb_lang', lang);
  document.documentElement.lang = lang;
  document.documentElement.setAttribute('data-lang', lang);
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const k = el.getAttribute('data-i18n');
    const v = I18N[lang]?.[k];
    if(v !== undefined) el.innerHTML = v;
  });
  document.querySelectorAll('[data-lang-btn]').forEach(b=>{
    b.classList.toggle('active', b.getAttribute('data-lang-btn')===lang);
  });
}

document.getElementById('langToggle').addEventListener('click', ()=>{
  applyLang(currentLang === 'en' ? 'fr' : 'en');
});
applyLang(currentLang);

/* ---------- COUNTER ANIMATION ---------- */
function animCount(el){
  const target = parseFloat(el.dataset.target);
  const suffix = el.dataset.suffix||'';
  const prefix = el.dataset.prefix||'';
  const dec = parseInt(el.dataset.dec||'0');
  const sep = el.dataset.sep==='true';
  const dur = 1600;
  const start = performance.now();
  (function step(now){
    const p = Math.min((now-start)/dur, 1);
    const e = 1 - Math.pow(1-p, 3);
    const v = target * e;
    let s = dec>0 ? v.toFixed(dec) : Math.floor(v).toString();
    if(sep) s = parseInt(s).toLocaleString('en-US');
    el.textContent = prefix + s + suffix;
    if(p<1) requestAnimationFrame(step);
  })(start);
}

/* ---------- SCROLL REVEAL ---------- */
const revObs = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('on');
      const strong = e.target.querySelector('[data-target]');
      if(strong) animCount(strong);
      revObs.unobserve(e.target);
    }
  });
}, {threshold:.15});
document.querySelectorAll('.reveal').forEach((el,i)=>{
  el.style.setProperty('--d', (i%3)*0.08 + 's');
  revObs.observe(el);
});

/* ---------- RADAR BLIPS ---------- */
const blipsGroup = document.getElementById('blips');
const radarCount = document.getElementById('radarCount');
let fixtureCount = 0;
const fixtureTarget = 24;
(function radarCountAnim(){
  const start = performance.now();
  (function step(now){
    const p = Math.min((now-start)/2000, 1);
    const e = 1 - Math.pow(1-p, 3);
    radarCount.textContent = Math.floor(fixtureTarget * e);
    if(p<1) requestAnimationFrame(step);
  })(start);
})();

function spawnBlip(){
  if(!blipsGroup) return;
  const angle = Math.random() * Math.PI * 2;
  const radius = 40 + Math.random() * 130;
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;
  const hot = Math.random() > 0.65;
  const ns = 'http://www.w3.org/2000/svg';
  const g = document.createElementNS(ns, 'g');
  g.setAttribute('class', 'blip');
  g.setAttribute('transform', `translate(${x.toFixed(1)} ${y.toFixed(1)})`);
  const c1 = document.createElementNS(ns, 'circle');
  c1.setAttribute('cx', '0'); c1.setAttribute('cy', '0');
  c1.setAttribute('r', '0');
  c1.setAttribute('fill', 'none');
  c1.setAttribute('stroke', hot ? '#ff48d4' : '#b92eff');
  c1.setAttribute('stroke-width', hot ? '1.6' : '1');
  g.appendChild(c1);
  const c2 = document.createElementNS(ns, 'circle');
  c2.setAttribute('cx', '0'); c2.setAttribute('cy', '0');
  c2.setAttribute('r', hot ? '2.5' : '1.6');
  c2.setAttribute('fill', hot ? '#ff48d4' : '#b92eff');
  c2.setAttribute('opacity', '0.85');
  g.appendChild(c2);
  blipsGroup.appendChild(g);
  // animate
  g.animate(
    [{opacity:0},{opacity:1,offset:.1},{opacity:0}],
    {duration:2400, easing:'ease-out'}
  );
  c1.animate(
    [{r:2,opacity:1},{r:14,opacity:0}],
    {duration:2400, easing:'ease-out'}
  );
  setTimeout(()=>g.remove(), 2400);
}
setInterval(spawnBlip, 380);
for(let i=0;i<5;i++) setTimeout(spawnBlip, i*200);

/* ---------- LAYER VIZ ---------- */
// Ref: bars
const vizRef = document.getElementById('vizRef');
if(vizRef){
  const bars = 24;
  for(let i=0;i<bars;i++){
    const b = document.createElement('div');
    b.className = 'bar';
    b.style.height = (15 + Math.random()*70) + '%';
    vizRef.appendChild(b);
  }
  // animate bar heights occasionally
  setInterval(()=>{
    vizRef.querySelectorAll('.bar').forEach(b=>{
      b.style.height = (15 + Math.random()*70) + '%';
    });
  }, 2200);
}

// PPI: two overlapping curves
const vizPPI = document.getElementById('vizPPI');
if(vizPPI){
  vizPPI.innerHTML = `
    <svg viewBox="0 0 200 60" preserveAspectRatio="none">
      <defs>
        <linearGradient id="ppiA" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#b92eff" stop-opacity=".5"/>
          <stop offset="100%" stop-color="#b92eff" stop-opacity="0"/>
        </linearGradient>
        <linearGradient id="ppiB" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ff48d4" stop-opacity=".4"/>
          <stop offset="100%" stop-color="#ff48d4" stop-opacity="0"/>
        </linearGradient>
      </defs>
      <path d="M0,50 C25,30 45,42 70,28 C95,12 120,35 145,20 C170,8 185,18 200,14 L200,60 L0,60 Z" fill="url(#ppiA)"/>
      <path d="M0,50 C25,30 45,42 70,28 C95,12 120,35 145,20 C170,8 185,18 200,14" fill="none" stroke="#b92eff" stroke-width="1.5"/>
      <path d="M0,46 C30,48 55,30 80,38 C110,48 135,22 160,32 C180,40 190,30 200,34 L200,60 L0,60 Z" fill="url(#ppiB)"/>
      <path d="M0,46 C30,48 55,30 80,38 C110,48 135,22 160,32 C180,40 190,30 200,34" fill="none" stroke="#ff48d4" stroke-width="1.5" stroke-dasharray="3 3"/>
    </svg>
  `;
}

// MKT: fair vs book
const vizMkt = document.getElementById('vizMkt');
if(vizMkt){
  vizMkt.innerHTML = `
    <div class="mk"><span>fair</span><b>2.84</b></div>
    <div class="arrow">→</div>
    <div class="mk"><span>book</span><b>3.15</b></div>
    <div class="arrow" style="color:#42f5a0">edge</div>
    <div class="mk"><span style="color:#42f5a0">+10.9%</span><b style="color:#42f5a0">✓</b></div>
  `;
}

// Stake
const vizStake = document.getElementById('vizStake');
if(vizStake){
  for(let i=0;i<10;i++){
    const u = document.createElement('div');
    u.className = 'unit';
    if(i<6) u.classList.add('on');
    vizStake.appendChild(u);
  }
  setInterval(()=>{
    const units = vizStake.querySelectorAll('.unit');
    const count = 3 + Math.floor(Math.random()*6);
    units.forEach((u,i)=> u.classList.toggle('on', i<count));
  }, 2400);
}

/* ---------- CHART ---------- */
const chartEl = document.getElementById('chart');
const statRoi = document.getElementById('statRoi');

function genSeries(months, endValue, volatility, seed=1){
  const n = months * 4; // weekly points
  const pts = [];
  let v = 0;
  let r = seed;
  const rng = () => { r = (r * 9301 + 49297) % 233280; return r/233280; };
  for(let i=0;i<=n;i++){
    const t = i/n;
    const target = endValue * t;
    const noise = (rng()-.5) * volatility;
    v = target + noise - (v - target) * 0.1;
    pts.push(Math.max(-12, v));
  }
  // force endpoint
  pts[pts.length-1] = endValue;
  return pts;
}

function drawChart(rangeMonths){
  const W = 820, H = 320;
  const padL = 36, padR = 24, padT = 20, padB = 30;
  const endValues = { 3: 18.2, 6: 36.4, 12: 70.5 };
  const mktEnd    = { 3: 3.1,  6: 6.4,  12: 9.8 };
  const bot = genSeries(rangeMonths, endValues[rangeMonths], 2.2, 7);
  const mkt = genSeries(rangeMonths, mktEnd[rangeMonths], 0.8, 11);
  const n = bot.length - 1;
  const maxY = Math.max(...bot) * 1.12;
  const minY = Math.min(Math.min(...bot), Math.min(...mkt), -4);

  const x = i => padL + (i/n) * (W - padL - padR);
  const y = v => padT + (1 - (v - minY)/(maxY - minY)) * (H - padT - padB);

  const toPath = arr => arr.map((v,i)=> (i===0?'M':'L') + x(i).toFixed(1) + ',' + y(v).toFixed(1)).join(' ');
  const fillPath = arr => toPath(arr) + ` L${x(n).toFixed(1)},${y(minY).toFixed(1)} L${x(0).toFixed(1)},${y(minY).toFixed(1)} Z`;

  // Y-axis labels
  const yTicks = [];
  for(let i=0;i<=4;i++){
    const val = minY + (maxY-minY)*(1 - i/4);
    yTicks.push({y: padT + (i/4)*(H-padT-padB), label: (val>=0?'+':'') + val.toFixed(0) + '%'});
  }

  // X-axis labels
  const xTicks = [];
  const steps = rangeMonths === 3 ? 3 : rangeMonths === 6 ? 6 : 6;
  for(let i=0;i<=steps;i++){
    const idx = Math.round((i/steps) * n);
    const month = Math.round((i/steps) * rangeMonths);
    xTicks.push({x: x(idx), label: 'M' + month});
  }

  chartEl.innerHTML = `
    <defs>
      <linearGradient id="chartGrad" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#7c3bff"/>
        <stop offset="100%" stop-color="#ff48d4"/>
      </linearGradient>
      <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#b92eff" stop-opacity=".28"/>
        <stop offset="100%" stop-color="#b92eff" stop-opacity="0"/>
      </linearGradient>
    </defs>
    ${yTicks.map(t=>`<line class="grid-line" x1="${padL}" y1="${t.y}" x2="${W-padR}" y2="${t.y}"/>`).join('')}
    ${yTicks.map(t=>`<text class="axis" x="${padL-8}" y="${t.y+3}" text-anchor="end">${t.label}</text>`).join('')}
    ${xTicks.map(t=>`<text class="axis" x="${t.x}" y="${H-10}" text-anchor="middle">${t.label}</text>`).join('')}
    <line class="grid-line" x1="${padL}" y1="${y(0)}" x2="${W-padR}" y2="${y(0)}" stroke="rgba(255,255,255,.1)"/>
    <path class="bot-fill" d="${fillPath(bot)}"/>
    <path class="mkt-path" d="${toPath(mkt)}"/>
    <path class="bot-path" d="${toPath(bot)}"/>
    <circle class="point" cx="${x(n)}" cy="${y(bot[n])}" r="5"/>
    <g transform="translate(${x(n)-8}, ${y(bot[n])-16})">
      <rect x="-46" y="-16" width="92" height="22" rx="5" fill="#0d0818" stroke="rgba(255,72,212,.5)"/>
      <text class="label" x="0" y="-1" text-anchor="middle">+${endValues[rangeMonths].toFixed(1)}%</text>
    </g>
  `;

  // animate the bot path draw-in
  const botPath = chartEl.querySelector('.bot-path');
  if(botPath){
    const len = botPath.getTotalLength();
    botPath.style.strokeDasharray = len;
    botPath.style.strokeDashoffset = len;
    botPath.style.transition = 'stroke-dashoffset 1.6s cubic-bezier(.22,1,.36,1)';
    requestAnimationFrame(()=>{ botPath.style.strokeDashoffset = 0; });
  }
  const botFill = chartEl.querySelector('.bot-fill');
  if(botFill){
    botFill.style.opacity = 0;
    botFill.style.transition = 'opacity 1.2s .6s';
    requestAnimationFrame(()=>{ botFill.style.opacity = 1; });
  }

  // update stat
  statRoi.textContent = '+' + endValues[rangeMonths].toFixed(1) + '%';
}

drawChart(12);

document.querySelectorAll('#chartRange button').forEach(b=>{
  b.addEventListener('click', ()=>{
    document.querySelectorAll('#chartRange button').forEach(x=>x.classList.remove('active'));
    b.classList.add('active');
    drawChart(parseInt(b.dataset.range));
  });
});

/* ---------- NAV ACTIVE STATE ---------- */
const sections = ['about','engine','results','pricing'];
const navLinks = document.querySelectorAll('.nav-links a');
window.addEventListener('scroll', ()=>{
  let cur = '';
  sections.forEach(id=>{
    const s = document.getElementById(id);
    if(s && window.scrollY >= s.offsetTop - 160) cur = id;
  });
  navLinks.forEach(a=>{
    a.classList.toggle('active', a.getAttribute('href') === '#' + cur);
  });
}, {passive:true});

/* ---------- ESC closes modals ---------- */
document.addEventListener('keydown', e=>{
  if(e.key === 'Escape'){
    ['modal-ml','modal-cgu'].forEach(id=>{
      const m = document.getElementById(id);
      if(m) m.style.display = 'none';
    });
  }
});

/* ---------- Parallax on radar (subtle, on mouse) ---------- */
const radarCard = document.querySelector('.radar-card');
if(radarCard){
  radarCard.addEventListener('mousemove', e=>{
    const rect = radarCard.getBoundingClientRect();
    const cx = (e.clientX - rect.left) / rect.width - .5;
    const cy = (e.clientY - rect.top) / rect.height - .5;
    radarCard.style.transform = `perspective(1000px) rotateY(${cx*4}deg) rotateX(${-cy*4}deg)`;
  });
  radarCard.addEventListener('mouseleave', ()=>{
    radarCard.style.transform = '';
  });
}
