import { Case } from '../../types';

export const batch4Cases: Case[] = [
  {
    id: 'case-061',
    case_number: 61,
    title: 'Cervical Spondylosis with Radiculopathy: Multilevel Degeneration',
    specialty: 'Spine',
    body_region: 'Spine/Back',
    difficulty: 'Intermediate',
    skill: 'Diagnosis vs Symptom',
    primary_skill: 'Diagnosis vs Symptom',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 58-year-old male
Setting: Outpatient Spine Center

SUBJECTIVE:
Presents with chronic posterior neck aching radiating into the right shoulder, lateral forearm, and thumb for 6 months. Reports intermittent tingling and "electric" shocks down the right arm with neck extension. Denies lower extremity weakness or bowel/bladder dysfunction.

OBJECTIVE:
Cervical Spine Exam: Positive Spurling test on the right reproducing right C6 dermatomal shooting pain. Diminished right brachioradialis reflex (1/4 vs 2/4 left). Sensation decreased over right thumb and index finger. Motor exam: 4/5 right wrist extension, otherwise 5/5.
Cervical MRI: Severe C5-C6 and C6-C7 spondylosis with uncovertebral joint hypertrophy causing severe right C6 neuroforaminal stenosis and exiting nerve root impingement.

ASSESSMENT:
Cervical spondylosis with radiculopathy, C5-C6 / C6-C7.

PLAN:
Right C6 transforaminal epidural steroid injection, cervical traction in physical therapy, follow up in 4 weeks.`,
    question: 'Which ICD-10-CM code is assigned for cervical spondylosis with radiculopathy?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'M47.22 — Other spondylosis with radiculopathy, cervical region', codeSnippet: 'M47.22' },
      { id: 'opt_b', label: 'B', text: 'M54.12 — Radiculopathy, cervical region (code as standalone symptom)', codeSnippet: 'M54.12' },
      { id: 'opt_c', label: 'C', text: 'M47.812 — Spondylosis without myelopathy or radiculopathy, cervical region', codeSnippet: 'M47.812' },
      { id: 'opt_d', label: 'D', text: 'M54.2 — Cervicalgia', codeSnippet: 'M54.2' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'M47.22',
    icd10cm_code: 'M47.22',
    code_description: 'Other spondylosis with radiculopathy, cervical region',
    explanation: 'Category M47.2- represents other spondylosis with radiculopathy. The 5th character 2 designates the cervical region: M47.22. Spondylosis with radiculopathy is a combination code; secondary symptom codes like cervicalgia (M54.2) or standalone radiculopathy (M54.12) should not be coded separately.',
    documentation_evidence: 'Assessment: Cervical spondylosis with radiculopathy, C5-C6 / C6-C7.',
    coding_concept: 'Combination Code: Spondylosis with Radiculopathy (M47.22)',
    common_mistake: 'Coding standalone radiculopathy (M54.12) or neck pain (M54.2) alongside spondylosis.',
    common_trap: 'Unbundling radiculopathy into a separate symptom code when combination code M47.22 exists.',
    learning_objective: 'Utilize combination code M47.22 for cervical spondylosis with radiculopathy and avoid redundant symptom coding.',
    target_time_seconds: 75,
    reference: 'ICD-10-CM Guidelines I.B.7 (Combination Coding) & Category M47.2',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 98,
    assessment_ready: true,
    tags: ['spine', 'cervical', 'radiculopathy', 'combination-code'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-062',
    case_number: 62,
    title: 'Cubital Tunnel Syndrome: Right Ulnar Nerve Entrapment',
    specialty: 'Upper Extremity',
    body_region: 'Upper Extremity',
    difficulty: 'Intermediate',
    skill: 'Laterality & Specificity',
    primary_skill: 'Laterality & Specificity',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 46-year-old female
Setting: Orthopedic Hand & Upper Extremity Clinic

SUBJECTIVE:
Presents with numbness and paresthesias in the right small and ring fingers for 4 months, worse when talking on the phone with the elbow bent or resting her arm on a desk. Denies neck pain.

OBJECTIVE:
Right Upper Extremity Exam: Positive Tinel sign over the right ulnar groove at the elbow radiating to digits 4 and 5. Positive elbow flexion test at 60 seconds. Froment sign positive on the right (weak adductor pollicis). Intrinsic muscle bulk preserved.
EMG/NCS: Significant focal slowing of ulnar motor nerve conduction velocity across the right elbow (retrocondylar groove) confirming moderate cubital tunnel syndrome.

ASSESSMENT:
Lesion of ulnar nerve at elbow (cubital tunnel syndrome), right upper limb.

PLAN:
Nighttime elbow extension splinting, avoidance of direct elbow pressure, ergonomic modification. If unresolving, consider open in situ decompression.`,
    question: 'Which ICD-10-CM code reports cubital tunnel syndrome (lesion of ulnar nerve) of the right upper limb?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'G56.21 — Lesion of ulnar nerve, right upper limb', codeSnippet: 'G56.21' },
      { id: 'opt_b', label: 'B', text: 'G56.22 — Lesion of ulnar nerve, left upper limb', codeSnippet: 'G56.22' },
      { id: 'opt_c', label: 'C', text: 'G56.01 — Carpal tunnel syndrome, right upper limb', codeSnippet: 'G56.01' },
      { id: 'opt_d', label: 'D', text: 'M25.521 — Pain in right elbow', codeSnippet: 'M25.521' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'G56.21',
    icd10cm_code: 'G56.21',
    code_description: 'Lesion of ulnar nerve, right upper limb',
    explanation: 'Cubital tunnel syndrome / ulnar nerve lesion is classified in category G56.2- (Lesion of ulnar nerve). The 5th character 1 designates the right upper limb: G56.21.',
    documentation_evidence: 'Assessment: Lesion of ulnar nerve at elbow (cubital tunnel syndrome), right upper limb.',
    coding_concept: 'Ulnar Nerve Mononeuropathy (G56.2-) Laterality Assignment',
    common_mistake: 'Confusing ulnar nerve lesion (G56.2) with median nerve carpal tunnel syndrome (G56.0).',
    common_trap: 'Selecting carpal tunnel syndrome or incorrect laterality digit.',
    learning_objective: 'Assign G56.21 for right cubital tunnel / ulnar nerve entrapment with correct anatomical laterality.',
    target_time_seconds: 60,
    reference: 'ICD-10-CM Category G56.2',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 98,
    assessment_ready: true,
    tags: ['upper-extremity', 'cubital-tunnel', 'neurology', 'laterality'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-063',
    case_number: 63,
    title: 'Right Hip Greater Trochanteric Pain Syndrome (Bursitis)',
    specialty: 'Hip',
    body_region: 'Hip',
    difficulty: 'Intermediate',
    skill: 'Laterality & Specificity',
    primary_skill: 'Laterality & Specificity',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 61-year-old female
Setting: Outpatient Physical Medicine & Rehabilitation

SUBJECTIVE:
Presents with lateral right hip pain for 4 months. Pain is sharp when lying on the right side in bed at night and aching after walking more than 2 blocks. Denies groin pain, catching, or groin stiffness.

OBJECTIVE:
Right Hip Exam: Full active and passive hip flexion (120°), internal and external rotation without groin pain (negative FABER for intra-articular hip pathology). Point tenderness localized directly over the right greater trochanter and gluteus medius insertion. Pain with resisted hip abduction.
Pelvis/Hip X-rays: Normal joint space of the right femoral-acetabular joint with no osteoarthritis.

ASSESSMENT:
Trochanteric bursitis, right hip.

PLAN:
Ultrasound-guided right trochanteric bursa corticosteroid injection and physical therapy for gluteal strengthening and IT band stretching.`,
    question: 'Which ICD-10-CM code reports trochanteric bursitis of the right hip?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'M70.61 — Trochanteric bursitis, right hip', codeSnippet: 'M70.61' },
      { id: 'opt_b', label: 'B', text: 'M70.62 — Trochanteric bursitis, left hip', codeSnippet: 'M70.62' },
      { id: 'opt_c', label: 'C', text: 'M16.11 — Primary osteoarthritis, right hip', codeSnippet: 'M16.11' },
      { id: 'opt_d', label: 'D', text: 'M25.551 — Pain in right hip', codeSnippet: 'M25.551' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'M70.61',
    icd10cm_code: 'M70.61',
    code_description: 'Trochanteric bursitis, right hip',
    explanation: 'Category M70.6 specifies trochanteric bursitis. The 5th character 1 designates the right hip: M70.61.',
    documentation_evidence: 'Assessment: Trochanteric bursitis, right hip.',
    coding_concept: 'Trochanteric Bursitis (M70.6) vs Intra-articular Hip Osteoarthritis (M16.1)',
    common_mistake: 'Coding hip osteoarthritis or generic hip pain when greater trochanteric bursitis is explicitly diagnosed.',
    common_trap: 'Mismatched laterality or confusing extra-articular bursitis with intra-articular joint arthritis.',
    learning_objective: 'Report trochanteric bursitis with appropriate laterality using category M70.6-.',
    target_time_seconds: 60,
    reference: 'ICD-10-CM Category M70.6',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 98,
    assessment_ready: true,
    tags: ['hip', 'bursitis', 'trochanteric', 'laterality'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-064',
    case_number: 64,
    title: 'Chronic Knee Instability: ACL Insufficiency',
    specialty: 'Knee',
    body_region: 'Knee',
    difficulty: 'Intermediate',
    skill: 'Acute vs Chronic',
    primary_skill: 'Acute vs Chronic',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 27-year-old male
Setting: Sports Medicine Clinic

SUBJECTIVE:
Presents for evaluation of chronic instability and "giving out" of the left knee when playing soccer or pivoting. Had an untreated knee injury 18 months ago with a pop, but no new acute trauma in the past year.

OBJECTIVE:
Left Knee Exam: Lachman test positive with 3+ anterior translation and no solid endpoint. Positive pivot shift test. Normal joint line palpation without localized meniscal tenderness. No effusion today.
MRI Left Knee: Complete chronic disruption and resorption of the left anterior cruciate ligament with chronic anterior subluxation of the lateral tibial plateau. No acute bone contusion or acute meniscal tear.

ASSESSMENT:
Chronic instability of left knee secondary to old ACL rupture.

PLAN:
Scheduled for arthroscopic left ACL reconstruction using bone-patellar tendon-bone autograft.`,
    question: 'Which ICD-10-CM code reports chronic instability of the left knee?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'M23.52 — Chronic instability of knee, left knee', codeSnippet: 'M23.52' },
      { id: 'opt_b', label: 'B', text: 'S83.512A — Sprain of anterior cruciate ligament of left knee, initial encounter', codeSnippet: 'S83.512A' },
      { id: 'opt_c', label: 'C', text: 'M23.51 — Chronic instability of knee, right knee', codeSnippet: 'M23.51' },
      { id: 'opt_d', label: 'D', text: 'M25.562 — Pain in left knee', codeSnippet: 'M25.562' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'M23.52',
    icd10cm_code: 'M23.52',
    code_description: 'Chronic instability of knee, left knee',
    explanation: 'Category M23.5- represents chronic instability of knee (internal derangements in Chapter 13). The 5th character 2 designates the left knee: M23.52. An acute trauma S-code (S83.512A) is incorrect because there was no acute injury and the condition is chronic (18 months).',
    documentation_evidence: 'Assessment: Chronic instability of left knee secondary to old ACL rupture.',
    coding_concept: 'Chronic Knee Instability (M23.5-) vs Acute ACL Sprain (S83.5-)',
    common_mistake: 'Using acute trauma sprain code (S83.512A) for chronic long-standing 18-month ligamentous instability.',
    common_trap: 'Selecting acute initial encounter trauma code for chronic non-acute ligament deficiency.',
    learning_objective: 'Distinguish chronic internal derangement and ligamentous instability (M23.5-) from acute traumatic tears.',
    target_time_seconds: 75,
    reference: 'ICD-10-CM Category M23.5',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 98,
    assessment_ready: true,
    tags: ['knee', 'acl', 'chronic-instability', 'acute-vs-chronic', 'laterality'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-065',
    case_number: 65,
    title: 'Shoulder Rotator Cuff Tear: Acute Traumatic vs Chronic Degenerative',
    specialty: 'Shoulder',
    body_region: 'Shoulder',
    difficulty: 'Intermediate',
    skill: 'Acute vs Chronic',
    primary_skill: 'Acute vs Chronic',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 65-year-old male
Setting: Orthopedic Shoulder Service

SUBJECTIVE:
Presents with longstanding progressive weakness and deep aching in the right shoulder over the past 2 years. Denies any traumatic fall, accident, or acute lifting injury.

OBJECTIVE:
Right Shoulder Exam: Atrophy of the right supraspinatus fossa. Painful arc during active abduction. Drop arm test positive. External rotation lag sign positive.
MRI Right Shoulder: Chronic full-thickness tear of the right supraspinatus and infraspinatus tendons with 2.5 cm tendon retraction, marked muscular fatty degeneration (Goutallier grade 3), and subacromial spurring. No acute hematoma or bone edema.

ASSESSMENT:
Chronic non-traumatic full-thickness complete rotator cuff tear, right shoulder.

PLAN:
Discussed reverse total shoulder arthroplasty vs conservative palliative injections and physical therapy.`,
    question: 'Which ICD-10-CM code reports a chronic non-traumatic complete rotator cuff tear of the right shoulder?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'M75.121 — Complete rotator cuff tear or rupture of right shoulder, not specified as traumatic', codeSnippet: 'M75.121' },
      { id: 'opt_b', label: 'B', text: 'S46.011A — Strain of muscle, fascia and tendon of the rotator cuff of right shoulder, initial encounter', codeSnippet: 'S46.011A' },
      { id: 'opt_c', label: 'C', text: 'M75.122 — Complete rotator cuff tear of left shoulder', codeSnippet: 'M75.122' },
      { id: 'opt_d', label: 'D', text: 'M75.111 — Incomplete rotator cuff tear of right shoulder', codeSnippet: 'M75.111' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'M75.121',
    icd10cm_code: 'M75.121',
    code_description: 'Complete rotator cuff tear or rupture of right shoulder, not specified as traumatic',
    explanation: 'Category M75.12- classifies complete rotator cuff tears not specified as traumatic (chronic/degenerative). The 6th character 1 designates the right shoulder: M75.121. Traumatic tears (S46.0-) are assigned when documentation proves an acute traumatic origin.',
    documentation_evidence: 'Assessment: Chronic non-traumatic full-thickness complete rotator cuff tear, right shoulder.',
    coding_concept: 'Chronic Complete Rotator Cuff Tear (M75.12-) vs Traumatic Strain/Tear (S46.0-)',
    common_mistake: 'Using acute trauma category S46.0 or incomplete tear subcategory M75.11.',
    common_trap: 'Coding an acute traumatic injury for a 2-year degenerative full-thickness tear with fatty infiltration.',
    learning_objective: 'Differentiate chronic/nontraumatic complete rotator cuff tears (M75.12-) from acute traumatic injuries (S46.-).',
    target_time_seconds: 75,
    reference: 'ICD-10-CM Category M75.1',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 98,
    assessment_ready: true,
    tags: ['shoulder', 'rotator-cuff', 'acute-vs-chronic', 'laterality'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-066',
    case_number: 66,
    title: 'Achilles Tendon Rupture: Traumatic Initial Encounter',
    specialty: 'Foot/Ankle',
    body_region: 'Foot/Ankle',
    difficulty: 'Intermediate',
    skill: 'Injury & Encounter Phase',
    primary_skill: 'Injury & Encounter Phase',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 38-year-old male
Setting: Emergency Department

SUBJECTIVE:
Felt a sudden sharp "gunshot-like" snap in the back of his left lower calf while pushing off during a basketball game 2 hours ago. Immediate pain, inability to bear weight.

OBJECTIVE:
Left Lower Extremity Exam: Palpable defect/gap in the left Achilles tendon 4 cm proximal to calcaneal insertion. Positive Thompson test (no plantarflexion of left foot when squeezing calf). Inability to perform single-leg heel raise.
Bedside Ultrasound: Complete full-thickness discontinuity of the left Achilles tendon with 2.2 cm retraction and surrounding acute hematoma.

ASSESSMENT:
Acute complete rupture of left Achilles tendon, initial encounter.

PLAN:
Rigid posterior splint in 20° equinus, non-weight bearing on crutches, urgent referral to orthopedic foot & ankle surgery for percutaneous repair.`,
    question: 'Which ICD-10-CM code reports an acute traumatic rupture of the left Achilles tendon on initial encounter?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'S86.012A — Strain of Achilles tendon of left lower leg, initial encounter', codeSnippet: 'S86.012A' },
      { id: 'opt_b', label: 'B', text: 'S86.011A — Strain of Achilles tendon of right lower leg, initial encounter', codeSnippet: 'S86.011A' },
      { id: 'opt_c', label: 'C', text: 'M76.62 — Achilles tendinitis, left leg', codeSnippet: 'M76.62' },
      { id: 'opt_d', label: 'D', text: 'M62.10 — Other rupture of muscle (nontraumatic), unspecified site', codeSnippet: 'M62.10' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'S86.012A',
    icd10cm_code: 'S86.012A',
    code_description: 'Strain of Achilles tendon of left lower leg, initial encounter',
    explanation: 'In ICD-10-CM, traumatic rupture/strain of the Achilles tendon is indexed under category S86.01- (Strain/rupture of Achilles tendon). The 6th character 2 designates the left lower leg, and the 7th character A represents the initial emergency encounter: S86.012A.',
    documentation_evidence: 'Assessment: Acute complete rupture of left Achilles tendon, initial encounter.',
    coding_concept: 'Traumatic Achilles Tendon Rupture (S86.01-) & 7th Character Extension',
    common_mistake: 'Using nontraumatic tendinitis code (M76.62) or wrong laterality.',
    common_trap: 'Selecting chronic tendinitis code for an acute traumatic tendon disruption.',
    learning_objective: 'Report traumatic Achilles tendon rupture with category S86.01-, specifying limb laterality and encounter phase.',
    target_time_seconds: 60,
    reference: 'ICD-10-CM Category S86.01',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 98,
    assessment_ready: true,
    tags: ['foot-ankle', 'achilles', 'rupture', 'injury', 'laterality'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-067',
    case_number: 67,
    title: 'De Quervain Tenosynovitis: Radial Styloid Tendon Entrapment',
    specialty: 'Upper Extremity',
    body_region: 'Upper Extremity',
    difficulty: 'Beginner',
    skill: 'Laterality & Specificity',
    primary_skill: 'Laterality & Specificity',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 31-year-old female (postpartum 8 weeks)
Setting: Outpatient Hand Clinic

SUBJECTIVE:
Presents with sharp pain over the radial aspect of her right wrist and base of the thumb for 4 weeks, aggravated whenever she lifts her infant.

OBJECTIVE:
Right Hand/Wrist Exam: Localized swelling and exquisite tenderness over the first dorsal extensor compartment at the right radial styloid process (abductor pollicis longus and extensor pollicis brevis tendons). Positive Finkelstein test with sharp pain reproduction. Resisted thumb extension reproduces radial wrist pain.

ASSESSMENT:
Radial styloid tenosynovitis [de Quervain], right wrist.

PLAN:
Right thumb spica splint, corticosteroid injection into first dorsal extensor compartment, ergonomics coaching for infant holding.`,
    question: 'Which ICD-10-CM code reports de Quervain tenosynovitis (radial styloid tenosynovitis)?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'M65.4 — Radial styloid tenosynovitis [de Quervain]', codeSnippet: 'M65.4' },
      { id: 'opt_b', label: 'B', text: 'M65.841 — Other synovitis and tenosynovitis, right hand', codeSnippet: 'M65.841' },
      { id: 'opt_c', label: 'C', text: 'G56.01 — Carpal tunnel syndrome, right upper limb', codeSnippet: 'G56.01' },
      { id: 'opt_d', label: 'D', text: 'M25.531 — Pain in right wrist', codeSnippet: 'M25.531' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'M65.4',
    icd10cm_code: 'M65.4',
    code_description: 'Radial styloid tenosynovitis [de Quervain]',
    explanation: 'ICD-10-CM code M65.4 specifically classifies radial styloid tenosynovitis [de Quervain]. Code M65.4 is a complete 4-character code and does not have sub-digits for laterality.',
    documentation_evidence: 'Assessment: Radial styloid tenosynovitis [de Quervain], right wrist.',
    coding_concept: 'Specific Eponymous Tendinopathy: De Quervain (M65.4)',
    common_mistake: 'Selecting generic unlisted tenosynovitis or carpal tunnel syndrome.',
    common_trap: 'Attempting to add unneeded laterality characters to 4-character complete code M65.4.',
    learning_objective: 'Identify M65.4 as the designated specific code for de Quervain radial styloid tenosynovitis.',
    target_time_seconds: 60,
    reference: 'ICD-10-CM Category M65.4',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 98,
    assessment_ready: true,
    tags: ['upper-extremity', 'wrist', 'de-quervain', 'tendon'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-068',
    case_number: 68,
    title: 'Adult Degenerative Scoliosis: Lumbar Spine',
    specialty: 'Spine',
    body_region: 'Spine/Back',
    difficulty: 'Intermediate',
    skill: 'Laterality & Specificity',
    primary_skill: 'Laterality & Specificity',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 69-year-old female
Setting: Spine Deformity Clinic

SUBJECTIVE:
Presents with progressive postural deformity, trunk leaning to the right, and severe axial low back pain when standing or walking for more than 10 minutes over the past 3 years.

OBJECTIVE:
Spine Exam: Evident right coronal trunk shift, elevated right iliac crest, asymmetrical flank creasing. Lumbar spinal tenderness with restricted flexion and lateral bending.
Standing 36-inch Scoliosis Radiographs: 28° right lumbar curve centered at L2-L4 with 15° rotatory subluxation of L3 on L4, degenerative disc space narrowing, and facet arthrosis.

ASSESSMENT:
Degenerative lumbar scoliosis.

PLAN:
Core muscle endurance physical therapy, custom thoracolumbosacral orthosis (TLSO) for upright ambulation, discussion of adult spinal deformity decompression and fusion.`,
    question: 'Which ICD-10-CM code reports degenerative scoliosis of the lumbar region?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'M41.86 — Other forms of scoliosis, lumbar region (degenerative scoliosis)', codeSnippet: 'M41.86' },
      { id: 'opt_b', label: 'B', text: 'M41.82 — Other forms of scoliosis, cervical region', codeSnippet: 'M41.82' },
      { id: 'opt_c', label: 'C', text: 'M41.20 — Other idiopathic scoliosis, site unspecified', codeSnippet: 'M41.20' },
      { id: 'opt_d', label: 'D', text: 'M54.50 — Low back pain, unspecified', codeSnippet: 'M54.50' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'M41.86',
    icd10cm_code: 'M41.86',
    code_description: 'Other forms of scoliosis, lumbar region',
    explanation: 'Adult degenerative (acquired) scoliosis is classified under "Other forms of scoliosis" (M41.8-). The 5th character 6 denotes the lumbar region: M41.86.',
    documentation_evidence: 'Assessment: Degenerative lumbar scoliosis.',
    coding_concept: 'Degenerative Scoliosis Anatomical Subsite Specificity (M41.86)',
    common_mistake: 'Coding idiopathic adolescent scoliosis (M41.2) or symptom code low back pain (M54.50).',
    common_trap: 'Using idiopathic or unspecified scoliosis when degenerative lumbar deformity is confirmed on standing full-spine x-rays.',
    learning_objective: 'Report degenerative lumbar scoliosis using subcategory M41.86.',
    target_time_seconds: 75,
    reference: 'ICD-10-CM Category M41.8',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 98,
    assessment_ready: true,
    tags: ['spine', 'scoliosis', 'lumbar', 'degenerative'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-069',
    case_number: 69,
    title: 'Gait Disturbance Following Post-Operative Femoral Fracture Repair',
    specialty: 'Rehabilitation',
    body_region: 'Rehabilitation',
    difficulty: 'Intermediate',
    skill: 'Rehabilitation Documentation',
    primary_skill: 'Rehabilitation Documentation',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 74-year-old male
Setting: Outpatient Physical Therapy

SUBJECTIVE:
Referred for outpatient gait retraining and balance training 8 weeks following intramedullary nailing of a right femoral shaft fracture. Patient walks with a marked Trendelenburg limp on the right side and fears falling.

OBJECTIVE:
Gait Analysis: Asymmetric stance phase with significant pelvic drop to the left during right single-leg stance (abductor lurch). Uses single point cane. Gait speed 0.6 m/s. Right hip abductor strength 3+/5.
Bony healing: Orthopedic clearance noted routine union.

ASSESSMENT:
1. Gait and mobility abnormality (Trendelenburg gait instability).
2. Muscle weakness (right hip abductors).
3. Physical therapy rehabilitation for post-fracture mobility deficit.

PLAN:
Comprehensive physical therapy 3x/week focusing on gait training, gluteus medius progressive resistive exercises, and dynamic balance.`,
    question: 'Which ICD-10-CM code reports abnormality of gait and mobility for physical therapy rehabilitation?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'R26.89 — Other abnormalities of gait and mobility', codeSnippet: 'R26.89' },
      { id: 'opt_b', label: 'B', text: 'R26.0 — Ataxic gait', codeSnippet: 'R26.0' },
      { id: 'opt_c', label: 'C', text: 'R26.1 — Paralytic gait', codeSnippet: 'R26.1' },
      { id: 'opt_d', label: 'D', text: 'M25.551 — Pain in right hip', codeSnippet: 'M25.551' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'R26.89',
    icd10cm_code: 'R26.89',
    code_description: 'Other abnormalities of gait and mobility',
    explanation: 'Trendelenburg gait / mobility abnormalities not specified as ataxic (R26.0) or paralytic (R26.1) are coded to R26.89 (Other abnormalities of gait and mobility).',
    documentation_evidence: 'Assessment: Gait and mobility abnormality (Trendelenburg gait instability).',
    coding_concept: 'Rehabilitation Functional Gait Impairment Coding (R26.89)',
    common_mistake: 'Coding ataxic (R26.0) or paralytic (R26.1) gait without neurological cerebellar/paralytic documentation.',
    common_trap: 'Assigning a specific neurological gait code when the deficit is musculoskeletal / postoperative weakness.',
    learning_objective: 'Report musculoskeletal gait abnormalities in physical therapy using R26.89.',
    target_time_seconds: 60,
    reference: 'ICD-10-CM Category R26.8',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 98,
    assessment_ready: true,
    tags: ['rehabilitation', 'gait', 'mobility', 'therapy'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-070',
    case_number: 70,
    title: 'Bilateral Primary Osteoarthritis of Shoulders',
    specialty: 'Shoulder',
    body_region: 'Shoulder',
    difficulty: 'Intermediate',
    skill: 'Laterality & Specificity',
    primary_skill: 'Laterality & Specificity',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 71-year-old male
Setting: Orthopedic Clinic

SUBJECTIVE:
Presents with bilateral progressive shoulder stiffness and deep aching pain for 3 years, right slightly worse than left.

OBJECTIVE:
Bilateral Shoulder Exam: Crepitus on passive glenohumeral movement bilaterally. Right forward elevation 110°, left 115°. Bilateral external rotation limited to 20°. Rotator cuff motor strength 5/5 bilaterally.
Bilateral Shoulder Radiographs: Advanced joint space narrowing of both glenohumeral joints with subchondral sclerosis, inferior humeral osteophytes, and posterior glenoid wear bilaterally.

ASSESSMENT:
Primary osteoarthritis of bilateral shoulders (glenohumeral joints).

PLAN:
Bilateral glenohumeral joint steroid injections and home active-assisted range of motion program.`,
    question: 'Which ICD-10-CM code reports primary osteoarthritis of bilateral shoulders?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'M19.011 and M19.012 — Primary osteoarthritis, right shoulder AND left shoulder', codeSnippet: 'M19.011, M19.012' },
      { id: 'opt_b', label: 'B', text: 'M19.019 — Primary osteoarthritis, unspecified shoulder', codeSnippet: 'M19.019' },
      { id: 'opt_c', label: 'C', text: 'M17.0 — Bilateral primary osteoarthritis of knee', codeSnippet: 'M17.0' },
      { id: 'opt_d', label: 'D', text: 'M25.519 — Pain in unspecified shoulder', codeSnippet: 'M25.519' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'M19.011, M19.012',
    icd10cm_code: 'M19.011, M19.012',
    code_description: 'Primary osteoarthritis, right shoulder and primary osteoarthritis, left shoulder',
    explanation: 'Unlike the knee (M17.0) or hip (M16.0), ICD-10-CM subcategory M19.01 for primary shoulder osteoarthritis does NOT provide a single combination bilateral code. Per Official ICD-10-CM Guideline I.B.13, when no bilateral code is provided, assign separate codes for both the right (M19.011) and left (M19.012) sides.',
    documentation_evidence: 'Assessment: Primary osteoarthritis of bilateral shoulders.',
    coding_concept: 'Bilateral Condition Coding without a Dedicated Bilateral Code (Guideline I.B.13)',
    common_mistake: 'Searching for a non-existent single bilateral shoulder code or using unspecified code M19.019.',
    common_trap: 'Assuming every joint has a single bilateral osteoarthritis code.',
    learning_objective: 'Apply Guideline I.B.13 by coding both right (M19.011) and left (M19.012) codes when no combination bilateral code exists.',
    target_time_seconds: 75,
    reference: 'ICD-10-CM Official Guidelines I.B.13 (Laterality) & Category M19.01',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 99,
    assessment_ready: true,
    tags: ['shoulder', 'osteoarthritis', 'bilateral', 'guideline-rule'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-071',
    case_number: 71,
    title: 'Post-Traumatic Osteoarthritis: Right Knee Following Tibial Plateau Fracture',
    specialty: 'Knee',
    body_region: 'Knee',
    difficulty: 'Advanced',
    skill: 'Diagnosis Selection',
    primary_skill: 'Diagnosis vs Symptom',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 48-year-old male
Setting: Orthopedic Reconstructive Clinic

SUBJECTIVE:
Presents with severe right knee pain and swelling for 1 year. Sustained a severely comminuted right tibial plateau fracture in a motor vehicle collision 5 years ago treated with open reduction internal fixation. Has developed progressive joint space narrowing and stiffness since.

OBJECTIVE:
Right Knee Exam: Moderate joint effusion, antalgic gait, fixed 10° flexion contracture, range of motion 10° to 95°. Medial and lateral joint line tenderness. Well-healed lateral surgical scar.
X-Rays Right Knee: Healed lateral tibial plateau fracture hardware. Marked end-stage post-traumatic joint space loss, severe subchondral sclerosis, and exuberant peripheral osteophytosis.

ASSESSMENT:
Post-traumatic osteoarthritis, right knee.

PLAN:
Total knee arthroplasty with hardware removal.`,
    question: 'Which ICD-10-CM code reports post-traumatic osteoarthritis of the right knee?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'M17.31 — Unilateral post-traumatic osteoarthritis, right knee', codeSnippet: 'M17.31' },
      { id: 'opt_b', label: 'B', text: 'M17.11 — Primary osteoarthritis, right knee', codeSnippet: 'M17.11' },
      { id: 'opt_c', label: 'C', text: 'M17.32 — Unilateral post-traumatic osteoarthritis, left knee', codeSnippet: 'M17.32' },
      { id: 'opt_d', label: 'D', text: 'T84.84XA — Pain due to internal orthopedic prosthetic devices, initial encounter', codeSnippet: 'T84.84XA' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'M17.31',
    icd10cm_code: 'M17.31',
    code_description: 'Unilateral post-traumatic osteoarthritis, right knee',
    explanation: 'Category M17.3- specifically classifies post-traumatic osteoarthritis of the knee. The 5th character 1 designates the right knee: M17.31. Primary osteoarthritis (M17.11) is incorrect because the arthritis is explicitly secondary to prior trauma.',
    documentation_evidence: 'Assessment: Post-traumatic osteoarthritis, right knee.',
    coding_concept: 'Post-Traumatic Osteoarthritis (M17.3-) vs Primary Osteoarthritis (M17.1-)',
    common_mistake: 'Coding primary osteoarthritis (M17.11) when documented etiology is post-traumatic secondary to prior fracture.',
    common_trap: 'Overlooking the post-traumatic etiology in a patient with a documented history of severe prior intra-articular fracture.',
    learning_objective: 'Distinguish post-traumatic osteoarthritis (M17.3-) from primary osteoarthritis (M17.1-).',
    target_time_seconds: 75,
    reference: 'ICD-10-CM Category M17.3',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 98,
    assessment_ready: true,
    tags: ['knee', 'osteoarthritis', 'post-traumatic', 'laterality'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-072',
    case_number: 72,
    title: 'Lateral Epicondylitis: Tennis Elbow Right Arm',
    specialty: 'Upper Extremity',
    body_region: 'Upper Extremity',
    difficulty: 'Beginner',
    skill: 'Laterality & Specificity',
    primary_skill: 'Laterality & Specificity',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 43-year-old male
Setting: Occupational Health & Orthopedics

SUBJECTIVE:
Presents with 2 months of lateral right elbow aching aggravated by gripping tools, turning doorknobs, and mouse clicking at work.

OBJECTIVE:
Right Elbow Exam: Point tenderness directly over the right lateral epicondyle and origin of the extensor carpi radialis brevis (ECRB). Pain with resisted wrist extension and resisted middle finger extension with the elbow in full extension (positive Cozen and Maudsley tests). Passive wrist flexion with elbow extension causes lateral epicondylar stretch pain.

ASSESSMENT:
Lateral epicondylitis, right elbow (Tennis elbow).

PLAN:
Counterforce forearm band, eccentric wrist extensor physical therapy, topical NSAID gel.`,
    question: 'Which ICD-10-CM code reports lateral epicondylitis of the right elbow?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'M77.11 — Lateral epicondylitis, right elbow', codeSnippet: 'M77.11' },
      { id: 'opt_b', label: 'B', text: 'M77.12 — Lateral epicondylitis, left elbow', codeSnippet: 'M77.12' },
      { id: 'opt_c', label: 'C', text: 'M77.01 — Medial epicondylitis, right elbow', codeSnippet: 'M77.01' },
      { id: 'opt_d', label: 'D', text: 'M25.521 — Pain in right elbow', codeSnippet: 'M25.521' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'M77.11',
    icd10cm_code: 'M77.11',
    code_description: 'Lateral epicondylitis, right elbow',
    explanation: 'Category M77.1 specifies lateral epicondylitis. The 5th character 1 designates the right elbow: M77.11. Medial epicondylitis (Golfer elbow) is classified in M77.0-.',
    documentation_evidence: 'Assessment: Lateral epicondylitis, right elbow (Tennis elbow).',
    coding_concept: 'Epicondylitis Subsite (Lateral M77.1 vs Medial M77.0) and Laterality',
    common_mistake: 'Confusing lateral epicondylitis (M77.1) with medial epicondylitis (M77.0).',
    common_trap: 'Mismatched medial/lateral subsite or laterality character.',
    learning_objective: 'Report lateral epicondylitis using M77.11 for right elbow.',
    target_time_seconds: 60,
    reference: 'ICD-10-CM Category M77.1',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 98,
    assessment_ready: true,
    tags: ['upper-extremity', 'elbow', 'epicondylitis', 'laterality'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-073',
    case_number: 73,
    title: 'Total Knee Arthroplasty Follow-up: Routine Orthopedic Aftercare',
    specialty: 'Rehabilitation',
    body_region: 'Rehabilitation',
    difficulty: 'Intermediate',
    skill: 'Rehabilitation Documentation',
    primary_skill: 'Rehabilitation Documentation',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 68-year-old female
Setting: Outpatient Rehabilitation Clinic

SUBJECTIVE:
Presents for physical therapy initial evaluation 3 weeks following elective uncomplicated right total knee replacement for primary osteoarthritis.

OBJECTIVE:
Right Knee Physical Therapy Evaluation: Incision clean, dry, and well-healed without erythema. Mild postoperative swelling (girth +1.5 cm vs left). Active knee flexion 0° to 85°. Quadriceps lag 10°. Ambulates with a rolling walker.
Status: Healing normally following joint replacement surgery.

ASSESSMENT:
1. Physical therapy aftercare following right joint replacement surgery.
2. Acquired presence of right artificial knee joint.

PLAN:
Physical therapy 3x/week for range of motion, quadriceps re-education, and progressive weaning to single point cane.`,
    question: 'Which ICD-10-CM code is sequenced first for outpatient physical therapy aftercare following uncomplicated joint replacement surgery?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'Z47.1 — Aftercare following joint replacement surgery', codeSnippet: 'Z47.1' },
      { id: 'opt_b', label: 'B', text: 'M17.11 — Primary osteoarthritis, right knee', codeSnippet: 'M17.11' },
      { id: 'opt_c', label: 'C', text: 'T84.84XA — Complication of internal orthopedic device, initial encounter', codeSnippet: 'T84.84XA' },
      { id: 'opt_d', label: 'D', text: 'M25.561 — Pain in right knee', codeSnippet: 'M25.561' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'Z47.1',
    icd10cm_code: 'Z47.1',
    code_description: 'Aftercare following joint replacement surgery',
    explanation: 'Per Official ICD-10-CM Guidelines I.C.21.c.7, encounters for physical therapy aftercare following uncomplicated joint replacement surgery are assigned Z47.1 as the primary reason for encounter. Osteoarthritis (M17.11) is resolved by surgery and should not be coded as active primary diagnosis.',
    documentation_evidence: 'Assessment: Physical therapy aftercare following right joint replacement surgery.',
    coding_concept: 'Post-Surgical Joint Replacement Aftercare Coding (Z47.1)',
    common_mistake: 'Coding resolved pre-operative osteoarthritis (M17.11) as primary diagnosis during postoperative rehab.',
    common_trap: 'Assigning osteoarthritis or complication codes for routine post-arthroplasty physical therapy.',
    learning_objective: 'Sequence Z47.1 as primary diagnosis for routine postoperative orthopedic physical therapy aftercare.',
    target_time_seconds: 75,
    reference: 'ICD-10-CM Official Guidelines I.C.21.c.7 & Category Z47.1',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 99,
    assessment_ready: true,
    tags: ['rehabilitation', 'aftercare', 'joint-replacement', 'guidelines'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-074',
    case_number: 74,
    title: 'Right Trigger Finger: Acquired Flexor Tenosynovitis',
    specialty: 'Upper Extremity',
    body_region: 'Upper Extremity',
    difficulty: 'Beginner',
    skill: 'Laterality & Specificity',
    primary_skill: 'Laterality & Specificity',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 54-year-old female
Setting: Hand Surgery Clinic

SUBJECTIVE:
Complains of painful clicking and catching of her right middle finger (long finger) when bending her hand in the morning for 2 months. Frequently has to unlock the finger with her other hand.

OBJECTIVE:
Right Hand Exam: Palpable, tender nodule over the A1 pulley at the base of the right 3rd metacarpal head (right middle finger). Active flexion produces palpable snapping and locked flexor tendon requiring passive extension to unlock.

ASSESSMENT:
Trigger finger, right middle finger.

PLAN:
Right middle finger A1 pulley corticosteroid injection; consideration of open A1 pulley release if symptoms recur.`,
    question: 'Which ICD-10-CM code reports trigger finger of the right middle finger?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'M65.331 — Trigger finger, right middle finger', codeSnippet: 'M65.331' },
      { id: 'opt_b', label: 'B', text: 'M65.332 — Trigger finger, left middle finger', codeSnippet: 'M65.332' },
      { id: 'opt_c', label: 'C', text: 'M65.311 — Trigger thumb, right thumb', codeSnippet: 'M65.311' },
      { id: 'opt_d', label: 'D', text: 'M65.30 — Trigger finger, unspecified finger', codeSnippet: 'M65.30' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'M65.331',
    icd10cm_code: 'M65.331',
    code_description: 'Trigger finger, right middle finger',
    explanation: 'Category M65.3 classifies trigger finger. The 5th character 3 designates the middle finger, and 6th character 1 designates the right hand: M65.331.',
    documentation_evidence: 'Assessment: Trigger finger, right middle finger.',
    coding_concept: 'Trigger Finger Digit Subsite and Laterality Specificity (M65.331)',
    common_mistake: 'Selecting trigger thumb (M65.311) or unspecified finger code (M65.30).',
    common_trap: 'Mismatched digit subsite (thumb vs index vs middle finger).',
    learning_objective: 'Report trigger digit specifying exact anatomical finger and hand laterality (M65.331 for right middle finger).',
    target_time_seconds: 60,
    reference: 'ICD-10-CM Category M65.3',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 98,
    assessment_ready: true,
    tags: ['upper-extremity', 'trigger-finger', 'laterality', 'digits'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-075',
    case_number: 75,
    title: 'Fibromyalgia: Widespread Chronic Musculoskeletal Pain',
    specialty: 'General MSK',
    body_region: 'General Musculoskeletal',
    difficulty: 'Beginner',
    skill: 'Diagnosis vs Symptom',
    primary_skill: 'Diagnosis vs Symptom',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 44-year-old female
Setting: Rheumatology Outpatient Clinic

SUBJECTIVE:
Presents with generalized body aching, diffuse muscle soreness, chronic non-restorative sleep, and fatigue lasting over 2 years. Denies joint swelling or inflammatory erythema.

OBJECTIVE:
Exam: Multiple bilateral tender points (14/18 ACR tender points positive across occiput, trapezius, supraspinatus, second rib, lateral epicondyle, gluteal, greater trochanter, and knee). No synovitis, joint effusions, or muscle atrophy.
Labs: ESR, CRP, ANA, RF, and thyroid panel all within normal limits.

ASSESSMENT:
Fibromyalgia.

PLAN:
Low-dose duloxetine, sleep hygiene optimization, gentle aquatic aerobic conditioning.`,
    question: 'Which ICD-10-CM code reports fibromyalgia?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'M79.7 — Fibromyalgia', codeSnippet: 'M79.7' },
      { id: 'opt_b', label: 'B', text: 'M79.1 — Myalgia', codeSnippet: 'M79.1' },
      { id: 'opt_c', label: 'C', text: 'R53.83 — Other fatigue', codeSnippet: 'R53.83' },
      { id: 'opt_d', label: 'D', text: 'M25.50 — Pain in unspecified joint', codeSnippet: 'M25.50' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'M79.7',
    icd10cm_code: 'M79.7',
    code_description: 'Fibromyalgia',
    explanation: 'ICD-10-CM code M79.7 is the dedicated diagnosis code for fibromyalgia (fibrositis, myofibrositis). Individual symptoms such as myalgia (M79.1) or fatigue (R53.83) should not be coded separately.',
    documentation_evidence: 'Assessment: Fibromyalgia.',
    coding_concept: 'Established Systemic Pain Disorder (M79.7) vs Symptom Coding',
    common_mistake: 'Coding individual symptoms of muscle pain or fatigue instead of established diagnosis M79.7.',
    common_trap: 'Unbundling fibromyalgia into multiple non-specific symptom codes.',
    learning_objective: 'Assign M79.7 for established fibromyalgia without redundant symptom coding.',
    target_time_seconds: 60,
    reference: 'ICD-10-CM Category M79.7',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 98,
    assessment_ready: true,
    tags: ['general-msk', 'fibromyalgia', 'rheumatology'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-076',
    case_number: 76,
    title: 'Iliotibial Band Friction Syndrome: Right Knee',
    specialty: 'Knee',
    body_region: 'Knee',
    difficulty: 'Intermediate',
    skill: 'Laterality & Specificity',
    primary_skill: 'Laterality & Specificity',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 28-year-old female marathon runner
Setting: Sports Medicine Clinic

SUBJECTIVE:
Reports sharp burning pain over the lateral aspect of her right knee 2 cm proximal to the joint line, occurring after running 3 miles for the past 6 weeks. Denies knee locking, giving way, or trauma.

OBJECTIVE:
Right Knee Exam: Point tenderness directly over the right lateral femoral epicondyle. Positive Noble compression test (severe pain with compression over the lateral femoral epicondyle as knee is extended from 90° to 30°). Positive Ober test indicating right IT band tightness. Meniscal McMurray test negative. Joint line non-tender.

ASSESSMENT:
Iliotibial band syndrome, right knee.

PLAN:
IT band stretching, hip abductor strengthening, foam rolling, temporary reduction in running mileage.`,
    question: 'Which ICD-10-CM code reports iliotibial band syndrome of the right lower extremity / knee?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'M76.31 — Iliotibial band syndrome, right leg', codeSnippet: 'M76.31' },
      { id: 'opt_b', label: 'B', text: 'M76.32 — Iliotibial band syndrome, left leg', codeSnippet: 'M76.32' },
      { id: 'opt_c', label: 'C', text: 'M23.211 — Derangement of meniscus due to old tear, right knee', codeSnippet: 'M23.211' },
      { id: 'opt_d', label: 'D', text: 'M25.561 — Pain in right knee', codeSnippet: 'M25.561' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'M76.31',
    icd10cm_code: 'M76.31',
    code_description: 'Iliotibial band syndrome, right leg',
    explanation: 'Category M76.3 specifies iliotibial band syndrome. The 5th character 1 designates the right leg: M76.31.',
    documentation_evidence: 'Assessment: Iliotibial band syndrome, right knee.',
    coding_concept: 'Extra-articular Tendon/Fascia Syndrome (M76.3-) Laterality',
    common_mistake: 'Confusing extra-articular IT band friction with intra-articular lateral meniscus pathology.',
    common_trap: 'Assigning a general knee pain or meniscal code for documented IT band syndrome.',
    learning_objective: 'Report iliotibial band syndrome using M76.31 with right lower extremity laterality.',
    target_time_seconds: 60,
    reference: 'ICD-10-CM Category M76.3',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 98,
    assessment_ready: true,
    tags: ['knee', 'it-band', 'sports-medicine', 'laterality'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-077',
    case_number: 77,
    title: 'Ankylosing Spondylitis: Multiple Spine Sites',
    specialty: 'Spine',
    body_region: 'Spine/Back',
    difficulty: 'Advanced',
    skill: 'Laterality & Specificity',
    primary_skill: 'Laterality & Specificity',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 34-year-old male
Setting: Outpatient Rheumatology & Spine Clinic

SUBJECTIVE:
Presents with 5 years of worsening inflammatory low back and thoracic stiffness, severe morning stiffness lasting over 90 minutes, improved with exercise. Bilateral buttock aching.

OBJECTIVE:
Spine Exam: Modified Schober test 2.5 cm (severe lumbar mobility restriction). Chest expansion restricted to 1.8 cm. Bilateral sacroiliac joint compression tenderness (FABER test positive bilaterally).
Imaging (Pelvis & Spine): Bilateral grade 3 sacroiliitis with subchondral sclerosis and joint space erosions. Lumbar and thoracic spine radiographs demonstrate classic bilateral marginal syndesmophytes ("bamboo spine" appearance). HLA-B27 positive.

ASSESSMENT:
Ankylosing spondylitis of multiple sites in spine with bilateral sacroiliitis.

PLAN:
Initiate TNF-alpha inhibitor (adalimumab), spine mobility physical therapy program.`,
    question: 'Which ICD-10-CM code reports ankylosing spondylitis of multiple sites in spine?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'M45.8 — Ankylosing spondylitis of multiple sites in spine', codeSnippet: 'M45.8' },
      { id: 'opt_b', label: 'B', text: 'M45.6 — Ankylosing spondylitis of lumbar region', codeSnippet: 'M45.6' },
      { id: 'opt_c', label: 'C', text: 'M45.0 — Ankylosing spondylitis of multiple sites in spine, site unspecified', codeSnippet: 'M45.0' },
      { id: 'opt_d', label: 'D', text: 'M46.1 — Sacroiliitis, not elsewhere classified', codeSnippet: 'M46.1' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'M45.8',
    icd10cm_code: 'M45.8',
    code_description: 'Ankylosing spondylitis of multiple sites in spine',
    explanation: 'Category M45 represents ankylosing spondylitis. When multiple spinal regions (thoracic, lumbar, and sacroiliac) are documented, the 5th character 8 specifies multiple sites in spine: M45.8.',
    documentation_evidence: 'Assessment: Ankylosing spondylitis of multiple sites in spine with bilateral sacroiliitis.',
    coding_concept: 'Ankylosing Spondylitis Multiple Spinal Subsites Coding (M45.8)',
    common_mistake: 'Coding only single region (M45.6) or unbundling separate sacroiliitis code (M46.1).',
    common_trap: 'Failing to assign the multiple sites code M45.8 when multiple spinal regions are involved.',
    learning_objective: 'Report multiregional ankylosing spondylitis using specific code M45.8.',
    target_time_seconds: 75,
    reference: 'ICD-10-CM Category M45',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 98,
    assessment_ready: true,
    tags: ['spine', 'ankylosing-spondylitis', 'rheumatology', 'multiple-sites'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-078',
    case_number: 78,
    title: 'Morton Neuroma: Third Intermetatarsal Space Left Foot',
    specialty: 'Foot/Ankle',
    body_region: 'Foot/Ankle',
    difficulty: 'Intermediate',
    skill: 'Laterality & Specificity',
    primary_skill: 'Laterality & Specificity',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 47-year-old female
Setting: Foot & Ankle Clinic

SUBJECTIVE:
Presents with burning pain and a sensation of "walking on a rolled-up sock or marble" under the ball of her left foot radiating into the 3rd and 4th toes for 5 months. Symptoms aggravated by narrow dress shoes.

OBJECTIVE:
Left Foot Exam: Positive Mulder click (audible and palpable painful click when compressing the 3rd and 4th metatarsal heads mediolaterally while applying dorsal-plantar pressure in the 3rd webspace). Webspace tenderness without erythema.
Ultrasound Left Foot: 5.8 mm hypoechoic interdigital neuroma in the third intermetatarsal space of the left foot.

ASSESSMENT:
Morton metatarsalgia / interdigital neuroma, left foot.

PLAN:
Wide-toe box footwear recommendation, custom metatarsal pad, ultrasound-guided local corticosteroid injection.`,
    question: 'Which ICD-10-CM code reports Morton neuroma / metatarsalgia?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'G57.62 — Lesion of plantar nerve (Morton neuroma), left lower limb', codeSnippet: 'G57.62' },
      { id: 'opt_b', label: 'B', text: 'G57.61 — Lesion of plantar nerve, right lower limb', codeSnippet: 'G57.61' },
      { id: 'opt_c', label: 'C', text: 'M77.9 — Enthesopathy, unspecified', codeSnippet: 'M77.9' },
      { id: 'opt_d', label: 'D', text: 'M79.672 — Pain in left foot', codeSnippet: 'M79.672' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'G57.62',
    icd10cm_code: 'G57.62',
    code_description: 'Lesion of plantar nerve, left lower limb',
    explanation: 'Morton neuroma / metatarsalgia is indexed under "Neuroma, Morton" to category G57.6- (Lesion of plantar nerve). The 5th character 2 designates the left lower limb: G57.62.',
    documentation_evidence: 'Assessment: Morton metatarsalgia / interdigital neuroma, left foot.',
    coding_concept: 'Index Mapping of Morton Neuroma to Plantar Nerve Mononeuropathy (G57.6-)',
    common_mistake: 'Using non-specific foot pain code (M79.672) or confusing right (1) and left (2).',
    common_trap: 'Searching Chapter 13 musculoskeletal codes instead of Chapter 6 nervous system mononeuropathies.',
    learning_objective: 'Index Morton neuroma to G57.6- (plantar nerve lesion) with appropriate limb laterality.',
    target_time_seconds: 75,
    reference: 'ICD-10-CM Alphabetic Index & Category G57.6',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 98,
    assessment_ready: true,
    tags: ['foot-ankle', 'morton-neuroma', 'neurology', 'laterality'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-079',
    case_number: 79,
    title: 'Cervical Disc Herniation with Myelopathy',
    specialty: 'Spine',
    body_region: 'Spine/Back',
    difficulty: 'Advanced',
    skill: 'Diagnosis vs Symptom',
    primary_skill: 'Diagnosis vs Symptom',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 62-year-old male
Setting: Neurosurgical Spine Center

SUBJECTIVE:
Presents with progressive balance disturbance, clumsy hands (difficulty buttoning shirts and writing), and heaviness in both legs when walking for 3 months. Mild neck aching.

OBJECTIVE:
Neurological Exam: Hyperreflexia in upper and lower extremities (3+ patellar and Achilles reflexes bilaterally). Positive Hoffmann sign bilaterally. Positive Babinski sign on the left. Inverted brachioradialis reflex. Spastic tandem gait.
Cervical MRI: Large central extruded C5-C6 disc herniation with severe spinal cord compression and intrinsic cord signal change (T2 hyperintensity) indicating compressive cervical myelopathy.

ASSESSMENT:
Cervical disc disorder with myelopathy, mid-cervical region (C5-C6).

PLAN:
Urgent anterior cervical discectomy and fusion (ACDF) C5-C6 to prevent permanent neurological deficit.`,
    question: 'Which ICD-10-CM code reports a cervical disc disorder with myelopathy in the mid-cervical region?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'M50.02 — Cervical disc disorder with myelopathy, mid-cervical region', codeSnippet: 'M50.02' },
      { id: 'opt_b', label: 'B', text: 'M50.12 — Cervical disc disorder with radiculopathy, mid-cervical region', codeSnippet: 'M50.12' },
      { id: 'opt_c', label: 'C', text: 'M50.22 — Other cervical disc displacement, mid-cervical region', codeSnippet: 'M50.22' },
      { id: 'opt_d', label: 'D', text: 'G95.9 — Disease of spinal cord, unspecified', codeSnippet: 'G95.9' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'M50.02',
    icd10cm_code: 'M50.02',
    code_description: 'Cervical disc disorder with myelopathy, mid-cervical region',
    explanation: 'Category M50.0- specifically classifies cervical disc disorders with myelopathy. The 5th character 2 designates the mid-cervical region (C4-C5, C5-C6, C6-C7): M50.02. Radiculopathy (M50.1) and disc displacement without myelopathy (M50.2) do not capture cord myelopathy.',
    documentation_evidence: 'Assessment: Cervical disc disorder with myelopathy, mid-cervical region (C5-C6).',
    coding_concept: 'Cervical Disc Herniation with Myelopathy Combination Code (M50.02)',
    common_mistake: 'Coding radiculopathy (M50.12) or standalone spinal cord disease (G95.9).',
    common_trap: 'Overlooking spinal cord hyperintensity and upper motor neuron signs indicating myelopathy.',
    learning_objective: 'Identify compressive spinal cord myelopathy combination code M50.02 for mid-cervical disc herniations.',
    target_time_seconds: 75,
    reference: 'ICD-10-CM Category M50.0',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 98,
    assessment_ready: true,
    tags: ['spine', 'cervical', 'myelopathy', 'disc-herniation'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-080',
    case_number: 80,
    title: 'Recurrent Anterior Dislocation of Left Shoulder',
    specialty: 'Shoulder',
    body_region: 'Shoulder',
    difficulty: 'Intermediate',
    skill: 'Acute vs Chronic',
    primary_skill: 'Acute vs Chronic',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 22-year-old male
Setting: Orthopedic Sports Surgery

SUBJECTIVE:
Presents with recurrent dislocations of the left shoulder (4 episodes over the past 14 months, each reduced at urgent care). Dislocated again 2 weeks ago while swimming.

OBJECTIVE:
Left Shoulder Exam: Marked anterior apprehension and relocation tests positive. Sulcus sign 1+. Significant anterior capsular laxity. Rotator cuff strength 5/5.
MRI Arthrogram Left Shoulder: Chronic anterior-inferior labral tear (Bankart lesion) with attenuation of the inferior glenohumeral ligament and Hill-Sachs impaction deformity of the posterosuperior humeral head. No acute fracture.

ASSESSMENT:
Recurrent dislocation of left shoulder (chronic shoulder instability / Bankart lesion).

PLAN:
Arthroscopic left shoulder Bankart labral repair and capsular shift.`,
    question: 'Which ICD-10-CM code reports recurrent dislocation of the left shoulder?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'M24.412 — Recurrent dislocation, left shoulder', codeSnippet: 'M24.412' },
      { id: 'opt_b', label: 'B', text: 'S43.005A — Dislocation of unspecified shoulder, initial encounter', codeSnippet: 'S43.005A' },
      { id: 'opt_c', label: 'C', text: 'M24.411 — Recurrent dislocation, right shoulder', codeSnippet: 'M24.411' },
      { id: 'opt_d', label: 'D', text: 'M25.512 — Pain in left shoulder', codeSnippet: 'M25.512' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'M24.412',
    icd10cm_code: 'M24.412',
    code_description: 'Recurrent dislocation, left shoulder',
    explanation: 'Recurrent (chronic/habitual) dislocations are classified in Chapter 13 musculoskeletal category M24.4- (Recurrent dislocation). The 6th character 2 designates the left shoulder: M24.412. Acute traumatic dislocations (S43.0-) are only used for single acute traumatic events.',
    documentation_evidence: 'Assessment: Recurrent dislocation of left shoulder (chronic shoulder instability / Bankart lesion).',
    coding_concept: 'Recurrent Joint Dislocation (M24.4-) vs Acute Traumatic Dislocation (S43.0-)',
    common_mistake: 'Using acute traumatic dislocation category S43.0 for chronic recurrent dislocations.',
    common_trap: 'Assigning an initial acute trauma code for a patient presenting with habitual recurrent dislocations.',
    learning_objective: 'Report chronic recurrent shoulder dislocations using category M24.41- with anatomical laterality.',
    target_time_seconds: 75,
    reference: 'ICD-10-CM Category M24.41',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 98,
    assessment_ready: true,
    tags: ['shoulder', 'dislocation', 'chronic-instability', 'laterality'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
];
