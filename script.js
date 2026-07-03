const kpis = [
  {
    category: "Energy Reliability",
    what: "Track whether the system delivers dependable electricity when and where it is needed.",
    why: "Reliability proves the solution improves daily life, not just installed capacity.",
    metric: "Achieve ≥95% uptime for priority loads within the first operating year.",
    indicators: ["System uptime", "Outage hours avoided", "Battery autonomy", "Load served"]
  },
  {
    category: "Community Impact",
    what: "Measure how the project improves health, education, water access, and productive use.",
    why: "Judges need proof that the solution changes outcomes for people.",
    metric: "Serve at least 3 critical community uses within 12 months.",
    indicators: ["Households served", "Clinic hours powered", "School hours powered", "Water access"]
  },
  {
    category: "Safety & Resilience",
    what: "Monitor safe operation under heat, storms, outages, and user interaction.",
    why: "Energy access must be safe, maintainable, and resilient under real field conditions.",
    metric: "Maintain zero major safety incidents and complete monthly inspection logs.",
    indicators: ["Fault events", "Temperature alarms", "Protection status", "Inspection completion"]
  },
  {
    category: "Cost & Financial Viability",
    what: "Track capital cost, operating cost, affordability, and long-term sustainability.",
    why: "A winning proposal must show that the solution can be funded, scaled, and maintained.",
    metric: "Reduce backup energy cost by ≥20% while staying within approved budget range.",
    indicators: ["CAPEX", "OPEX", "Cost per kWh", "Cost per beneficiary"]
  },
  {
    category: "Environmental / SDG Impact",
    what: "Measure emissions avoided and alignment with Ghana’s development priorities.",
    why: "Clean energy should create measurable climate and community benefits.",
    metric: "Estimate CO₂ avoided monthly and map outcomes to priority SDGs.",
    indicators: ["CO₂ avoided", "Renewable share", "Diesel avoided", "SDG alignment"]
  },
  {
    category: "Implementation Readiness",
    what: "Track permitting, procurement, training, maintenance, partnerships, and deployment status.",
    why: "A strong idea must also look executable and judge-ready.",
    metric: "Complete site assessment, stakeholder plan, training plan, and maintenance plan before deployment.",
    indicators: ["Milestones complete", "Partner commitments", "Training completion", "Maintenance readiness"]
  }
];

const statusItems = [
  { label: "Site & Community Needs", value: 85, note: "Priority-load model defined" },
  { label: "Technical Design", value: 75, note: "Solar + storage architecture selected" },
  { label: "Funding Strategy", value: 65, note: "Grant and partnership pathways identified" },
  { label: "Safety Planning", value: 70, note: "Protection and inspection KPIs included" },
  { label: "Dashboard Monitoring", value: 90, note: "KPI framework ready for prototype" }
];

const sdgs = [
  { id: "SDG 3", label: "Health & Well-Being" },
  { id: "SDG 4", label: "Quality Education" },
  { id: "SDG 6", label: "Clean Water" },
  { id: "SDG 7", label: "Clean Energy" },
  { id: "SDG 8", label: "Economic Growth" },
  { id: "SDG 9", label: "Infrastructure" },
  { id: "SDG 13", label: "Climate Action" },
  { id: "SDG 17", label: "Partnerships" }
];

const kpiGrid = document.getElementById("kpiGrid");
const statusGrid = document.getElementById("statusGrid");
const sdgGrid = document.getElementById("sdgGrid");

kpis.forEach((kpi, index) => {
  const card = document.createElement("article");
  card.className = "kpi-card";
  card.innerHTML = `
    <span>KPI ${index + 1}</span>
    <h3>${kpi.category}</h3>
    <p><strong>What:</strong> ${kpi.what}</p>
    <p><strong>Why:</strong> ${kpi.why}</p>
    <div class="metric">${kpi.metric}</div>
    <ul class="indicators">
      ${kpi.indicators.map(item => `<li>${item}</li>`).join("")}
    </ul>
  `;
  kpiGrid.appendChild(card);
});

statusItems.forEach(item => {
  const card = document.createElement("article");
  card.className = "status-card";
  card.innerHTML = `
    <span>${item.label}</span>
    <div class="progress-bar">
      <div class="progress-fill" style="width:${item.value}%"></div>
    </div>
    <strong>${item.value}% Ready</strong>
    <p>${item.note}</p>
  `;
  statusGrid.appendChild(card);
});

sdgs.forEach(sdg => {
  const card = document.createElement("article");
  card.className = "sdg-card";
  card.innerHTML = `
    <strong>${sdg.id}</strong>
    <p>${sdg.label}</p>
  `;
  sdgGrid.appendChild(card);
});
