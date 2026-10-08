import { CaseItem } from '../../types';

export const BATCH_1_CASES: CaseItem[] = [
  {
    id: 'case-001',
    case_number: 1,
    title: 'Knee Osteoarthritis: Diagnosis vs. Symptom',
    specialty: 'Orthopedics',
    body_region: 'Knee',
    difficulty: 'Beginner',
    skill: 'Diagnosis Selection',
    primary_skill: 'Diagnosis vs Symptom',
    secondary_skills: ['Laterality & Specificity'],
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 67-year-old female
Setting: Outpatient Orthopedic Clinic

SUBJECTIVE:
Patient reports a 6-month history of worsening right knee pain, stiffness in the morning lasting ~20 minutes, and difficulty negotiating stairs. Denies recent acute injury or trauma.

OBJECTIVE:
Right Knee Exam: Mild joint effusion. Tenderness along the medial joint line. Active ROM 0 to 110 degrees with crepitus. Stable to varus/valgus stress. Weight-bearing radiographs demonstrate medial compartment joint space narrowing, subchondral sclerosis, and marginal osteophytes consistent with degenerative changes.

ASSESSMENT:
Primary osteoarthritis, right knee.

PLAN:
Continue conservative management including home exercise program and physical therapy 2x weekly. Prescribed topical NSAID. Follow up in 6 weeks.`,
    question: 'Based on the clinical documentation, what is the single most accurate and supported ICD-10-CM coding decision for this encounter?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'M25.561 — Pain in right knee', codeSnippet: 'M25.561' },
      { id: 'opt_b', label: 'B', text: 'M17.11 — Unilateral primary osteoarthritis, right knee', codeSnippet: 'M17.11' },
      { id: 'opt_c', label: 'C', text: 'M17.0 — Bilateral primary osteoarthritis of knee', codeSnippet: 'M17.0' },
      { id: 'opt_d', label: 'D', text: 'M17.11 (Primary osteoarthritis, right knee) AND M25.561 (Pain in right knee)', codeSnippet: 'M17.11, M25.561' },
    ],
    correct_answer: 'opt_b',
    correct_option: 'B',
    code: 'M17.11',
    icd10cm_code: 'M17.11',
    code_description: 'Unilateral primary osteoarthritis, right knee',
    explanation: 'According to ICD-10-CM Official Guidelines Section I.B.4 & I.B.5, signs and symptoms that are routinely associated with a disease process (such as knee pain in knee osteoarthritis) should NOT be assigned as additional codes when a definitive diagnosis has been established by the physician. M17.11 captures both the definitive etiology and anatomical laterality.',
    documentation_evidence: 'Assessment: Primary osteoarthritis, right knee.',
    coding_concept: 'Definitive Diagnosis vs. Associated Symptom (ICD-10-CM Guideline I.B.4/5)',
    common_mistake: 'Coding both the osteoarthritis and the symptom of knee pain (M25.561), or failing to select the code that incorporates laterality.',
    common_trap: 'Redundant symptom coding alongside an established diagnosis.',
    learning_objective: 'Differentiate between definitive diagnoses and inherent symptoms, avoiding redundant symptom coding while assigning specific laterality.',
    target_time_seconds: 90,
    reference: 'ICD-10-CM Official Guidelines for Coding and Reporting FY 2026/2027, Section I.B.4 & I.B.5',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 98,
    assessment_ready: true,
    tags: ['knee', 'laterality', 'symptom-vs-diagnosis', 'osteoarthritis', 'outpatient'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-002',
    case_number: 2,
    title: 'Shoulder Pain & ROM: Avoid Premature Diagnosis Inference',
    specialty: 'Orthopedics',
    body_region: 'Shoulder',
    difficulty: 'Beginner',
    skill: 'Documentation Interpretation',
    primary_skill: 'Documentation Interpretation',
    secondary_skills: ['Diagnosis Selection'],
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 52-year-old male
Setting: Outpatient Orthopedic Clinic

SUBJECTIVE:
Chief Complaint: Left shoulder discomfort and restricted overhead reaching for 3 weeks after lifting heavy equipment. Reports dull aching localized to anterior shoulder.

OBJECTIVE:
Left Shoulder Exam: Active flexion 120°, abduction 110° limited by discomfort. Pain with active internal rotation. Passive ROM preserved with mild end-range discomfort. Neer and Hawkins tests equivocal. Plain x-rays negative for acute fracture or calcific tendinitis.

ASSESSMENT:
Left shoulder pain and decreased range of motion. Ordered outpatient MRI to evaluate rotator cuff integrity.

PLAN:
Rest, avoid overhead lifting. Physical therapy referral for gentle range of motion. Await MRI results before establishing definitive diagnosis.`,
    question: 'Which coding choice correctly adheres to documentation boundaries for this encounter?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'M75.102 — Unspecified rotator cuff tear of left shoulder', codeSnippet: 'M75.102' },
      { id: 'opt_b', label: 'B', text: 'M75.02 — Adhesive capsulitis of left shoulder', codeSnippet: 'M75.02' },
      { id: 'opt_c', label: 'C', text: 'M25.512 (Pain in left shoulder) and M25.612 (Stiffness of left shoulder, NEC)', codeSnippet: 'M25.512, M25.612' },
      { id: 'opt_d', label: 'D', text: 'M75.52 — Bursitis of left shoulder', codeSnippet: 'M75.52' },
    ],
    correct_answer: 'opt_c',
    correct_option: 'C',
    code: 'M25.512, M25.612',
    icd10cm_code: 'M25.512, M25.612',
    code_description: 'Pain in left shoulder; Stiffness of left shoulder, not elsewhere classified',
    explanation: 'In outpatient coding (ICD-10-CM Guideline IV.H), when a definitive diagnosis has not yet been confirmed by the provider and diagnostic workup is pending, the coder MUST code the documented signs and symptoms. A coder must never assume a suspected condition.',
    documentation_evidence: 'Assessment: Left shoulder pain and decreased range of motion. Await MRI results.',
    coding_concept: 'Code Documented Signs/Symptoms When Definitive Diagnosis is Pending (Guideline IV.H)',
    common_mistake: 'Assuming a rotator cuff tear because an MRI was ordered to rule it out.',
    common_trap: 'Coding suspected structural pathology before physician verification.',
    learning_objective: 'Do not infer structural pathology from symptoms or pending diagnostic orders alone.',
    target_time_seconds: 90,
    reference: 'ICD-10-CM Official Guidelines Section IV.H (Uncertain Diagnosis in Outpatient)',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 96,
    assessment_ready: true,
    tags: ['shoulder', 'documentation-gap', 'outpatient', 'symptom-vs-diagnosis'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-003',
    case_number: 3,
    title: 'Knee Osteoarthritis: Strict Laterality Assignment',
    specialty: 'Orthopedics',
    body_region: 'Knee',
    difficulty: 'Beginner',
    skill: 'Laterality & Specificity',
    primary_skill: 'Laterality & Specificity',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 71-year-old male
Setting: Outpatient Orthopedics

SUBJECTIVE:
Presents for evaluation of chronic left knee pain. Has tried over-the-counter acetaminophen with minimal relief. Right knee remains completely asymptomatic without pain or prior surgeries.

OBJECTIVE:
Left Knee: Moderate medial joint line tenderness. Extension full (0°), flexion to 115°. Standing x-rays show left knee medial joint space loss and spurring. Right knee radiograph shows clear joint space and normal anatomy.

ASSESSMENT:
Primary osteoarthritis, left knee.

PLAN:
Scheduled for intra-articular corticosteroid injection of left knee. Physical therapy prescribed.`,
    question: 'Which ICD-10-CM code precisely reports the documented condition with correct laterality?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'M17.11 — Unilateral primary osteoarthritis, right knee', codeSnippet: 'M17.11' },
      { id: 'opt_b', label: 'B', text: 'M17.12 — Unilateral primary osteoarthritis, left knee', codeSnippet: 'M17.12' },
      { id: 'opt_c', label: 'C', text: 'M17.9 — Osteoarthritis of knee, unspecified', codeSnippet: 'M17.9' },
      { id: 'opt_d', label: 'D', text: 'M17.0 — Bilateral primary osteoarthritis of knee', codeSnippet: 'M17.0' },
    ],
    correct_answer: 'opt_b',
    correct_option: 'B',
    code: 'M17.12',
    icd10cm_code: 'M17.12',
    code_description: 'Unilateral primary osteoarthritis, left knee',
    explanation: 'ICD-10-CM classifies osteoarthritis of the knee with specific digits for laterality: 1 = right, 2 = left, 0 = bilateral, 9 = unspecified. The clinical record explicitly diagnoses unilateral primary osteoarthritis of the left knee (M17.12) with an asymptomatic right knee.',
    documentation_evidence: 'Assessment: Primary osteoarthritis, left knee.',
    coding_concept: 'ICD-10-CM Laterality Convention (Guideline I.B.13)',
    common_mistake: 'Defaulting to an unspecified code (M17.9) or misidentifying right vs. left digits (1 vs 2).',
    common_trap: 'Overlooking right vs left numerical character assignment.',
    learning_objective: 'Consistently identify and apply correct anatomical laterality digits based on physician documentation.',
    target_time_seconds: 60,
    reference: 'ICD-10-CM Chapter 13 Tabular List & Guideline I.B.13',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 97,
    assessment_ready: true,
    tags: ['knee', 'laterality', 'osteoarthritis'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-004',
    case_number: 4,
    title: 'Rotator Cuff Tear: Documented Pathology vs. Chief Complaint',
    specialty: 'Orthopedics',
    body_region: 'Shoulder',
    difficulty: 'Beginner',
    skill: 'Diagnosis Selection',
    primary_skill: 'Diagnosis vs Symptom',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 59-year-old female
Setting: Orthopedic Sports Medicine

SUBJECTIVE:
Presents for follow-up review of right shoulder MRI. Continues to complain of localized right shoulder pain, weakness with abduction, and difficulty sleeping on the right side.

OBJECTIVE:
Right Shoulder: Atrophy of supraspinatus fossa. Positive drop-arm sign and positive Jobe test.
MRI Review: Non-traumatic complete full-thickness tear of the right supraspinatus tendon with 1.5 cm retraction. No glenohumeral arthritis.

ASSESSMENT:
Non-traumatic complete rotator cuff tear, right shoulder.

PLAN:
Discussed conservative vs. operative intervention. Patient elects to proceed with right arthroscopic rotator cuff repair. Pre-op clearance ordered.`,
    question: 'What is the appropriate primary diagnosis code to report for this surgical consultation visit?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'M25.511 — Pain in right shoulder', codeSnippet: 'M25.511' },
      { id: 'opt_b', label: 'B', text: 'M75.101 — Unspecified rotator cuff tear of right shoulder, not specified as traumatic', codeSnippet: 'M75.101' },
      { id: 'opt_c', label: 'C', text: 'M75.121 — Complete rotator cuff tear or rupture of right shoulder, not specified as traumatic', codeSnippet: 'M75.121' },
      { id: 'opt_d', label: 'D', text: 'S46.011A — Strain of muscle and tendon of rotator cuff of right shoulder, initial encounter', codeSnippet: 'S46.011A' },
    ],
    correct_answer: 'opt_c',
    correct_option: 'C',
    code: 'M75.121',
    icd10cm_code: 'M75.121',
    code_description: 'Complete rotator cuff tear or rupture of right shoulder, not specified as traumatic',
    explanation: 'The physician documented a non-traumatic complete rotator cuff tear of the right shoulder supported by MRI findings. M75.121 specifically captures a complete, non-traumatic tear of the right shoulder. M75.101 represents an unspecified tear, whereas M75.121 captures the maximum available documented specificity (complete).',
    documentation_evidence: 'Assessment: Non-traumatic complete rotator cuff tear, right shoulder.',
    coding_concept: 'Highest Level of Specificity for Documented Structural Conditions (Guideline I.B.1)',
    common_mistake: 'Choosing an unspecified tear code (M75.101) or a traumatic injury S-code when documentation states non-traumatic/degenerative.',
    common_trap: 'Failing to code the complete tear subcategory.',
    learning_objective: 'Select the code with the highest degree of documented specificity and distinguish between non-traumatic (M-codes) and acute traumatic (S-codes) tears.',
    target_time_seconds: 90,
    reference: 'ICD-10-CM Tabular List category M75.1 & Guideline I.B.1',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 97,
    assessment_ready: true,
    tags: ['shoulder', 'rotator-cuff', 'specificity', 'laterality'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-005',
    case_number: 5,
    title: 'Low Back Pain: Lumbago vs. Radiculopathy',
    specialty: 'Spine',
    body_region: 'Spine/Back',
    difficulty: 'Beginner',
    skill: 'Documentation Interpretation',
    primary_skill: 'Diagnosis vs Symptom',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 44-year-old male
Setting: Outpatient Physical Medicine & Spine Clinic

SUBJECTIVE:
Patient presents with 4 weeks of dull, aching lower back pain after weekend gardening. Denies shooting pain down the buttocks or legs, numbness, tingling, or bowel/bladder dysfunction.

OBJECTIVE:
Lumbar Spine Exam: Paraspinal muscle tenderness across L3-L5. Active lumbar flexion 70° with tightness. Straight leg raise (SLR) test negative bilaterally (no radiating leg pain). Motor strength 5/5 in bilateral lower extremities (L4, L5, S1 intact). Deep tendon reflexes symmetric (patellar 2+, Achilles 2+).

ASSESSMENT:
Low back strain / lumbago without sciatica or radiculopathy.

PLAN:
Core strengthening physical therapy, short course of muscle relaxants, ergonomic counseling.`,
    question: 'Which ICD-10-CM coding decision is supported by the physical exam and physician assessment?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'M54.50 — Low back pain, unspecified', codeSnippet: 'M54.50' },
      { id: 'opt_b', label: 'B', text: 'M54.41 — Lumbago with sciatica, right side', codeSnippet: 'M54.41' },
      { id: 'opt_c', label: 'C', text: 'M51.16 — Intervertebral disc disorders with radiculopathy, lumbar region', codeSnippet: 'M51.16' },
      { id: 'opt_d', label: 'D', text: 'G83.4 — Cauda equina syndrome', codeSnippet: 'G83.4' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'M54.50',
    icd10cm_code: 'M54.50',
    code_description: 'Low back pain, unspecified',
    explanation: 'The documentation explicitly notes low back pain without sciatica or radiculopathy (negative straight leg raise, no neurological deficits). Code M54.50 represents low back pain without sciatica. Coding radiculopathy (M51.16) or lumbago with sciatica (M54.4-) violates documentation boundaries when negative findings are documented.',
    documentation_evidence: 'Assessment: Low back strain / lumbago without sciatica or radiculopathy.',
    coding_concept: 'Documented Absence of Sciatica/Radiculopathy in Lumbar Pain',
    common_mistake: 'Coding lumbago with sciatica (M54.4-) when the exam specifically rules out sciatic nerve involvement.',
    common_trap: 'Assuming lumbar pain includes radiculopathy without documentation.',
    learning_objective: 'Distinguish between axial low back pain (M54.5-) and low back pain with radiculopathy/sciatica (M54.4-).',
    target_time_seconds: 75,
    reference: 'ICD-10-CM Tabular List category M54.5 & Official Guidelines Chapter 13',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 96,
    assessment_ready: true,
    tags: ['spine', 'low-back-pain', 'radiculopathy', 'outpatient'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-006',
    case_number: 6,
    title: 'Plantar Fasciitis: Anatomical Laterality',
    specialty: 'Orthopedics',
    body_region: 'Foot/Ankle',
    difficulty: 'Beginner',
    skill: 'Laterality & Specificity',
    primary_skill: 'Laterality & Specificity',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 36-year-old female
Setting: Podiatry / Orthopedic Foot & Ankle Clinic

SUBJECTIVE:
Complains of sharp heel pain in the right foot upon taking first steps out of bed in the morning. Pain eases after walking a few minutes but intensifies toward the evening. Left foot is pain-free.

OBJECTIVE:
Right Foot: Point tenderness over the medial calcaneal tubercle and proximal plantar fascia. Passive dorsiflexion of the toes reproduces discomfort (positive Windlass test). No swelling, erythema, or skin breakdown. Weight-bearing x-rays show small non-acute right calcaneal spur.

ASSESSMENT:
Right plantar fasciitis.

PLAN:
Plantar fascia stretching regimen, supportive heel cup orthotic, night splint.`,
    question: 'What is the correct ICD-10-CM code assignment for this podiatric diagnosis?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'M72.2 — Plantar fascial fibromatosis (Plantar fasciitis)', codeSnippet: 'M72.2' },
      { id: 'opt_b', label: 'B', text: 'M79.671 — Pain in right foot', codeSnippet: 'M79.671' },
      { id: 'opt_c', label: 'C', text: 'M77.31 — Calcaneal spur, right foot', codeSnippet: 'M77.31' },
      { id: 'opt_d', label: 'D', text: 'M72.2 AND M79.671 (Plantar fasciitis and right foot pain)', codeSnippet: 'M72.2, M79.671' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'M72.2',
    icd10cm_code: 'M72.2',
    code_description: 'Plantar fascial fibromatosis (Plantar fasciitis)',
    explanation: 'Plantar fasciitis is classified to category M72.2 in ICD-10-CM. In the ICD-10-CM classification, M72.2 does not have laterality sub-digits; the code itself represents plantar fasciitis. Foot pain (M79.671) is an integral symptom and should not be coded separately per Guideline I.B.4.',
    documentation_evidence: 'Assessment: Right plantar fasciitis.',
    coding_concept: 'Recognizing Codes in Tabular List Without Laterality Sub-digits',
    common_mistake: 'Adding symptom code M79.671 or coding incidental asymptomatic calcaneal spur as primary.',
    common_trap: 'Searching for a non-existent right-foot laterality sub-digit for M72.2.',
    learning_objective: 'Identify standard ICD-10-CM condition codes (like M72.2) that do not require laterality extension digits in the Tabular list.',
    target_time_seconds: 60,
    reference: 'ICD-10-CM Tabular List category M72.2 & Guideline I.B.4',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 95,
    assessment_ready: true,
    tags: ['foot-ankle', 'plantar-fasciitis', 'symptom-vs-diagnosis'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-007',
    case_number: 7,
    title: 'Trochanteric Bursitis: Hip Laterality & Site',
    specialty: 'Orthopedics',
    body_region: 'Hip',
    difficulty: 'Beginner',
    skill: 'Laterality & Specificity',
    primary_skill: 'Laterality & Specificity',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 61-year-old female
Setting: Outpatient Orthopedics

SUBJECTIVE:
Presents with persistent lateral left hip aching for 2 months, exacerbated when lying on her left side at night and rising from deep chairs. Denies groin pain or previous hip fractures.

OBJECTIVE:
Left Hip Exam: Well-localized exquisite tenderness to palpation directly over the left greater trochanter. Passive hip internal/external rotation smooth and pain-free in 90° flexion (ruling out intra-articular hip joint pathology). Normal neurovascular exam of lower extremities.

ASSESSMENT:
Trochanteric bursitis, left hip.

PLAN:
Left trochanteric bursa injection with 1% lidocaine and triamcinolone under sterile technique. Physical therapy prescribed for IT band stretching.`,
    question: 'Which ICD-10-CM code reports trochanteric bursitis of the left hip?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'M70.61 — Trochanteric bursitis, right hip', codeSnippet: 'M70.61' },
      { id: 'opt_b', label: 'B', text: 'M70.62 — Trochanteric bursitis, left hip', codeSnippet: 'M70.62' },
      { id: 'opt_c', label: 'C', text: 'M16.12 — Unilateral primary osteoarthritis, left hip', codeSnippet: 'M16.12' },
      { id: 'opt_d', label: 'D', text: 'M25.552 — Pain in left hip', codeSnippet: 'M25.552' },
    ],
    correct_answer: 'opt_b',
    correct_option: 'B',
    code: 'M70.62',
    icd10cm_code: 'M70.62',
    code_description: 'Trochanteric bursitis, left hip',
    explanation: 'Category M70.6 designates trochanteric bursitis with laterality characters: 1 = right hip, 2 = left hip, 0 = unspecified hip. M70.62 precisely identifies left hip trochanteric bursitis. Pain (M25.552) is an inherent symptom.',
    documentation_evidence: 'Assessment: Trochanteric bursitis, left hip.',
    coding_concept: 'Extra-articular Bursitis vs. Intra-articular Osteoarthritis with Laterality',
    common_mistake: 'Assigning osteoarthritis (M16) or confusing digit 1 (right) with digit 2 (left).',
    common_trap: 'Picking non-specific joint pain when specific bursitis is diagnosed.',
    learning_objective: 'Accurately select specific extra-articular bursitis codes (M70.6-) with exact anatomical laterality.',
    target_time_seconds: 60,
    reference: 'ICD-10-CM Chapter 13 Category M70.6',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 97,
    assessment_ready: true,
    tags: ['hip', 'bursitis', 'laterality'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-008',
    case_number: 8,
    title: 'Lateral Epicondylitis: Tennis Elbow Laterality',
    specialty: 'Orthopedics',
    body_region: 'Upper Extremity',
    difficulty: 'Beginner',
    skill: 'Laterality & Specificity',
    primary_skill: 'Laterality & Specificity',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 48-year-old male
Setting: Outpatient Orthopedics

SUBJECTIVE:
Complains of lateral right elbow pain for 6 weeks, exacerbated when gripping tools and turning doorknobs. Denies numbness or tingling in the hand or fingers.

OBJECTIVE:
Right Elbow Exam: Point tenderness over the lateral epicondyle. Pain with resisted wrist extension and resisted middle finger extension (positive Cozen and Maudsley tests). Full elbow flexion and extension. Left elbow normal.

ASSESSMENT:
Lateral epicondylitis, right elbow (Tennis elbow).

PLAN:
Counterforce forearm brace, eccentric extensor tendon exercises, topical diclofenac gel.`,
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
    explanation: 'Category M77.1 specifies lateral epicondylitis with laterality digits: 1 = right elbow, 2 = left elbow. Medial epicondylitis is categorized under M77.0. Therefore, M77.11 is the precise supported code.',
    documentation_evidence: 'Assessment: Lateral epicondylitis, right elbow.',
    coding_concept: 'Distinguishing Medial vs Lateral Epicondylitis with Laterality',
    common_mistake: 'Confusing medial (M77.0) vs lateral (M77.1) epicondylitis.',
    common_trap: 'Picking medial epicondylitis code for tennis elbow.',
    learning_objective: 'Distinguish between lateral epicondylitis (tennis elbow, M77.1-) and medial epicondylitis (golfer elbow, M77.0-) with anatomical laterality.',
    target_time_seconds: 60,
    reference: 'ICD-10-CM Chapter 13 Category M77.1',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 97,
    assessment_ready: true,
    tags: ['upper-extremity', 'elbow', 'laterality', 'tendinitis'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-009',
    case_number: 9,
    title: 'Carpal Tunnel Syndrome: Unilateral vs. Bilateral',
    specialty: 'Orthopedics',
    body_region: 'Upper Extremity',
    difficulty: 'Beginner',
    skill: 'Laterality & Specificity',
    primary_skill: 'Laterality & Specificity',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 42-year-old female
Setting: Hand & Upper Extremity Clinic

SUBJECTIVE:
Reports numbness and tingling in the thumb, index, and middle fingers of the right hand for 3 months. Symptoms awaken her at night. Left hand is completely asymptomatic.

OBJECTIVE:
Right Wrist/Hand: Positive Phalen test at 30 seconds; positive Tinel sign over the right median nerve at the volar carpal crease. Thenar muscle bulk preserved. 2-point discrimination 5mm in median nerve distribution. Left wrist/hand exam unremarkable. EMG/NCS confirms moderate right median mononeuropathy at the wrist.

ASSESSMENT:
Carpal tunnel syndrome, right upper limb.

PLAN:
Neutral wrist splint for night wear. Ergonomic modifications. Follow-up in 6 weeks.`,
    question: 'Which ICD-10-CM code reports carpal tunnel syndrome affecting the right upper limb?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'G56.01 — Carpal tunnel syndrome, right upper limb', codeSnippet: 'G56.01' },
      { id: 'opt_b', label: 'B', text: 'G56.02 — Carpal tunnel syndrome, left upper limb', codeSnippet: 'G56.02' },
      { id: 'opt_c', label: 'C', text: 'G56.03 — Carpal tunnel syndrome, bilateral upper limbs', codeSnippet: 'G56.03' },
      { id: 'opt_d', label: 'D', text: 'G56.00 — Carpal tunnel syndrome, unspecified upper limb', codeSnippet: 'G56.00' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'G56.01',
    icd10cm_code: 'G56.01',
    code_description: 'Carpal tunnel syndrome, right upper limb',
    explanation: 'Category G56.0 classifies carpal tunnel syndrome with specific laterality characters: 1 = right, 2 = left, 3 = bilateral, 0 = unspecified. Since only the right limb is affected and documented, G56.01 is the correct code.',
    documentation_evidence: 'Assessment: Carpal tunnel syndrome, right upper limb.',
    coding_concept: 'Nerve Entrapment Laterality Designations (Chapter 6)',
    common_mistake: 'Selecting bilateral code (G56.03) or unspecified code (G56.00).',
    common_trap: 'Assuming bilateral presentation when documentation specifies unilateral right.',
    learning_objective: 'Apply laterality coding rules in Chapter 6 mononeuropathies (G56.0-).',
    target_time_seconds: 60,
    reference: 'ICD-10-CM Chapter 6 Category G56.0',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 97,
    assessment_ready: true,
    tags: ['upper-extremity', 'wrist', 'neurology', 'laterality'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-010',
    case_number: 10,
    title: 'Primary Hip Osteoarthritis: Bilateral Verification',
    specialty: 'Orthopedics',
    body_region: 'Hip',
    difficulty: 'Beginner',
    skill: 'Laterality & Specificity',
    primary_skill: 'Laterality & Specificity',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 69-year-old male
Setting: Outpatient Orthopedics

SUBJECTIVE:
Patient complains of bilateral groin and anterior thigh pain with prolonged ambulation for 1 year. Stiffness in both hips in the morning lasting 30 minutes.

OBJECTIVE:
Bilateral Hips: Decreased internal rotation bilaterally (10° right, 15° left) with groin discomfort. Antalgic waddling gait.
Pelvis/Hip Radiographs: Bilateral superior-lateral joint space narrowing, subchondral sclerosis, and acetabular osteophytes present symmetrically in both hip joints.

ASSESSMENT:
Bilateral primary osteoarthritis of hips.

PLAN:
Physical therapy for hip abductor strengthening, bilateral intra-articular steroid injections scheduled.`,
    question: 'What is the correct ICD-10-CM code for bilateral primary osteoarthritis of the hips?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'M16.0 — Bilateral primary osteoarthritis of hip', codeSnippet: 'M16.0' },
      { id: 'opt_b', label: 'B', text: 'M16.11 (Right primary osteoarthritis) AND M16.12 (Left primary osteoarthritis)', codeSnippet: 'M16.11, M16.12' },
      { id: 'opt_c', label: 'C', text: 'M16.9 — Osteoarthritis of hip, unspecified', codeSnippet: 'M16.9' },
      { id: 'opt_d', label: 'D', text: 'M25.551 AND M25.552 (Pain in right and left hips)', codeSnippet: 'M25.551, M25.552' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'M16.0',
    icd10cm_code: 'M16.0',
    code_description: 'Bilateral primary osteoarthritis of hip',
    explanation: 'When bilateral primary osteoarthritis of the hip is documented and confirmed, ICD-10-CM provides a combination code: M16.0 (Bilateral primary osteoarthritis of hip). Reporting two separate unilateral codes (M16.11 + M16.12) is redundant and incorrect when a specific bilateral combination code exists in the classification.',
    documentation_evidence: 'Assessment: Bilateral primary osteoarthritis of hips.',
    coding_concept: 'Combination Bilateral Coding vs Two Unilateral Codes (Guideline I.B.13)',
    common_mistake: 'Reporting two separate unilateral codes (M16.11 + M16.12) instead of the single combination bilateral code (M16.0).',
    common_trap: 'Double-coding unilateral codes when a bilateral code exists.',
    learning_objective: 'Utilize single combination bilateral codes (e.g. M16.0) when both sides are affected rather than separate unilateral codes.',
    target_time_seconds: 70,
    reference: 'ICD-10-CM Chapter 13 Category M16 & Guideline I.B.13',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 98,
    assessment_ready: true,
    tags: ['hip', 'bilateral', 'osteoarthritis', 'combination-code'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-011',
    case_number: 11,
    title: 'Cervicalgia vs. Cervical Radiculopathy',
    specialty: 'Spine',
    body_region: 'Spine/Back',
    difficulty: 'Beginner',
    skill: 'Diagnosis Selection',
    primary_skill: 'Diagnosis vs Symptom',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 33-year-old female
Setting: Outpatient Physical Medicine

SUBJECTIVE:
Reports persistent neck stiffness and dull aching at the base of the neck for 3 weeks following long hours at a desktop workstation. Denies radiating arm pain, hand tingling, or weakness.

OBJECTIVE:
Cervical Spine Exam: Tenderness to palpation in bilateral upper trapezius and levator scapulae muscles. Cervical active ROM: rotation 60° bilaterally with muscular tightness, flexion/extension preserved. Spurling test negative bilaterally (no radiating radicular symptoms). Upper extremity reflex, motor, and sensory exams completely intact.

ASSESSMENT:
Cervicalgia (Neck pain).

PLAN:
Physical therapy for cervical postural restoration and ergonomic workstation setup.`,
    question: 'What is the appropriate ICD-10-CM code assignment based on the clinical record?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'M54.2 — Cervicalgia', codeSnippet: 'M54.2' },
      { id: 'opt_b', label: 'B', text: 'M54.12 — Radiculopathy, cervical region', codeSnippet: 'M54.12' },
      { id: 'opt_c', label: 'C', text: 'M50.10 — Cervical disc disorder with radiculopathy', codeSnippet: 'M50.10' },
      { id: 'opt_d', label: 'D', text: 'S13.4XXA — Sprain of ligaments of cervical spine, initial encounter', codeSnippet: 'S13.4XXA' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'M54.2',
    icd10cm_code: 'M54.2',
    code_description: 'Cervicalgia',
    explanation: 'The provider documented cervicalgia (neck pain) with no radicular symptoms and negative Spurling test. Code M54.2 specifically designates cervicalgia. Assigning radiculopathy (M54.12) or traumatic sprain (S13.4) violates documented clinical facts.',
    documentation_evidence: 'Assessment: Cervicalgia (Neck pain).',
    coding_concept: 'Axial Cervical Pain vs Cervical Radiculopathy',
    common_mistake: 'Assuming cervical disc pathology or radiculopathy when neurological exam is negative.',
    common_trap: 'Coding radiculopathy without documented nerve root irritation.',
    learning_objective: 'Report axial neck pain using M54.2 and avoid coding radiculopathy without documented neurological involvement.',
    target_time_seconds: 60,
    reference: 'ICD-10-CM Category M54.2',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 96,
    assessment_ready: true,
    tags: ['spine', 'cervical', 'symptom-vs-diagnosis'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-012',
    case_number: 12,
    title: 'Achilles Tendinitis: Insertion vs. Mid-substance & Laterality',
    specialty: 'Orthopedics',
    body_region: 'Foot/Ankle',
    difficulty: 'Beginner',
    skill: 'Laterality & Specificity',
    primary_skill: 'Laterality & Specificity',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 29-year-old male
Setting: Sports Medicine Clinic

SUBJECTIVE:
Recreational runner reports aching and morning stiffness in the back of the left heel for 4 weeks. Pain worsens during hill sprints. Right heel is asymptomatic.

OBJECTIVE:
Left Lower Extremity: Palpable thickening and tenderness 3 cm proximal to the calcaneal insertion of the left Achilles tendon. Pain reproduced with passive ankle dorsiflexion. Thompson test negative (Achilles intact). Right Achilles normal without tenderness.

ASSESSMENT:
Achilles tendinitis, left leg.

PLAN:
Eccentric calf loading protocol, avoid speed work for 3 weeks, silicone heel lifts.`,
    question: 'Which ICD-10-CM code correctly represents Achilles tendinitis of the left leg?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'M76.61 — Achilles tendinitis, right leg', codeSnippet: 'M76.61' },
      { id: 'opt_b', label: 'B', text: 'M76.62 — Achilles tendinitis, left leg', codeSnippet: 'M76.62' },
      { id: 'opt_c', label: 'C', text: 'S86.012A — Strain of right Achilles tendon, initial encounter', codeSnippet: 'S86.012A' },
      { id: 'opt_d', label: 'D', text: 'M25.572 — Pain in left ankle and joints of left foot', codeSnippet: 'M25.572' },
    ],
    correct_answer: 'opt_b',
    correct_option: 'B',
    code: 'M76.62',
    icd10cm_code: 'M76.62',
    code_description: 'Achilles tendinitis, left leg',
    explanation: 'Category M76.6 designates Achilles tendinitis with laterality digits: 1 = right leg, 2 = left leg, 0 = unspecified leg. The diagnosis of non-traumatic left Achilles tendinitis is reported as M76.62.',
    documentation_evidence: 'Assessment: Achilles tendinitis, left leg.',
    coding_concept: 'Lower Extremity Enthesopathies with Laterality',
    common_mistake: 'Selecting the right leg code (M76.61) or selecting an acute traumatic strain code (S86.0-).',
    common_trap: 'Confusing right/left digit or substituting traumatic S-code for chronic tendinitis.',
    learning_objective: 'Identify non-traumatic lower extremity tendinitis codes (M76.6-) with exact anatomical laterality.',
    target_time_seconds: 60,
    reference: 'ICD-10-CM Chapter 13 Category M76.6',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 97,
    assessment_ready: true,
    tags: ['foot-ankle', 'tendinitis', 'laterality'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-013',
    case_number: 13,
    title: 'De Quervain Tenosynovitis: Radial Styloid Specificity',
    specialty: 'Orthopedics',
    body_region: 'Upper Extremity',
    difficulty: 'Beginner',
    skill: 'Laterality & Specificity',
    primary_skill: 'Laterality & Specificity',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 31-year-old female
Setting: Hand & Upper Extremity Clinic

SUBJECTIVE:
New mother reports sharp pain along the radial side of her right wrist for 4 weeks, aggravated when picking up her infant. Denies prior wrist injuries.

OBJECTIVE:
Right Wrist: Significant localized tenderness over the first dorsal compartment (radial styloid). Marked pain on thumb adduction with ulnar wrist deviation (positive Finkelstein test). Left wrist normal.

ASSESSMENT:
Radial styloid tenosynovitis [de Quervain], right wrist.

PLAN:
Thumb spica immobilization splint, ergonomic lifting education, consideration of corticosteroid injection if symptoms persist.`,
    question: 'Which ICD-10-CM code reports radial styloid tenosynovitis (de Quervain disease)?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'M65.4 — Radial styloid tenosynovitis [de Quervain]', codeSnippet: 'M65.4' },
      { id: 'opt_b', label: 'B', text: 'M65.841 — Other synovitis and tenosynovitis, right hand', codeSnippet: 'M65.841' },
      { id: 'opt_c', label: 'C', text: 'M25.531 — Pain in right wrist', codeSnippet: 'M25.531' },
      { id: 'opt_d', label: 'D', text: 'G56.01 — Carpal tunnel syndrome, right upper limb', codeSnippet: 'G56.01' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'M65.4',
    icd10cm_code: 'M65.4',
    code_description: 'Radial styloid tenosynovitis [de Quervain]',
    explanation: 'ICD-10-CM provides a direct condition code for radial styloid tenosynovitis (de Quervain): M65.4. In the official Tabular list, M65.4 does not have further sub-digits for laterality.',
    documentation_evidence: 'Assessment: Radial styloid tenosynovitis [de Quervain], right wrist.',
    coding_concept: 'Eponym and Specific Named Tenosynovitis Conditions',
    common_mistake: 'Using a non-specific tenosynovitis code (M65.8-) or symptom code (M25.531).',
    common_trap: 'Overlooking the designated code M65.4 for de Quervain.',
    learning_objective: 'Identify specific condition codes in ICD-10-CM (like M65.4) that represent distinct clinical entities.',
    target_time_seconds: 60,
    reference: 'ICD-10-CM Category M65.4',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 96,
    assessment_ready: true,
    tags: ['upper-extremity', 'wrist', 'tenosynovitis'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-014',
    case_number: 14,
    title: 'Baker Cyst: Popliteal Synovial Cyst',
    specialty: 'Orthopedics',
    body_region: 'Knee',
    difficulty: 'Beginner',
    skill: 'Laterality & Specificity',
    primary_skill: 'Laterality & Specificity',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 56-year-old male
Setting: Outpatient Orthopedics

SUBJECTIVE:
Presents with fullness and tightness behind the left knee, particularly when fully extending the leg. Denies acute pop or calf swelling.

OBJECTIVE:
Left Knee Exam: Visible and palpable soft, fluctuant fullness in the medial popliteal fossa (posterior knee). Transillumination positive. No erythema or warmth. Range of motion: 0° to 125°. Ultrasound confirms benign popliteal synovial cyst (Baker cyst) measuring 3.2 x 2.1 cm. Right knee exam negative.

ASSESSMENT:
Popliteal cyst [Baker], left knee.

PLAN:
Aspiration under ultrasound guidance performed with symptomatic relief. Physical therapy referral.`,
    question: 'What is the correct ICD-10-CM code for a popliteal (Baker) cyst of the left knee?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'M71.21 — Synovial cyst of popliteal space [Baker], right knee', codeSnippet: 'M71.21' },
      { id: 'opt_b', label: 'B', text: 'M71.22 — Synovial cyst of popliteal space [Baker], left knee', codeSnippet: 'M71.22' },
      { id: 'opt_c', label: 'C', text: 'M71.20 — Synovial cyst of popliteal space [Baker], unspecified knee', codeSnippet: 'M71.20' },
      { id: 'opt_d', label: 'D', text: 'M25.562 — Pain in left knee', codeSnippet: 'M25.562' },
    ],
    correct_answer: 'opt_b',
    correct_option: 'B',
    code: 'M71.22',
    icd10cm_code: 'M71.22',
    code_description: 'Synovial cyst of popliteal space [Baker], left knee',
    explanation: 'Category M71.2 designates a synovial cyst of the popliteal space (Baker cyst) with laterality digits: 1 = right knee, 2 = left knee, 0 = unspecified knee. M71.22 specifically reports the left knee.',
    documentation_evidence: 'Assessment: Popliteal cyst [Baker], left knee.',
    coding_concept: 'Popliteal Synovial Cyst Specificity and Laterality',
    common_mistake: 'Confusing right (1) and left (2) or coding joint pain alone.',
    common_trap: 'Selecting unspecified laterality when left knee is clearly documented.',
    learning_objective: 'Assign correct laterality digits for popliteal fossa synovial conditions (M71.2-).',
    target_time_seconds: 60,
    reference: 'ICD-10-CM Category M71.2',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 97,
    assessment_ready: true,
    tags: ['knee', 'baker-cyst', 'laterality'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-015',
    case_number: 15,
    title: 'Trigger Finger: Digit Specificity & Laterality',
    specialty: 'Orthopedics',
    body_region: 'Upper Extremity',
    difficulty: 'Beginner',
    skill: 'Laterality & Specificity',
    primary_skill: 'Laterality & Specificity',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 58-year-old male
Setting: Hand Surgery Clinic

SUBJECTIVE:
Patient notes painful catching and locking of the right middle finger when attempting to open his hand in the morning. Has to manually unlock the finger with his other hand.

OBJECTIVE:
Right Hand Exam: Palpable nodule with tender clicking over the A1 pulley at the palmar aspect of the right 3rd metacarpophalangeal (MCP) joint. Finger triggers into flexion with active motion. Other digits unremarkable.

ASSESSMENT:
Trigger finger, right middle finger.

PLAN:
Corticosteroid injection into the right middle finger flexor tendon sheath. Discussed open A1 pulley release if symptoms recur.`,
    question: 'Which ICD-10-CM code precisely designates trigger finger of the right middle finger?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'M65.331 — Trigger finger, right middle finger', codeSnippet: 'M65.331' },
      { id: 'opt_b', label: 'B', text: 'M65.332 — Trigger finger, left middle finger', codeSnippet: 'M65.332' },
      { id: 'opt_c', label: 'C', text: 'M65.30 — Trigger finger, unspecified finger', codeSnippet: 'M65.30' },
      { id: 'opt_d', label: 'D', text: 'M65.311 — Trigger finger, right thumb', codeSnippet: 'M65.311' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'M65.331',
    icd10cm_code: 'M65.331',
    code_description: 'Trigger finger, right middle finger',
    explanation: 'Category M65.3 classifies trigger finger with 5th and 6th digits for individual digit and hand laterality: 1 = thumb, 2 = index, 3 = middle, 4 = ring, 5 = little. The 6th character 1 = right, 2 = left. Therefore, M65.331 designates right middle finger.',
    documentation_evidence: 'Assessment: Trigger finger, right middle finger.',
    coding_concept: 'Hand and Digit Specificity Hierarchy in ICD-10-CM',
    common_mistake: 'Using unspecified digit code (M65.30) or selecting the thumb code (M65.311).',
    common_trap: 'Mismatched digit numbering.',
    learning_objective: 'Apply the 6-character hierarchy for individual digit and hand laterality in stenosing tenosynovitis (M65.3-).',
    target_time_seconds: 70,
    reference: 'ICD-10-CM Category M65.3',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 98,
    assessment_ready: true,
    tags: ['upper-extremity', 'hand', 'trigger-finger', 'specificity'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-016',
    case_number: 16,
    title: 'Adhesive Capsulitis: Frozen Shoulder Diagnosis',
    specialty: 'Orthopedics',
    body_region: 'Shoulder',
    difficulty: 'Beginner',
    skill: 'Diagnosis Selection',
    primary_skill: 'Diagnosis vs Symptom',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 54-year-old female
Setting: Outpatient Physical Medicine & Rehabilitation

SUBJECTIVE:
Patient with history of type 2 diabetes presents with progressive stiffness and aching in her right shoulder for 4 months. Reports severe limitation reaching behind her back or overhead.

OBJECTIVE:
Right Shoulder Exam: Marked global reduction in both active and passive range of motion: external rotation limited to 15° (contralateral 60°), abduction limited to 80°, internal rotation to L5. Plain radiographs show normal joint space without osteoarthritis or calcifications.

ASSESSMENT:
Adhesive capsulitis of right shoulder (Frozen shoulder).

PLAN:
Glenohumeral joint distension arthrography scheduled, intensive physical therapy for capsular stretching 3x weekly.`,
    question: 'Which ICD-10-CM code reports adhesive capsulitis of the right shoulder?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'M75.01 — Adhesive capsulitis of right shoulder', codeSnippet: 'M75.01' },
      { id: 'opt_b', label: 'B', text: 'M75.02 — Adhesive capsulitis of left shoulder', codeSnippet: 'M75.02' },
      { id: 'opt_c', label: 'C', text: 'M25.611 — Stiffness of right shoulder, not elsewhere classified', codeSnippet: 'M25.611' },
      { id: 'opt_d', label: 'D', text: 'M75.00 — Adhesive capsulitis of unspecified shoulder', codeSnippet: 'M75.00' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'M75.01',
    icd10cm_code: 'M75.01',
    code_description: 'Adhesive capsulitis of right shoulder',
    explanation: 'Category M75.0 represents adhesive capsulitis of shoulder: M75.01 indicates the right shoulder. Stiffness (M25.611) is an inherent sign/symptom and is not separately coded.',
    documentation_evidence: 'Assessment: Adhesive capsulitis of right shoulder (Frozen shoulder).',
    coding_concept: 'Frozen Shoulder Specificity vs Non-specific Joint Stiffness',
    common_mistake: 'Coding generic joint stiffness (M25.611) instead of the confirmed diagnostic entity M75.01.',
    common_trap: 'Falling back to symptom code when provider establishes adhesive capsulitis.',
    learning_objective: 'Report adhesive capsulitis with anatomical laterality (M75.0-) rather than non-specific stiffness codes.',
    target_time_seconds: 60,
    reference: 'ICD-10-CM Category M75.0 & Guideline I.B.4',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 97,
    assessment_ready: true,
    tags: ['shoulder', 'adhesive-capsulitis', 'laterality'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-017',
    case_number: 17,
    title: 'Osgood-Schlatter Disease: Juvenile Osteochondrosis',
    specialty: 'Orthopedics',
    body_region: 'Knee',
    difficulty: 'Beginner',
    skill: 'Diagnosis Selection',
    primary_skill: 'Clinical Reasoning',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 14-year-old male
Setting: Pediatric Sports Medicine

SUBJECTIVE:
Adolescent basketball player presents with anterior left knee pain directly over the bump below the kneecap for 2 months, exacerbated after jumping and running drills.

OBJECTIVE:
Left Knee Exam: Prominence and tenderness over the left tibial tuberosity. Pain reproduced on resisted active knee extension. Patellar tendon non-tender. Joint stable. Knee radiographs show irregularity and fragmentation at the left tibial tubercle apophysis without avulsion.

ASSESSMENT:
Osgood-Schlatter disease (Tibial tubercle apophysitis), left knee.

PLAN:
Activity modification, quadriceps stretching, patellar tendon strap during sports, ice after activity.`,
    question: 'Which ICD-10-CM code reports juvenile osteochondrosis of the tibia and fibula (Osgood-Schlatter)?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'M92.51 — Juvenile osteochondrosis of tibia and fibula, right leg', codeSnippet: 'M92.51' },
      { id: 'opt_b', label: 'B', text: 'M92.52 — Juvenile osteochondrosis of tibia and fibula, left leg', codeSnippet: 'M92.52' },
      { id: 'opt_c', label: 'C', text: 'M25.562 — Pain in left knee', codeSnippet: 'M25.562' },
      { id: 'opt_d', label: 'D', text: 'M76.52 — Patellar tendinitis, left knee', codeSnippet: 'M76.52' },
    ],
    correct_answer: 'opt_b',
    correct_option: 'B',
    code: 'M92.52',
    icd10cm_code: 'M92.52',
    code_description: 'Juvenile osteochondrosis of tibia and fibula, left leg',
    explanation: 'Osgood-Schlatter disease is classified as juvenile osteochondrosis of the tibia and fibula (M92.5). The laterality digit 2 indicates the left leg: M92.52.',
    documentation_evidence: 'Assessment: Osgood-Schlatter disease, left knee.',
    coding_concept: 'Apophysitis and Osteochondrosis Classifications',
    common_mistake: 'Coding patellar tendinitis (Jumper knee, M76.5-) or right leg digit.',
    common_trap: 'Confusing patellar tendinitis with tibial tubercle apophysitis.',
    learning_objective: 'Identify Osgood-Schlatter disease as juvenile osteochondrosis of tibia/fibula (M92.5-) with accurate laterality.',
    target_time_seconds: 60,
    reference: 'ICD-10-CM Category M92.5',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 97,
    assessment_ready: true,
    tags: ['knee', 'pediatric', 'osteochondrosis', 'laterality'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-018',
    case_number: 18,
    title: 'Bursitis of Olecranon: Non-infected Right Elbow',
    specialty: 'Orthopedics',
    body_region: 'Upper Extremity',
    difficulty: 'Beginner',
    skill: 'Laterality & Specificity',
    primary_skill: 'Laterality & Specificity',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 62-year-old male
Setting: Outpatient Urgent Clinic

SUBJECTIVE:
Presents with painless fluid-filled swelling on the tip of his right elbow after leaning on armrests during desk work. Denies fever, chills, skin trauma, or prior gout.

OBJECTIVE:
Right Elbow: Well-circumscribed, non-tender fluctuant swelling over the right olecranon bursa ("goose egg"). No erythema, warmth, or purulent drainage. Full pain-free elbow range of motion.

ASSESSMENT:
Non-septic olecranon bursitis, right elbow.

PLAN:
Compression elbow sleeve, avoid resting elbow on hard surfaces, follow up if warmth or redness develops.`,
    question: 'Which ICD-10-CM code represents non-infective olecranon bursitis of the right elbow?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'M70.21 — Olecranon bursitis, right elbow', codeSnippet: 'M70.21' },
      { id: 'opt_b', label: 'B', text: 'M70.22 — Olecranon bursitis, left elbow', codeSnippet: 'M70.22' },
      { id: 'opt_c', label: 'C', text: 'M71.01 — Abscess of bursa, right elbow', codeSnippet: 'M71.01' },
      { id: 'opt_d', label: 'D', text: 'M25.521 — Pain in right elbow', codeSnippet: 'M25.521' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'M70.21',
    icd10cm_code: 'M70.21',
    code_description: 'Olecranon bursitis, right elbow',
    explanation: 'Category M70.2 denotes olecranon bursitis. Sub-digit 1 designates the right elbow (M70.21), while 2 represents the left elbow (M70.22). Abscess of bursa (M71.01) is ruled out by the non-septic, non-tender exam.',
    documentation_evidence: 'Assessment: Non-septic olecranon bursitis, right elbow.',
    coding_concept: 'Olecranon Bursitis Laterality and Distinguishing Non-septic vs Septic',
    common_mistake: 'Assigning a septic bursa code (M71.0-) when documentation notes non-septic swelling.',
    common_trap: 'Mismatched laterality digit.',
    learning_objective: 'Accurately code non-septic olecranon bursitis with laterality (M70.2-).',
    target_time_seconds: 60,
    reference: 'ICD-10-CM Category M70.2',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 97,
    assessment_ready: true,
    tags: ['upper-extremity', 'elbow', 'bursitis', 'laterality'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-019',
    case_number: 19,
    title: 'Ankle Sprain: Acute Initial Encounter Specificity',
    specialty: 'Orthopedics',
    body_region: 'Foot/Ankle',
    difficulty: 'Beginner',
    skill: 'Injury & Encounter Phase',
    primary_skill: 'Injury & Encounter Phase',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 22-year-old female
Setting: Urgent Care Clinic

SUBJECTIVE:
Patient inverted her left ankle stepping off a sidewalk curb 2 hours ago. Complains of swelling and lateral pain. Denies prior ankle sprains.

OBJECTIVE:
Left Ankle Exam: Moderate swelling and ecchymosis over the anterior talofibular ligament (ATFL). Antalgic gait. Point tenderness directly over the ATFL. Anterior drawer test positive with soft endpoint. Bony palpation over medial/lateral malleoli and 5th metatarsal base non-tender. X-rays negative for acute fracture.

ASSESSMENT:
Sprain of anterior talofibular ligament of left ankle, initial encounter.

PLAN:
Ankle lace-up stabilizer brace, RICE protocol, weight-bearing as tolerated.`,
    question: 'Which ICD-10-CM code reports an acute sprain of the anterior talofibular ligament of the left ankle on initial presentation?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'S93.412A — Sprain of calcaneofibular ligament of left ankle, initial encounter', codeSnippet: 'S93.412A' },
      { id: 'opt_b', label: 'B', text: 'S93.492A — Sprain of other ligament of left ankle, initial encounter', codeSnippet: 'S93.492A' },
      { id: 'opt_c', label: 'C', text: 'S93.402A — Sprain of unspecified ligament of left ankle, initial encounter', codeSnippet: 'S93.402A' },
      { id: 'opt_d', label: 'D', text: 'S93.492D — Sprain of other ligament of left ankle, subsequent encounter', codeSnippet: 'S93.492D' },
    ],
    correct_answer: 'opt_b',
    correct_option: 'B',
    code: 'S93.492A',
    icd10cm_code: 'S93.492A',
    code_description: 'Sprain of other ligament of left ankle, initial encounter',
    explanation: 'In ICD-10-CM, specific subcategories exist for calcaneofibular (S93.41) and deltoid (S93.42) ligaments. The anterior talofibular ligament (ATFL) is indexed to "other ligament of ankle" (S93.49). With left laterality (2) and initial encounter (A), the correct code is S93.492A.',
    documentation_evidence: 'Assessment: Sprain of anterior talofibular ligament of left ankle, initial encounter.',
    coding_concept: 'Index Navigation for Anterior Talofibular Ligament vs Calcaneofibular Ligament',
    common_mistake: 'Assuming S93.41 is for anterior talofibular when it is specifically for calcaneofibular.',
    common_trap: 'Mismatched 7th character encounter phase (A vs D).',
    learning_objective: 'Correctly locate specific ankle ligament sprain subcategories in Chapter 19 and assign 7th character A for active initial care.',
    target_time_seconds: 75,
    reference: 'ICD-10-CM Alphabetic Index & Category S93.49',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 97,
    assessment_ready: true,
    tags: ['foot-ankle', 'injury', '7th-character', 'laterality'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
  {
    id: 'case-020',
    case_number: 20,
    title: 'Sciatica without Documented Disc Herniation',
    specialty: 'Spine',
    body_region: 'Spine/Back',
    difficulty: 'Beginner',
    skill: 'Diagnosis Selection',
    primary_skill: 'Diagnosis vs Symptom',
    clinical_documentation: `PATIENT CLINICAL NOTE
Patient: 49-year-old male
Setting: Outpatient Spine Center

SUBJECTIVE:
Reports sharp, shooting pain starting in his right buttock and radiating down the posterior right thigh to the calf for 2 weeks. Denies low back ache, bowel/bladder incontinence, or left leg symptoms.

OBJECTIVE:
Spine & Neurological Exam: Tenderness over the right piriformis / sciatic notch. Positive right straight leg raise (SLR) at 45° reproducing radiating leg pain; left SLR negative. Sensation diminished along the right lateral calf (L5 dermatome). Motor power 5/5 throughout. Lumbar spine radiographs show mild age-appropriate disc space narrowing without acute abnormality.

ASSESSMENT:
Right-sided sciatica.

PLAN:
Prescribed oral NSAID and gabapentin. Ordered lumbar MRI to evaluate underlying etiology. Referral to physical therapy for nerve glides.`,
    question: 'What is the appropriate ICD-10-CM code for this outpatient encounter while diagnostic MRI is pending?',
    answer_type: 'single_choice',
    options: [
      { id: 'opt_a', label: 'A', text: 'M54.31 — Sciatica, right side', codeSnippet: 'M54.31' },
      { id: 'opt_b', label: 'B', text: 'M54.32 — Sciatica, left side', codeSnippet: 'M54.32' },
      { id: 'opt_c', label: 'C', text: 'M51.16 — Intervertebral disc disorders with radiculopathy, lumbar region', codeSnippet: 'M51.16' },
      { id: 'opt_d', label: 'D', text: 'M54.41 — Lumbago with sciatica, right side', codeSnippet: 'M54.41' },
    ],
    correct_answer: 'opt_a',
    correct_option: 'A',
    code: 'M54.31',
    icd10cm_code: 'M54.31',
    code_description: 'Sciatica, right side',
    explanation: 'The patient has documented sciatica affecting the right side without documented low back pain (lumbago). Category M54.3 specifically identifies sciatica alone: M54.31 represents right side. M54.4- is reserved for lumbago with sciatica. Coding lumbar disc displacement (M51.16) before MRI confirmation violates outpatient uncertainty rules (Guideline IV.H).',
    documentation_evidence: 'Assessment: Right-sided sciatica. MRI pending.',
    coding_concept: 'Sciatica (M54.3-) vs Lumbago with Sciatica (M54.4-) and Outpatient Rule-out Boundaries',
    common_mistake: 'Assuming lumbar disc herniation (M51.16) or coding lumbago when the note specifies no back ache.',
    common_trap: 'Coding suspected disc displacement prior to imaging verification.',
    learning_objective: 'Distinguish between isolated sciatica (M54.3-) and lumbago with sciatica (M54.4-) with right/left laterality.',
    target_time_seconds: 75,
    reference: 'ICD-10-CM Category M54.3 & Guideline IV.H',
    code_set_year: 'FY2026/FY2027',
    status: 'Published',
    content_status: 'PUBLISHED',
    review_status: 'Approved',
    coding_verification_status: 'VERIFIED',
    quality_score: 97,
    assessment_ready: true,
    tags: ['spine', 'sciatica', 'laterality', 'outpatient'],
    created_by: 'Content Team Lead',
    reviewed_by: 'Dr. Sarah Mitchell, CPC, CPMA',
    last_reviewed_at: '2026-03-15T10:00:00Z',
    next_review_date: '2027-03-15T10:00:00Z',
    created_at: '2026-01-10T08:00:00Z',
    updated_at: '2026-03-15T10:00:00Z',
  },
];
