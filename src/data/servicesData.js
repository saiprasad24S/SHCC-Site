export const serviceCategories = [
  { key: "all", name: "All Healthcare Services", icon: "LayoutGrid" },
  { key: "home-nursing-care", name: "Home Nursing & Bedside Care", icon: "HeartPulse" },
  { key: "medical-services", name: "Doctor & Clinical Services", icon: "Stethoscope" },
  { key: "rehabilitation", name: "Physical Rehabilitation", icon: "Activity" },
  { key: "preventive-diagnostics", name: "Diagnostics & Preventive Care", icon: "Microscope" },
  { key: "pharmacy", name: "Pharmacy & Medical Supplies", icon: "Pill" }
];

export const servicesData = [
  // =========================================================================
  // CATEGORY 1: HOME NURSING & BEDSIDE CARE
  // =========================================================================
  {
    id: "critical-nursing-care",
    slug: "critical-nursing-care",
    title: "ICU Critical Care & Post-Surgery Nursing",
    pageTitle: "ICU Critical Care & Post-Surgery Nursing at Home",
    subtitle: "24/7 Hospital-standard ICU step-down nursing, tracheostomy care, surgical wound healing, and continuous bedside monitoring.",
    metaTitle: "ICU Critical Care & Post-Surgery Nursing | Skandan Home Carre",
    categoryKey: "home-nursing-care",
    categoryName: "Home Nursing & Bedside Care",
    iconName: "HeartPulse",
    isFeatured: true,
    heroImage: "/assets/images/nursing-8.jpg",
    coverImage: "/assets/images/nursing-8.jpg",
    badge: "ICU Standard",
    shortDescription: "Specialized 12/24-hr bedside nursing for post-operative recovery, tracheostomy, ventilated patients, wound drainage, and continuous vitals tracking.",
    fullDescription: "At Skandan Home Carre Clinic, we bring hospital-grade intensive care and surgical recovery nursing directly to your home. Our ICU-trained, verified staff nurses ensure safe transitions following major hospital discharges, minimizing hospital-acquired infection risks while optimizing post-operative rehabilitation.",
    
    offeringsSectionTitle: "Key Clinical Procedures & Bedside Care",
    offerings: [
      {
        title: "Post-Surgical Wound & Drain Management",
        desc: "Aseptic surgical dressings, suture/staple removal, drain care, and continuous monitoring to prevent surgical site infections."
      },
      {
        title: "Tracheostomy & Ventilatory Nursing",
        desc: "Endotracheal and tracheostomy tube care, sterile suctioning, inner cannula cleaning, and oxygen saturation management."
      },
      {
        title: "Invasive Lines & Infusion Therapy",
        desc: "Central venous line monitoring, PICC line dressings, IV antibiotic drips, and precision infusion pump management."
      },
      {
        title: "Enteral & Tube Feeding Care",
        desc: "PEG tube, Ryle's tube / NG tube insertion, maintenance, feed administration, and aspiration prevention protocols."
      },
      {
        title: "24x7 Bedside Vitals & Neuro Tracking",
        desc: "Continuous tracking of oxygen saturation (SpO2), blood pressure, pulse, glucose levels, and neuro status."
      }
    ],

    whoIsItForTitle: "Who Is This Service For?",
    whoIsItFor: [
      "Patients transitioning home following cardiac, orthopedic, neurological, or abdominal surgeries.",
      "Individuals requiring tracheostomy care, oxygen therapy, or ventilator support.",
      "Patients needing strict sterile wound healing and bed-bound pressure injury prevention.",
      "Families seeking dedicated 12-hour or 24-hour qualified staff nurse coverage."
    ],

    howItWorks: [
      { step: "01", title: "Discharge & Prescription Review", desc: "Our clinical supervisor reviews the hospital discharge summary and treating doctor's instructions." },
      { step: "02", title: "Home Medical Setup", desc: "We evaluate bedside requirements and arrange necessary medical monitors and sterile consumables." },
      { step: "03", title: "ICU Nurse Assignment", desc: "A licensed, background-verified staff nurse is deployed with structured daily charting and medication sheets." },
      { step: "04", title: "Physician Coordination", desc: "Ongoing daily vitals updates and recovery milestone reporting directly to your treating physician." }
    ],

    whyChooseTitle: "Clinical Excellence & Safety Standards",
    whyChoosePoints: [
      "100% Background-verified, B.Sc/GNM licensed nursing professionals with ICU experience.",
      "Strict hospital infection control and sterilization guidelines.",
      "24/7 Clinical supervisor oversight and emergency doctor-on-call escalation.",
      "Comprehensive daily nursing charts and transparent progress updates."
    ],

    ctaTitle: "Need Critical Nursing or Post-Surgery Support?",
    ctaSubtitle: "Contact our clinical coordinators immediately at +91 96609 66369 for immediate nurse assignment and home assessment.",
    ctaButtonText: "Call +91 96609 66369"
  },

  {
    id: "medication-administration",
    slug: "medication-administration",
    title: "Home Nursing Procedures (Injections, IV Drips & Dressings)",
    pageTitle: "Home Nursing Procedures, Injections & IV Drips at Home",
    subtitle: "Safe, sterile injections, IV infusions, urinary catheter care, and routine medical procedures delivered at your doorstep.",
    metaTitle: "Home Nursing Procedures & Injections | Skandan Home Carre",
    categoryKey: "home-nursing-care",
    categoryName: "Home Nursing & Bedside Care",
    iconName: "Pill",
    isFeatured: false,
    heroImage: "/assets/images/skanda-4.jpg",
    coverImage: "/assets/images/skanda-4.jpg",
    badge: "Clinical Procedures",
    shortDescription: "Certified visit-based nurses for IV/IM/SC injections, IV cannulation, catheterization (Foley's), bladder wash, and sterile surgical dressings.",
    fullDescription: "Avoid exhausting hospital queues for routine clinical treatments. Skandan Home Carre provides certified visit-based nursing for all prescribed medical procedures, ensuring strict sterile protocols and patient comfort in familiar home surroundings.",

    offeringsSectionTitle: "Available In-Home Nursing Procedures",
    offerings: [
      {
        title: "Intravenous (IV) Injections & Infusions (IM/SC)",
        desc: "Safe administration of doctor-prescribed antibiotics, painkillers, vitamins, and regular insulin injections."
      },
      {
        title: "IV Cannulation & Saline Hydration",
        desc: "Peripheral IV cannula insertion, line maintenance, and saline hydration therapy under physician prescription."
      },
      {
        title: "Urinary Catheterization (Foley's / Silicon)",
        desc: "Sterile urinary catheter insertion, replacement, drainage bag management, and antiseptic bladder wash."
      },
      {
        title: "Sterile Wound Dressings",
        desc: "Aseptic dressing changes for diabetic foot ulcers, bedsores, surgical stitches, and minor burns."
      },
      {
        title: "Ryle's / NG Feeding Tube Replacement",
        desc: "Nasogastric feeding tube insertion, position verification, and family feeding guidance."
      }
    ],

    whoIsItForTitle: "Who Is This Service For?",
    whoIsItFor: [
      "Patients prescribed short-term IV antibiotic courses or daily intramuscular injections.",
      "Elderly or bed-bound patients requiring routine catheter or feeding tube changes.",
      "Patients with chronic wounds or diabetic ulcers requiring regular sterile dressings.",
      "Individuals recovering from dehydration or acute illness needing fluid support."
    ],

    howItWorks: [
      { step: "01", title: "Submit Prescription", desc: "Share your valid doctor's prescription via WhatsApp or our online portal." },
      { step: "02", title: "Schedule Nurse Visit", desc: "Select your preferred morning, afternoon, or evening visiting slot." },
      { step: "03", title: "Sterile Home Procedure", desc: "A licensed nurse arrives with sterile single-use equipment and administers the procedure." },
      { step: "04", title: "Clinical Record", desc: "Post-procedure observation and written administration recording." }
    ],

    whyChooseTitle: "Clinical Safety Standards",
    whyChoosePoints: [
      "Procedures performed strictly against verified doctor prescriptions.",
      "100% Single-use sealed sterile medical consumables for safety.",
      "Trained in vitals checks and immediate allergy observation.",
      "Affordable visit-based pricing with zero clinic waiting."
    ],

    ctaTitle: "Book a Nurse Visit for Injections or Procedures",
    ctaSubtitle: "Schedule a certified nurse visit at your doorstep. Call +91 96609 66369 today.",
    ctaButtonText: "Call +91 96609 66369"
  },

  {
    id: "baby-care",
    slug: "baby-care",
    title: "Newborn Baby Care & Mother Support",
    pageTitle: "Compassionate Newborn Baby Care & Postnatal Mother Support",
    subtitle: "Dedicated, gentle care for newborns, infants, and new mothers by trained pediatric caregivers.",
    metaTitle: "Newborn Baby Care & Mother Support | Skandan Home Carre",
    categoryKey: "home-nursing-care",
    categoryName: "Home Nursing & Bedside Care",
    iconName: "Baby",
    isFeatured: false,
    heroImage: "/assets/images/1.jpg",
    coverImage: "/assets/images/1.jpg",
    badge: "Newborn Care",
    shortDescription: "Trained newborn specialists for soothing, bathing, swaddling, feeding routines, umbilical cord hygiene, and postnatal mother assistance.",
    fullDescription: "Bringing a newborn home is a wonderful yet demanding journey. Skandan Home Carre provides trusted, warm, and experienced baby caregivers and mother-aide specialists to support families through crucial early weeks and months.",

    offeringsSectionTitle: "Comprehensive Baby & Mother Care Support",
    offerings: [
      {
        title: "Newborn Hygiene & Gentle Bathing",
        desc: "Safe sponge bathing, temperature regulation, gentle baby massage, and skin moisturization."
      },
      {
        title: "Umbilical Cord & Diaper Hygiene",
        desc: "Sterile cord stump cleaning, rash prevention, and gentle diapering routines."
      },
      {
        title: "Feeding Support & Sleep Routines",
        desc: "Assisting with bottle feeding, burping techniques, soothing colic discomfort, and establishing calm sleep cycles."
      },
      {
        title: "Postnatal Mother Care",
        desc: "Helping mothers with rest, lactation comfort support, and watchful baby monitoring."
      }
    ],

    whoIsItForTitle: "Who Is This Service For?",
    whoIsItFor: [
      "New parents seeking reassuring, experienced guidance during the first 30–90 days.",
      "Mothers recovering from Caesarean (C-section) or complex deliveries.",
      "Working parents needing trusted daytime or nighttime baby care coverage.",
      "Families with premature infants requiring careful routine monitoring."
    ],

    howItWorks: [
      { step: "01", title: "Consultation", desc: "Discuss baby age, feeding schedule, and required shift hours (12hr day/night or 24hr)." },
      { step: "02", title: "Caregiver Match", desc: "Select from vetted baby care specialists with proven track records." },
      { step: "03", title: "Home Introduction", desc: "Caregiver settles into your baby’s routine with gentle family alignment." },
      { step: "04", title: "Daily Supportive Care", desc: "Structured support ensuring healthy sleep, feeding, and hygienic care." }
    ],

    whyChooseTitle: "Why Families Rely on Skandan Baby Care",
    whyChoosePoints: [
      "Rigorous background checks, health screening, and pediatric care training.",
      "Gentle, respectful, and hygienic practices tailored to family preferences.",
      "Flexible daytime, night-shift, or 24-hour live-in support options.",
      "Continuous coordination and support from our clinical helpdesk."
    ],

    ctaTitle: "Give Your Baby the Gentle Care They Deserve",
    ctaSubtitle: "Call our baby care coordinators at +91 96609 66369 to book a caring specialist for your home.",
    ctaButtonText: "Call +91 96609 66369"
  },

  {
    id: "gda-care-taker",
    slug: "gda-care-taker",
    title: "Caregivers & Patient Attendants (Elderly & Bed-Bound Care)",
    pageTitle: "General Duty Assistant (GDA) & Elderly Care Attendants",
    subtitle: "Dignified 12/24-hr personal care assistance, mobility support, and daily living help for seniors and bed-bound patients.",
    metaTitle: "Caregivers & Elderly Attendants | Skandan Home Carre",
    categoryKey: "home-nursing-care",
    categoryName: "Home Nursing & Bedside Care",
    iconName: "Users",
    isFeatured: false,
    heroImage: "/assets/images/skanda-6.jpg",
    coverImage: "/assets/images/skanda-6.jpg",
    badge: "Elderly & Bed-Bound",
    shortDescription: "Certified GDAs and patient attendants for bathing, grooming, feeding, repositioning, mobility assistance, and companionship.",
    fullDescription: "Our General Duty Assistants (GDA) and patient care attendants provide respectful, dedicated support with activities of daily living (ADLs). Whether recovering from an injury or living with chronic age-related limitations, we ensure our patients maintain dignity and comfort at home.",

    offeringsSectionTitle: "Daily Living & Patient Care Services",
    offerings: [
      {
        title: "Personal Hygiene & Bed Baths",
        desc: "Assistance with sponge baths, oral hygiene, hair care, nail grooming, dressing, and incontinence care."
      },
      {
        title: "Safe Transfers & Mobility Support",
        desc: "Assisted walking and safe transfers between bed, wheelchair, and commode to prevent home falls."
      },
      {
        title: "Positioning & Pressure Sore Prevention",
        desc: "Scheduled 2-hourly turning and skin care for bed-bound individuals to prevent pressure ulcers."
      },
      {
        title: "Mealtime & Medication Reminders",
        desc: "Assistance with meal feeding, hydration encouragement, and timely oral medication reminders."
      },
      {
        title: "Companionship & Emotional Support",
        desc: "Engaging conversations, reading, cognitive activities, and compassionate presence."
      }
    ],

    whoIsItForTitle: "Who Is This Service For?",
    whoIsItFor: [
      "Elderly individuals living independently or needing daily physical support.",
      "Bed-bound patients recovering from fractures, joint replacements, or strokes.",
      "Individuals living with Alzheimer’s, Dementia, or Parkinson’s disease.",
      "Families seeking dependable 12-hour or 24-hour patient attendance."
    ],

    howItWorks: [
      { step: "01", title: "Needs Assessment", desc: "We evaluate the patient’s mobility level, daily routines, and shift preferences." },
      { step: "02", title: "Trained GDA Match", desc: "Placement of an attentive, background-verified General Duty Assistant." },
      { step: "03", title: "Daily Routine Care", desc: "Structured daily care plan covering hygiene, transfers, and safety." },
      { step: "04", title: "Supervisor Review", desc: "Regular check-ins by clinical coordinators to ensure highest care standards." }
    ],

    whyChooseTitle: "Why Choose Skandan Care Attendants?",
    whyChoosePoints: [
      "Certified General Duty Assistants with formal patient care training.",
      "Thorough background verification and police verification protocols.",
      "Compassionate, patient-centered approach with zero compromise on dignity.",
      "Seamless replacement guarantee in case of attendant leave."
    ],

    ctaTitle: "Arrange Caring Assistance for Your Loved Ones",
    ctaSubtitle: "Speak with our care coordinator at +91 96609 66369 for reliable 12/24 hour GDA support.",
    ctaButtonText: "Call +91 96609 66369"
  },

  // =========================================================================
  // CATEGORY 2: DOCTOR & CLINICAL SERVICES
  // =========================================================================
  {
    id: "doctor-consultation",
    slug: "doctor-consultation",
    title: "Doctor Visits at Home (General Physician & Specialists)",
    pageTitle: "Doctor On Call & Doorstep Physician Consultations",
    subtitle: "Experienced General Physicians and Specialists visiting your home for thorough physical check-ups.",
    metaTitle: "Doctor Visits at Home | Skandan Home Carre",
    categoryKey: "medical-services",
    categoryName: "Doctor & Clinical Services",
    iconName: "Stethoscope",
    isFeatured: true,
    heroImage: "/assets/images/health-visitor-and-senior-man-during-home-visit-.jpg",
    coverImage: "/assets/images/health-visitor-and-senior-man-during-home-visit-.jpg",
    badge: "Doctor on Call",
    shortDescription: "Doorstep visits by qualified doctors for acute illnesses, chronic disease management, geriatric reviews, and home prescription updates.",
    fullDescription: "When traveling to a crowded clinic is painful or medically inadvisable, Skandan Home Carre delivers qualified medical doctors straight to your living room. Our physicians conduct detailed clinical assessments, review vitals, prescribe medications, and order doorstep diagnostics.",

    offeringsSectionTitle: "Home Doctor Consultation Capabilities",
    offerings: [
      {
        title: "Acute Illness Examination",
        desc: "Evaluation and treatment for acute fevers, respiratory infections, seasonal flu, urinary tract infections, and gastrointestinal issues."
      },
      {
        title: "Chronic Disease & Geriatric Check-ups",
        desc: "Ongoing management and prescription titration for Hypertension, Diabetes, COPD, Arthritis, and post-stroke recovery."
      },
      {
        title: "Comprehensive Physical Assessments",
        desc: "Full physical check-up, cardio-respiratory auscultation, neurological screening, and diagnostic plan formulation."
      },
      {
        title: "Medical Certificates & Prescription Renewals",
        desc: "Issuance of clinical treatment records, prescription renewals, and referral notes when specialist hospital care is warranted."
      }
    ],

    whoIsItForTitle: "Who Is This Service For?",
    whoIsItFor: [
      "Senior citizens who find hospital visits exhausting or risky due to cross-infection.",
      "Bed-bound, palliative, or post-operative patients requiring physician assessment.",
      "Busy professionals or families needing convenient at-home medical evaluation.",
      "Patients needing prescription renewals and routine chronic disease monitoring."
    ],

    howItWorks: [
      { step: "01", title: "Book Appointment", desc: "Call +91 96609 66369 or request a visit online with details of patient symptoms." },
      { step: "02", title: "Doctor Dispatch", desc: "A qualified physician is assigned based on location and clinical requirement." },
      { step: "03", title: "In-Depth Home Visit", desc: "Doctor visits the home, reviews medical history, examines the patient, and writes prescriptions." },
      { step: "04", title: "Integrated Follow-up", desc: "Seamless coordination with our home nursing, pharmacy, and diagnostic services." }
    ],

    whyChooseTitle: "Why Choose Skandan Home Doctors?",
    whyChoosePoints: [
      "Registered, experienced MBBS / MD doctors with strong clinical acumen.",
      "Unrushed, 30–45 minute comprehensive bedside consultations.",
      "Convenient scheduling across Hyderabad with prompt response times.",
      "Direct integration with doorstep lab tests, ECG, and medicine delivery."
    ],

    ctaTitle: "Schedule a Doctor Visit to Your Home",
    ctaSubtitle: "Avoid hospital queues. Connect with an on-call physician today at +91 96609 66369.",
    ctaButtonText: "Call +91 96609 66369"
  },

  {
    id: "school-nurse",
    slug: "school-nurse",
    title: "School Infirmary & Campus Health Nursing",
    pageTitle: "School Health Center & Campus Sick Room Nursing",
    subtitle: "Dedicated on-campus medical staff, emergency first-aid, and pediatric sick room management for educational institutions.",
    metaTitle: "School Infirmary & Campus Health Nursing | Skandan Home Carre",
    categoryKey: "medical-services",
    categoryName: "Doctor & Clinical Services",
    iconName: "GraduationCap",
    isFeatured: false,
    heroImage: "/assets/images/3ff08aa621-1.jpg",
    coverImage: "/assets/images/3ff08aa621-1.jpg",
    badge: "Campus Health",
    shortDescription: "Certified school nurses for on-campus first aid, allergy management, student health records, illness triage, and sick bay operations.",
    fullDescription: "Ensuring child safety on school premises is paramount. Skandan Home Carre partners with schools, colleges, and preschools to deploy certified pediatric-trained nurses who manage school infirmaries, handle student emergencies, maintain health records, and ensure regulatory compliance.",

    offeringsSectionTitle: "Institutional School Health Services",
    offerings: [
      {
        title: "Campus First Aid & Emergency Response",
        desc: "Immediate management of playground injuries, fractures, cuts, sprains, allergic reactions, and acute pediatric fevers."
      },
      {
        title: "Sick Bay & Infirmary Operations",
        desc: "Maintaining medical inventory, sterile rest facilities, oxygen equipment, and student observation logs."
      },
      {
        title: "Student Medication & Chronic Care",
        desc: "Supervised administration of doctor-authorized medications (e.g., inhalers, insulin, anti-epileptic drugs)."
      },
      {
        title: "Health Screening & Immunization Audits",
        desc: "Annual height/weight BMI tracking, visual acuity checks, and health record auditing for school authorities."
      }
    ],

    whoIsItForTitle: "Who Is This Service For?",
    whoIsItFor: [
      "K-12 schools, international day boarding schools, and residential campuses.",
      "Colleges, universities, and student hostels seeking permanent medical room staff.",
      "Educational trusts requiring compliant, outsourced healthcare management."
    ],

    howItWorks: [
      { step: "01", title: "Institutional Assessment", desc: "We audit campus student strength, infirmary infrastructure, and medical protocols." },
      { step: "02", title: "Nurse Deployment", desc: "Placement of certified pediatric-experienced GNM/B.Sc nurses." },
      { step: "03", title: "Protocol Setup", desc: "Implementation of first-aid protocols, parent emergency alerts, and medicine tracking." },
      { step: "04", title: "Ongoing Oversight", desc: "Periodic supervisor inspections, replacement guarantees, and emergency doctor linkage." }
    ],

    whyChooseTitle: "Institutional Safety Advantages",
    whyChoosePoints: [
      "Qualified, police-verified nursing staff trained in pediatric first aid and BLS.",
      "Guaranteed shift continuity with trained reliever nurses.",
      "Structured parent communication and incident report documentation.",
      "Comprehensive medical equipment stocking and infirmary design guidance."
    ],

    ctaTitle: "Partner with Skandan for Campus Health",
    ctaSubtitle: "Empower your school with professional infirmary management. Contact +91 96609 66369 today.",
    ctaButtonText: "Call +91 96609 66369"
  },

  {
    id: "ohc-nurses",
    slug: "ohc-nurses",
    title: "Corporate & Workplace Nursing (Occupational Health)",
    pageTitle: "Occupational Health Center (OHC) & Corporate Nursing",
    subtitle: "Professional workplace nursing, industrial first aid, and corporate health center operations for factories and IT parks.",
    metaTitle: "Corporate & Workplace Nursing (OHC) | Skandan Home Carre",
    categoryKey: "medical-services",
    categoryName: "Doctor & Clinical Services",
    iconName: "Building2",
    isFeatured: false,
    heroImage: "/assets/images/skanda-8.jpg",
    coverImage: "/assets/images/skanda-8.jpg",
    badge: "Corporate Health",
    shortDescription: "Qualified industrial nursing professionals for corporate clinics, employee health screening, workplace emergency response, and statutory OHC compliance.",
    fullDescription: "Under Factories Act regulations and modern corporate wellness initiatives, organizations require dependable on-site medical staff. Skandan Home Carre deploys certified Occupational Health Center (OHC) nurses to IT campuses, manufacturing facilities, warehouses, and corporate headquarters.",

    offeringsSectionTitle: "Corporate & Industrial Health Capabilities",
    offerings: [
      {
        title: "Workplace First Aid & Trauma Response",
        desc: "Immediate management of industrial accidents, chemical exposure, burns, lacerations, and cardiac emergencies on-site."
      },
      {
        title: "Daily Corporate OHC Operations",
        desc: "Vitals recording, employee symptom triage, basic OTC dispensary management, and rest bay maintenance."
      },
      {
        title: "Statutory Compliance & Health Registers",
        desc: "Maintaining Form 17/Factories Act registers, injury logs, and periodic compliance documentation for government audits."
      },
      {
        title: "Employee Wellness & Health Camps",
        desc: "Organizing workplace ergonomics sessions, annual employee health check-ups, and corporate vaccination drives."
      }
    ],

    whoIsItForTitle: "Who Is This Service For?",
    whoIsItFor: [
      "Manufacturing plants, industrial factories, and heavy engineering facilities.",
      "IT/ITES corporate offices, SEZs, and business parks.",
      "Logistics hubs, construction project sites, and corporate headquarters."
    ],

    howItWorks: [
      { step: "01", title: "Workplace Audit", desc: "Review shift patterns (8hr/12hr/24x7), hazards, and regulatory staffing requirements." },
      { step: "02", title: "Industrial Nurse Placement", desc: "Deployment of certified industrial nursing personnel with BLS/ACLS training." },
      { step: "03", title: "Standard Operating Protocols", desc: "Setup of medical emergency protocols, tie-ups with nearest hospitals, and ambulance linkage." },
      { step: "04", title: "Compliance Management", desc: "Regular statutory reporting, inventory audits, and quarterly health trend summaries." }
    ],

    whyChooseTitle: "Why Corporates Choose Skandan OHC",
    whyChoosePoints: [
      "Experienced industrial nurses well-versed in corporate HSE (Health, Safety, Environment) policies.",
      "Seamless reliever and substitute management ensuring zero OHC downtime.",
      "Integrated emergency escalation with on-call physicians and hospital networks.",
      "Customizable 24/7 rotational shift coverage across Telangana."
    ],

    ctaTitle: "Enhance Your Workplace Health Standards",
    ctaSubtitle: "Discuss corporate OHC staffing and health center management with our team at +91 96609 66369.",
    ctaButtonText: "Call +91 96609 66369"
  },

  // =========================================================================
  // CATEGORY 3: PHYSICAL REHABILITATION
  // =========================================================================
  {
    id: "physiotherapy",
    slug: "physiotherapy",
    title: "Physiotherapy & Pain Rehabilitation",
    pageTitle: "In-Home Physiotherapy & Physical Rehabilitation",
    subtitle: "Customized physical therapy for stroke recovery, orthopedic rehab, joint replacements, and chronic pain relief.",
    metaTitle: "Physiotherapy & Pain Rehabilitation | Skandan Home Carre",
    categoryKey: "rehabilitation",
    categoryName: "Physical Rehabilitation",
    iconName: "Activity",
    isFeatured: true,
    heroImage: "/assets/images/2-1.jpg",
    coverImage: "/assets/images/2-1.jpg",
    badge: "Specialist Rehab",
    shortDescription: "Certified physiotherapists visiting your home with portable therapy equipment for orthopedic, neurological, geriatric, and cardiopulmonary rehabilitation.",
    fullDescription: "Regain movement, strength, and independence without the pain of commuting. Skandan Home Carre’s licensed physiotherapists provide one-on-one personalized therapy sessions at home, utilizing proven manual therapy, therapeutic exercises, and electro-modalities (TENS/IFT/Ultrasound).",

    offeringsSectionTitle: "Targeted Physiotherapy Specializations",
    offerings: [
      {
        title: "Orthopedic & Post-Operative Rehabilitation",
        desc: "Structured recovery protocols following Total Knee Replacement (TKR), Total Hip Replacement (THR), ligament repairs, and fracture surgeries."
      },
      {
        title: "Neurological Physical Therapy",
        desc: "Advanced neuro-rehabilitation for stroke hemiplegia, Parkinson’s, spinal cord injuries, balance retraining, and gait correction."
      },
      {
        title: "Geriatric Mobility & Fall Prevention",
        desc: "Gentle strengthening, functional mobility training, posture correction, and assistive device training for seniors."
      },
      {
        title: "Spine & Chronic Pain Management",
        desc: "Relief for chronic back pain, cervical spondylosis, sciatica, frozen shoulder, and postural strain through manual therapy."
      },
      {
        title: "Cardiopulmonary & Chest Physiotherapy",
        desc: "Breathing exercises, chest percussion, lung capacity expansion, and post-ICU respiratory conditioning."
      }
    ],

    whoIsItForTitle: "Who Is This Service For?",
    whoIsItFor: [
      "Patients recovering from joint replacement or spinal surgeries.",
      "Stroke survivors requiring continuous motor and balance retraining.",
      "Elderly individuals struggling with joint stiffness, arthritis, or unsteady gait.",
      "Individuals suffering from chronic disc herniation, neck pain, or sports injuries."
    ],

    howItWorks: [
      { step: "01", title: "Comprehensive Assessment", desc: "Detailed initial evaluation of range of motion, muscle strength, balance, and pain levels." },
      { step: "02", title: "Customized Goal Plan", desc: "A phased rehabilitation roadmap created in alignment with surgeon recommendations." },
      { step: "03", title: "Therapy Sessions at Home", desc: "45–60 minute hands-on sessions utilizing exercise protocols and portable electrotherapy." },
      { step: "04", title: "Progress Monitoring", desc: "Weekly objective milestone reviews and home exercise routine guidance." }
    ],

    whyChooseTitle: "Why Choose Skandan Home Physiotherapy?",
    whyChoosePoints: [
      "Qualified BPT / MPT licensed physiotherapists with specialized clinical expertise.",
      "One-on-one undivided attention in your comfortable, familiar home setting.",
      "Equipped with modern portable modality machines (TENS, Muscle Stimulators, IFT).",
      "Goal-driven rehabilitation packages with noticeable recovery milestones."
    ],

    ctaTitle: "Restore Mobility and Live Pain-Free",
    ctaSubtitle: "Book an in-home physiotherapy evaluation today. Call +91 96609 66369.",
    ctaButtonText: "Call +91 96609 66369"
  },

  // =========================================================================
  // CATEGORY 4: DIAGNOSTICS & PREVENTIVE CARE
  // =========================================================================
  {
    id: "vaccination",
    slug: "vaccination",
    title: "Vaccination & Immunization at Home",
    pageTitle: "Doorstep Vaccination & Immunization Services",
    subtitle: "Safe, cold-chain compliant immunizations for adults, seniors, travelers, and infants administered at home.",
    metaTitle: "Vaccination & Immunization at Home | Skandan Home Carre",
    categoryKey: "preventive-diagnostics",
    categoryName: "Diagnostics & Preventive Care",
    iconName: "Syringe",
    isFeatured: false,
    heroImage: "/assets/images/3-1.jpg",
    coverImage: "/assets/images/3-1.jpg",
    badge: "Cold-Chain Certified",
    shortDescription: "Certified nurses delivering adult vaccines (Flu, Pneumonia, Hepatitis B, Tdap, HPV, Shingles) with strict cold-chain preservation.",
    fullDescription: "Preventive immunization is vital across every stage of life. Skandan Home Carre offers complete home vaccination services for infants, adults, and seniors, ensuring cold-chain temperature integrity from pharmaceutical storage to your doorstep.",

    offeringsSectionTitle: "Available In-Home Immunizations",
    offerings: [
      {
        title: "Senior & Adult Preventive Vaccines",
        desc: "Annual Influenza (Flu), Pneumococcal (Pneumonia conjugate/polysaccharide), and Herpes Zoster (Shingles) for immune protection."
      },
      {
        title: "Routine Adult Boosters",
        desc: "Tetanus, Diphtheria, Pertussis (Tdap), Hepatitis A & B, Typhoid, and MMR booster doses."
      },
      {
        title: "Specialized & Travel Immunizations",
        desc: "Human Papillomavirus (HPV) for cervical cancer prevention, Rabies post-exposure courses, and travel vaccines."
      },
      {
        title: "Pediatric & Childhood Immunizations",
        desc: "Government & IAP schedule childhood vaccines administered with gentle pediatric care."
      }
    ],

    whoIsItForTitle: "Who Is This Service For?",
    whoIsItFor: [
      "Senior citizens (60+) recommended for annual flu and lifetime pneumonia shots.",
      "Immunocompromised patients or diabetics seeking preventive protection.",
      "New parents wanting peaceful home vaccination without clinic exposure.",
      "Adults requiring employment, pre-marriage, or travel booster shots."
    ],

    howItWorks: [
      { step: "01", title: "Select Vaccine", desc: "Specify prescribed vaccine and patient details via call or booking form." },
      { step: "02", title: "Cold-Chain Transport", desc: "Vaccine transported in verified temperature-controlled portable cold boxes (+2°C to +8°C)." },
      { step: "03", title: "Sterile Administration", desc: "Qualified nurse conducts pre-check, checks allergies, and administers intramuscularly/subcutaneously." },
      { step: "04", title: "Post-Shot Certificate", desc: "15-minute observation and issuance of formal digital immunization record." }
    ],

    whyChooseTitle: "Our Vaccine Safety Standards",
    whyChoosePoints: [
      "Strict temperature-monitored cold-chain preservation protocol.",
      "Authentic, factory-sealed vaccines sourced from authorized distributors.",
      "Administered exclusively by trained nurses under clinical supervision.",
      "Digital immunization certificates provided for institutional records."
    ],

    ctaTitle: "Protect Your Family with Home Immunization",
    ctaSubtitle: "Schedule your doorstep vaccination visit now by calling +91 96609 66369.",
    ctaButtonText: "Call +91 96609 66369"
  },

  {
    id: "sample-collection",
    slug: "sample-collection",
    title: "Diagnostic Lab Tests (Blood & Urine Sample Collection)",
    pageTitle: "Doorstep Blood Sample Collection & Diagnostic Lab Tests",
    subtitle: "Accurate, painless home blood & urine collection partnered with NABL-accredited diagnostic laboratories.",
    metaTitle: "Diagnostic Lab Tests & Home Collection | Skandan Home Carre",
    categoryKey: "preventive-diagnostics",
    categoryName: "Diagnostics & Preventive Care",
    iconName: "Microscope",
    isFeatured: false,
    heroImage: "/assets/images/diagnostic-service-1.jpg",
    coverImage: "/assets/images/diagnostic-service-1.jpg",
    badge: "NABL Partnered",
    shortDescription: "Certified phlebotomists for painless blood/urine sample collection with digital reports delivered directly to your phone within hours.",
    fullDescription: "Skip the early morning fasting trips to busy lab clinics. Skandan Home Carre provides certified phlebotomists who visit your home on your schedule for blood, urine, and swab sample collections, processing them with NABL-accredited diagnostic labs for maximum clinical precision.",

    offeringsSectionTitle: "Available Home Diagnostic Test Panels",
    offerings: [
      {
        title: "Routine Health & Fasting Profiles",
        desc: "Complete Blood Picture (CBP/CBC), Fasting Blood Sugar (FBS), HbA1c (3-month glucose), and Lipid Profile."
      },
      {
        title: "Organ Function Test Panels",
        desc: "Liver Function Test (LFT), Kidney Function Test (KFT/RFT), Serum Creatinine, Electrolytes, and Uric Acid."
      },
      {
        title: "Thyroid & Hormone Assays",
        desc: "Total Thyroid Profile (T3, T4, TSH), Vitamin D3, Vitamin B12, Serum Ferritin, and hormone panels."
      },
      {
        title: "Fever & Infection Profiles",
        desc: "Dengue NS1/IgM, Malaria Smear, Typhoid Widal, Urine Culture & Sensitivity, and ESR / CRP inflammatory markers."
      },
      {
        title: "Senior Master Health Checkup Packages",
        desc: "Comprehensive 70+ parameter full-body health screening tailored for senior health monitoring."
      }
    ],

    whoIsItForTitle: "Who Is This Service For?",
    whoIsItFor: [
      "Diabetic and hypertensive patients requiring regular routine monitoring.",
      "Elderly, bed-bound, or frail patients who cannot easily travel to pathology labs.",
      "Individuals with acute fever needing immediate morning diagnostic confirmation.",
      "Families seeking annual preventive master health checkups."
    ],

    howItWorks: [
      { step: "01", title: "Book Lab Test", desc: "Select prescribed test panel and confirm your preferred morning fasting time slot." },
      { step: "02", title: "Phlebotomist Visit", desc: "Trained phlebotomist arrives with sterile vacuum tubes and uses painless single-prick technique." },
      { step: "03", title: "Barcoded NABL Processing", desc: "Sample barcoded immediately and transported in temperature-controlled kits to NABL lab." },
      { step: "04", title: "Quick Digital Reports", desc: "Verified PDF reports delivered via WhatsApp and email within 6–12 hours." }
    ],

    whyChooseTitle: "Why Choose Skandan Home Diagnostics?",
    whyChoosePoints: [
      "Certified, gentle phlebotomists specializing in pediatric and geriatric vein access.",
      "100% Barcoded, tamper-proof vacutainer sample handling.",
      "Partnership with top NABL-accredited, automated reference pathology labs.",
      "Fast turnaround time with digital report delivery to patient and doctor."
    ],

    ctaTitle: "Book Fasting Blood Tests at Your Doorstep",
    ctaSubtitle: "Call +91 96609 66369 to book your morning home sample collection slot.",
    ctaButtonText: "Call +91 96609 66369"
  },

  {
    id: "sleep-study",
    slug: "sleep-study",
    title: "In-Home Sleep Study (Sleep Apnea & Snoring Test)",
    pageTitle: "In-Home Sleep Study (Polysomnography & Apnea Screening)",
    subtitle: "Advanced diagnostic overnight sleep study in your own bed to diagnose Obstructive Sleep Apnea and sleep disorders.",
    metaTitle: "In-Home Sleep Study & Sleep Apnea Test | Skandan Home Carre",
    categoryKey: "preventive-diagnostics",
    categoryName: "Diagnostics & Preventive Care",
    iconName: "Moon",
    isFeatured: false,
    heroImage: "/assets/images/couple-of-two-old-and-mature-people-at-home-using-phone-together-in-sofa-senior-use-smartphone.jpg",
    coverImage: "/assets/images/couple-of-two-old-and-mature-people-at-home-using-phone-together-in-sofa-senior-use-smartphone.jpg",
    badge: "Polysomnography",
    shortDescription: "Level-1 and Level-2 diagnostic overnight sleep study in your natural sleeping environment to assess snoring, oxygen dips, and sleep apnea.",
    fullDescription: "Hospital sleep laboratories can feel unnatural and disrupt normal sleep architecture. Skandan Home Carre delivers portable, medical-grade Polysomnography (PSG) sleep study equipment to your home, measuring EEG, respiratory effort, oxygen saturation, snoring, and Apnea-Hypopnea Index (AHI) in your own bed.",

    offeringsSectionTitle: "Diagnostic Sleep Study Parameters",
    offerings: [
      {
        title: "Comprehensive Polysomnography (Level 2/3)",
        desc: "Monitoring of nasal airflow, thoracic respiratory effort, pulse rate, continuous SpO2 oxygenation, and body positioning."
      },
      {
        title: "Sleep Apnea Severity Scoring (AHI)",
        desc: "Accurate calculation of Apnea-Hypopnea Index to classify mild, moderate, or severe Obstructive Sleep Apnea (OSA)."
      },
      {
        title: "Oxygen Desaturation Index (ODI)",
        desc: "Quantifying nighttime hypoxia episodes to assess cardiovascular strain and daytime fatigue risks."
      },
      {
        title: "Pulmonologist Review & CPAP Guidance",
        desc: "Detailed interpretation by qualified pulmonologists/somnologists with CPAP/BiPAP titration advice."
      }
    ],

    whoIsItForTitle: "Who Is This Service For?",
    whoIsItFor: [
      "Individuals experiencing loud chronic snoring, gasping for air, or choking during sleep.",
      "Patients with severe daytime drowsiness, morning headaches, or unrefreshing sleep.",
      "Hypertensive and cardiac patients with suspected sleep-disordered breathing.",
      "Individuals recommended for pre-operative sleep apnea screening prior to bariatric or cardiac surgery."
    ],

    howItWorks: [
      { step: "01", title: "Pre-Study Consultation", desc: "Discuss sleep symptoms and schedule the overnight diagnostic date." },
      { step: "02", title: "Evening Sensor Setup", desc: "Our certified sleep technician visits at 8:30 PM to painlessly attach compact sleep monitoring sensors." },
      { step: "03", title: "Natural Overnight Sleep", desc: "Sleep comfortably in your own bed while the high-precision device logs vital channels." },
      { step: "04", title: "Data Analysis & Report", desc: "Technician retrieves device in morning; senior sleep specialist prepares diagnostic report." }
    ],

    whyChooseTitle: "Advantages of In-Home Sleep Study",
    whyChoosePoints: [
      "Captures true sleep patterns in your familiar, natural home environment.",
      "Significantly more cost-effective and comfortable than overnight hospital admissions.",
      "Medical-grade multichannel diagnostic equipment compliant with AASM standards.",
      "Clear, actionable reports signed off by expert pulmonologists."
    ],

    ctaTitle: "Overcome Snoring and Unrefreshing Sleep",
    ctaSubtitle: "Book an in-home sleep apnea evaluation today. Call +91 96609 66369.",
    ctaButtonText: "Call +91 96609 66369"
  },

  {
    id: "ecg-xray",
    slug: "ecg-xray",
    title: "ECG & Digital X-Ray at Home (Bedside Cardiac & Imaging)",
    pageTitle: "Portable 12-Lead ECG & Digital X-Ray at Home",
    subtitle: "Instant 12-lead cardiac ECG and low-dose digital X-Ray imaging performed right at your bedside.",
    metaTitle: "ECG & Digital X-Ray at Home | Skandan Home Carre",
    categoryKey: "preventive-diagnostics",
    categoryName: "Diagnostics & Preventive Care",
    iconName: "Scan",
    isFeatured: true,
    heroImage: "/assets/images/diagnostic-service-1.jpg",
    coverImage: "/assets/images/diagnostic-service-1.jpg",
    badge: "Bedside Imaging",
    shortDescription: "High-precision 12-lead digital ECG recording and portable digital X-Rays for chest, spine, and joints with instant doctor review.",
    fullDescription: "Transporting a breathless cardiac patient or an elderly person with a suspected hip/joint fracture to an imaging center is risky and painful. Skandan Home Carre brings advanced portable 12-lead ECG machines and high-frequency digital X-Ray units directly to the patient's bedside.",

    offeringsSectionTitle: "Bedside Cardiac & Radiology Capabilities",
    offerings: [
      {
        title: "12-Lead Digital Electrocardiogram (ECG)",
        desc: "Instant resting 12-lead ECG tracing to detect arrhythmias, ischemic changes, conduction blocks, and myocardial strain."
      },
      {
        title: "Digital Chest X-Ray (PA / AP View)",
        desc: "High-resolution bedside chest radiography for pneumonia, pleural effusion, cardiomegaly, and post-COVID lung monitoring."
      },
      {
        title: "Orthopedic & Spine X-Rays",
        desc: "Pelvis, hip, knee, spine, and extremity radiography for bedridden elderly with fall trauma or acute joint immobility."
      },
      {
        title: "Immediate Cardiologist & Radiologist Reporting",
        desc: "Digital transmission to certified radiologists and cardiologists with verified reports delivered within 1–2 hours."
      }
    ],

    whoIsItForTitle: "Who Is This Service For?",
    whoIsItFor: [
      "Elderly, frail, or paralyzed patients who cannot physically travel for diagnostic imaging.",
      "Patients experiencing chest discomfort, palpitations, or shortness of breath needing quick cardiac triage.",
      "Senior citizens who have suffered a home fall with suspected bone fracture.",
      "Post-operative orthopedic or respiratory patients requiring follow-up imaging."
    ],

    howItWorks: [
      { step: "01", title: "Request Diagnostic Visit", desc: "Call our diagnostic desk with doctor prescription or required imaging view." },
      { step: "02", title: "Technician Dispatch", desc: "Certified radiology / cardiac technician arrives with portable certified equipment." },
      { step: "03", title: "Bedside Image Capture", desc: "Safe, low-radiation digital capture completed in minutes without moving the patient." },
      { step: "04", title: "Instant Report Delivery", desc: "ECG strip printed instantly at home; radiologist signed report sent digitally." }
    ],

    whyChooseTitle: "Safety & Quality Standards",
    whyChoosePoints: [
      "Ultra-low radiation AERB-compliant portable digital radiography units.",
      "Hospital-grade calibrated 12-lead ECG devices with crisp signal filters.",
      "Experienced radiology technologists ensuring patient safety and precise positioning.",
      "Rapid turnaround time with direct physician consultation integration."
    ],

    ctaTitle: "Need Immediate ECG or X-Ray at Bedside?",
    ctaSubtitle: "Call our emergency diagnostic desk now at +91 96609 66369 for quick technician dispatch.",
    ctaButtonText: "Call +91 96609 66369"
  },

  // =========================================================================
  // CATEGORY 5: PHARMACY & MEDICAL SUPPLIES
  // =========================================================================
  {
    id: "pharmacy-delivery",
    slug: "pharmacy-delivery",
    title: "Prescription Medicines & Medical Equipment Delivery",
    pageTitle: "Doorstep Prescription Medicine & Medical Equipment Delivery",
    subtitle: "100% Genuine prescribed medicines, surgical consumables, and chronic refill delivery across Hyderabad.",
    metaTitle: "Prescription Medicines & Medical Equipment Delivery | Skandan Home Carre",
    categoryKey: "pharmacy",
    categoryName: "Pharmacy & Medical Supplies",
    iconName: "Package",
    isFeatured: false,
    heroImage: "/assets/images/skanda-5.jpg",
    coverImage: "/assets/images/skanda-5.jpg",
    badge: "Doorstep Delivery",
    shortDescription: "Delivery of genuine prescribed pharmaceuticals, critical care surgical items, wound care supplies, catheters, and adult diapers.",
    fullDescription: "Managing chronic prescriptions or sourcing specialized surgical consumables shouldn’t require multiple pharmacy trips. Skandan Home Carre provides doorstep delivery of authentic medicines, IV fluids, catheters, dressings, and medical nutrition directly from licensed pharmacies.",

    offeringsSectionTitle: "Pharmaceutical & Surgical Products Delivered",
    offerings: [
      {
        title: "Prescription Medicine Delivery",
        desc: "All doctor-prescribed cardiac, diabetic, neurological, antibiotic, and chronic illness medications."
      },
      {
        title: "Surgical & Wound Care Consumables",
        desc: "Sterile gauze, Dynaplast, Betadine, hydrocolloid dressings, sterile gloves, IV sets, and cannula supplies."
      },
      {
        title: "Catheter & Enteral Supplies",
        desc: "Foley catheters, uro-bags, Ryle’s tubes, suction catheters, syringe pumps, and sterile water ampoules."
      },
      {
        title: "Patient Hygiene & Supportive Care",
        desc: "Adult diapers, underpads, sanitizer solutions, air-mattress accessories, and specialized clinical nutrition."
      }
    ],

    whoIsItForTitle: "Who Is This Service For?",
    whoIsItFor: [
      "Chronic care patients requiring reliable monthly prescription refills.",
      "Home-nursing and post-op patients needing specialized surgical consumables.",
      "Families seeking authentic temperature-sensitive pharmaceuticals delivered safely.",
      "Caregivers needing bulk adult diapers and patient hygiene consumables."
    ],

    howItWorks: [
      { step: "01", title: "Upload Prescription", desc: "Send your doctor’s prescription via WhatsApp to +91 96609 66369." },
      { step: "02", title: "Pharmacist Verification", desc: "Our licensed pharmacist reviews and verifies item availability and dosages." },
      { step: "03", title: "Order Packing", desc: "Genuine medicines and surgicals packed with proper batch numbers and seals." },
      { step: "04", title: "Doorstep Delivery", desc: "Prompt delivery with invoice and digital payment options." }
    ],

    whyChooseTitle: "Why Order Through Skandan Pharmacy?",
    whyChoosePoints: [
      "100% Genuine, unexpired medicines from licensed pharmaceutical stockists.",
      "Access to hard-to-find specialized surgical and ICU home consumables.",
      "Cold-chain maintenance for insulin, vaccines, and biologics.",
      "Seamless integration with ongoing home nursing and doctor visit plans."
    ],

    ctaTitle: "Order Your Medicines & Surgical Supplies",
    ctaSubtitle: "WhatsApp your prescription to +91 96609 66369 for quick doorstep delivery.",
    ctaButtonText: "WhatsApp +91 96609 66369"
  }
];

// Helper functions
export const getServiceBySlug = (slug) => {
  if (!slug) return null;
  const cleanSlug = slug.toLowerCase().replace(/^\/+|\/+$/g, '');
  
  // Direct match
  const direct = servicesData.find(s => s.slug === cleanSlug || s.id === cleanSlug);
  if (direct) return direct;

  // Legacy route alias mapping
  const aliasMap = {
    'nursing-services': 'critical-nursing-care',
    'care-givers': 'gda-care-taker',
    'physiotherapy-services': 'physiotherapy',
    'diagnostic-services': 'sample-collection',
    'pharmacy-services': 'pharmacy-delivery',
    'pharmacy-services-medical-surgical': 'pharmacy-delivery',
    'immunization-vaccination': 'vaccination',
    'immunization-vaccination-services': 'vaccination',
    'doctor-on-call': 'doctor-consultation',
    'doctor-on-call-services': 'doctor-consultation',
    'medical-camp-services': 'school-nurse',
    'post-surgery-care': 'critical-nursing-care'
  };

  const mappedSlug = aliasMap[cleanSlug];
  if (mappedSlug) {
    return servicesData.find(s => s.slug === mappedSlug || s.id === mappedSlug);
  }

  return null;
};

export const getFeaturedServices = () => {
  return servicesData.filter(s => s.isFeatured);
};

export const getServicesByCategory = (categoryKey) => {
  if (!categoryKey || categoryKey === 'all') return servicesData;
  return servicesData.filter(s => s.categoryKey === categoryKey);
};
