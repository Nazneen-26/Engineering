/* ---------- DATA ---------- */
const services = [
  {slug:"building-repair",icon:"fa-house-crack",title:"Building Repair",img:"https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=500&q=80",desc:"Comprehensive repair for aging or damaged residential and commercial structures."},
  {slug:"structural-repair",icon:"fa-diagram-project",title:"Structural Repair",img:"https://images.unsplash.com/photo-1590725175055-27834a97ec70?w=500&q=80",desc:"Column, beam and slab repairs engineered to restore full load capacity."},
  {slug:"crack-repair",icon:"fa-bolt",title:"Crack Repair",img:"https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=500&q=80",desc:"Root-cause crack diagnosis and epoxy/polymer sealing for lasting results."},
  {slug:"waterproofing",icon:"fa-droplet",title:"Waterproofing",img:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&q=80",desc:"Basement, wall and roof waterproofing systems that stop leaks for good."},
  {slug:"terrace-waterproofing",icon:"fa-cloud-rain",title:"Terrace Waterproofing",img:"https://images.unsplash.com/photo-1622021142947-da7dedc7c39a?w=500&q=80",desc:"Membrane and coating systems built for monsoon-grade terrace protection."},
  {slug:"home-renovation",icon:"fa-house",title:"Home Renovation",img:"https://images.unsplash.com/photo-1615529182904-14819c35db37?w=500&q=80",desc:"Full home makeovers — from layout changes to finishing touches."},
  {slug:"commercial-renovation",icon:"fa-building",title:"Commercial Renovation",img:"https://images.unsplash.com/photo-1497366216548-37526070297c?w=500&q=80",desc:"Office and retail renovation with minimal disruption to operations."},
  {slug:"rcc-repair",icon:"fa-industry",title:"RCC Repair",img:"https://images.unsplash.com/photo-1541976590-713941681591?w=500&q=80",desc:"Reinforced concrete repair using corrosion-resistant, code-compliant methods."},
  {slug:"building-maintenance",icon:"fa-screwdriver-wrench",title:"Building Maintenance",img:"https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=500&q=80",desc:"Scheduled AMC plans that catch small issues before they become big ones."},
];

const whyItems = [
  {icon:"fa-user-graduate",title:"Experienced Civil Engineers",desc:"Licensed structural engineers lead every project."},
  {icon:"fa-people-carry-box",title:"Skilled Workforce",desc:"Trained, in-house repair crews — no subcontractor gambles."},
  {icon:"fa-award",title:"Premium Materials",desc:"Certified epoxies, membranes, and admixtures only."},
  {icon:"fa-clock",title:"On-Time Completion",desc:"Milestone-based schedules, tracked and shared with you."},
  {icon:"fa-tags",title:"Affordable Pricing",desc:"Transparent, itemized quotes with no hidden costs."},
  {icon:"fa-magnifying-glass",title:"Free Site Inspection",desc:"A structural engineer visits before you commit to anything."},
  {icon:"fa-gears",title:"Modern Equipment",desc:"Moisture meters, rebound hammers and injection tools on every site."},
  {icon:"fa-face-smile",title:"Customer Satisfaction",desc:"300+ happy clients and counting, across 12 cities."},
];

const beforeAfter = [
  {label:"Terrace Waterproofing",before:"https://images.unsplash.com/photo-1622021142947-da7dedc7c39a?w=900&q=80",after:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80"},
  {label:"Facade Crack Repair",before:"https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&q=80",after:"https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80"},
  {label:"Interior Renovation",before:"https://images.unsplash.com/photo-1618221469555-7f3ad97540d6?w=900&q=80",after:"https://images.unsplash.com/photo-1615529182904-14819c35db37?w=900&q=80"},
];

const projects = [
  {slug:"palm-residency-retrofit",img:"https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80",name:"Palm Residency Retrofit",loc:"Andheri, Mumbai",type:"Structural Repair",cat:"structural",date:"Mar 2026",desc:"Full column and beam strengthening for a 40-year-old residential tower."},
  {slug:"skyline-business-park",img:"https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80",name:"Skyline Business Park",loc:"BKC, Mumbai",type:"Commercial Renovation",cat:"commercial",date:"Jan 2026",desc:"Complete office floor renovation completed in 6 weeks with zero downtime."},
  {slug:"greenfield-society-terrace",img:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80",name:"Greenfield Society Terrace",loc:"Thane",type:"Waterproofing",cat:"waterproofing",date:"Feb 2026",desc:"Terrace membrane waterproofing across 8 building blocks."},
  {slug:"the-willow-bungalow",img:"https://images.unsplash.com/photo-1615529182904-14819c35db37?w=700&q=80",name:"The Willow Bungalow",loc:"Juhu, Mumbai",type:"Home Renovation",cat:"renovation",date:"Dec 2025",desc:"Full interior and exterior renovation of a heritage-style bungalow."},
  {slug:"coral-heights-apartments",img:"https://images.unsplash.com/photo-1590725175055-27834a97ec70?w=700&q=80",name:"Coral Heights Apartments",loc:"Powai, Mumbai",type:"Structural Repair",cat:"structural",date:"Nov 2025",desc:"RCC slab repair and rebar corrosion treatment for 3 residential blocks."},
  {slug:"sunrise-housing-society",img:"https://images.unsplash.com/photo-1622021142947-da7dedc7c39a?w=700&q=80",name:"Sunrise Housing Society",loc:"Navi Mumbai",type:"Waterproofing",cat:"waterproofing",date:"Oct 2025",desc:"Basement and podium waterproofing for a 200-unit housing society."},
  {slug:"riverside-residences",img:"https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=700&q=80",name:"Riverside Residences",loc:"Vashi",type:"Renovation",cat:"renovation",date:"Sep 2025",desc:"Facade repainting and balcony crack repair across the complex."},
  {slug:"metro-plaza-mall",img:"https://images.unsplash.com/photo-1541976590-713941681591?w=700&q=80",name:"Metro Plaza Mall",loc:"Ghatkopar, Mumbai",type:"Commercial",cat:"commercial",date:"Aug 2025",desc:"Structural strengthening of the parking podium slab."},
];

const testimonials = [
  {name:"Anita Deshmukh",loc:"Andheri, Mumbai",img:"https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&q=80",quote:"The team found the actual source of our seepage instead of just repainting over it. Two years later, still dry."},
  {name:"Rohan Mehta",loc:"Thane",img:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=150&q=80",quote:"Our society trusted Sturdcore with a full structural audit and repair. Transparent pricing, no surprises."},
  {name:"Priya Nair",loc:"Powai, Mumbai",img:"https://images.unsplash.com/photo-1548142813-c348350df52b?w=150&q=80",quote:"They renovated our entire home in under 8 weeks, exactly as scheduled. Genuinely impressed."},
  {name:"Suresh Iyer",loc:"Navi Mumbai",img:"https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&q=80",quote:"Free inspection convinced us instantly — an actual engineer, not a salesperson, walked our site."},
];

const process = [
  {icon:"fa-phone",title:"Contact Us"},
  {icon:"fa-magnifying-glass",title:"Site Inspection"},
  {icon:"fa-comments",title:"Project Discussion"},
  {icon:"fa-calculator",title:"Cost Estimation"},
  {icon:"fa-drafting-compass",title:"Planning"},
  {icon:"fa-person-digging",title:"Repair Work"},
  {icon:"fa-clipboard-check",title:"Quality Inspection"},
  {icon:"fa-flag-checkered",title:"Project Completion"},
];

const faqs = [
  {q:"How do I know if my building needs structural repair?",a:"Warning signs include widening cracks, water seepage, sagging slabs, or rusted rebar exposure. Our free site inspection identifies the real cause before any repair begins."},
  {q:"How much does waterproofing typically cost?",a:"Cost depends on area, surface condition, and the waterproofing system needed. We provide a detailed, itemized quote after a free on-site assessment — no obligation."},
  {q:"How long does a typical renovation project take?",a:"Small repairs can take a few days; full home or commercial renovations typically run 4–10 weeks, with a schedule shared upfront and tracked at each milestone."},
  {q:"Do you offer a warranty on repair work?",a:"Yes. All structural and waterproofing work carries a workmanship warranty, with terms specific to the service — detailed in your project agreement."},
  {q:"Is the site inspection really free?",a:"Yes, always. A qualified engineer visits your property, assesses the issue, and provides recommendations at no cost or obligation to proceed."},
  {q:"Do you handle both residential and commercial properties?",a:"Yes — from individual homes to housing societies, offices, and retail spaces, across structural repair, waterproofing, and renovation."},
];

/* ---------- SERVICE DETAIL CONTENT (keyed by slug) ---------- */
const serviceDetails = {
  "building-repair": {
    tagline:"Restoring safety and value to tired, ageing structures.",
    intro:["Buildings show their age in predictable ways — spalling concrete, peeling paint over damp patches, doors that stop closing squarely. Building Repair is our catch-all diagnostic-first service for exactly these symptoms, treating the underlying cause rather than the surface.","Every job starts with a structural walk-through by an engineer, not a salesperson, so the repair scope matches what's actually happening inside the walls."],
    benefits:["Root-cause diagnosis before any repair begins","Restores structural safety, not just appearance","Extends building lifespan by 15-20 years on average","Documented repair report for society records","Minimal disruption to residents during work"],
    process:[{icon:"fa-magnifying-glass",title:"Inspection"},{icon:"fa-file-lines",title:"Diagnostic Report"},{icon:"fa-calculator",title:"Estimate"},{icon:"fa-person-digging",title:"Repair Execution"},{icon:"fa-clipboard-check",title:"Final Sign-off"}],
    faqs:[
      {q:"How do I know if my building needs repair rather than just repainting?",a:"If cracks reappear after painting, or you see rust stains, bulging plaster, or damp patches, the issue is structural or moisture-related — paint alone won't fix it. Our free inspection tells you which."},
      {q:"Will repair work disturb residents?",a:"We phase work floor-by-floor or wing-by-wing wherever possible and use low-dust, low-noise methods to keep the building livable throughout."},
      {q:"Do you repair both RCC and load-bearing structures?",a:"Yes — our engineers handle both RCC frame buildings and older load-bearing masonry structures, each with method suited to the construction type."},
      {q:"What warranty applies to building repair work?",a:"Workmanship warranty terms are set out in your project agreement and vary by the specific repair scope — typically 2-5 years depending on the system used."}
    ],
    before:"https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&q=80",
    after:"https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80"
  },
  "structural-repair": {
    tagline:"Restoring full load-bearing capacity to columns, beams and slabs.",
    intro:["Structural Repair addresses the load-bearing skeleton of a building — cracked or spalled columns, sagging beams, and slabs showing rebar corrosion. Left untreated, these issues compound quickly and compromise safety.","Our engineers use rebound hammer and cover-meter testing to quantify the damage before recommending jacketing, micro-concreting, or FRP wrapping — the right fix for the actual condition, not a default one."],
    benefits:["Restores original or improved load capacity","Non-destructive testing confirms the real extent of damage","Seismic-grade retrofit options available","Certified corrosion-resistant rebar treatment","Structural stability certificate on completion"],
    process:[{icon:"fa-magnifying-glass",title:"NDT Testing"},{icon:"fa-drafting-compass",title:"Structural Design"},{icon:"fa-calculator",title:"Estimate"},{icon:"fa-person-digging",title:"Jacketing/Repair"},{icon:"fa-clipboard-check",title:"Load Verification"}],
    faqs:[
      {q:"What causes structural damage to columns and beams?",a:"Most commonly, water ingress corrodes internal rebar, which expands and cracks the surrounding concrete — a process called spalling. Overloading and poor original construction also contribute."},
      {q:"Is structural repair cheaper than demolition and rebuilding?",a:"In almost every case, yes — and it avoids the cost, disruption and time of a full rebuild. Our engineers will tell you honestly if a section is beyond economical repair."},
      {q:"How long does structural repair take?",a:"A single column or beam typically takes 5-10 days including curing time; building-wide retrofits are scheduled over several weeks in phases."},
      {q:"Do you provide a stability certificate afterward?",a:"Yes, our structural engineer issues a signed stability assessment on completion, useful for society records and insurance."}
    ],
    before:"https://images.unsplash.com/photo-1590725175055-27834a97ec70?w=900&q=80",
    after:"https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80"
  },
  "crack-repair": {
    tagline:"Root-cause diagnosis and lasting seals for structural and cosmetic cracks.",
    intro:["Not all cracks are equal — a hairline plaster crack and a diagonal structural crack call for entirely different fixes. We classify every crack by width, pattern and depth before choosing epoxy injection, polymer-modified filling, or a structural intervention.","This diagnostic step is what separates a repair that lasts from a paint-over that reopens within a monsoon."],
    benefits:["Correct classification prevents recurring cracks","Epoxy injection restores structural continuity","Elastomeric sealants handle moving cracks safely","Matched finish blends invisibly with existing surface","Fast turnaround for non-structural cracks"],
    process:[{icon:"fa-magnifying-glass",title:"Crack Mapping"},{icon:"fa-flask",title:"Diagnosis"},{icon:"fa-syringe",title:"Injection/Sealing"},{icon:"fa-paint-roller",title:"Surface Finishing"},{icon:"fa-clipboard-check",title:"Inspection"}],
    faqs:[
      {q:"Is a crack in my wall dangerous?",a:"Vertical hairline cracks are usually cosmetic; diagonal, stepped, or widening cracks can indicate structural movement and need an engineer's assessment quickly."},
      {q:"Will the repaired crack be visible?",a:"For cosmetic cracks, we finish and repaint to match — the repair is invisible. Structural repairs prioritize strength first, with finishing matched as closely as possible."},
      {q:"How do you repair cracks that keep reopening?",a:"Recurring cracks usually indicate ongoing movement. We use flexible sealants for active cracks and address any underlying settlement or thermal movement causing them."},
      {q:"Do you repair cracks in both RCC and brick walls?",a:"Yes, our methods are adapted specifically for RCC members versus masonry infill walls, which behave very differently."}
    ],
    before:"https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&q=80",
    after:"https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80"
  },
  "waterproofing": {
    tagline:"Basement, wall and roof systems that stop leaks permanently.",
    intro:["Waterproofing failures are almost always a systems problem, not a single spot to patch — water finds the next weakest point. We assess the full moisture path, from source to symptom, before designing a membrane or coating system.","Our waterproofing covers basements, retaining walls, bathrooms, and podiums, using systems matched to hydrostatic pressure and usage conditions."],
    benefits:["Full moisture-path diagnosis, not spot-fixing","Systems rated for hydrostatic and monsoon conditions","Protects structural steel from corrosion long-term","10-year workmanship warranty on major systems","Reduces long-term maintenance costs"],
    process:[{icon:"fa-magnifying-glass",title:"Leak Source Survey"},{icon:"fa-vial",title:"Moisture Testing"},{icon:"fa-layer-group",title:"System Selection"},{icon:"fa-person-digging",title:"Application"},{icon:"fa-clipboard-check",title:"Flood Test"}],
    faqs:[
      {q:"Why does my basement still leak after previous waterproofing?",a:"Often the original work treated a symptom, not the actual entry point. Our survey traces water back to its true source before selecting a system."},
      {q:"What's the difference between a coating and a membrane system?",a:"Coatings suit lower-pressure areas like bathroom walls; membranes are needed for basements and terraces facing sustained water pressure. We recommend based on your specific exposure."},
      {q:"How soon can the area be used after waterproofing?",a:"Most systems need 3-7 days curing before flood-testing and handover, depending on the product and weather conditions."},
      {q:"Is waterproofing covered by warranty?",a:"Yes, our major systems carry up to a 10-year workmanship warranty, detailed in your project agreement."}
    ],
    before:"https://images.unsplash.com/photo-1622021142947-da7dedc7c39a?w=900&q=80",
    after:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80"
  },
  "terrace-waterproofing": {
    tagline:"Monsoon-grade membrane systems for lasting terrace protection.",
    intro:["Terraces take the worst of the weather — ponding water, UV exposure, and thermal expansion all at once. Our terrace waterproofing combines slope correction, membrane or coating application, and protective screed to handle monsoon-grade conditions season after season.","We test every terrace for proper drainage slope before application, since even the best membrane fails over standing water."],
    benefits:["Slope correction eliminates water ponding","UV-stable membranes built for terrace exposure","Reduces heat transmission into top-floor units","Flood-tested before handover","Extends terrace usable life by a decade or more"],
    process:[{icon:"fa-magnifying-glass",title:"Slope & Leak Survey"},{icon:"fa-ruler",title:"Slope Correction"},{icon:"fa-layer-group",title:"Membrane Selection"},{icon:"fa-person-digging",title:"Application & Screed"},{icon:"fa-clipboard-check",title:"Flood Test"}],
    faqs:[
      {q:"How often does terrace waterproofing need to be redone?",a:"Quality membrane systems typically last 8-12 years with proper maintenance; we also offer AMC plans to extend this further."},
      {q:"Can waterproofing be done during monsoon?",a:"We strongly recommend scheduling before monsoon; wet substrates during application compromise membrane bonding and long-term performance."},
      {q:"Does terrace waterproofing help with heat inside the building?",a:"Yes, most modern membrane systems include reflective or insulating properties that meaningfully reduce top-floor heat gain."},
      {q:"What if my terrace has existing structural cracks?",a:"We repair structural cracks first, then apply the waterproofing system — treating symptoms without fixing cracks first leads to early failure."}
    ],
    before:"https://images.unsplash.com/photo-1622021142947-da7dedc7c39a?w=900&q=80",
    after:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80"
  },
  "home-renovation": {
    tagline:"Full home makeovers — from layout changes to finishing touches.",
    intro:["Home Renovation covers everything from opening up a layout to a complete interior and exterior refresh. Because our core team is structural engineers, we can safely modify walls and layouts that a purely interior-design firm would have to leave alone.","We manage the entire scope — civil work, electrical and plumbing coordination, and finishing — under one accountable team and one schedule."],
    benefits:["Structural expertise for safe layout changes","Single point of accountability for the full project","Fixed-price, itemized quotes with no scope creep","Quality finishing matched to your material choices","On-site project supervisor throughout"],
    process:[{icon:"fa-comments",title:"Design Discussion"},{icon:"fa-drafting-compass",title:"Layout Planning"},{icon:"fa-calculator",title:"Costing"},{icon:"fa-person-digging",title:"Civil & Finishing Work"},{icon:"fa-clipboard-check",title:"Handover"}],
    faqs:[
      {q:"Can you remove a wall between two rooms?",a:"Often yes — our structural engineers assess whether a wall is load-bearing and design a beam solution if needed before any wall comes down."},
      {q:"Do you handle electrical and plumbing too?",a:"We coordinate licensed electrical and plumbing work as part of the overall renovation schedule, so nothing falls through the cracks between contractors."},
      {q:"How long does a full home renovation take?",a:"Typically 4-10 weeks depending on scope, shared as a milestone schedule upfront so you know exactly what to expect."},
      {q:"Can I stay in the home during renovation?",a:"For partial renovations, often yes, with work zoned to minimize disruption. For full renovations we'll advise honestly if temporary relocation makes sense."}
    ],
    before:"https://images.unsplash.com/photo-1618221469555-7f3ad97540d6?w=900&q=80",
    after:"https://images.unsplash.com/photo-1615529182904-14819c35db37?w=900&q=80"
  },
  "commercial-renovation": {
    tagline:"Office and retail renovation with minimal disruption to operations.",
    intro:["Commercial Renovation is built around one constraint our clients care about most: keeping the business running. We phase work after hours, on weekends, or floor-by-floor so operations continue with minimal interruption.","From office fit-outs to retail refreshes, our team plans logistics — material staging, noise windows, access routes — as carefully as the renovation itself."],
    benefits:["Phased scheduling to minimize business disruption","Experience across offices, retail and F&B spaces","Coordinated after-hours and weekend work options","Fixed project timelines with milestone tracking","Single team for civil, electrical and finishing work"],
    process:[{icon:"fa-comments",title:"Scope & Constraints"},{icon:"fa-drafting-compass",title:"Phased Planning"},{icon:"fa-calculator",title:"Costing"},{icon:"fa-person-digging",title:"Phased Execution"},{icon:"fa-clipboard-check",title:"Handover"}],
    faqs:[
      {q:"Can renovation happen without closing our office?",a:"In most cases yes — we plan phased, zoned work so unaffected areas keep operating normally throughout."},
      {q:"Do you work nights or weekends to avoid business hours?",a:"Yes, after-hours and weekend scheduling is common for commercial clients and can be built into your project plan."},
      {q:"How do you handle noise-sensitive work like drilling?",a:"Noisy work is scheduled in defined windows, communicated to you in advance, and confined to zones with the least impact on ongoing operations."},
      {q:"Can you match our existing brand finishes?",a:"Yes, we work from your brand guidelines or existing finishes to keep renovated areas consistent with the rest of the space."}
    ],
    before:"https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80",
    after:"https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80"
  },
  "rcc-repair": {
    tagline:"Reinforced concrete repair using corrosion-resistant, code-compliant methods.",
    intro:["RCC Repair specifically targets reinforced concrete members suffering from rebar corrosion, spalling, or honeycombing — common in coastal and monsoon-heavy regions. We remove compromised concrete, treat exposed rebar, and rebuild the section to original or improved specification.","All work follows IS-code guidelines for cover, curing, and material compatibility, since RCC repair done wrong fails faster than the original damage."],
    benefits:["Corrosion-resistant rebar coating and treatment","IS-code compliant repair mortars and admixtures","Restores original design strength","Suited to coastal, high-humidity conditions","Long-term protection against re-corrosion"],
    process:[{icon:"fa-magnifying-glass",title:"Corrosion Survey"},{icon:"fa-hammer",title:"Concrete Removal"},{icon:"fa-shield-halved",title:"Rebar Treatment"},{icon:"fa-trowel",title:"Micro-concreting"},{icon:"fa-clipboard-check",title:"Curing & Inspection"}],
    faqs:[
      {q:"What is rebar corrosion and why does it matter?",a:"When water and chlorides reach embedded steel, it rusts and expands, cracking the surrounding concrete from the inside — left untreated, this steadily weakens the member."},
      {q:"Can RCC repair be done without vacating the building?",a:"Yes, in almost all cases — we work section by section with dust and noise control, keeping the rest of the building operational."},
      {q:"How do you prevent the repair area from corroding again?",a:"We apply anti-corrosive rebar coatings and use low-permeability repair mortars specifically to block future moisture and chloride ingress."},
      {q:"Is RCC repair suitable for coastal buildings?",a:"Yes — in fact coastal and high-humidity buildings are exactly where this specialized repair matters most, and our methods are chosen with that exposure in mind."}
    ],
    before:"https://images.unsplash.com/photo-1541976590-713941681591?w=900&q=80",
    after:"https://images.unsplash.com/photo-1590725175055-27834a97ec70?w=900&q=80"
  },
  "building-maintenance": {
    tagline:"Scheduled AMC plans that catch small issues before they become big ones.",
    intro:["Building Maintenance is our ongoing Annual Maintenance Contract (AMC) service — scheduled inspections and minor repairs that catch cracks, seepage, and wear before they escalate into expensive structural work.","Societies and commercial owners on an AMC get a documented inspection report each visit, with any urgent issues flagged immediately rather than surfacing at the next crisis."],
    benefits:["Scheduled inspections catch problems early","Documented condition reports each visit","Priority response for urgent issues","Reduces lifetime repair costs significantly","Flexible AMC plans for residential and commercial"],
    process:[{icon:"fa-file-signature",title:"AMC Scoping"},{icon:"fa-calendar-check",title:"Scheduled Visits"},{icon:"fa-magnifying-glass",title:"Inspection"},{icon:"fa-screwdriver-wrench",title:"Minor Repairs"},{icon:"fa-file-lines",title:"Condition Report"}],
    faqs:[
      {q:"What does an AMC plan typically include?",a:"Scheduled structural inspections, minor crack and seepage repairs, and a documented condition report after each visit — full scope is tailored to your building's age and needs."},
      {q:"How often are inspections done under an AMC?",a:"Most plans run quarterly or half-yearly, with additional visits available for urgent concerns flagged between scheduled dates."},
      {q:"Is building maintenance only for older buildings?",a:"No — proactive AMC plans are equally valuable for newer buildings, catching minor issues early and preserving warranty conditions."},
      {q:"Can AMC plans be customized for housing societies?",a:"Yes, we regularly design AMC plans scaled for housing societies covering common areas, terraces, and structural elements across multiple blocks."}
    ],
    before:"https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=900&q=80",
    after:"https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80"
  }
};

/* ---------- PROJECT DETAIL CONTENT (keyed by slug) ---------- */
const projectDetails = {
  "palm-residency-retrofit": {
    problem:"Palm Residency, a 40-year-old residential tower, showed widening cracks across three ground-floor columns and visible rebar exposure on the underside of the parking podium slab. A structural audit flagged reduced load capacity in the affected members.",
    solution:"Our engineers designed a jacketing solution for the columns and micro-concreting for the slab, using corrosion-resistant rebar and code-compliant repair mortar to restore full original load capacity.",
    materials:["M25 micro-concrete","Epoxy-coated rebar","Structural bonding agent","FRP wrap (selected columns)"],
    timeline:"6 weeks, phased to keep the parking podium partially operational throughout.",
    testimonialIdx:1
  },
  "skyline-business-park": {
    problem:"Skyline Business Park needed a full office floor renovation — new layout, flooring, and finishes — while the tenant company continued daily operations one floor below.",
    solution:"We scheduled all noisy or disruptive work after business hours and on weekends, completing the civil, electrical coordination, and finishing work in six weeks without a single operational day lost downstairs.",
    materials:["Vitrified tile flooring","Modular partition systems","LED-integrated false ceiling","Low-VOC paint finishes"],
    timeline:"6 weeks, entirely after-hours and weekend phased.",
    testimonialIdx:2
  },
  "greenfield-society-terrace": {
    problem:"Eight building blocks at Greenfield Society suffered recurring terrace leaks each monsoon despite prior waterproofing attempts, with ceiling seepage reported on multiple top floors.",
    solution:"A full slope and drainage survey found inadequate water flow to the outlets. We corrected slope with screed, then applied a UV-stable membrane system across all eight terraces, flood-testing each before handover.",
    materials:["APP-modified bitumen membrane","Screed concrete for slope correction","Protective tile overlay","UV-reflective top coat"],
    timeline:"5 weeks across all 8 blocks, sequenced to avoid overlapping disruption.",
    testimonialIdx:0
  },
  "the-willow-bungalow": {
    problem:"This heritage-style Juhu bungalow needed a full interior and exterior renovation while preserving its original architectural character — not a modern strip-and-replace job.",
    solution:"Our team restored original façade detailing, replaced aging plumbing and electrical, and modernized interiors while retaining the bungalow's period charm, completed exactly on the agreed 8-week schedule.",
    materials:["Lime-based heritage plaster","Restored teak fittings","Copper plumbing lines","Weatherproof exterior coating"],
    timeline:"8 weeks, as originally scheduled.",
    testimonialIdx:2
  },
  "coral-heights-apartments": {
    problem:"Three residential blocks at Coral Heights showed slab cracking with active rebar corrosion, likely from long-term water ingress through an aging terrace membrane above.",
    solution:"We repaired the corroded slab sections with micro-concreting and corrosion-inhibiting rebar treatment, then addressed the terrace membrane above to eliminate the water source causing the damage.",
    materials:["Corrosion-inhibiting rebar coating","M25 micro-concrete","Waterproof membrane (terrace above)","Structural bonding agent"],
    timeline:"7 weeks across 3 blocks, phased by block.",
    testimonialIdx:1
  },
  "sunrise-housing-society": {
    problem:"A 200-unit housing society experienced persistent basement and podium seepage, causing dampness in ground-floor units and visible efflorescence on podium columns.",
    solution:"After tracing the seepage to multiple entry points along the podium's retaining wall joints, we applied a crystalline waterproofing system to the basement and a membrane system to the podium deck.",
    materials:["Crystalline waterproofing compound","Podium deck membrane","Joint sealants","Protective screed"],
    timeline:"9 weeks given the scale of the podium area.",
    testimonialIdx:0
  },
  "riverside-residences": {
    problem:"Riverside Residences needed facade repainting alongside repair of multiple balcony cracks that had gone untreated for several years, some showing early signs of rebar exposure.",
    solution:"We repaired all balcony cracks with epoxy injection and micro-concreting where needed, then repainted the full facade with a weatherproof system matched to the building's original color scheme.",
    materials:["Epoxy injection resin","Weatherproof exterior paint","Elastomeric crack filler","Anti-corrosive primer"],
    timeline:"5 weeks for the full complex.",
    testimonialIdx:3
  },
  "metro-plaza-mall": {
    problem:"The parking podium slab at Metro Plaza Mall showed signs of deflection and cracking under sustained vehicle loads, requiring urgent structural strengthening without closing the mall.",
    solution:"Our engineers designed an FRP wrapping and jacketing solution for the affected slab and support beams, executed in off-peak hours to keep the mall and parking operational throughout.",
    materials:["FRP wrap system","Structural epoxy bonding agent","M30 repair concrete","Corrosion-resistant rebar"],
    timeline:"4 weeks, executed during off-peak mall hours.",
    testimonialIdx:1
  }
};

/* ---------- TEAM ---------- */
const team = [
  {name:"Ar. Vikram Rao",role:"Principal Structural Engineer & Founder",img:"https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&q=80"},
  {name:"Neha Kulkarni",role:"Senior Structural Engineer",img:"https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80"},
  {name:"Arjun Malhotra",role:"Site Operations Manager",img:"https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&q=80"},
  {name:"Farida Shaikh",role:"Client Relations Lead",img:"https://images.unsplash.com/photo-1548142813-c348350df52b?w=400&q=80"},
];

/* ---------- CERTIFICATIONS ---------- */
const certifications = [
  {icon:"fa-certificate",title:"ISO 9001:2015 Certified"},
  {icon:"fa-shield-halved",title:"IS-Code Compliant Practices"},
  {icon:"fa-user-graduate",title:"Licensed Structural Engineers"},
  {icon:"fa-hard-hat",title:"Registered Contracting Firm"},
];

/* ---------- COMPANY TIMELINE ---------- */
const timelineEvents = [
  {year:"2011",title:"Company Founded",desc:"Vikram Rao founded Sturdcore Structures with a single mission: fix the cause, not just the crack."},
  {year:"2015",title:"100th Project Milestone",desc:"Crossed 100 completed structural repair and waterproofing projects across Mumbai."},
  {year:"2019",title:"Commercial Division Launched",desc:"Expanded into commercial renovation, serving offices and retail spaces across the region."},
  {year:"2023",title:"300+ Happy Clients",desc:"Reached 300+ satisfied clients across 12 cities, with a growing in-house engineering team."},
  {year:"2026",title:"500+ Projects Delivered",desc:"Celebrating 500+ completed projects and 15 years of engineering-led repair work."},
];

/* ---------- GALLERY ITEMS ---------- */
const galleryItems = [
  {cat:"before-after",label:"Terrace Before & After",img:"https://images.unsplash.com/photo-1622021142947-da7dedc7c39a?w=700&q=80"},
  {cat:"before-after",label:"Facade Before & After",img:"https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=700&q=80"},
  {cat:"waterproofing",label:"Podium Waterproofing",img:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=80"},
  {cat:"waterproofing",label:"Basement Membrane Work",img:"https://images.unsplash.com/photo-1622021142947-da7dedc7c39a?w=700&q=80"},
  {cat:"structural",label:"Column Jacketing",img:"https://images.unsplash.com/photo-1590725175055-27834a97ec70?w=700&q=80"},
  {cat:"structural",label:"Slab Repair in Progress",img:"https://images.unsplash.com/photo-1541976590-713941681591?w=700&q=80"},
  {cat:"renovation",label:"Interior Renovation",img:"https://images.unsplash.com/photo-1618221469555-7f3ad97540d6?w=700&q=80"},
  {cat:"renovation",label:"Home Makeover",img:"https://images.unsplash.com/photo-1615529182904-14819c35db37?w=700&q=80"},
  {cat:"completed",label:"Palm Residency Retrofit",img:"https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80"},
  {cat:"completed",label:"Skyline Business Park",img:"https://images.unsplash.com/photo-1497366216548-37526070297c?w=700&q=80"},
  {cat:"in-progress",label:"Podium Slab Strengthening",img:"https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=700&q=80"},
  {cat:"in-progress",label:"Column Repair Underway",img:"https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=700&q=80"},
];

/* ---------- BLOG POSTS ---------- */
const blogPosts = [
  {
    slug:"signs-your-building-needs-repair",
    title:"7 Signs Your Building Needs Structural Repair",
    excerpt:"Widening cracks and rust stains aren't cosmetic problems — here's what your building is trying to tell you.",
    img:"https://images.unsplash.com/photo-1590725175055-27834a97ec70?w=800&q=80",
    date:"Jun 12, 2026",
    category:"Structural",
    content:[
      {h:"Cracks that keep coming back"},
      {p:"A hairline crack that reappears after repainting is usually a sign of ongoing movement, not a one-time settling issue. If you're repainting over the same crack more than once, it's time for an engineer's assessment rather than another coat of paint."},
      {h:"Rust stains on concrete surfaces"},
      {p:"Orange-brown streaks on ceilings, beams, or columns usually mean water has reached the embedded steel reinforcement and started corroding it. This is one of the more urgent warning signs, since corroding rebar expands and cracks the surrounding concrete from the inside."},
      {h:"Doors and windows that stick"},
      {p:"When previously fine door and window frames suddenly start sticking or misaligning, it can indicate the building frame has shifted slightly — worth investigating especially if it's happened suddenly rather than gradually with age."},
      {h:"Visible sagging in slabs or beams"},
      {p:"A visibly sagging ceiling or beam is a clear sign of reduced load capacity and should be assessed immediately rather than monitored over time."},
      {h:"Persistent dampness despite waterproofing"},
      {p:"If damp patches return after waterproofing work, the underlying moisture path likely wasn't fully diagnosed the first time around."},
      {h:"Bulging or flaking plaster"},
      {p:"Plaster that bulges outward or flakes off in sheets often points to moisture trapped behind the surface, sometimes linked to corroding reinforcement underneath."},
      {h:"When in doubt, get a free inspection"},
      {p:"None of these signs require guesswork — a qualified structural engineer can assess your building and tell you definitively whether you're looking at a cosmetic fix or something that needs deeper repair."}
    ]
  },
  {
    slug:"waterproofing-tips",
    title:"5 Waterproofing Tips Every Homeowner Should Know",
    excerpt:"Simple habits and checks that extend the life of any waterproofing system, whether new or years old.",
    img:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
    date:"May 28, 2026",
    category:"Waterproofing",
    content:[
      {h:"Check your terrace drainage before monsoon"},
      {p:"Standing water is the single biggest enemy of any waterproofing membrane. Before monsoon each year, clear terrace drains of debris and confirm water is flowing freely off the surface."},
      {h:"Don't ignore small damp patches"},
      {p:"A small damp patch today is often a much bigger repair a year from now. Addressing seepage early, while it's still localized, is far cheaper than waiting for it to spread."},
      {h:"Understand the difference between coatings and membranes"},
      {p:"Coatings work for lower-pressure areas like bathroom walls, while membranes are needed wherever there's sustained water pressure, such as basements and terraces. Using the wrong system for the exposure is a common cause of early failure."},
      {h:"Schedule waterproofing before, not during, monsoon"},
      {p:"Most systems need dry substrate conditions and several days of curing time. Attempting waterproofing mid-monsoon compromises the bond and shortens the system's lifespan significantly."},
      {h:"Get a flood test before accepting handover"},
      {p:"Any reputable waterproofing job should be flood-tested before you sign off — flooding the area and checking for leaks over 24-48 hours confirms the system actually works before it's covered up or tiled over."}
    ]
  },
  {
    slug:"structural-crack-guide",
    title:"The Complete Guide to Structural Cracks",
    excerpt:"How to tell a cosmetic crack from a structural one, and what each actually requires to fix properly.",
    img:"https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
    date:"May 10, 2026",
    category:"Structural",
    content:[
      {h:"Vertical vs diagonal cracks"},
      {p:"Vertical hairline cracks are typically due to minor shrinkage or thermal movement and are rarely structural concerns. Diagonal or stepped cracks, particularly ones wider at one end, often indicate differential settlement and deserve a proper assessment."},
      {h:"Crack width as a rule of thumb"},
      {p:"Cracks under 1mm wide are generally cosmetic. Cracks between 1-5mm should be monitored and likely sealed. Anything wider than 5mm, especially if actively growing, needs an engineer's evaluation without delay."},
      {h:"Active vs dormant cracks"},
      {p:"An active crack is still moving — mark its ends with a pencil and date, and check back in a few weeks. If the crack has grown past your marks, it's active and needs attention beyond a simple fill."},
      {h:"Why epoxy injection works for structural cracks"},
      {p:"Epoxy injection doesn't just fill a crack cosmetically — it bonds the two sides back together structurally, restoring some of the member's original strength, which surface filling alone cannot do."},
      {h:"When to call an engineer immediately"},
      {p:"Cracks accompanied by sagging, misaligned doors and windows, or visible rebar should prompt an immediate professional visit rather than a wait-and-watch approach."}
    ]
  },
  {
    slug:"building-maintenance-checklist",
    title:"The Building Maintenance Checklist Every Society Needs",
    excerpt:"A practical, season-by-season checklist to keep small issues from becoming expensive structural repairs.",
    img:"https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
    date:"Apr 22, 2026",
    category:"Maintenance",
    content:[
      {h:"Pre-monsoon: terrace and drainage check"},
      {p:"Clear all terrace drains, check for ponding water, and inspect the waterproofing membrane for visible wear before the rains begin."},
      {h:"Quarterly: common area and facade walkthrough"},
      {p:"A quick visual walkthrough of stairwells, parking areas, and the facade can catch early cracks, seepage, or plaster damage before they spread."},
      {h:"Annually: structural inspection"},
      {p:"An annual structural inspection by a qualified engineer, especially for buildings over 15 years old, catches issues invisible to an untrained eye — corroding rebar, hairline foundation movement, and more."},
      {h:"As needed: prompt response to resident complaints"},
      {p:"Damp patches or cracks reported by residents should be assessed promptly rather than deferred to the next scheduled maintenance cycle — small issues escalate fastest when ignored."},
      {h:"Documentation matters"},
      {p:"Keep a record of every inspection, repair, and waterproofing job done on the building. This history is invaluable for diagnosing future issues and for insurance or resale purposes."}
    ]
  },
  {
    slug:"home-renovation-guide",
    title:"A Practical Guide to Planning Your Home Renovation",
    excerpt:"What to sort out before work begins, so your renovation stays on budget and on schedule.",
    img:"https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&q=80",
    date:"Apr 5, 2026",
    category:"Renovation",
    content:[
      {h:"Start with the layout, not the finishes"},
      {p:"It's tempting to pick tiles and paint colors first, but layout decisions — especially any wall removal — need structural sign-off before anything else is finalized."},
      {h:"Get a fixed, itemized quote"},
      {p:"A detailed, itemized quote protects you from scope creep mid-project. Vague lump-sum quotes are where renovation budgets typically go wrong."},
      {h:"Plan for the unexpected"},
      {p:"Older homes especially can reveal surprises once walls or flooring are opened up — ageing wiring, hidden dampness. Build a reasonable contingency into your budget upfront."},
      {h:"Sequence work logically"},
      {p:"Civil and structural work comes first, then electrical and plumbing rough-in, then finishing. Trying to shortcut this sequence usually causes rework and delays."},
      {h:"Ask about single-point accountability"},
      {p:"Managing separate contractors for civil work, electrical, and finishing yourself often leads to finger-pointing when issues arise. A single accountable team simplifies this considerably."}
    ]
  },
  {
    slug:"construction-safety-tips",
    title:"Construction Site Safety: What Property Owners Should Expect",
    excerpt:"What proper safety practice looks like on a repair or renovation site — and why it matters to you too.",
    img:"https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
    date:"Mar 18, 2026",
    category:"Safety",
    content:[
      {h:"Site barricading and signage"},
      {p:"A properly run site clearly barricades work zones and posts signage, protecting residents, pedestrians, and workers from accidental entry into active work areas."},
      {h:"Personal protective equipment is non-negotiable"},
      {p:"Helmets, safety harnesses for height work, and proper footwear should be standard for every worker on site, every day — not just when a client is watching."},
      {h:"Dust and debris control"},
      {p:"Proper dust screens and debris chutes protect both residents and the surrounding environment during repair and demolition work, and reflect a contractor's overall discipline."},
      {h:"Electrical safety around wet work"},
      {p:"Waterproofing and concrete work involves water near electrical points — a serious hazard if temporary wiring isn't properly insulated and routed by trained personnel."},
      {h:"Why this matters even as a property owner"},
      {p:"A contractor's safety discipline is usually a reliable proxy for their overall quality standards — sites that cut corners on safety often cut corners elsewhere too."}
    ]
  }
];
